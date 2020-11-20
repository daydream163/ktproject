using System;
using System.Configuration;

namespace KTProject.Common
{
	public class ConfigSettings
	{
		//public static readonly string EduLoginCommonApiUrl = ConfigurationManager.AppSettings["EduLoginCommonApiUrl"];
		//public static readonly string AAMSApiUrl = ConfigurationManager.AppSettings["AAMSApiUrl"];
		//public static readonly string LiveAppId = ConfigurationManager.AppSettings["LiveAppId"];
		public static readonly bool IsMirror = Convert.ToBoolean(ConfigurationManager.AppSettings["IsMirror"]);
		public static readonly string MirrorOrgCode = ConfigurationManager.AppSettings["MirrorOrgCode"];
		/*public static bool SSOCrossDomain { get; set; }
		public static string SSOForceLogin { get; set; }
		/// <summary>
		/// 数据库连接地址
		/// </summary>
		public static string EduConnectionString { get; set; }
		*/
		/// <summary>
		/// 课题库连接地址
		/// </summary>
		public static string SubjectConnectionString = ConfigurationManager.ConnectionStrings["SubjectConnectionString"].ConnectionString;

		/*

		public static string KtSysManageConnectionString { get; set; }
		
		/// <summary>
		/// SSO服务明配置
		/// </summary>
		public static string SSOHostName { get; set; }

		/// <summary>
		/// SSOKey配置
		/// </summary>
		public static string SSOAppId { get; set; }

		/// <summary>
		/// 域名
		/// </summary>
		public static string SSODomainName { get; set; }

		/// <summary>
		/// SSOKey配置
		/// </summary>
		public static string SSOAppKey { get; set; }


		/// <summary>
		/// 文件上传地址
		/// </summary>
		public static string UploadAddress { get; set; }

		/// <summary>
		/// 文件下载地址
		/// </summary>
		public static string DownloadAddress { get; set; }


		/// <summary>
		/// 部署虚拟路径
		/// </summary>
		public static string ApplicationPath { get; set; }


		/// <summary>
		/// 研讨系统地址
		/// </summary>
		public static string DiscussSystemAddress { get; set; }

		/// <summary>
		/// 研讨直播地址
		/// </summary>
		public static string LiveAddress { get; set; }

		/// <summary>
		/// 后台管理跳转地址
		/// </summary>
		public static string ManageAddress { get; set; }

		/// <summary>
		/// 后台管理库
		/// </summary>
		public static string ManageConnectionString { get; set; }*/

		/// <summary>
		/// 全局设置数据库连接
		/// </summary>
		public static string ConfigConnectionString = ConfigurationManager.ConnectionStrings["ConfigConnectionString"].ConnectionString;

		/// <summary>
		/// KTProject数据库连接
		/// </summary>
		public static string KTProjectConnectionString = ConfigurationManager.ConnectionStrings["KTProjectConnectionString"].ConnectionString;

		/*/// <summary>
		/// 默认加载模块
		/// </summary>
		public static string DefaultModuleIndex { get; set; }

		public static string IsOpenHfsExtension { get; set; }

		public static string BaseDirect { get; set; }

		public static string SubjectPath { get; set; }

		public static string LoginOutUrl { get; set; }
		public static string DeptTreeNew { get; set; }
		public static string UserPwd { get; set; }
		public static string OnlyOfficeUrl { get; set; }
		public static string IsOpenMessageNotice { get; set; }
		public static string SMSPassword { get; set; }
		public static string SMSAccount { get; set; }
		public static string SMSSystemName { get; set; }
		public static string SecurityValidate { get; set; }
		public static string ODataApi { get; set; }
		public static string SMSTimeoutSeconds { get; set; }
		public static string SubjectStatRpcUrl { get; set; }
		public static string TencentSecretId { get; set; }
		public static string TencentSecretKey { get; set; }*/

		public static void Initialize()
		{
			//EduConnectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
			SubjectConnectionString = ConfigurationManager.ConnectionStrings["SubjectConnectionString"].ConnectionString;
			//ManageConnectionString = ConfigurationManager.ConnectionStrings["ManageConnectionString"].ConnectionString;
			ConfigConnectionString = ConfigurationManager.ConnectionStrings["ConfigConnectionString"].ConnectionString;
			KTProjectConnectionString = ConfigurationManager.ConnectionStrings["KTProjectConnectionString"].ConnectionString;
			/*KtSysManageConnectionString = ConfigurationManager.ConnectionStrings["KtSysManageConnectionString"].ConnectionString;
			SSOHostName = ConfigurationManager.AppSettings["sso_host_name"];
			SSOAppId = ConfigurationManager.AppSettings["sso_appid"];
			SSOAppKey = ConfigurationManager.AppSettings["sso_appkey"];
			SSODomainName = ConfigurationManager.AppSettings["sso_domain_name"];
			SSOCrossDomain = Convert.ToBoolean(ConfigurationManager.AppSettings["sso_cross_domain"]);
			SSOForceLogin = ConfigurationManager.AppSettings["sso_force_login"];
			ApplicationPath = ConfigurationManager.AppSettings["ApplicationPath"];
			DiscussSystemAddress = ConfigurationManager.AppSettings["discussSystemAddress"];
			LiveAddress = ConfigurationManager.AppSettings["LiveAddress"];
			UploadAddress = ConfigurationManager.AppSettings["UploadIP"];
			DownloadAddress = ConfigurationManager.AppSettings["DownloadIP"];
			DefaultModuleIndex = ConfigurationManager.AppSettings["DefaultModuleIndex"];
			BaseDirect = ConfigurationManager.AppSettings["BaseDirect"];
			SubjectPath = ConfigurationManager.AppSettings["SubjectPath"];
			ManageAddress = ConfigurationManager.AppSettings["ManageAddress"];
			IsOpenHfsExtension = ConfigurationManager.AppSettings["IsOpenHfsExtension"];
			LoginOutUrl = ConfigurationManager.AppSettings["LoginOutUrl"];
			DeptTreeNew = ConfigurationManager.AppSettings["DeptTreeNew"];
			UserPwd = ConfigurationManager.AppSettings["user_pwd"];
			OnlyOfficeUrl = ConfigurationManager.AppSettings["OnlyOfficeUrl"];
			SubjectStatRpcUrl = ConfigurationManager.AppSettings["SubjectStatRpcUrl"];
			IsOpenMessageNotice = ConfigurationManager.AppSettings["IsOpenMessageNotice"];
			SMSPassword = ConfigurationManager.AppSettings["SMSPassword"];
			SMSAccount = ConfigurationManager.AppSettings["SMSAccount"];
			SMSSystemName = ConfigurationManager.AppSettings["SMSSystemName"];
			SecurityValidate = ConfigurationManager.AppSettings["SecurityValidate"];
			ODataApi = ConfigurationManager.AppSettings["ODataApi"];
			SMSTimeoutSeconds = ConfigurationManager.AppSettings["SMSTimeoutSeconds"];
			TencentSecretId = ConfigurationManager.AppSettings["TencentSecretId"];
			TencentSecretKey = ConfigurationManager.AppSettings["TencentSecretKey"];*/
		}
	}
}
