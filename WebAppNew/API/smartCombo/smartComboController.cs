using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Xml;
using KTApp.Base;
using KTProject.Common;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;

namespace KTApp.Controllers
{
    public class SmartComboController : BaseApiController
    {
        IComboService service = new ComboService();
        public SmartComboController() {
        }

        public class SmartComboParams
        {
            public string id { get; set; }
            public string filter { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage PartSmartCombo([FromBody]SmartComboParams prm) {
            string returnstr = "<div class=\"paginatorNotFound hint\" style=\"display: block; \">暂无记录</div>";
            XmlNode node = KTList.GetConfigNode("partSmartCombo.xml", prm.id);
            if (node != null) {
                switch (prm.id.ToUpper()) {
                    case "PARENT_ID":
                        IEnumerable<ComboData> parentidlist = service.GetParentIDList(
                            this.ResourceInfo.area.ToString(),
                            this.UserID.ToString(),
                            prm.filter);
                        returnstr = KTList.GetDataList<ComboData>(node, 0, 0, parentidlist);
                        break;
                    case "MANAGER":
                        IEnumerable<ComboData> managelist = service.GetManageList(
                            this.ResourceInfo.area.ToString(),
                            this.UserID.ToString(),
                            prm.filter);
                        returnstr = KTList.GetDataList<ComboData>(node, 0, 0, managelist);
                        break;
                    case "TYPEID":
                        IEnumerable<Metadata> typeidlist = new MetadataService().GetList(
                            "",
                            TypeEnum.EventType.ToString(),
                            prm.filter,
                            null);
                        returnstr = KTList.GetDataList<Metadata>(node, 0, 0, typeidlist);
                        break;
                    default:
                        break;
                }
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };
        }

        [HttpGet]
        public HttpResponseMessage IssueAjaxControllerJson(string cm) {
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/issueAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string returnstr = "";
            node = doc.SelectSingleNode(string.Format(xmlPath, cm));
            if (node != null) {
                returnstr = node.InnerText;
            }
            else {
                returnstr = "";
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };
        }
    }
}
