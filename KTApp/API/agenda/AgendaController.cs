using KTApp.Base;
using KTProject.Common;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;

namespace KTApp.Controllers
{
    public class AgendaController : BaseApiController
    {
        public AgendaController()
        {
        }

        [HttpGet]
        public HttpResponseMessage AgendaAjax(string cm = "GETEVENTS", string type = "WEEK")
        {
            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/agendaAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}.{1}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, cm, type));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return new HtmlResult(returnstr);
        }
    }
}
