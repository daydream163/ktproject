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
    [Route("issue/[controller]")]
    public class issueAjaxControllerJsonController : ControllerBase
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
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/issueAjax.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            node = doc.SelectSingleNode(string.Format(xmlPath, cm));
            if (node != null)
            {
                returnstr = node.InnerText;
            }

            /*            switch (cm)
                        {
                            case "EDIT":
                                node = doc.SelectSingleNode(string.Format(xmlPath, cm));
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
            */
            return Content(returnstr, "application/json", Encoding.UTF8);
        }
    }
}