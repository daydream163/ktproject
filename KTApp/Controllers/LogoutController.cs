using KTProject.IService;
using KTProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace KTApp.Controllers
{
    public class LogoutController : Controller
    {
        private ILoginService _LoginService { get { return new LoginService(); } }

        public class LoginInfo
        {
            public string CM;
            public string FLD_LOGIN_NAME;
            public string FLD_PWD;
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.HttpPost]
        public void Index(string returnurl = "") {
            ViewBag.Title = "Home Page";

            // TODO 验证密码有效性
            // 写入session、cookie
            string msg = string.Empty;
            bool result = _LoginService.Logout();

            if (result) {
                Response.Redirect("/login");
            }
            else {
                Response.Redirect("/login");
            }
        }
    }
}
