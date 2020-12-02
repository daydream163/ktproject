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
    public class ResourceController : BaseController
    {
        IResourceService service = new ResourceService();
        IDepartmentTypeService departmentTypeService = new DepartmentTypeService();

        public ActionResult ResourceList() {
            string[] rolelist = base.Roles;
            return View();
        }

        /// <summary>
        /// 工作记录状态
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult DepartmentType() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "DepartmentType");
            if (node != null) {
                IEnumerable<DepartmentType> list = departmentTypeService.GetList("");
                result = KTList.GetDataList<DepartmentType>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 工作记录状态
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult DepartmentType(FormCollection form) {
            string code, desc;
            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                DepartmentType data = null;
                if (key.StartsWith("CODE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("CODE_".Length);
                    code = form["CODE_" + id];
                    desc = form["DESC_" + id];
                    data = new DepartmentType {
                        id = Convert.ToInt32(id),
                        stringValue = code,
                        description = desc,
                    };

                    departmentTypeService.Update(data);
                }
                else if (key.StartsWith("CODE", StringComparison.OrdinalIgnoreCase)) {
                    code = form["CODE"];
                    desc = form["DESC"];
                    if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(desc)) {
                        departmentTypeService.Insert(new DepartmentType {
                            stringValue = code,
                            description = desc,
                        });
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "DepartmentType");
            if (node != null) {
                IEnumerable<DepartmentType> list = departmentTypeService.GetList("");
                result = KTList.GetDataList<DepartmentType>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }
    }
}