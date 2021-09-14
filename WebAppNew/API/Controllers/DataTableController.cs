using KTApp.Base;
using KTProject.Common;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;

namespace KTApp.API.issue
{
    public class DataTableController : BaseApiController
    {
        IIssueService issueService = new IssueService();
        IResourceService resourceService = new ResourceService();
        ITaskService taskService = new TaskService();

        [HttpGet]
        public HttpResponseMessage DataTableAjax(string cm, string data_tbl_id, int? _fp_pg_n = 0, int? _fp_pg_s = 10, string name_surname = "") {
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/dataTableAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string nodeid = data_tbl_id;
            int totalCount = 0;
            int pageindex = _fp_pg_n ?? 1;
            if (pageindex <= 0) {
                pageindex = 1;
            }
            int pagesize = _fp_pg_s ?? 10;
            string filter = name_surname;

            if (cm.ToLower() == "fn") {
                node = doc.SelectSingleNode(string.Format(xmlPath, nodeid));

                switch (nodeid) {
                    case "ISSUEFILTER":
                        if (node != null) {
                            IEnumerable<IssueExt> list = issueService.GetList(this.UserID, pageindex, pagesize, ref totalCount);
                            returnstr = KTList.GetDataList<IssueExt>(node, pageindex, pagesize, list, totalCount);
                        }
                        break;
                    case "RESLST":
                        if (node != null) {
                            IEnumerable<KTResource> list = resourceService.GetList(this.ResourceInfo.area ?? 0, filter, pageindex, pagesize, ref totalCount);
                            if (list != null && list.Count() > 0) {
                                List<KTResourceExt> resourceExt = GetNewList(list);
                                returnstr = KTList.GetDataList<KTResourceExt>(node, pageindex, pagesize, resourceExt, totalCount);
                            }
                        }
                        break;
                    case "TSKLST":
                        if (node != null) {
                            IEnumerable<KTTask> list = taskService.GetList(this.UserID, pageindex, pagesize, ref totalCount);
                            returnstr = KTList.GetDataList<KTTask>(node, pageindex, pagesize, list);
                        }
                        break;
                    case "GETTASKISS":
                        returnstr = "";
                        break;
                    default:
                        returnstr = "{\"ok\":true,\"events\":[]}";
                        break;
                }

            }
            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };

        }

        private List<KTResourceExt> GetNewList(IEnumerable<KTResource> list) {
            List<KTResourceExt> list2 = new List<KTResourceExt>();
            for (int i = 0; i < list.Count(); i++) {
                KTResource issueStatus = list.ElementAt(i);
                KTResourceExt obj = KTUtils.AutoCopy<KTResource, KTResourceExt>(issueStatus);
                obj.myAvatar = KTUtils.GetAvatar(issueStatus);
                list2.Add(obj);
            }

            return list2;
        }

    }
}