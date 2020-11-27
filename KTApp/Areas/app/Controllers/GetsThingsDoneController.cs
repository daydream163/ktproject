using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;

namespace KTApp.Areas.app.Controllers
{
    public class GetsThingsDoneController : BaseController
    {
        // GET: app/GetsThingsDone
        public ActionResult Index()
        {
            IPrincipal p = HttpContext.User;

            return View();
        }
    }
}