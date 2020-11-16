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
    public class wp_issueSummaryByCustomerController : BaseApiController
    {
        private readonly ILogger<wp_issueSummaryByCustomerController> _logger;

        public wp_issueSummaryByCustomerController(ILogger<wp_issueSummaryByCustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            string returnstr = "";
            string page = "wp_issueSummaryByCustomer";

            XmlDocument doc = new XmlDocument();
            doc.Load(Environment.CurrentDirectory + "/xml/portal.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, page));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return Content(returnstr, "text/html", Encoding.UTF8);
        }
/*        [HttpGet]
        public IActionResult Get(string id, string filter = "")
        {
            //string command = "";
            string returnstr = "";
            switch (id.ToUpper())
            {
                case "TASK_TYPE":
                    returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal trSel scTr\" id=\"ROW_1\" selectText=\"省级项目\" selectValue=\"38747\"><td class=\"\">省级项目</td><td class=\"textSmall\">省级项目</td></tr><tr class=\"trNormal scTr\" id=\"ROW_2\" selectText=\"产品设计\" selectValue=\"38688\"><td class=\"\">产品设计</td><td class=\"textSmall\">产品设计</td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"需求调研\" selectValue=\"38687\"><td class=\"\">需求调研</td><td class=\"textSmall\">需求调研</td></tr></table>";
                    break;
                default:
                    returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal trSel scTr\" id=\"ROW_1\" selectText=\"省级项目\" selectValue=\"38747\"><td class=\"\">省级项目</td><td class=\"textSmall\">省级项目</td></tr><tr class=\"trNormal scTr\" id=\"ROW_2\" selectText=\"产品设计\" selectValue=\"38688\"><td class=\"\">产品设计</td><td class=\"textSmall\">产品设计</td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"需求调研\" selectValue=\"38687\"><td class=\"\">需求调研</td><td class=\"textSmall\">需求调研</td></tr></table>";
                    break;
            }

            return Content(returnstr, "text/html", Encoding.UTF8);
        }
*/    }
}
