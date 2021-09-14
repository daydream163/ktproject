using KTApp.Filters;
using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KTApp.Areas.app.Controllers
{
    /*[AuthorizeRedirectAttribute(RoleEnum.KTCustomer | RoleEnum.KTProjectManager)]*/
    [AuthorizeRedirectAttribute()]
    public class IssueListController : BaseController
    {
        // GET: app/GetsThingsDone
        
        
        public ActionResult Index()
        {
            string[] rolelist = base.Roles;
            return View();
        }
    }
}