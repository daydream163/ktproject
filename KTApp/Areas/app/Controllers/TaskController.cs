using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KTApp.Areas.app.Controllers
{
    public class TaskController : BaseController
    {
        public TaskController() {
            string[] rolelist = base.Roles;
        }
        public ActionResult TaskAssignmentList() {
            return View();
        }
        public ActionResult TaskCostList() {
            return View();
        }
        public ActionResult TaskDocumentList() {
            return View();
        }
        public ActionResult TaskForumList() {
            return View();
        }
        public ActionResult TaskIssueList() {
            return View();
        }
        public ActionResult TaskList() {
            return View();
        }
        public ActionResult TaskOverview() {
            return View();
        }
    }
}