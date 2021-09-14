using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
//using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginCLientController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public LoginCLientController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        /*[HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }*/

        /*[HttpGet]
        public IEnumerable<WeatherForecast> Get(int count)
        {
            var rng = new Random();
            return Enumerable.Range(1, count).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }*/

        [HttpGet]
        public IActionResult Post(string cm = "")
        {
            //string command = "";
            string returnstr = "";
            switch (cm.ToUpper())
            {
                case "LI":
                    returnstr = "{\"ok\":true,\"loginOk\":true,\"user\":{\"id\":6636,\"lastModifier\":\"史 玉平\",\"lastModified\":1590656478690,\"creationDate\":1589627879000,\"loginName\":\"215396052@qq.com\",\"enabled\":true,\"hidden\":false,\"administrator\":false,\"lastLoggedOn\":1590656478690,\"person\":{\"id\":\"12771\",\"lastModifier\":\"史玉平 shi\",\"lastModified\":1589869011000,\"creationDate\":1589793479000,\"area\":\"同方知网\",\"areaId\":4957,\"displayName\":\"史 玉平\",\"loadComplete\":false,\"ads_id\":10791,\"location\":\"office\",\"address\":\"北京市海淀区西小口路\",\"city\":\"北京市\",\"province\":\"昌平区\",\"country\":\"汉\",\"zip\":\"\",\"url\":\"\",\"email\":\"215396052@qq.com\",\"mobile\":\"18500851205\",\"fax\":\"\",\"telephone\":\"\",\"avatarUrl\":\"/img/svgAvatar?code=%E7%8E%89%E5%8F%B2&fill=hsl%28240%2C70%25%2C80%25%29&stroke=hsl%28240%2C90%25%2C20%25%29\",\"resConnectionStatus\":\"\",\"name\":\"史\",\"surname\":\"玉平\",\"courtesyTitle\":\"\"},\"canCreateProject\":true,\"canCreateIssue\":true,\"canCreateResource\":true}}";
                    break;
                case "TST":
                    returnstr = "{\"ok\":true,\"loginOk\":true}";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"loginOk\":true}";
                    break;
            }

            return Content(returnstr, "application/json", Encoding.UTF8);
        }
    }
}
