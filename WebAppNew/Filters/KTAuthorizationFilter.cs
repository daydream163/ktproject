using KTProject.Common;
using KTProject.Common.Security;
using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace KTApp
{
	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
	public class KTAuthorizationFilter : ActionFilterAttribute
    {
		private static string returnUrl = "/login";

		/// <summary>
		/// 0 不做角色校验
		/// </summary>
		private RoleEnum roleList = RoleEnum.None;
		/// <summary>
		/// 构造函数
		/// </summary>
		/// <param name="roleEnum"></param>
		public KTAuthorizationFilter() {
		}
		/// <summary>
		/// 构造函数
		/// </summary>
		/// <param name="roleEnum"></param>
		public KTAuthorizationFilter(RoleEnum roles) {
			this.roleList = roles;
		}

		/// <summary>
		/// 重写方法
		/// </summary>
		/// <param name="actionContext"></param>
		public override void OnActionExecuting(HttpActionContext actionContext) {
			// 无需认证处理
			if (actionContext.ControllerContext.ControllerDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any() || actionContext.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any()) {
				return;
			}

			// 通过cookie获取token信息
			string token = CookieHelper.GetCookieByKey(Constants.TOKEN);
			if (string.IsNullOrWhiteSpace(token)) {
				actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
				actionContext.Response.Headers.Location = new Uri("https://localhost:44331/login");
			}
			// 判断服务器端token是否
			if (HttpContext.Current != null && HttpContext.Current.User != null) {
				AuthenticationPrincipal authenticationPrincipal = HttpContext.Current.User as AuthenticationPrincipal;
				if (authenticationPrincipal == null) {
					actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
					actionContext.Response.Headers.Location = new Uri("https://localhost:44331/login");
				}
				else {
					KTApplicationIdentity ktApplicationIdentity = authenticationPrincipal.Identity as KTApplicationIdentity;
					if (ktApplicationIdentity.Token == null) {
						GetHttpActionContext(actionContext, returnUrl);
					}
					if (ktApplicationIdentity.Token != null && ktApplicationIdentity.Token != token) {
						GetHttpActionContext(actionContext, returnUrl);
					}

				}
			}
			else {
				GetHttpActionContext(actionContext, returnUrl);
			}

			if (roleList !=  RoleEnum.None) {
				// TODO 获取当前用户真实角色
				RoleEnum userRole = RoleEnum.KTDepartmentLeader;

				if (((RoleEnum)this.roleList & userRole) == userRole) {
					// 有权限做某事
				}
				else {
					// 无权限做某事
				}
			}
		}

		/// <summary>
		/// 获取没有权限的Response
		/// </summary>
		/// <param name="actionContext"></param>
		/// <param name="url"></param>
		/// <returns></returns>
		private HttpActionContext GetHttpActionContext(HttpActionContext actionContext, string url) {
			if (actionContext.Response == null) {
				actionContext.Response = new HttpResponseMessage();
			}
			actionContext.Response.StatusCode = HttpStatusCode.Unauthorized;
			actionContext.Response.Headers.Location = new Uri(url);
			actionContext.Response.Headers.Add("ClearToken", "false");
			return actionContext;
		}

	}
}