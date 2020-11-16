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
    [Route("applications/teamwork/issue/[controller]")]
    public class issueAjaxController : ControllerBase
    {
        [HttpPost]
        public IActionResult Get([FromForm]string cm)
        {
            if (cm == null)
            {
                return Ok("data is null");
            }
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/ajaxdata.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            switch (cm)
            {
                case "EDIT":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "issueAjax.EDIT"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "GETTASKISS":
                    returnstr = "";
                    break;
                case "ADD":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "issueAjax.ADD"));
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