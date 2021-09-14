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
    public class TaskController : BaseApiController
    {
        public TaskController()
        {
        }

        [HttpGet]
        public HttpResponseMessage TaskAjax(string cm)
        {
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/taskAjax.json.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string returnstr = "";
            switch (cm)
            {
                case "GTSKOPPER":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "GTSKOPPER"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "GETHIST":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "gethist"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "GETGANTTHISTPOINTS":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "GETGANTTHISTPOINTS"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                default:
                    returnstr = "{\"ok\":true,\"events\":[]}";
                    break;
            }

            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }

        [HttpGet]
        public HttpResponseMessage GanttAjax(string cm)
        {
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/ganttAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            switch (cm)
            {
                case "LOADPROJECT":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "LOADPROJECT"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                default:
                    returnstr = "{\"ok\":true,\"events\":[]}";
                    break;
            }

            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
    }
}
