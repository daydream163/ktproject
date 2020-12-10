using KTApp.Base;
using KTProject.Common;
using KTProject.Common.HTML;
using KTProject.IService;
using KTProject.Model;
using KTProject.Service;
using Microsoft.Extensions.Logging;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Xml;

namespace KTApp.Controllers
{
    public class AgendaController : BaseApiController
    {
        IAgendaService agendaService = new AgendaService();


        public AgendaController() {
        }

        /*type: 7
        focusMillis: 1607394623134
        FILTER: NONE
        WG_IDS: 15089
        PERM_REQUIRED: TW_res_r
        CM: MICSAVE
        id: -1
        summary: 开个短会
        location: B210
        description: 描述信息
        isPersonal: yes
        isUnavailable: no
        isReminder: yes
        isFullDay: no
        startMillis: 1607397300000
        endMillis: 1607405400000
        */

        [HttpGet]
        public HttpResponseMessage AgendaAjax() {
            IEnumerable<KeyValuePair<string, string>> queryString = Request.GetQueryNameValuePairs();
            AgendaParams agendaParams = KTUtils.GetObjectFromRequest<AgendaParams>(queryString);
            if (agendaParams.CM.ToUpper() == "MICSAVE") {
                Schedule schedule = KTUtils.GetObjectFromRequest<Schedule>(queryString);
                schedule.discriminator = "P";
                schedule.startTime = schedule.startMillis.TimeOfDay.TotalMilliseconds.ObjToInt();
                schedule.duration = schedule.endMillis.Subtract(schedule.startMillis).TotalMilliseconds;

                IScheduleService scheduleService = new ScheduleService();
                Schedule resultS = scheduleService.Insert(schedule);

                // 保存
                string id = agendaService.Maxid().id.ToString();
                Agenda agenda = KTUtils.GetObjectFromRequest<Agenda>(queryString);
                agenda.id = id;
                agenda.typeid = agenda.type.ObjToInt();
                agenda.authorid = this.UserID.ToString();
                agenda.creator = this.UserInfo.UserName;
                agenda.lastModifier = this.UserInfo.UserName;
                agenda.creationDate = DateTime.Now;
                agenda.lastModified = DateTime.Now;
                agenda.icalId = "TW_" + id;
                agenda.exceptions = string.Empty;
                agenda.scheduleid = resultS.scheduleid;
                Agenda result = agendaService.Insert(agenda);

                // 写入关联人员
                List<AgendaTarget> listTar = new List<AgendaTarget>();
                string[] ids = (agendaParams.WG_IDS ?? "").Split(',');
                for (int i = 0; i < ids.Length; i++) {
                    listTar.Add(new AgendaTarget { agendaid = result.id, resid = ids[i] });
                }

                if (listTar.Count > 0) {
                    IAgendaTargetService agendaTargetService = new AgendaTargetService();
                    agendaTargetService.Insert(listTar);
                }

                // 查询
                string returnstr = GetAgendaList(agendaParams);
                return new JsonResult(returnstr);
            }
            else if (agendaParams.CM.ToUpper() == "GETEVENTS") {
                // 查询
                agendaParams.userID = this.UserID.ToString();

                // 时间范围计算
                string returnstr = GetAgendaList(agendaParams);
                return new JsonResult(returnstr);
            }
            else if(agendaParams.CM.ToUpper() == "DELEV") {
                // 删除
                agendaService.Delete(agendaParams);

                string returnstr = GetAgendaList(agendaParams);
                return new JsonResult(returnstr);
            }
            else {
                var obj = new { ok = true, events = "" };
                string returnstr = Newtonsoft.Json.JsonConvert.SerializeObject(obj);
                return new JsonResult(returnstr);
            }
        }

        private string GetAgendaList(AgendaParams agendaParams) {
            DateTime focusTime = agendaParams.focusMillis == null ? DateTime.Now : KTDateTime.ConvertIntDateTime(Convert.ToDouble(agendaParams.focusMillis));
            TimeRangeEnum timeRangeEnum = (TimeRangeEnum)Enum.Parse(typeof(TimeRangeEnum), agendaParams.type.ToUpper());
            DateTime[] arrTimes = KTDateTime.GetTimeRange(timeRangeEnum, focusTime);
            agendaParams.fromTime = arrTimes[0];
            agendaParams.toTime = arrTimes[1];

            IEnumerable<AgendaView> list = agendaService.GetList(agendaParams);
            XmlDocument doc = new XmlDocument();
            var obj = new { ok = true, events = list };
            string returnstr = Newtonsoft.Json.JsonConvert.SerializeObject(obj);
            return returnstr;
        }
    }
}
