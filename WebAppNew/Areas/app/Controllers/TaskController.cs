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
    public class TaskController : BaseController
    {
        IMetadataService service = new MetadataService();

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

        /// <summary>
        /// 任务类型
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult TaskType() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "TASKTYPE");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.TaskType.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 任务类型
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult TaskType(FormCollection form) {
            /*
             CODE_9: GJ
            DESC_9: 公司项目
            AREA_9: 5819
            CODE: QJ
            DESC: 区级项目
            AREA: 5819
                         */
            string code, desc, areai;
            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                if (key.StartsWith("CODE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("CODE_".Length);
                    code = form["CODE_" + id];
                    desc = form["DESC_" + id];
                    areai = form["AREA_" + id];
                    service.Update(new Metadata {
                        id = Convert.ToInt32(id),
                        discriminator = TypeEnum.TaskType.ToString(),
                        description = desc,
                        stringValue = code,
                        areai = (areai == null ? 0 : Convert.ToInt32(areai)),
                        areas = (areai == null ? 0 : Convert.ToInt32(areai)),
                    }); ;
                }
                else if (key.StartsWith("CODE", StringComparison.OrdinalIgnoreCase)) {
                    code = form["CODE"];
                    desc = form["DESC"];
                    areai = form["AREA"];
                    if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(desc)) {
                        service.Insert(new Metadata {
                            discriminator = TypeEnum.TaskType.ToString(),
                            description = desc,
                            stringValue = code,
                            areai = (areai == null ? 0 : Convert.ToInt32(areai)),
                            areas = (areai == null ? 0 : Convert.ToInt32(areai)),
                        });
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "TASKTYPE");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.TaskType.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 任务类型
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult CostClassification() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "CostClassification");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.CostClassification.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 任务类型
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CostClassification(FormCollection form) {
            /*
             CODE_9: GJ
            DESC_9: 公司项目
            AREA_9: 5819
            CODE: QJ
            DESC: 区级项目
            AREA: 5819
                         */
            string code, desc;
            int? _areai = null;
            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                if (key.StartsWith("CODE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("CODE_".Length);
                    code = form["CODE_" + id];
                    desc = form["DESC_" + id];
                    if (!string.IsNullOrEmpty(form["AREA_" + id])) {
                        _areai = Convert.ToInt32(form["AREA_" + id]);
                    }
                    service.Update(new Metadata {
                        id = Convert.ToInt32(id),
                        discriminator = TypeEnum.CostClassification.ToString(),
                        description = desc,
                        stringValue = code,
                        areai = _areai,
                        areas = _areai,
                    }); ;
                }
                else if (key.StartsWith("CODE", StringComparison.OrdinalIgnoreCase)) {
                    code = form["CODE"];
                    desc = form["DESC"];
                    if (!string.IsNullOrEmpty(form["AREA"])) {
                        _areai = Convert.ToInt32(form["AREA"]);
                    }
                    if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(desc)) {
                        service.Insert(new Metadata {
                            discriminator = TypeEnum.CostClassification.ToString(),
                            description = desc,
                            stringValue = code,
                            areai = _areai,
                            areas = _areai,
                        });
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "CostClassification");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.CostClassification.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 工作记录状态
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult WorklogStatus() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "WorklogStatus");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.WLSTS.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
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
        public ActionResult WorklogStatus(FormCollection form) {
            /*
             CODE_9: GJ
            DESC_9: 公司项目
            AREA_9: 5819
            CODE: QJ
            DESC: 区级项目
            AREA: 5819
                         */
            string code, desc,color;
            int? _areai = null;
            int? _intvalue = 0;
            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                Metadata data = null;
                if (key.StartsWith("CODE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("CODE_".Length);
                    code = form["CODE_" + id];
                    desc = form["DESC_" + id];
                    color = form["COLOR_" + id];
                    if (!string.IsNullOrEmpty(form["AREA_" + id])) {
                        _areai = Convert.ToInt32(form["AREA_" + id]);
                    }
                    if (!string.IsNullOrEmpty(form["CODE_" + id])) {
                        _intvalue = Convert.ToInt32(form["CODE_" + id]);
                    }
                    data = new Metadata {
                        id = Convert.ToInt32(id),
                        discriminator = TypeEnum.WLSTS.ToString(),
                        description = desc,
                        intValue = _intvalue,
                        areai = _areai,
                        color = color
                    };

                    service.Update(data);
                }
                else if (key.StartsWith("CODE", StringComparison.OrdinalIgnoreCase)) {
                    code = form["CODE"];
                    desc = form["DESC"];
                    color = form["COLOR"];
                    if (!string.IsNullOrEmpty(form["AREA"])) {
                        _areai = Convert.ToInt32(form["AREA"]);
                    }
                    if (!string.IsNullOrEmpty(form["CODE"])) {
                        _intvalue = Convert.ToInt32(form["CODE"]);
                    }
                    if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(desc)) {
                        service.Insert(new Metadata {
                            discriminator = TypeEnum.WLSTS.ToString(),
                            description = desc,
                            intValue = _intvalue,
                            areai = _areai,
                            color = color
                        });
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "WorklogStatus");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.WLSTS.ToString(), null);
                result = KTList.GetDataList<Metadata>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

    }
}