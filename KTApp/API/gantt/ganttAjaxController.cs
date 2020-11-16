using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KTApp.API.issue
{
    [ApiController]
    [Route("task/gantt/[controller]")]
    public class ganttAjaxController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(string cm)
        {
            if (cm == null)
            {
                return Ok("data is null");
            }
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

            return Content(returnstr, "text/html", Encoding.UTF8);
        }
    }
}