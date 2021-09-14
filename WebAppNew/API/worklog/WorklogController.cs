using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using KTApp.Base;
//using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    public class WorklogController : BaseApiController
    {

        public WorklogController()
        {
        }

        [HttpGet]
        public HttpResponseMessage WorklogAjax(string cm, string FOCUS_MILLIS = "")
        {
            string returnstr = "";
            switch (cm)
            {
                case "LISTWL1DAY":
                    returnstr = "{\"ok\":true,\"worklogs\":[],\"workable\":28800000}";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"loginOk\":true}";
                    break;
            }

            return new HttpResponseMessage()
            {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
    }
}
