using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;
using KTApp.Base;

namespace KTApp.API.issue
{
    /*[ApiController]
    [Route("applications/teamwork/messaging/[controller]")]*/
    public class MessagingController : BaseApiController
    {
        [HttpGet]
        public HttpResponseMessage MessageList(bool isInPage = false)
        {
            string returnstr = "{\"ok\":true,\"events\":[]}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/message.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            if (isInPage)
            {
                node = doc.SelectSingleNode(string.Format(xmlPath, "messagelist_page"));
            }
            else
            {
                node = doc.SelectSingleNode(string.Format(xmlPath, "messagelist"));
            }
            
            if (node != null)
            {
                returnstr = node.InnerText;
            }

            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
    }
}