using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
//using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    [ApiController]
    [Route("parts/[controller]")]
    public class partIssuePortletSupportController : ControllerBase
    {
        private readonly ILogger<partIssuePortletSupportController> _logger;

        public partIssuePortletSupportController(ILogger<partIssuePortletSupportController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromForm]string cm, [FromForm]string filter = "", [FromForm]string hiddenValue = "")
        {
            if (cm == null)
            {
                return Content("", "text/html", Encoding.UTF8);
            }

            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(Environment.CurrentDirectory + "/xml/partIssuePortletSupport.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, cm));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return Content(returnstr, "text/html", Encoding.UTF8);
        }
        [HttpGet]
        public IActionResult Get()
        {
            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(Environment.CurrentDirectory + "/xml/partIssuePortletSupport.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, "partIssuePortletSupport"));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return Content(returnstr, "text/html", Encoding.UTF8);
        }
    }
}
