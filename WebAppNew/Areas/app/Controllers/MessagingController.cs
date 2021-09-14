using KTApp.Filters;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace KTApp.Areas.app.Controllers
{
    /*[AuthorizeRedirectAttribute(RoleEnum.KTCustomer | RoleEnum.KTProjectManager)]*/
    [AuthorizeRedirectAttribute()]
    public class MessagingController : BaseController
    {
        // GET: app/GetsThingsDone
        
        
        public ActionResult MessageListFull()
        {
            string[] rolelist = base.Roles;
            

            return View();
        }
    }
}