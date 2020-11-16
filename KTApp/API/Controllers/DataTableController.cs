using KTApp.Base;
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
        [HttpGet]
        public HttpResponseMessage DataTableAjax(string cm, string DATA_TBL_ID)
        {
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/dataTableAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string nodeid = DATA_TBL_ID;

            switch (cm)
            {
                case "FN":
                    node = doc.SelectSingleNode(string.Format(xmlPath, nodeid));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "GETTASKISS":
                    returnstr = "";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"events\":[]}";
                    break;
            }
            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "text/html"),
            };

        }
    }
}