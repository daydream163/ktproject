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
    public class AdminAjaxController : BaseApiController
    {
        public AdminAjaxController() {
        }

        public class AdminAjaxParams
        {
            public string CM { get; set; }
            public string PID { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage ajaxCustomizationControllerHTML([FromBody]AdminAjaxParams prm) {
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/ajaxCustomizationControllerHTML.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string returnstr = "";
            if (prm.CM == "LOPO") {
                if (!string.IsNullOrWhiteSpace(prm.PID)) {

                    node = doc.SelectSingleNode(string.Format(xmlPath, prm.PID));
                    if (node != null) {
                        returnstr = node.InnerText;
                    }
                }
            }
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

        /*[HttpGet]
        public HttpResponseMessage Get(string id, string filter = "") {
            //string command = "";
            string returnstr = "";
            switch (id.ToUpper()) {
                case "TASK_TYPE":
                    returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal trSel scTr\" id=\"ROW_1\" selectText=\"省级项目\" selectValue=\"38747\"><td class=\"\">省级项目</td><td class=\"textSmall\">省级项目</td></tr><tr class=\"trNormal scTr\" id=\"ROW_2\" selectText=\"产品设计\" selectValue=\"38688\"><td class=\"\">产品设计</td><td class=\"textSmall\">产品设计</td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"需求调研\" selectValue=\"38687\"><td class=\"\">需求调研</td><td class=\"textSmall\">需求调研</td></tr></table>";
                    break;
                default:
                    returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal trSel scTr\" id=\"ROW_1\" selectText=\"省级项目\" selectValue=\"38747\"><td class=\"\">省级项目</td><td class=\"textSmall\">省级项目</td></tr><tr class=\"trNormal scTr\" id=\"ROW_2\" selectText=\"产品设计\" selectValue=\"38688\"><td class=\"\">产品设计</td><td class=\"textSmall\">产品设计</td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"需求调研\" selectValue=\"38687\"><td class=\"\">需求调研</td><td class=\"textSmall\">需求调研</td></tr></table>";
                    break;
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };
        }*/
    }
}
