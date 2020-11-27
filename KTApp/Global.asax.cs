using KTProject.Common;
using KTProject.Common.Security;
using KTProject.Model;
using KTProject.WebApi;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;

namespace KTApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            AutofacApiConfig.RegisterAutofac();

            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_PostAuthenticateRequest(Object sender, EventArgs e) {
            //HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
            /*object token = Request.Cookies[Constants.TOKEN];
            if (token != null) {
                //FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);
                //可将需要在整个程序读取的用户数据放在principal中
                //UserModel userInfo = JsonConvert.DeserializeObject<UserModel>(authTicket.UserData);
                // 登录时写入session
                object sessionCache = HttpContext.Current.Session[Constants.IDENDITY_SESSION_NAME] as AuthenticationPrincipal;
                if (sessionCache != null) {
                    AuthenticationPrincipal authenticationPrincipal = sessionCache as AuthenticationPrincipal;
                    KTApplicationIdentity iden = authenticationPrincipal.Identity as KTApplicationIdentity;

                    if (iden.Token == token.ToString()) {
                        HttpContext.Current.User = authenticationPrincipal;
                    }
                    else {
                        // 前后台token不匹配，清除cookie和session
                        HttpContext.Current.Response.Cookies.Remove(Constants.TOKEN);
                        HttpContext.Current.Session.Remove(Constants.IDENDITY_SESSION_NAME);
                    }
                }
            }*/
        }

    }
}
