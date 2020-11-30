using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using MySql.Data.MySqlClient;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class CredentialsRepository : MySqlHelper, ICredentialsRepository
	{
		public SqlSugarClient db { get { return GetInstance(ConfigSettings.KTProjectConnectionString); } }

		/// <summary>
		/// 根据用户名获取用户信息
		/// </summary>
		/// <param name="userName"></param>
		/// <returns></returns>
		public bool Add(Credentials credentials) {
			return db.Insertable(credentials).ExecuteCommand() > 0;
		}

		/// <summary>
		/// 作废其他token
		/// </summary>
		/// <param name="token"></param>
		public bool KickCredentialsByToken(string token) {
			var credentials = GetCredentialsByToken(token);

			//如果本身它的token已经过期，则不做任何操作
			if (credentials == null || credentials.Enabled == false || credentials.ExpireTime < DateTime.Now)
				return true;

			//更新数据库中的数据
			return db.Updateable<Credentials>()
				.SetColumns(s => new Credentials { Enabled = false })
				.Where(c => c.Id < credentials.Id && c.Enabled == true && c.UserId == credentials.UserId && c.Platform == credentials.Platform)
				.ExecuteCommand() > 0;
		}

		/// <summary>
		/// 获取本地表里生成的token信息
		/// </summary>
		/// <param name="token"></param>
		/// <returns></returns>
		public Credentials GetCredentialsByToken(string token) {
			return db.Queryable<Credentials>().Where(c => c.accesstoken == token).First();
		}

		/// <summary>
		/// 作废本条token记录
		/// </summary>
		/// <param name="token"></param>
		/// <returns></returns>
		public bool DisableCredentials(string token) {
			return db.Updateable<Credentials>()
				.SetColumns(s => new Credentials { Enabled = false })
				.Where(s => s.accesstoken == token).ExecuteCommand() > 0;
		}
	}
}
