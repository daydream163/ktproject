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

namespace KTApp.Controllers
{
    public class SmartComboController : BaseApiController
    {
        public SmartComboController() {
        }

        public class SmartComboParams
        {
            public string ID { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage PartSmartCombo([FromBody]SmartComboParams prm) {
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partSmartCombo.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string returnstr = "";
            node = doc.SelectSingleNode(string.Format(xmlPath, prm.ID));
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
