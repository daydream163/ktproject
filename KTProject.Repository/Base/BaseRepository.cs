using KTProject.Common;
using SqlSugar;
using System.Linq;

namespace KTProject.Repository
{
	public class MySqlHelper
	{
		public SqlSugarClient config_db { get { return GetInstance(ConfigSettings.ConfigConnectionString); } }
		public SqlSugarClient ktproject_db { get { return GetInstance(ConfigSettings.KTProjectConnectionString); } }

		public SqlSugarClient GetInstance(string connectionString)
		{
			SqlSugarClient db = new SqlSugarClient(
				new ConnectionConfig()
				{
					ConnectionString = connectionString,
					DbType = DbType.MySql,
					IsAutoCloseConnection = true,
					// 设为true相同线程是同一个SqlConnection
					IsShardSameThread = true,
					//从实体特性中读取主键自增列信息
					InitKeyType = InitKeyType.Attribute,
					MoreSettings = new ConnMoreSettings() { IsWithNoLockQuery = true },
					//开启二级数据缓存后，用户规模的增长和系统响应速度成正相关，直接采用分布式redis缓存避免数据库击穿
					//ConfigureExternalServices = new ConfigureExternalServices()
					//{
					//	DataInfoCacheService = new RedisCache(ConfigSettings.PlatformDefaultCache.Split(':')[0], 6379, null, 300, 0),
					//}
				});
#if DEBUG
			//调式代码 用来打印SQL 
			db.Aop.OnLogExecuting = (sql, pars) =>
			{
				Log4Helper.Info(sql + "\r\n" + db.Utilities.SerializeObject(pars.ToDictionary(it => it.ParameterName, it => it.Value)));
			};
#endif
			return db;
		}
	}
}
