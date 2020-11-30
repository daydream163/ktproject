using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
	[SugarTable("ab_credentials")]
	public class Credentials
	{
		public string accesstoken { get; set; }
		public string Roles { get; set; }
		public string Platform { get; set; }
		public string UserId { get; set; }
		public string UserName { get; set; }
		public string NickName { get; set; }
		public string RealName { get; set; }
		public string OrgId { get; set; }
		public string OrgCode { get; set; }
		public string OrgName { get; set; }
		public string DeptId { get; set; }
		public string DeptCode { get; set; }
		public string DeptName { get; set; }
		public string Did { get; set; }
		public string HostIp { get; set; }
		public string UserIp { get; set; }
		public bool Enabled { get; set; }
		public DateTime ExpireTime { get; set; }
		public DateTime CreateTime { get; set; }

		[SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
		public int Id { get; set; }
		public DateTime LastValidTime { get; set; }
		public string FromCode { get; set; }
		public string FromName { get; set; }
		public string FromToken { get; set; }
		public string logintype { get; set; }
		public string refreshtoken { get; set; }
		public string password { get; set; }
		public string location { get; set; }
		public string timestamp { get; set; }
		public DateTime posttime { get; set; }
		public string appid { get; set; }
		public string scope { get; set; }
	}
}
