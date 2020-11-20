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
    public class LoginController : Controller
    {
        private ILoginService _LoginService { get { return new LoginService(); } }

        public class LoginInfo
        {
            public string CM;
            public string FLD_LOGIN_NAME;
            public string FLD_PWD;
        }

        [System.Web.Mvc.HttpGet]
        public ActionResult Index()
        {
            ViewBag.Title = "登录";

            return View();
        }

        [System.Web.Mvc.HttpPost]
        public ActionResult Index(string CM, string FLD_LOGIN_NAME, string FLD_PWD) {
            ViewBag.Title = "登录";

            // TODO 验证密码有效性
            // 写入session、cookie
            string msg = string.Empty;
            bool result = _LoginService.Login(FLD_LOGIN_NAME, FLD_PWD, string.Empty, ref msg);

            if (result) {
                Response.Redirect("/app/getsThingsDone.html");
            }
            else {
                ViewBag.ErrorMsg = "用户名或者密码不正确";
            }
            return View();
        }
    }
}
