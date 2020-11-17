using Dapper;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace KTProject.Common.DapperExtensions
{
	public static class MySqlMapperExtensions
	{
		private static readonly ConcurrentDictionary<Type, List<PropertyInfo>> _paramCache = new ConcurrentDictionary<Type, List<PropertyInfo>>();

		/// <summary>
		/// Insert data into table.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static int Insert(this IDbConnection connection, dynamic data, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var properties = GetProperties(obj);
			var columns = string.Join(",", properties.Select(p => table + "." + p));
			var values = string.Join(",", properties.Select(p => "@" + p));
			var sql = string.Format("insert into {0} ({1}) values ({2})", table, columns, values);
			return connection.Execute(sql, obj, transaction, commandTimeout);
		}
		
		/// <summary>
		/// 返回自增列的值
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <param name=""></param>
		/// <returns></returns>
		public static int InsertOutPrimaryKey(this IDbConnection connection, dynamic data, string table, out int primaryKey, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var properties = GetProperties(obj);
			var columns = string.Join(",", properties.Select(p => table + "." + p));
			var values = string.Join(",", properties.Select(p => "@" + p));
			var sql = string.Format("insert into {0} ({1}) values ({2})", table, columns, values);
			sql = $"{sql} ;SELECT LAST_INSERT_ID();";
			var multi = connection.QueryMultiple(sql, obj, transaction, commandTimeout);
			var ret = multi.Read<int>();
			primaryKey = ret.Last();
			return ret.First();
		}

		public static int InsertWithOutPrimaryKey(this IDbConnection connection, dynamic data, string table, string primaryKey, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var properties = GetProperties(obj);
			properties.Remove(primaryKey);
			var columns = string.Join(",", properties.Select(p => table + "." + p));
			var values = string.Join(",", properties.Select(p => "@" + p));
			var sql = string.Format("insert into {0} ({1}) values ({2})", table, columns, values);
			return connection.Execute(sql, obj, transaction, commandTimeout);
		}

		/// <summary>
		/// Insert data async into table.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<int> InsertAsync(this IDbConnection connection, dynamic data, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var properties = GetProperties(obj);
			var columns = string.Join(",", properties);
			var values = string.Join(",", properties.Select(p => "@" + p));
			var sql = string.Format("insert into {0} ({1}) values ({2}))", table, columns, values);
			return connection.ExecuteAsync(sql, obj, transaction, commandTimeout);
		}

		/// <summary>
		/// Updata data for table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static int Update(this IDbConnection connection, dynamic data, dynamic condition, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var conditionObj = condition as object;
			var updatePropertyInfos = GetPropertyInfos(obj);
			var wherePropertyInfos = GetPropertyInfos(conditionObj);
			var updateProperties = updatePropertyInfos.Select(p => p.Name);
			var whereProperties = wherePropertyInfos.Select(p => p.Name);
			var updateFields = string.Join(",", updateProperties.Select(p => p + " = @" + p));
			var whereFields = string.Empty;

			if (whereProperties.Any())
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @w_" + p));
			}
			var sql = string.Format("update {0} set {1}{2}", table, updateFields, whereFields);
			var parameters = new DynamicParameters(data);
			var expandoObject = new ExpandoObject() as IDictionary<string, object>;
			wherePropertyInfos.ForEach(p => expandoObject.Add("w_" + p.Name, p.GetValue(conditionObj, null)));
			parameters.AddDynamicParams(expandoObject);
			return connection.Execute(sql, parameters, transaction, commandTimeout);
		}

		/// <summary>
		/// 更新自定义列数据
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="updateColumns">自定义列名</param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static int Update(this IDbConnection connection, dynamic data, dynamic condition, string table, List<string> updateColumns, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			if (updateColumns == null || updateColumns.Count == 0)
				throw new ArgumentException("updateColumns 必须设定要更新的列！", "updateColumns");
			var obj = data as object;
			var conditionObj = condition as object;
			var updatePropertyInfos = GetPropertyInfos(obj);
			var wherePropertyInfos = GetPropertyInfos(conditionObj);
			var updateProperties = updatePropertyInfos.Select(p => p.Name).Intersect(updateColumns);
			var whereProperties = wherePropertyInfos.Select(p => p.Name);
			var updateFields = string.Join(",", updateProperties.Select(p => p + " = @" + p));
			var whereFields = string.Empty;
			if (whereProperties.Any())
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @w_" + p));
			}
			var sql = string.Format("update {0} set {1}{2}", table, updateFields, whereFields);
			var parameters = new DynamicParameters(data);
			var expandoObject = new ExpandoObject() as IDictionary<string, object>;
			wherePropertyInfos.ForEach(p => expandoObject.Add("w_" + p.Name, p.GetValue(conditionObj, null)));
			parameters.AddDynamicParams(expandoObject);
			return connection.Execute(sql, parameters, transaction, commandTimeout);
		}

		public static int UpdateWithColumns(this IDbConnection connection, dynamic data, object condition, string table, List<string> updateColumns, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			if (updateColumns == null || updateColumns.Count == 0)
				throw new ArgumentException("updateColumns 必须设定要更新的列！", "updateColumns");
			var obj = data as object;
			var conditionObj = condition as object;
			var updatePropertyInfos = GetPropertyInfos(obj);
			var wherePropertyInfos = GetPropertyInfos(conditionObj);
			var updateProperties = updatePropertyInfos.Select(p => p.Name).Intersect(updateColumns);
			var whereProperties = wherePropertyInfos.Select(p => p.Name);
			var updateFields = string.Join(",", updateProperties.Select(p => p + " = @" + p));
			var whereFields = string.Empty;
			if (whereProperties.Any())
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @w_" + p));
			}
			var sql = string.Format("update {0} set {1}{2}", table, updateFields, whereFields);
			var parameters = new DynamicParameters(data);
			var expandoObject = new ExpandoObject() as IDictionary<string, object>;
			wherePropertyInfos.ForEach(p => expandoObject.Add("w_" + p.Name, p.GetValue(conditionObj, null)));
			parameters.AddDynamicParams(expandoObject);
			return connection.Execute(sql, parameters, transaction, commandTimeout);
		}

		/// <summary>
		/// Updata data async for table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="data"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<int> UpdateAsync(this IDbConnection connection, dynamic data, dynamic condition, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var obj = data as object;
			var conditionObj = condition as object;
			var updatePropertyInfos = GetPropertyInfos(obj);
			var wherePropertyInfos = GetPropertyInfos(conditionObj);
			var updateProperties = updatePropertyInfos.Select(p => p.Name);
			var whereProperties = wherePropertyInfos.Select(p => p.Name);
			var updateFields = string.Join(",", updateProperties.Select(p => p + " = @" + p));
			var whereFields = string.Empty;
			if (whereProperties.Any())
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @w_" + p));
			}
			var sql = string.Format("update {0} set {1}{2}", table, updateFields, whereFields);
			var parameters = new DynamicParameters(data);
			var expandoObject = new ExpandoObject() as IDictionary<string, object>;
			wherePropertyInfos.ForEach(p => expandoObject.Add("w_" + p.Name, p.GetValue(conditionObj, null)));
			parameters.AddDynamicParams(expandoObject);
			return connection.ExecuteAsync(sql, parameters, transaction, commandTimeout);
		}

		/// <summary>
		/// Delete data from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static int Delete(this IDbConnection connection, dynamic condition, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var conditionObj = condition as object;
			var whereFields = string.Empty;
			var whereProperties = GetProperties(conditionObj);
			if (whereProperties.Count > 0)
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @" + p));
			}
			var sql = string.Format("delete from {0}{1}", table, whereFields);
			return connection.Execute(sql, conditionObj, transaction, commandTimeout);
		}

		/// <summary>
		/// Delete data async from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<int> DeleteAsync(this IDbConnection connection, dynamic condition, string table, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var conditionObj = condition as object;
			var whereFields = string.Empty;
			var whereProperties = GetProperties(conditionObj);
			if (whereProperties.Count > 0)
			{
				whereFields = " where " + string.Join(" and ", whereProperties.Select(p => p + " = @" + p));
			}
			var sql = string.Format("delete from {0}{1}", table, whereFields);
			return connection.ExecuteAsync(sql, conditionObj, transaction, commandTimeout);
		}

		/// <summary>
		/// Get data count from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static int GetCount(this IDbConnection connection, object condition, string table, bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryList<int>(connection, condition, table, "count(1)", isOr, transaction, commandTimeout).Single();
		}

		/// <summary>
		/// Get data count async from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<int> GetCountAsync(this IDbConnection connection, object condition, string table, bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryListAsync<int>(connection, condition, table, "count(*)", isOr, transaction, commandTimeout).ContinueWith<int>(t => t.Result.Single());
		}

		/// <summary>
		/// Query a list of data from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static IEnumerable<dynamic> QueryList(this IDbConnection connection, dynamic condition, string table, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryList<dynamic>(connection, condition, table, columns, isOr, transaction, commandTimeout);
		}

		/// <summary>
		/// Query a list of data async from table with a specified condition.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<IEnumerable<dynamic>> QueryListAsync(this IDbConnection connection, dynamic condition, string table, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryListAsync<dynamic>(connection, condition, table, columns, isOr, transaction, commandTimeout);
		}

		/// <summary>
		/// Query a list of data from table with specified condition.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static IEnumerable<T> QueryList<T>(this IDbConnection connection, object condition, string table, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return connection.Query<T>(BuildQuerySQL(condition, table, columns, isOr), condition, transaction, true, commandTimeout);
		}

		/// <summary>
		/// Query a list of data async from table with specified condition.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<IEnumerable<T>> QueryListAsync<T>(this IDbConnection connection, object condition, string table, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return connection.QueryAsync<T>(BuildQuerySQL(condition, table, columns, isOr), condition, transaction, commandTimeout);
		}

		/// <summary>
		/// Query paged data from a single table.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="orderBy"></param>
		/// <param name="pageIndex"></param>
		/// <param name="pageSize"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static IEnumerable<dynamic> QueryPaged(this IDbConnection connection, dynamic condition, string table, string orderBy, int pageIndex, int pageSize, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryPaged<dynamic>(connection, condition, table, orderBy, pageIndex, pageSize, columns, isOr, transaction, commandTimeout);
		}

		/// <summary>
		/// Query paged data async from a single table.
		/// </summary>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="orderBy"></param>
		/// <param name="pageIndex"></param>
		/// <param name="pageSize"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<IEnumerable<dynamic>> QueryPagedAsync(this IDbConnection connection, dynamic condition, string table, string orderBy, int pageIndex, int pageSize, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			return QueryPagedAsync<dynamic>(connection, condition, table, orderBy, pageIndex, pageSize, columns, isOr, transaction, commandTimeout);
		}

		/// <summary>
		/// Query paged data from a single table.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="orderBy"></param>
		/// <param name="pageIndex"></param>
		/// <param name="pageSize"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static IEnumerable<T> QueryPaged<T>(this IDbConnection connection, dynamic condition, string table, string orderBy, int pageIndex = 1, int pageSize = 20, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var conditionObj = condition as object;
			var whereFields = string.Empty;
			var properties = GetProperties(conditionObj);
			if (properties.Count > 0)
			{
				var separator = isOr ? " OR " : " AND ";
				whereFields = " WHERE " + string.Join(separator, properties.Select(p => p + " = @" + p));
			}
			var sql = string.Format("SELECT {0} FROM {2}{3} ORDER BY {1} LIMIT {4},{5} ", columns, orderBy, table, whereFields, (pageIndex - 1) * pageSize, pageSize);
			return connection.Query<T>(sql, conditionObj, transaction, true, commandTimeout);
		}

		/// <summary>
		/// Query paged data from a single table.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="orderBy"></param>
		/// <param name="count"></param>
		/// <param name="pageIndex"></param>
		/// <param name="pageSize"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static IEnumerable<T> QueryPagedWithAllCount<T>(this IDbConnection connection, dynamic condition, string table, string orderBy, out int count, int pageIndex = 1, int pageSize = 20, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			count = 0;
			var conditionObj = condition as object;
			var whereFields = string.Empty;
			var properties = GetProperties(conditionObj);
			if (properties.Count > 0)
			{
				var separator = isOr ? " OR " : " AND ";
				whereFields = " WHERE " + string.Join(separator, properties.Select(p => p + " = @" + p));
			}
			var sql = string.Format("SELECT {0} FROM {2}{3} ORDER BY {1} LIMIT {4},{5};", columns, orderBy, table, whereFields, (pageIndex - 1) * pageSize, pageSize);
			sql = $"{sql} SELECT Count(*) FROM {table}{whereFields};";
			var multi = connection.QueryMultiple(sql, conditionObj, transaction, commandTimeout);
			var ret = multi.Read<T>();
			count = multi.ReadFirst<int>();
			return ret;
		}

		/// <summary>
		/// Query paged data from  multiple or single table and return the total number of entries
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="sql">拼接好的完整sql语句</param>
		/// <param name="condition"></param>
		/// <param name="count"></param>
		/// <param name="transaction"></param>
		/// <returns></returns>
		public static IEnumerable<T> QueryPagedBySqlWithCount<T>(this IDbConnection connection, string sql, dynamic condition, out int count, IDbTransaction transaction = null)
		{
			var conditionObj = condition as object;
			count = 0;
			// 删除原来sql中的select
			sql = sql.Trim().Remove(0, 6);
			// 去表末尾的分号
			sql = sql.TrimEnd(new char[] { ';' });
			sql = string.Format("SELECT SQL_CALC_FOUND_ROWS {0};SELECT FOUND_ROWS();", sql);
			var multi = connection.QueryMultiple(sql, conditionObj, transaction);
			// 需要按照顺序获取
			var ret = multi.Read<T>();
			count = multi.ReadFirst<int>();
			return ret;
		}

		/// <summary>
		/// Query paged data from  multiple or single table and return the total number of entries
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="sql">拼接好的完整sql语句</param>
		/// <param name="condition"></param>
		/// <param name="count"></param>
		/// <param name="transaction"></param>
		/// <returns></returns>
		public async static Task<Tuple<IEnumerable<T>, int>> QueryPagedBySqlWithCountAsync<T>(this IDbConnection connection, string sql, dynamic condition, IDbTransaction transaction = null)
		{
			var conditionObj = condition as object;
			// 删除原来sql中的select
			sql = sql.Trim().Remove(0, 6);
			// 去表末尾的分号
			sql = sql.TrimEnd(new char[] { ';' });
			sql = string.Format("SELECT SQL_CALC_FOUND_ROWS {0};SELECT FOUND_ROWS();", sql);
			var multi = await connection.QueryMultipleAsync(sql, conditionObj, transaction);
			// 需要按照顺序获取
			var ret = multi.Read<T>();
			var count = multi.ReadFirst<int>();
			return new Tuple<IEnumerable<T>, int>(ret, count);
		}

		/// <summary>
		/// Query paged data async from a single table.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="connection"></param>
		/// <param name="condition"></param>
		/// <param name="table"></param>
		/// <param name="orderBy"></param>
		/// <param name="pageIndex"></param>
		/// <param name="pageSize"></param>
		/// <param name="columns"></param>
		/// <param name="isOr"></param>
		/// <param name="transaction"></param>
		/// <param name="commandTimeout"></param>
		/// <returns></returns>
		public static Task<IEnumerable<T>> QueryPagedAsync<T>(this IDbConnection connection, dynamic condition, string table, string orderBy, int pageIndex, int pageSize, string columns = "*", bool isOr = false, IDbTransaction transaction = null, int? commandTimeout = null)
		{
			var conditionObj = condition as object;
			var whereFields = string.Empty;
			var properties = GetProperties(conditionObj);
			if (properties.Count > 0)
			{
				var separator = isOr ? " OR " : " AND ";
				whereFields = " WHERE " + string.Join(separator, properties.Select(p => p + " = @" + p));
			}
			var sql = string.Format("SELECT {0} FROM {2}{3} ORDER BY {1} LIMIT {4},{5} ", columns, orderBy, table, whereFields, (pageIndex - 1) * pageSize, pageSize);
			return connection.QueryAsync<T>(sql, conditionObj, transaction, commandTimeout);
		}

		public static IEnumerable<TReturn> Query<TFirst, TSecond, TThird, TFourth, TReturn>(this IDbConnection cnn, string sql, Func<TFirst, TSecond, TThird, TFourth, TReturn> map, object param = null, IDbTransaction transaction = null, bool buffered = true, string splitOn = "Id", int? commandTimeout = null, CommandType? commandType = null)
		{
			return cnn.Query<TReturn>(sql, map, transaction);
		}

		public static string GetLastId(this IDbConnection connection)
		{
			string sql = "select last_insert_id();";
			return connection.QueryFirst<string>(sql);
		}

		private static string BuildQuerySQL(dynamic condition, string table, string selectPart = "*", bool isOr = false)
		{
			var conditionObj = condition as object;
			var properties = GetProperties(conditionObj);
			if (properties.Count == 0)
			{
				return string.Format("SELECT {1} FROM {0}", table, selectPart);
			}
			var separator = isOr ? " OR " : " AND ";
			var wherePart = string.Join(separator, properties.Select(p => p + " = @" + p));
			return string.Format("SELECT {2} FROM {0} WHERE {1}", table, wherePart, selectPart);
		}

		private static List<string> GetProperties(object obj)
		{
			if (obj == null)
			{
				return new List<string>();
			}
			if (obj is DynamicParameters)
			{
				return (obj as DynamicParameters).ParameterNames.ToList();
			}
			if (obj is ExpandoObject)
			{
				var expandoDic = (IDictionary<string, object>)obj;
				return expandoDic.Keys.ToList();
			}
			return GetPropertyInfos(obj).Select(x => x.Name).ToList();
		}

		private static List<PropertyInfo> GetPropertyInfos(object obj)
		{
			if (obj == null)
			{
				return new List<PropertyInfo>();
			}
			List<PropertyInfo> properties;
			if (_paramCache.TryGetValue(obj.GetType(), out properties)) return properties.ToList();
			properties = obj.GetType().GetProperties(BindingFlags.GetProperty | BindingFlags.Instance | BindingFlags.Public).ToList();
			_paramCache[obj.GetType()] = properties;
			return properties;
		}
	}
}
