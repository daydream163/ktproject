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
    public class DocumentController : BaseController
    {
        // GET: app/GetsThingsDone
        
        
        public ActionResult DocumentList()
        {
            string[] rolelist = base.Roles;
            string html = GetListHTML(this.UserID);
            ViewBag.ListHTML = html;

            return View();
        }

        private string GetListHTML(int userID) {
            IDocumentService service = new DocumentService();
            int pageIndex = 0;
            int pageSize = 10;
            int count = 0;
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/dataTableAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"DOCLST\"]";
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";

            node = doc.SelectSingleNode(xmlPath);
            if (node != null) {
                IEnumerable<DocumentExt> list = service.GetList(userID, pageIndex, pageSize, ref count);
                if (list.Count() > 0) {
                    result = KTList.GetDataList<DocumentExt>(node, pageIndex, pageSize, list);
                }
            }

            return result;
        }
    }
}