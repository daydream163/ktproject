using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
	public class RedisCacheKey
	{
		/// <summary>
		/// 用户角色：UserId
		/// </summary>
		public static string UserRoles = "UserRoles:{0}";
/*		/// <summary>
		/// 一级课题管理员角色：UserId
		/// </summary>
		public static string IsFirstLevelRole = "IsFirstLevelRole:{0}";
		/// <summary>
		/// 用户基本信息：OrgId
		/// </summary>
		public static string UserList = "UserList:{0}";
		/// <summary>
		/// 部门信息：OrgId
		/// </summary>
		public static string DeptList = "DeptList:{0}";
		/// <summary>
		/// 活跃研究者：OrgId
		/// </summary>
		public static string ActiveResearcher = "ActiveResearcher:{0}";
		/// <summary>
		/// kt平台权限：OrgId
		/// </summary>
		public static string KTAuthority = "KTAuthority:{0}";
		/// <summary>
		/// 短信验证吗：手机号
		/// </summary>
		public static string VerifyCode = "VerifyCode:{0}";
		/// <summary>
		/// 组织机构id：OrgId
		/// </summary>
		public static string KTOrgId = "ktOrgId:{0}";
		/// <summary>
		/// 用户登录token:UserId
		/// </summary>
		public static string TokenInfo = "TokenInfo:{0}";
		/// <summary>
		/// 压缩包生成进度：uuid
		/// </summary>
		public static string ZipSpeedProgressMsg = "ZipSpeedProgressMsg:{0}";
*/		/// <summary>
		/// 课题平台合同信息：orgId
		/// </summary>
		public static string KtSubsystemContract = "KtSubsystemContract:{0}";
	}
}
