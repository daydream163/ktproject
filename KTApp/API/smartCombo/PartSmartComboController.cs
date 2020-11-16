using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
//using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KTApp.Controllers
{
    public class PartSmartComboPramam
    {
        string id;
        string filter;
        string hiddenValue;
    }

    [ApiController]
    [Route("commons/layout/smartCombo/[controller]")]
    public class PartSmartComboController : ControllerBase
    {
        private readonly ILogger<PartSmartComboController> _logger;

        public PartSmartComboController(ILogger<PartSmartComboController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromForm]string id, [FromForm]string filter = "", [FromForm]string hiddenValue = "")
        {
            if (id == null)
            {
                return Ok("data is null");
            }

            string returnstr = "";
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/partSmartCombo.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";
            switch (id)
            {
                case "TASK_TYPE":
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "ASSIGNEE":
                    //returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal trHl trSel scTr\" id=\"ROW_1\" selectText=\"玉平 史\" selectValue=\"12771\"><td class=\"\">玉平 史</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal trHl  scTr\" id=\"ROW_2\" selectText=\"轼 苏\" selectValue=\"12805\"><td class=\"\">轼 苏</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"产品部\" selectValue=\"12799\"><td class=\"\">产品部</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_4\" selectText=\"小AA 小A\" selectValue=\"12773\"><td class=\"\">小AA 小A</td><td class=\"textSmall\"> </td></tr><tr class=\"trNormal scTr\" id=\"ROW_5\" selectText=\"小BB 小B\" selectValue=\"12774\"><td class=\"\">小BB 小B</td><td class=\"textSmall\"> </td></tr><tr class=\"trNormal scTr\" id=\"ROW_6\" selectText=\"方方之网\" selectValue=\"12772\"><td class=\"\">方方之网</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_7\" selectText=\"测试部\" selectValue=\"12802\"><td class=\"\">测试部</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_8\" selectText=\"甫 杜\" selectValue=\"12804\"><td class=\"\">甫 杜</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_9\" selectText=\"白 李\" selectValue=\"12803\"><td class=\"\">白 李</td><td class=\"textSmall\"></td></tr><tr class=\"trNormal scTr\" id=\"ROW_10\" selectText=\"研发部\" selectValue=\"12798\"><td class=\"\">研发部</td><td class=\"textSmall\"></td></tr></table>";
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "ISSUE_TASK":
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "expClassification":
                    returnstr = "<table width=\"100 % \" border=\"0\" class=\"comboTable \" style=\"cursor: pointer\"><tr class=\"trNormal scTr\" id=\"ROW_1\" selectText=\"Esterni\" selectValue=\"37031\"><td class=\"\"> Esterni</td></tr><tr class=\"trNormal scTr\" id=\"ROW_2\" selectText=\"Soci\" selectValue=\"37032\"><td class=\"\"> Soci</td></tr><tr class=\"trNormal scTr\" id=\"ROW_3\" selectText=\"ATTR COSTO ATTREZZATURA\" selectValue=\"37272\"><td class=\"\">ATTR COSTO ATTREZZATURA</td></tr><tr class=\"trNormal scTr\" id=\"ROW_4\" selectText=\"BO Back Office\" selectValue=\"37405\"><td class=\"\">BO Back Office</td></tr><tr class=\"trNormal scTr\" id=\"ROW_5\" selectText=\"CAR Auto propria\" selectValue=\"29674\"><td class=\"\">CAR Auto propria</td></tr><tr class=\"trNormal scTr\" id=\"ROW_6\" selectText=\"CARS Auto Sharing\" selectValue=\"29675\"><td class=\"\">CARS Auto Sharing</td></tr><tr class=\"trNormal scTr\" id=\"ROW_7\" selectText=\"HOT Hotel\" selectValue=\"29673\"><td class=\"\">HOT Hotel</td></tr><tr class=\"trNormal scTr\" id=\"ROW_8\" selectText=\"INE Incarico ad esterni\" selectValue=\"38871\"><td class=\"\">INE Incarico ad esterni</td></tr><tr class=\"trNormal scTr\" id=\"ROW_9\" selectText=\"LNZ Licenza software\" selectValue=\"37150\"><td class=\"\">LNZ Licenza software</td></tr><tr class=\"trNormal scTr\" id=\"ROW_10\" selectText=\"MAC Manutenzione\" selectValue=\"37507\"><td class=\"\">MAC Manutenzione</td></tr><tr class=\"trNormal scTr\" id=\"ROW_11\" selectText=\"MDL Modulo/ Estensione\" selectValue=\"37149\"><td class=\"\">MDL Modulo/Estensione</td></tr><tr class=\"trNormal scTr\" id=\"ROW_12\" selectText=\"MEV Sviluppo\" selectValue=\"37506\"><td class=\"\">MEV Sviluppo</td></tr><tr class=\"trNormal scTr\" id=\"ROW_13\" selectText=\"MP COSTO MATERIA PRIMA\" selectValue=\"37273\"><td class=\"\">MP COSTO MATERIA PRIMA</td></tr><tr class=\"trNormal scTr\" id=\"ROW_14\" selectText=\"OS On site\" selectValue=\"37406\"><td class=\"\">OS On site</td></tr><tr class=\"trNormal scTr\" id=\"ROW_15\" selectText=\"SKL esterni\" selectValue=\"35864\"><td class=\"\">SKL esterni</td></tr><tr class=\"trNormal scTr\" id=\"ROW_16\" selectText=\"SPT Spese di cantiere\" selectValue=\"37496\"><td class=\"\">SPT Spese di cantiere</td></tr><tr class=\"trNormal scTr\" id=\"ROW_17\" selectText=\"STY Stay\" selectValue=\"7\"><td class=\"\">STY Stay</td></tr><tr class=\"trNormal scTr\" id=\"ROW_18\" selectText=\"TPL Template\" selectValue=\"37148\"><td class=\"\">TPL Template</td></tr><tr class=\"trNormal scTr\" id=\"ROW_19\" selectText=\"TRL Stima\" selectValue=\"36865\"><td class=\"\">TRL Stima</td></tr><tr class=\"trNormal scTr\" id=\"ROW_20\" selectText=\"TRL Travel/ Stay\" selectValue=\"39169\"><td class=\"\">TRL Travel/Stay</td></tr><tr class=\"unselectable\" style=\"cursor: default\"><td colspan=\"90\"><i>...显示 20 结果</i></td></tr><tr class=\"unselectable\" class=\"addEntityLine\"><td colspan=\"90\"><button type=\"button\" class=\"button noprint textual   \"  id=\"domId_1603075024\" style=\"\"   onclick=\"openBlackPopup('/applications/teamwork/task/costClassification.jsp?V_ID=253469575&CM=FN', '800px', '600px'); return false; \" >添加</button></td></tr></table>";
                    break;
                case "roleId":
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "resourceId":
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                case "PANIC_TASK":
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                default:
                    node = doc.SelectSingleNode(string.Format(xmlPath, id));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
            }

            return Content(returnstr, "text/html", Encoding.UTF8);
        }
        [HttpGet]
        public IActionResult Get(string id, string filter = "")
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

            return Content(returnstr, "text/html", Encoding.UTF8);
        }
    }
}
