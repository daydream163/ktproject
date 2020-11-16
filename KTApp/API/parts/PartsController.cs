using KTApp.Base;
using KTProject.Common;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Xml;

namespace KTApp.Controllers
{
    public class PartsController : BaseApiController
    {
        public PartsController()
        {
        }

        public class HeadLineParams
        {
            public string CM { get; set; }
        }


        [System.Web.Http.HttpPost]
        public HttpResponseMessage PartWPHeadline([System.Web.Http.FromBody] HeadLineParams prm)
        {
            if (prm.CM == null)
            {
                return new HtmlResult("");
            }

            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partWPHeadline.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, prm.CM));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return new HtmlResult(returnstr);
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage PartWPHeadline(string cm)
        {
            if (cm == null)
            {
                return new HtmlResult("");
            }

            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partWPHeadline.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, cm));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return new HtmlResult(returnstr);
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage partIssueNotes()
        {
            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partIssueNotes.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, "partIssueNotes"));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return new HtmlResult(returnstr);
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage partIssuePortletSupport()
        {
            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partIssuePortletSupport.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            node = doc.SelectSingleNode(string.Format(xmlPath, "partIssuePortletSupport"));
            if (node != null)
            {
                returnstr = node.InnerText;
            }
            return new HtmlResult(returnstr);
        }


        [System.Web.Http.HttpGet]
        public HttpResponseMessage Get(string id, string filter = "")
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

            return new HtmlResult(returnstr);
        }
    }
}
