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
        public ActionResult EventType() {
            // 获取数据
            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", TypeEnum.EventType.ToString());
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.EventType.ToString(), null);
                IEnumerable<MetadataExt> list2 = GetList(list);
                result = KTList.GetDataList<MetadataExt>(node, 0, 0, list2);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 事件类型
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult EventType(FormCollection form) {
            string code, desc;
            int? _areai = null;
            int? _intvalue = 0;
            bool? unav = false;
            for (int i = 0; i < form.Keys.Count; i++) {
                string key = form.Keys[i];
                string value = form[key];
                Metadata data = null;
                if (key.StartsWith("CODE_", StringComparison.OrdinalIgnoreCase)) {
                    string id = key.Substring("CODE_".Length);
                    code = form["CODE_" + id];
                    desc = form["DESC_" + id];
                    if (!string.IsNullOrEmpty(form["AREA_" + id])) {
                        _areai = Convert.ToInt32(form["AREA_" + id]);
                    }
                    if (!string.IsNullOrEmpty(form["CODE_" + id])) {
                        _intvalue = Convert.ToInt32(form["CODE_" + id]);
                    }
                    if (!string.IsNullOrEmpty(form["UNAV_" + id])) {
                        unav = form["UNAV_" + id] == "yes" ? true : false;
                    }
                    data = new Metadata {
                        id = Convert.ToInt32(id),
                        discriminator = TypeEnum.EventType.ToString(),
                        description = desc,
                        intValue = _intvalue,
                        areai = _areai,
                        unavailable = unav
                    };

                    service.Update(data);
                }
                else if (key.StartsWith("CODE", StringComparison.OrdinalIgnoreCase)) {
                    code = form["CODE"];
                    desc = form["DESC"];
                    if (!string.IsNullOrEmpty(form["AREA"])) {
                        _areai = Convert.ToInt32(form["AREA"]);
                    }
                    if (!string.IsNullOrEmpty(form["CODE"])) {
                        _intvalue = Convert.ToInt32(form["CODE"]);
                    }
                    if (!string.IsNullOrEmpty(form["UNAV"])) {
                        unav = form["UNAV"] == "yes" ? true : false;
                    }
                    if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(desc)) {
                        service.Insert(new Metadata {
                            discriminator = TypeEnum.EventType.ToString(),
                            description = desc,
                            intValue = _intvalue,
                            areai = _areai,
                            unavailable = unav
                        });
                    }
                }
                else { }
            }

            string result = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("dataTableAjax.xml", TypeEnum.EventType.ToString());
            if (node != null) {
                IEnumerable<Metadata> list = service.GetList("", TypeEnum.EventType.ToString(), null);
                IEnumerable<MetadataExt> list2 = GetList(list);
                result = KTList.GetDataList<MetadataExt>(node, 0, 0, list2);
            }

            ViewBag.ListHTML = result;

            return View();
        }

        /// <summary>
        /// 数据类型转换。增加业务字段处理
        /// </summary>
        /// <returns></returns>
        private List<MetadataExt> GetList(IEnumerable<Metadata> list) {
            List<MetadataExt> list2 = new List<MetadataExt>();
            for (int i = 0; i < list.Count(); i++) {
                Metadata oldobj= list.ElementAt(i);
                MetadataExt newobj = new MetadataExt();
                newobj.id = oldobj.id;
                newobj.color = oldobj.color;
                newobj.description = oldobj.description;
                newobj.intValue = oldobj.intValue;
                newobj.stringValue = oldobj.stringValue;
                newobj.unavailable = oldobj.unavailable;
                newobj.unavailable_str = oldobj.unavailable == true ? "yes" : "no";
                newobj.unavailable_checked = oldobj.unavailable == true ? "checked" : "";
                newobj.discriminator = oldobj.discriminator;
                newobj.areai = oldobj.areai;
                newobj.areas = oldobj.areas;
                list2.Add(newobj);
            }

            return list2;
        }
    }
}