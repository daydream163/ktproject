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
        public dynamic TabConfig { get; set; }

        public string cm { get; set; }
        public string resource_type { get; set; }

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

        [HttpGet]
        public ActionResult ResourceEditor(string cm, string resource_type, int objid = 0) {
            this.cm = cm;
            this.resource_type = resource_type;

            // 添加的情况
            if (cm.ToLower() == "ad" && objid == 0) {
                if (resource_type.ToLower() == "com.twproject.resource.person") {
                    ViewBag.Type = "person";
                }
                else if (resource_type.ToLower() == "com.twproject.resource.company") {
                    ViewBag.Type = "company";
                }
                else {

                }
            }

            // 编辑的情况
            if (objid > 0) {
                KTResource resource = service.GetDetail(objid);
                if (resource.discriminator.ToLower() == "person") {
                    ViewBag.Type = "person";
                }
                else if (resource.discriminator.ToLower() == "company") {
                    ViewBag.Type = "company";
                }
            }
            return View();
        }

        [HttpPost]
        public ActionResult ResourceEditor(FormCollection form) {
            string _cm = form["cm"];
            this.cm = _cm;
            this.resource_type = form["resource_type"];

            KTResource resource = null;
            string id = form["objid"];
            resource = new KTResource {
                code = form["code"],
                parent = form["parent_id"],
                ancestorids = form["parent_id"],//TODO 到根的层级
                myManager = form["manager"],
                myManagerIds = form["courtesy_title"],//TODO 到根的层级
                area = Convert.ToInt32(form["area"]),
                tags = form["resource_tags"],
                notes = form["note"],
                ownerx = this.UserID,
                name = form["fld_surname"] + " " + form["fld_name"],
                inherit = false,
                propagate = true,
                hidden = false,
            };

            // 设置manager myManagerIds字段，就是上级主管人
            string _managerid = form["manager"];
            if (!string.IsNullOrEmpty(_managerid)) {
                KTResource _managerResourceInfo = service.GetDetail(Convert.ToInt32(_managerid));
                string _mids = _managerResourceInfo.myManagerIds ?? "";
                resource.myManager = _managerid;
                resource.myManagerIds = _mids + _managerid + "^";
            }

            // 设置manager myManagerIds字段，就是上级主管人
            string _parentid = form["parent_id"];
            if (!string.IsNullOrEmpty(_parentid)) {
                KTResource _parentResourceInfo = service.GetDetail(Convert.ToInt32(_parentid));
                string _pids = _parentResourceInfo.ancestorids ?? "";
                resource.parent = _parentid;
                resource.ancestorids = _pids + _parentid + "^";
            }

            
            if (this.resource_type.ToLower() == "com.twproject.resource.person") {
                // 人
                ViewBag.Type = "person";
                resource.discriminator = "PERSON";
                resource.personName = form["fld_name"];
                resource.personSurname = form["fld_surname"];
                resource.courtesyTitle = form["courtesy_title"];

                if (this.cm.ToLower() == "sv" && id.ToLower() == "newemptyid") {
                    resource.creationDate = DateTime.Now;
                    resource.creator = this.User.Identity.Name;
                    resource.lastModified = DateTime.Now;
                    resource.lastModifier = this.User.Identity.Name;
                    resource.id = service.Maxid().id.ToString();
                    KTResource result = service.Insert(resource);
                }
                else {
                    resource.id = id;
                    resource.lastModified = DateTime.Now;
                    resource.lastModifier = this.User.Identity.Name;
                    int count = service.Update(resource);
                }
            }
            else {
                // 加部门
                resource.discriminator = "COMPANY";
                resource.typex = Convert.ToInt32(form["type"]);
                if (this.cm.ToLower() == "sv" && id.ToLower() == "newemptyid") {
                    resource.creationDate = DateTime.Now;
                    resource.creator = this.User.Identity.Name;
                    resource.lastModified = DateTime.Now;
                    resource.lastModifier = this.User.Identity.Name;
                    IntID _id = service.Maxid();
                    resource.id = _id.id.ToString();
                    KTResource result = service.Insert(resource);
                }
                else {
                    resource.id = id;
                    resource.lastModified = DateTime.Now;
                    resource.lastModifier = this.User.Identity.Name;
                    int count = service.Update(resource);
                }
                ViewBag.Type = "company";
            }

            ViewBag.ResourceInfo = resource;
            TempData["resource"] = resource;

            return View();
        }

        public PartialViewResult EditorTabsPartial(string cm, string resource_type, int objid = 0) {
            if (cm.ToLower() == "ad") {
                // 添加
                if (!string.IsNullOrEmpty(resource_type) && resource_type.ToLower() == "com.twproject.resource.person") {
                    return PartialView("_AddPersonPartial");
                }
                else if (!string.IsNullOrEmpty(resource_type) && resource_type.ToLower() == "com.twproject.resource.company") {
                    return PartialView("_AddDepartmentPartial");
                }
                else {
                    return PartialView();
                }
            }
            else if (cm.ToLower() == "sv") {
                if (resource_type.ToLower() == "com.twproject.resource.person") {
                    return PartialView("_EditPersonPartial");
                }
                else {
                    return PartialView("_EditDepartmentPartial");
                }
            }
            else {
                // 编辑
                KTResource resource = service.GetDetail(objid);
                ViewBag.Info = resource;
                if (resource.discriminator.ToLower() == "person") {
                    return PartialView("_EditPersonPartial");
                }
                else if (resource.discriminator.ToLower() == "company") {
                    return PartialView("_EditDepartmentPartial");
                }
                else {
                    return PartialView();
                }
            }
        }

        public PartialViewResult GeneralDataPartial(string cm, string resource_type, int objid = 0) {
            // 编辑的情况
            if (cm.ToLower() == "ed" && objid != 0) {
                KTResource resource = TempData["resource"] as KTResource;
                //KTResource resource = service.GetDetail(objid);
                ViewBag.Info = resource;
                if (resource.discriminator.ToLower() == "person") {
                    return PartialView("_PersonGeneralDataPartial");
                }
                else if (resource.discriminator.ToLower() == "company") {
                    return PartialView("_DepartmentGeneralDataPartial");
                }
                else {
                    return PartialView("_GeneralDataPartial");
                }
            }

            if (cm.ToLower() == "sv") {
                KTResource resource = TempData["resource"] as KTResource;
                //KTResource resource = service.GetDetail(objid);
                ViewBag.Info = resource;
                if (resource.discriminator.ToLower() == "person") {
                    return PartialView("_PersonGeneralDataPartial");
                }
                else if (resource.discriminator.ToLower() == "company") {
                    return PartialView("_DepartmentGeneralDataPartial");
                }
                else {
                    return PartialView("_GeneralDataPartial");
                }
            }


            // 添加的情况
            if (cm.ToLower() == "ad" && objid == 0) {
                if (resource_type.ToLower() == "com.twproject.resource.person") {
                    return PartialView("_PersonGeneralDataPartial");
                }
                else if (resource_type.ToLower() == "com.twproject.resource.company") {
                    return PartialView("_DepartmentGeneralDataPartial");
                }
                else {
                    return PartialView("_GeneralDataPartial");
                }
            }
            else {
                return PartialView("_GeneralDataPartial");
            }

        }
    }
}