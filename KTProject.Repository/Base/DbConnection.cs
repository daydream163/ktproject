using KTProject.Common;
using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace KTProject.Repository
{
	public class DbConnection
	{
		private IDbConnection _connection;
		protected IDbConnection GetSubjectConnection()
		{
			return new MySqlConnection(ConfigSettings.SubjectConnectionString);
		}

		/*
		protected IDbConnection GetManageConnection()
		{
			return new MySqlConnection(ConfigSettings.ManageConnectionString);
		}*/

		protected IDbConnection GetConfigConnection()
		{
			return new MySqlConnection(ConfigSettings.ConfigConnectionString);
		}


		/*protected IDbConnection GetConnection()
		{
			return new MySqlConnection(ConfigSettings.EduConnectionString);
		}

		protected IDbConnection GetktSysManageConnection()
		{
			return new MySqlConnection(ConfigSettings.KtSysManageConnectionString);
		}*/

		protected T DoInTransaction<T>(Func<T> func)
		{
			_connection = new MySqlConnection(ConfigSettings.SubjectConnectionString);
			_connection.Open();
			IDbTransaction dbTransaction = _connection.BeginTransaction();
			try
			{
				var res = func();
				dbTransaction.Commit();
				return res;
			}
			catch (Exception e)
			{
				dbTransaction.Rollback();
				throw;
			}
			finally
			{
				_connection.Close();
			}
		}

		protected T DoInTransaction<T>(Func<IDbTransaction, T> func)
		{
			_connection = new MySqlConnection(ConfigSettings.SubjectConnectionString);
			_connection.Open();
			IDbTransaction dbTransaction = _connection.BeginTransaction();
			try
			{
				var res = func(dbTransaction);
				dbTransaction.Commit();
				return res;
			}
			catch (Exception ex)
			{
				dbTransaction.Rollback();
				throw;
			}
			finally
			{
				_connection.Close();
			}
		}
	}
}
