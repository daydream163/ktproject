using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
    public class Constants
    {
        /// <summary>
        /// 顶层系统配置存储表位置
        /// </summary>
        public const string CoSubSystemContract = "co_subsystem_contract";
        public static readonly string USER_TYPE_Mirror = "mirror";
        public static readonly string USER_TYPE_Cloud = "cloud";

        /// <summary>
        /// token
        /// </summary>
        public static readonly string TOKEN = "token";
        /// <summary>
        /// token
        /// </summary>
        public static readonly string IDENDITY_SESSION_NAME = "idendity_name";

        
        /// <summary>
        /// 当前回话验证码缓存key
        /// </summary>
        public static readonly string CHECK_CODE_NAME = "KT_Check_Code_Name";

        /// <summary>
        /// cookie存放的域名，不跨域不用配置
        /// </summary>
        public static readonly string SSO_DOMAIN_NAME = ConfigurationManager.AppSettings["cookieDomain"];

        /// <summary>
        /// 是否开启验证码功能
        /// </summary>
        public static readonly string IS_VERIFYCODE = ConfigurationManager.AppSettings["IsVerifyCode"] ?? "";

        public static readonly string SYS_DEFAULT_CACHE = ConfigurationManager.AppSettings["sysDefaultCache"];
    }
}
