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
    [Route("mobile/[controller]")]
    public class SessionRefreshController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public SessionRefreshController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(string cm = "")
        {
            //string command = "";
            string returnstr = "</ td >< td >< input type = text name = \"taskId_txt\" id = \"taskId_txt\" size = 40 class=\"formElements smartCombo\" autocomplete='off' maxlength=255  autocomplete=\"off\" onfocus=\"createDropDown($(this),400,100); refreshDropDown ($(this).nextAll('.cbDropDown'),$(this)); setSelection(this,0,1024)\" onblur=\"finalizeOperation($(this).nextAll('.cbDropDown:first'),false,false );\" onKeyDown=\"manageKeyEvent ($(this),event,false,false);\" onKeyPress=\"stopKeyEvent(event);\" value=\"\" ><span class=\"teamworkIcon menuArrow\"  style='cursor:pointer; margin-left: -15px' onClick=\"if ( $(this).prevAll('.cbDropDown:first').size()<=0) {$(this).prevAll('input:text:first').focus();} \" style=\"\">&ugrave;</span><input type = hidden name=\"taskId\" id=\"taskId\" size=10 class=\"formElements\" autocomplete='off' maxlength=255  jspPart='partSmartCombo' value=\"\" oldValue='1' >&nbsp;<input type = text name=\"expAssId_txt\" id=\"expAssId_txt\" size=0 class=\"formElements smartCombo\" autocomplete='off' maxlength=255  autocomplete=\"off\" onfocus=\"createDropDown($(this),400,100); refreshDropDown ($(this).nextAll('.cbDropDown'),$(this)); setSelection(this,0,1024)\" onblur=\"finalizeOperation($(this).nextAll('.cbDropDown:first'),false,false );\" onKeyDown=\"manageKeyEvent ($(this),event,false,false);\" onKeyPress=\"stopKeyEvent(event);\" value=\"\" ><span class=\"teamworkIcon menuArrow\"  style='cursor:pointer; margin-left: -15px' onClick=\"if ( $(this).prevAll('.cbDropDown:first').size()<=0) {$(this).prevAll('input:text:first').focus();} \" style=\"\">&ugrave;</span><input type = hidden name=\"expAssId\" id=\"expAssId\" size=10 class=\"formElements\" autocomplete='off' maxlength=255  jspPart='partSmartCombo' value=\"\" oldValue='1' ></td><td><input type = text name=\"expClassification_txt\" id=\"expClassification_txt\" size=25 class=\"formElements smartCombo\" autocomplete='off' maxlength=255  autocomplete=\"off\" onfocus=\"createDropDown($(this),400,100); refreshDropDown ($(this).nextAll('.cbDropDown'),$(this)); setSelection(this,0,1024)\" onblur=\"finalizeOperation($(this).nextAll('.cbDropDown:first'),false,false );\" onKeyDown=\"manageKeyEvent ($(this),event,false,false);\" onKeyPress=\"stopKeyEvent(event);\" value=\"\" ><span class=\"teamworkIcon menuArrow\"  style='cursor:pointer; margin-left: -15px' onClick=\"if ( $(this).prevAll('.cbDropDown:first').size()<=0) {$(this).prevAll('input:text:first').focus();} \" style=\"\">&ugrave;</span><input type = hidden name=\"expClassification\" id=\"expClassification\" size=10 class=\"formElements\" autocomplete='off' maxlength=255  jspPart='partSmartCombo' value=\"\" oldValue='1' >&nbsp;<input type = text name=\"wlAssId_txt\" id=\"wlAssId_txt\" size=0 class=\"formElements smartCombo\" autocomplete='off' maxlength=255  autocomplete=\"off\" onfocus=\"createDropDown($(this),400,100); refreshDropDown ($(this).nextAll('.cbDropDown'),$(this)); setSelection(this,0,1024)\" onblur=\"finalizeOperation($(this).nextAll('.cbDropDown:first'),false,false );\" onKeyDown=\"manageKeyEvent ($(this),event,false,false);\" onKeyPress=\"stopKeyEvent(event);\" value=\"\" ><span class=\"teamworkIcon menuArrow\"  style='cursor:pointer; margin-left: -15px' onClick=\"if ( $(this).prevAll('.cbDropDown:first').size()<=0) {$(this).prevAll('input:text:first').focus();} \" style=\"\">&ugrave;</span><input type = hidden name=\"wlAssId\" id=\"wlAssId\" size=10 class=\"formElements\" autocomplete='off' maxlength=255  jspPart='partSmartCombo' value=\"\" oldValue='1' >";
            /*switch (cm.ToUpper())
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
            }*/

            return Content(returnstr, "text/html", Encoding.UTF8);
        }
    }
}
