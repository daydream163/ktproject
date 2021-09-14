using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;
using KTApp.Base;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;

namespace KTApp.API.issue
{
    /*[ApiController]
    [Route("applications/teamwork/messaging/[controller]")]*/
    public class MessagingController : BaseApiController
    {
        IMessageService messageService = new MessageService();

        [HttpGet]
        public HttpResponseMessage MessageList(bool isInPage = false) {
            int totalCount = 0;
            int pageindex = 0;
            int pagesize = 10;
            IEnumerable<Message> list = messageService.GetList(this.UserID, 0, 10, ref totalCount);
            string returnstr = "{\"ok\":true,\"events\":[]}";

            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/message.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            if (isInPage) {
                node = doc.SelectSingleNode(string.Format(xmlPath, "messagelist_page"));
            }
            else {
                node = doc.SelectSingleNode(string.Format(xmlPath, "messagelist"));
            }

            returnstr = KTList.GetDataList<Message>(node, pageindex, pagesize, list);

            if (string.IsNullOrWhiteSpace(returnstr)) {
                returnstr = "{\"ok\":true,\"events\":[]}";
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }

        [HttpGet]
        public HttpResponseMessage messageAjax(string cm) {
            string returnstr = "{\"ok\":true,\"messagesRead\":0}";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/message.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            node = doc.SelectSingleNode(string.Format(xmlPath, "READALL"));

            if (node != null) {
                returnstr = node.InnerText;
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
    }
}