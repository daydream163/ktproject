using KTProject.Common;
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
    public class AgendaController : BaseController
    {
        IMetadataService service = new MetadataService();

        public AgendaController() {
            string[] rolelist = base.Roles;
        }

        /// <summary>
        /// 事件类型
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AgendaWeekDay() {
            ViewBag.focusMillis = KTDateTime.ConvertDateTimeInt(DateTime.Now);
            ViewBag.defaultid = this.UserID;
            // 获取数据
            return View();
        }

    }
}