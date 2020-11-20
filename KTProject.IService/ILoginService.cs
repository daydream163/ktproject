using System;

namespace KTProject.IService
{
    public interface ILoginService
    {
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <param name="verifyCode">验证码</param>
        /// <param name="msg">返回消息</param>
        /// <returns></returns>
        bool Login(string userName, string password, string verifyCode, ref string msg);
        /// <summary>
		/// 登出
		/// </summary>
		/// <returns></returns>
		bool Logout();
    }
}
