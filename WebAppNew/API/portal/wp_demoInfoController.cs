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
    [Route("portal/[controller]")]
    public class wp_demoInfoController : BaseApiController
    {
        private readonly ILogger<wp_demoInfoController> _logger;

        public wp_demoInfoController(ILogger<wp_demoInfoController> logger)
        {
            _logger = logger;
        }

        //[HttpGet]
        //public IActionResult Get()
        //{
        //    string returnstr = "";
        //    string page = "wp_demoInfo";

        //    XmlDocument doc = new XmlDocument();
        //    doc.Load(Environment.CurrentDirectory + "/xml/portal.xml");
        //    XmlNode node = null;
        //    string xmlPath = "/nodes/node[@id=\"{0}\"]";
        //    node = doc.SelectSingleNode(string.Format(xmlPath, page));
        //    if (node != null)
        //    {
        //        returnstr = node.InnerText;
        //    }
        //    return Content(returnstr, "text/html", Encoding.UTF8);
        //}
    }
}
