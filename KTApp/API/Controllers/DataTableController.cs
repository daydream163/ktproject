using KTApp.Base;
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
        public HttpResponseMessage DataTableAjax(string cm, string DATA_TBL_ID)
        {
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/dataTableAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string nodeid = DATA_TBL_ID;
            int totalCount = 0;
            int pageindex = 0;
            int pagesize = 10;

            if (cm.ToLower() == "fn") {
                node = doc.SelectSingleNode(string.Format(xmlPath, nodeid));

                switch (nodeid) {
                    case "ISSUEFILTER":
                        if (node != null) {
                            IEnumerable<IssueExt> list = issueService.GetList(this.UserID, pageindex, pagesize, ref totalCount);
                            returnstr = KTList.GetDataList<IssueExt>(node, pageindex, pagesize, list);
                        }
                        break;
                    case "RESLST":
                        if (node != null) {
                            IEnumerable<KTResource> list = resourceService.GetList(0, pageindex, pagesize, ref totalCount);
                            returnstr = KTList.GetDataList<KTResource>(node, pageindex, pagesize, list);
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
            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };

        }
    }
}