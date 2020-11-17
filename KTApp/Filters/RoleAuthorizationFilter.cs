using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace KTApp
{
    public class RoleAuthorizationFilter : ActionFilterAttribute
    {
		private RoleEnum roleList;
		/// <summary>
		/// 构造函数
		/// </summary>
		/// <param name="roleEnum"></param>
		public RoleAuthorizationFilter(RoleEnum roles) {
			this.roleList = roles;
		}
		/// <summary>
		/// 重写方法
		/// </summary>
		/// <param name="actionContext"></param>
		public override void OnActionExecuting(HttpActionContext actionContext) {
			if (actionContext.ControllerContext.ControllerDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any() || actionContext.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Any()) {
				return;
			}
			// TODO 获取当前用户真实角色
			RoleEnum userRole = RoleEnum.KTProjectManager;

			if(((RoleEnum)this.roleList & userRole) == userRole) {
				// 有权限做某事
			}
			else {
				// 无权限做某事
			}
		}
	}
}