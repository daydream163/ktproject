using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;
using KTApp.Base;
using KTProject.Common;
using KTProject.IService;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    public class PortalController : BaseApiController
    {
        //private IUserService _userService { get; set; }


        public PortalController()
        {
        }

        [HttpGet]
        public HttpResponseMessage wp_activity()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }

        [HttpGet]
        public HttpResponseMessage wp_headline()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }

        [HttpGet]
        public HttpResponseMessage wp_welcome()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_myAssignments()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_myIssues()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_worklogDay()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_teamLoad()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_teamworkActivity()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_panicBoard()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_projectsSummary()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_iframe()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_issueSummary()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_issuesCreatedByMe()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_create_issues()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_links()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_myResponsabilities()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_scrumBurnDown()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_issueSummaryByCustomer()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_demoInfo()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_myAppointments()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_myPlan()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_todo()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_companyNews()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }
        [HttpGet]
        public HttpResponseMessage wp_summaryBar()
        {
            string id = System.Reflection.MethodBase.GetCurrentMethod().Name;
            string html = GetHtmlContent(id);
            return new HtmlResult(html);
        }

        private string GetHtmlContent(string id)
        {
            string returnstr = "";
            if (string.IsNullOrWhiteSpace(id))
            {
                return returnstr;
            }
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/portal.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, id));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return returnstr;
        }
    }
}
