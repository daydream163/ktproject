using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using KTApp.Base;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    [System.Web.Http.Route("[controller]")]
    public class ImgController : BaseApiController
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ImgController> _logger;

        public ImgController(ILogger<ImgController> logger)
        {
            _logger = logger;
        }

        /*[System.Web.Mvc.HttpGet]
        [System.Web.Http.Route("[action]")]
        public ActionResult SvgAvatar(string code, string fill, string stroke)
        {
            string format = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 500 500\" enable-background=\"new 0 0 500 500\" xml:space=\"preserve\" height=\"500px\" width=\"500px\"><rect width = \"500\" height = \"500\" fill=\"{1}\"/><text x=\"50%\" y=\"50%\" dy=\".3em\" font-family=\"sans-serif\" font-size=\"210px\" text-anchor=\"middle\" fill=\"{2}\" >{0}</text></svg>";

            return new ImageResult(string.Format(format, code, fill, stroke));
        }*/

        
        /// <summary>
        /// 获取头像
        /// </summary>
        /// <param name="id">用户id</param>
        /// <returns></returns>
        /*[System.Web.Http.Route("img/SvgAvatar/{code}")]*/
        [System.Web.Http.HttpGet]
        public HttpResponseMessage SvgAvatar(string code, string rectFill = "03a9f4", string textFill = "ffffff")
        {
            return _userService.GetUserLogo(code, rectFill, textFill);
        }
    }
}
