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
using KTProject.Common;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
//using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace KTApp.Controllers
{
    public class WorkgroupController : BaseApiController
    {

        public WorkgroupController() {
        }

        [HttpGet]
        public HttpResponseMessage WGAjax() {
            IEnumerable<KeyValuePair<string, string>> queryString = Request.GetQueryNameValuePairs();
            WorkgroupParams workgroupParams = KTUtils.GetObjectFromRequest<WorkgroupParams>(queryString);
            IResourceService resourceService = new ResourceService();
            string returnstr = "";
            switch (workgroupParams.CM.ToUpper()) {
                case "WGSRCPEOPLE":
                    IEnumerable<KTResourceSimpleView> list = resourceService.GetList(workgroupParams);
                    List<KTResourceSimpleView> listNew = GetNewList(list);
                    var obj = new { ok = true, resources = listNew }; 
                    returnstr = JsonConvert.SerializeObject(obj);
                    break;
                case "LISTWL1DAY":
                    returnstr = "{\"ok\":true,\"worklogs\":[],\"workable\":28800000}";
                    break;
                default:
                    returnstr = "{\"ok\":true,\"loginOk\":true}";
                    break;
            }

            return new HttpResponseMessage() {
                Content = new StringContent(returnstr, Encoding.UTF8, "application/json"),
            };
        }
        /// <summary>
        /// 头像字段处理
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        private List<KTResourceSimpleView> GetNewList(IEnumerable<KTResourceSimpleView> list) {
            List<KTResourceSimpleView> listNew = new List<KTResourceSimpleView>();
            for (int i = 0; i < list.Count(); i++) {
                KTResourceSimpleView resource = list.ElementAt(i);
                resource.avatarUrl = KTUtils.GetAvatar2(resource);
                listNew.Add(resource);
            }
            return listNew;
        }
    }
}
