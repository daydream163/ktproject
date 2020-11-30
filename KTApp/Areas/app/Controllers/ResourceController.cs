using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KTApp.Areas.app.Controllers
{
    public class ResourceController : BaseController
    {
        public ActionResult ResourceList() {
            string[] rolelist = base.Roles;
            return View();
        }

    }
}