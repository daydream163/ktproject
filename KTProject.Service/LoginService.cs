﻿using KNet.Core;
using KTProject.Common;
using KTProject.Common.Security;
using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace KTProject.Service
{
	public class LoginService:ILoginService
	{
		private string userIp = WebUtils.GetIP() ?? "";
		private IUserRepository _userRepository = new UserRepository();
		private ICredentialsRepository _credentialsRepository = new CredentialsRepository();

		/// <summary>
		/// 账号登录方法
		/// </summary>
		/// <param name="userName"></param>
		/// <param name="password"></param>
		/// <param name="verifyCode"></param>
		/// <param name="msg"></param>
		/// <param name="failCount"></param>
		/// <returns></returns>
		public bool Login(string userName, string password, string verifyCode, ref string msg) {
			// 验证未通过，直接返回
			if (!LoginCheck(userName, password, verifyCode, ref msg)) {
				return false;
			}

			// 先在本地库里查询是否存在
			var userInfo = _userRepository.GetUserByUserName(userName);
			bool ret = false;
			if (userInfo != null) {
				ret = DoLogin(userInfo, password, ref msg);
			}

			return true;
		}

		/// <summary>
		/// 登出
		/// </summary>
		/// <returns></returns>
		public bool Logout() {
			CookieHelper.ClearCookie(Constants.TOKEN);
			var token = CookieHelper.GetCookieByKey(Constants.TOKEN);
			if (string.IsNullOrWhiteSpace(token)) {
				return true;
			}
			var credentials = _credentialsRepository.GetCredentialsByToken(token);
			if (credentials != null) {
				_credentialsRepository.DisableCredentials(token);
				CookieHelper.ClearCookie(Constants.TOKEN);
			}
			return true;
		}

		/// <summary>
		/// 本地登录逻辑
		/// </summary>
		/// <param name="userInfo"></param>
		/// <param name="password"></param>
		/// <param name="msg"></param>
		/// <param name="failCount"></param>
		/// <returns></returns>
		private bool DoLogin(User userInfo, string password, ref string msg) {
			msg = CheckUserInfo(userInfo, password);
			if (!string.IsNullOrWhiteSpace(msg)) {
				return false;
			}

			// token 通过 credentials.accesstoken 返回
			Credentials credentials = MakeToken(userInfo, userIp, string.Empty, "pc", DateTime.Now.AddDays(1), Constants.USER_TYPE_Cloud);

			if (credentials != null) {
				//通过token踢掉所有同用户名的其他在线用户
				_credentialsRepository.KickCredentialsByToken(credentials.accesstoken);

				ClearSession();
				ClearCookies();

				KTApplicationIdentity applicationIdentity = CreateAppIdentity(credentials);
				if (applicationIdentity == null) {
					ClearCookies();
					return false;
				}
				AuthenticationPrincipal authenticationPrincipal1 = new AuthenticationPrincipal(applicationIdentity);
				if (HttpContext.Current != null) {
					HttpContext.Current.Session[Constants.IDENDITY_SESSION_NAME] = authenticationPrincipal1;
					HttpContext.Current.User = (IPrincipal)authenticationPrincipal1;
				}

				CookieHelper.AddCookie(Constants.TOKEN, credentials.accesstoken, DateTime.Now.AddDays(1));
				return true;
			}
			else {
				return false;
			}
			
		}

		/// <summary>
		/// 生成用户登录身份信息
		/// </summary>
		/// <param name="credentials"></param>
		/// <returns></returns>
		private KTApplicationIdentity CreateAppIdentity(Credentials credentials) {
			if (credentials == null || !credentials.Enabled || credentials.ExpireTime < DateTime.Now)
				return null;
			KTApplicationIdentity applicationIdentity = new KTApplicationIdentity() {
				Id = credentials.UserId,
				Token = credentials.accesstoken,
				Name = credentials.UserName,
				RealName = credentials.RealName,
				OrgId = credentials.OrgId,
				OrgCode = credentials.OrgCode,
				OrgName = credentials.OrgName,
				FromCode = credentials.FromCode,
				FromName = credentials.FromName,
				FromToken = credentials.FromToken,
				TokenExpireTime = credentials.ExpireTime,
				CreateTime = credentials.CreateTime
			};
			return applicationIdentity;
		}

		private void ClearSession() {
			if (HttpContext.Current.Session != null) {
				HttpContext.Current.Session.Remove(Constants.IDENDITY_SESSION_NAME);
			}
		}

		private void ClearCookies() {
			CookieHelper.ClearCookie(Constants.TOKEN);
		}

		/// <summary>
		/// 生成token
		/// </summary>
		/// <param name="user"></param>
		/// <param name="ip"></param>
		/// <param name="did"></param>
		/// <param name="platform"></param>
		/// <param name="expireTime"></param>
		/// <param name="fromCode"></param>
		/// <returns></returns>
		private Credentials MakeToken(User user, string ip, string did, string platform, DateTime? expireTime, string fromCode) {
			string token = string.Empty;
			Credentials credentials = new Credentials();

			//生成token
			token = Guid.NewGuid().ToString("N");

			//登录的基本信息
			credentials.UserId = user.id.ToString();
			credentials.UserName = user.loginname;
			credentials.NickName = user.name + " " + user.surname;
			credentials.RealName = user.name + " " + user.surname;

			//设备号
			credentials.Did = did;
			//本次登录的令牌
			credentials.accesstoken = token;
			//本次登录的用户IP
			credentials.UserIp = ip;
			//服务器IP
			credentials.HostIp = WebUtils.GetHostIp();
			//登录的平台
			credentials.Platform = platform;

			//本次登录的机构
			credentials.OrgId = user.discriminator;
			credentials.OrgCode = user.discriminator;
			credentials.OrgName = user.discriminator;

			//本次登录的部门
			credentials.DeptId = string.Empty;
			credentials.DeptCode = string.Empty;
			credentials.DeptName = string.Empty;

			credentials.FromCode = string.Empty;
			credentials.FromName = string.Empty;

			if (expireTime.HasValue && expireTime.Value > DateTime.Now)
				credentials.ExpireTime = expireTime.Value;
			else
				credentials.ExpireTime = DateTime.Now.AddDays(1);

			credentials.Enabled = true;
			credentials.CreateTime = DateTime.Now;
			credentials.LastValidTime = DateTime.Now;

			//插入登录凭据
			_credentialsRepository.Add(credentials);
			return credentials;
		}

		/// <summary>
		/// 本地账号验证
		/// </summary>
		/// <param name="userInfo"></param>
		/// <param name="password"></param>
		/// <param name="failCount"></param>
		/// <returns></returns>
		private string CheckUserInfo(User userInfo, string password) {
			var msg = "";

			// 账号已经停用
			if (!userInfo.enabled) {
				return "您的账号已停用";
			}
			// 密码验证
			if (!PasswordUtil.ComparePasswords(userInfo.password, password)) {
				return "用户名/密码不匹配";
			}
			return msg;
		}

		/// <summary>
		/// 登录参数验证
		/// </summary>
		/// <param name="userName"></param>
		/// <param name="password"></param>
		/// <param name="verifyCode"></param>
		/// <param name="msg"></param>
		/// <returns></returns>
		private bool LoginCheck(string userName, string password, string verifyCode, ref string msg) {
			// 空验证
			if (string.IsNullOrWhiteSpace(userName)) {
				msg = "用户名不能为空";
				return false;
			}
			if (string.IsNullOrWhiteSpace(password)) {
				msg = "密码不能为空";
				return false;
			}

			// 验证码验证
			msg = CheckVerifyCode(userName, verifyCode);
			if (!string.IsNullOrWhiteSpace(msg)) {
				return false;
			}
			return true;
		}
		/// <summary>
		/// 验证码检测
		/// </summary>
		/// <param name="userName"></param>
		/// <param name="verifyCode"></param>
		/// <returns></returns>
		private string CheckVerifyCode(string userName, string verifyCode) {
			var msg = "";
			string cackeKey = $"{userIp.Replace(".", "")}{userName}";
			var cacheHelper = new CacheHelper2();
			var failCount = cacheHelper.StringGet<int>(cackeKey);
			// 验证码验证
			if (Convert.ToBoolean(Constants.IS_VERIFYCODE)) {
				// 传了就验证
				if (!string.IsNullOrWhiteSpace(verifyCode)) {
					if (HttpContext.Current.Session[Constants.CHECK_CODE_NAME] == null) {
						return "验证码已过期";
					}

					if (string.Compare(HttpContext.Current.Session[Constants.CHECK_CODE_NAME].ToString().Trim(), verifyCode, true) != 0) {
						return "请输入正确的验证码";
					}
					//清空session中的验证码（释放资源）
					HttpContext.Current.Session.Remove(Constants.CHECK_CODE_NAME);
				}
				else {
					// 前端默认输入3次后开启验证码，但是关闭浏览器或者清理缓存后，会失去错误次数计数
					// 同一个ip ,用户名短时间内错误次数过多，如果绕过了前端验证，这里强制开启验证
					if (failCount > 50) {
						return "请输入正确的验证码";
					}
				}
			}
			return msg;
		}

	}
}
