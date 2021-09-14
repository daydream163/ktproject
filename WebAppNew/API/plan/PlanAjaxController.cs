using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
//using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KTApp.Controllers
{
  
    [Route("plan/[controller]")]
    [ApiController]
    public class PlanAjaxController : ControllerBase
    {
        // GET: api/PlanAjax/5
        [HttpGet]
        public IActionResult Get(string cm)
        {
            if (cm == null)
            {
                return Ok("data is null");
            }

            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + "/xml/planAjax.json.xml");
            XmlNode node = null;
            string xmlPath = "/nodes/node[@id=\"{0}\"]";

            string returnstr = "";
            switch (cm)
            {
                case "GETOPLOAD":
                    node = doc.SelectSingleNode(string.Format(xmlPath, "GETOPLOAD"));
                    if (node != null)
                    {
                        returnstr = node.InnerText;
                    }
                    break;
                 default:
                    returnstr = "{\"ok\":true,\"events\":[]}";
                    break;
            }

            return Content(returnstr, "application/json", Encoding.UTF8);
        }

        // POST: api/PlanAjax
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/PlanAjax/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
