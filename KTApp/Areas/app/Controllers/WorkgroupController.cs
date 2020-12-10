using KTProject.Common;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace KTApp.Areas.app.Controllers
{
    public class WorkgroupController : BaseController
    {
        IResourceService resourceService = new ResourceService();

        public WorkgroupController() {
            string[] rolelist = base.Roles;
        }

        /// <summary>
        /// 事件类型
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult WorkgroupPopup() {
            WorkgroupParams workgroupParams = KTUtils.GetObjectFromRequest<WorkgroupParams>(Request.QueryString);
            XmlNode node = KTList.GetConfigNode("workgroupgAjax.xml", "WGSRCPEOPLE");
            string renderHTML = string.Empty;
            List<KTResourceSimpleView> listNew = new List<KTResourceSimpleView>();
            if (node != null) {
                IEnumerable<KTResource> list = resourceService.GetList2(workgroupParams);
                listNew = GetNewList(list);
                renderHTML = KTList.GetDataList<KTResourceSimpleView>(node, 0, 0, listNew);
            }

            string renderHTMLSelected = string.Empty;
            IEnumerable<KTResource> listTar = new AgendaService().GetResourceList(workgroupParams.WG_IDS.Split(','));
            List<KTResourceSimpleView> listNew2 = GetNewList(listTar);
            renderHTMLSelected = KTList.GetDataList<KTResourceSimpleView>(node, 0, 0, listNew2);

            //ViewBag.ListHTML = renderHTML;
            //ViewBag.ListHTMLSelected = renderHTMLSelected;
            ViewBag.resourceList = JsonConvert.SerializeObject(listNew2);
            ViewBag.selectedIds = workgroupParams.WG_IDS;

            // 获取数据
            return View();
        }

        private List<KTResourceSimpleView> GetNewList(IEnumerable<KTResource> list) {
            List<KTResourceSimpleView> listNew = new List<KTResourceSimpleView>();
            for (int i = 0; i < list.Count(); i++) {
                KTResource resource = list.ElementAt(i);
                resource.avatarUrl = KTUtils.GetAvatar(resource);
                KTResourceSimpleView newobj = KTUtils.AutoCopy2<KTResource, KTResourceSimpleView>(resource);
                listNew.Add(newobj);
            }
            return listNew;
        }
    }
}