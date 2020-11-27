using KTProject.Common.Security;
using KTProject.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace KTApp.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeRedirectAttribute : AuthorizeAttribute
    {
        public string RedirectUrl = "~/login";
        public RoleEnum roleList = RoleEnum.None;
        public string errormsg = string.Empty;
        /// <summary>
        /// 不限制角色
        /// </summary>
        /// <param name="roles"></param>
        public AuthorizeRedirectAttribute() {
        }

        /// <summary>
        /// 初始化角色约束
        /// </summary>
        /// <param name="roles"></param>
        public AuthorizeRedirectAttribute(RoleEnum roles) {
            this.roleList = roles;
        }


        public override void OnAuthorization(AuthorizationContext filterContext) {
            base.OnAuthorization(filterContext);
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext) {
            base.HandleUnauthorizedRequest(filterContext);

            var httpContext = filterContext.RequestContext.HttpContext;
            var request = httpContext.Request;
            var response = httpContext.Response;

            // If AJAX request, just return appropriate code
            if (request.IsAjaxRequest()) {
                if (filterContext.HttpContext.User.Identity.IsAuthenticated)
                    response.StatusCode = (int)HttpStatusCode.Forbidden;
                else
                    response.StatusCode = (int)HttpStatusCode.Unauthorized;
                response.SuppressFormsAuthenticationRedirect = true;
                response.End();
            }

            // 如果未登录认证，跳转到指定页面
            if (!httpContext.User.Identity.IsAuthenticated) {
                httpContext.Response.Redirect(RedirectUrl);
            }
        }

        /// <summary>
        /// 重写该方法，用来判断，是否进行了登录认证
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        protected override bool AuthorizeCore(HttpContextBase httpContext) {
            var authorized = base.AuthorizeCore(httpContext);

            // 未登录直接返回false
            if (!authorized) {
                // The user is not authenticated
                errormsg = "抱歉，您未登录";
                return false;
            }
            IPrincipal principal = HttpContext.Current.User;
            if (principal == null) {
                errormsg = "抱歉，您未登录";
                return false;
            }

            FormsIdentity formsIdentity = principal.Identity as FormsIdentity;
            FormsAuthenticationTicket ticket = formsIdentity.Ticket;
            Credentials userInfo = JsonConvert.DeserializeObject<Credentials>(ticket.UserData);

            if (roleList != RoleEnum.None) {
                // TODO 获取当前用户真实角色 以KTDepartmentLeader测试
                RoleEnum userRole = RoleEnum.KTDepartmentLeader;

                if (((RoleEnum)this.roleList & userRole) == userRole) {
                    // 有权限做某事
                    return true;
                }
                else {
                    // 无权限做某事
                    errormsg = "抱歉，您没有进行该操作的权限";
                    return false;
                }
            }

            return true;
        }
    }
}