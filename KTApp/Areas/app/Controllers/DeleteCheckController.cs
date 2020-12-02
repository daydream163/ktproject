using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace KTApp.Areas.app.Controllers
{
    public class DeleteCheckController : BaseController
    {
        IMetadataService service = new MetadataService();
        // GET: app/DeleteCheck
        public ContentResult CheckHTML(string cm, string del_prev_id, int objid, string iscallback)
        {
            //{DEL_PREV_ID=OBJ_DEL&OBJID=13&CM=DELETEPREVIEW&ISCALLBACK=yes&_=1606801918899}
            string result = string.Empty;
            if (cm.ToLower() == "deletepreview") {
                // 获取关联关系
                XmlNode node = KTList.GetConfigNode("deletecheck.xml", "deletepreview");
                if (node != null) {
                    string htmlTemplate = node.SelectSingleNode("data").InnerText;
                    var data = new { id = objid, checkresult = "check result"};
                    result = KTList.GetContentByReplace<object>(htmlTemplate, data);
                }
            }

            return Content(result, "text/html", Encoding.UTF8);
        }

        // GET: app/DeleteCheck
        public ContentResult DeleteAjax(string cm, string del_prev_id, int objid)
        {
            string result = string.Empty;
            if (cm.ToUpper() == "DL" && del_prev_id.ToUpper() == "OBJ_DEL") {
                string urlrefer = Request.UrlReferrer.AbsolutePath;
                int count = 0;

                if (urlrefer.EndsWith("issuestatus", StringComparison.OrdinalIgnoreCase)) {
                    // 问题状态，单独的表，单独处理
                    IIssueStatusService issueService = new IssueStatusService();
                    count = issueService.Delete(new IssueStatus { id = objid});
                }
                else if (urlrefer.EndsWith("departmenttype", StringComparison.OrdinalIgnoreCase)) {
                    // 组织类型，单独的表，单独处理
                    IDepartmentTypeService departmentTypeService = new DepartmentTypeService();
                    count = departmentTypeService.Delete(new DepartmentType { id = objid });
                }
                else {
                    count = service.Delete(0, objid);
                }
                if (count > 0) {
                    result = "{\"ok\":true}";
                }
                else {
                    result = "{\"ok\":false,\"messagesFromController\":[{\"type\":\"ERROR\",\"title\":\"出了些问题\",\"message\":\"存在关联数据，无法删除\"}]}";
                }
            }
            return Content("{\"ok\":true}", "application/json", Encoding.UTF8);
        }
    }
}