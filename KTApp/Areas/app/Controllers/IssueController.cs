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
    public class IssueController : BaseController
    {
        IMetadataService service = new MetadataService();
        IIssueStatusService issueStatusService = new IssueStatusService();

        public IssueController() {
            string[] rolelist = base.Roles;
        }
        public ActionResult IssueList() {
            string[] rolelist = base.Roles;
            return View();
        }

        /// <summary>
        /// 工作记录状态
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult IssueType() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "ISSUETYPE");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.IssueType.ToString(), null);
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
        public ActionResult IssueType(FormCollection form) {
            string code, desc, color;
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
                        discriminator = TypeEnum.IssueType.ToString(),
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
                            discriminator = TypeEnum.IssueType.ToString(),
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
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "ISSUETYPE");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.IssueType.ToString(), null);
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
        public ActionResult IssueImpact() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "ISSUEIMPACT");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.IssueImpact.ToString(), null);
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
        public ActionResult IssueImpact(FormCollection form) {
            /*
             CODE_9: GJ
            DESC_9: 公司项目
            AREA_9: 5819
            CODE: QJ
            DESC: 区级项目
            AREA: 5819
                         */
            string code, desc, color;
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
                        discriminator = TypeEnum.IssueImpact.ToString(),
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
                            discriminator = TypeEnum.IssueImpact.ToString(),
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
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "ISSUEIMPACT");
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.IssueImpact.ToString(), null);
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
        public ActionResult IssueStatus() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "IssueStatus");
            if (node != null) {
                List<IssueStatusExt> list = GetList();
                result = KTList.GetDataList<IssueStatusExt>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 数据类型转换。增加业务字段处理
        /// </summary>
        /// <returns></returns>
        private List<IssueStatusExt> GetList() {
            IEnumerable<IssueStatus> list = issueStatusService.GetList("");
            List<IssueStatusExt> list2 = new List<IssueStatusExt>();
            for (int i = 0; i < list.Count(); i++) {
                IssueStatus issueStatus = list.ElementAt(i);
                IssueStatusExt obj = new IssueStatusExt();
                obj.id = issueStatus.id;
                obj.askForComment = issueStatus.askForComment;
                obj.askForWorklog = issueStatus.askForWorklog;
                obj.areax = issueStatus.areax;
                obj.color = issueStatus.color;
                obj.description = issueStatus.description;
                obj.behavesAsOpen = issueStatus.behavesAsOpen;
                obj.behavesAsClosed = issueStatus.behavesAsClosed;
                obj.orderBy = issueStatus.orderBy;
                obj.askForComment_Str = issueStatus.askForComment ? "yes" : "no";
                obj.askForWorklog_Str = issueStatus.askForWorklog ? "yes" : "no";
                obj.behavesAsClosed_Str = issueStatus.behavesAsClosed ? "yes" : "no";
                obj.behavesAsOpen_Str = issueStatus.behavesAsOpen ? "yes" : "no";
                obj.askForComment_checked = issueStatus.askForComment ? "checked" : "";
                obj.askForWorklog_checked = issueStatus.askForWorklog ? "checked" : "";
                obj.behavesAsClosed_checked = issueStatus.behavesAsClosed ? "checked" : "";
                obj.behavesAsOpen_checked = issueStatus.behavesAsOpen ? "checked" : "";
                list2.Add(obj);
            }

            return list2;
        }

        /// <summary>
        /// 工作记录状态
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult IssueStatus(FormCollection form) {
            /*
ORDE_14095: 1
DESC_14095: open
COLOR_14095: #3bbf67
AREA_14095: 5944
ASOP_14095: yes
ck_ASOP_14095: yes
ASCL_14095: no
ASKC_14095: no
ASKW_14095: no
            */
            string desc, color;
            int orderby = 0;
            int? _areax = 0;
            bool asop = false, ascl = false, askc = false, askw = false;

            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                IssueStatus data = null;
                if (key.StartsWith("ORDE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("ORDE_".Length);
                    color = form["COLOR_" + id];
                    desc = form["DESC_" + id];
                    orderby = Convert.ToInt32(form["ORDE_" + id]);
                    asop = form["ASOP_" + id] == "yes" ? true : false;
                    ascl = form["ASCL_" + id] == "yes" ? true : false;
                    askc = form["ASKC_" + id] == "yes" ? true : false;
                    askw = form["ASKW_" + id] == "yes" ? true : false;
                    if (!string.IsNullOrEmpty(form["AREA_" + id])) {
                        _areax = Convert.ToInt32(form["AREA_" + id]);
                    }

                    data = new IssueStatus {
                        id = Convert.ToInt32(id),
                        color = color,
                        description = desc,
                        askForComment = askc,
                        askForWorklog = askw,
                        behavesAsClosed = ascl,
                        behavesAsOpen = asop,
                        orderBy = orderby,
                        areax = _areax
                    };

                    issueStatusService.Update(data);
                }
                else if (key.StartsWith("ORDE", StringComparison.OrdinalIgnoreCase)) {
                    color = form["COLOR"];
                    desc = form["DESC"];
                    orderby = Convert.ToInt32(form["ORDE"]);
                    asop = form["ASOP"] == "yes" ? true : false;
                    ascl = form["ASCL"] == "yes" ? true : false;
                    askc = form["ASKC"] == "yes" ? true : false;
                    askw = form["ASKW"] == "yes" ? true : false;
                    if (!string.IsNullOrEmpty(form["AREA"])) {
                        _areax = Convert.ToInt32(form["AREA"]);
                    }

                    data = new IssueStatus {
                        color = color,
                        description = desc,
                        askForComment = askc,
                        askForWorklog = askw,
                        behavesAsClosed = ascl,
                        behavesAsOpen = asop,
                        orderBy = orderby,
                        areax = _areax
                    };

                    if (!string.IsNullOrEmpty(desc) && !string.IsNullOrEmpty(color)) {
                        issueStatusService.Insert(data);
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", "IssueStatus");
            if (node != null) {
                List<IssueStatusExt> list = GetList();
                result = KTList.GetDataList<IssueStatusExt>(node, 0, 0, list);
            }

            ViewBag.ListHTML = result;

            return View();
        }

    }
}