using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KTProject.Service
{
    public class AgendaService : IAgendaService
    {
        private IAgendaRepository repository = new AgendaRepository();

        public Agenda GetDetail(string id) {
            return repository.GetDetail(id);
        }

        public IEnumerable<Agenda> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount) {

            var list = repository.GetList(userid, filter, pageIndex, pageSize, ref totalCount);
            return list;
        }
        public IEnumerable<AgendaView> GetList(int userid, string filter) {

            CommonRepository rep = new CommonRepository();
            var dbset = rep.GetDBContext<AgendaTarget>();
            var list = repository.GetList(userid, filter);
            for (int i = 0; i < list.Count(); i++) {
                AgendaView agenda = list.ElementAt(i);
                IEnumerable<AgendaTarget> targets = repository.GetTargetsList(Convert.ToInt32(agenda.id));
                List<AgendaTarget> newTargets = new List<AgendaTarget>();
                for (int j = 0; j < targets.Count(); j++) {
                    var tar = targets.ElementAt(j);
                    if (!string.IsNullOrWhiteSpace(tar.resAvatarUrl)) {
                        //TODO 改成真正的图片地址
                        tar.resAvatarUrl = "https://demo.twproject.com/avatars/015403_9i9nB.jpeg";
                    }
                    else {
                        string resname = tar.resname;
                        if (resname.Length == 2 || resname.Replace(" ", "").Length == 2) {
                            // eg：刘 真，取：刘 真
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(tar.resname.Replace(" ", ""), System.Text.Encoding.UTF8));
                        }
                        else if (resname.Replace(" ", "").Length == 3) {
                            // eg：刘天真，取：天真
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(tar.resname.Replace(" ", "").Substring(1, 2), System.Text.Encoding.UTF8));
                        }
                        else if (resname.IndexOf(" ") > 0) {
                            // eg：Jimmy Smith，取：JM
                            string[] arr = resname.Split(' ');
                            string s = string.Empty;
                            for (int m = 0; m < arr.Length; m++) {
                                s += arr[m].Substring(0, 1);
                            }
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(s, System.Text.Encoding.UTF8));
                        }
                        else {

                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(resname, System.Text.Encoding.UTF8));
                        }
                    }

                    newTargets.Add(tar);
                }
                agenda.targets = newTargets;
                agenda.schedule = repository.GetSchedule(agenda.scheduleid);
                if (agenda.schedule != null) {
                    agenda.schedule.type = "period";
                }
            }
            return list;
        }

        public IEnumerable<AgendaView> GetList(AgendaParams agendaParams) {

            CommonRepository rep = new CommonRepository();
            //var dbset = rep.GetDBContext<AgendaTarget>();

            List<AgendaView> list = (List<AgendaView>)repository.GetList(agendaParams);
            list.ForEach((v)=>v.canManage = (v.authorid == agendaParams.userID));

            for (int i = 0; i < list.Count(); i++) {
                AgendaView agenda = list.ElementAt(i);
                IEnumerable<AgendaTarget> targets = repository.GetTargetsList(Convert.ToInt32(agenda.id));
                List<AgendaTarget> newTargets = new List<AgendaTarget>();
                for (int j = 0; j < targets.Count(); j++) {
                    var tar = targets.ElementAt(j);
                    if (!string.IsNullOrWhiteSpace(tar.resAvatarUrl)) {
                        //TODO 改成真正的图片地址
                        tar.resAvatarUrl = "https://demo.twproject.com/avatars/015403_9i9nB.jpeg";
                    }
                    else {
                        string resname = tar.resname;
                        if (resname.Length == 2 || resname.Replace(" ", "").Length == 2) {
                            // eg：刘 真，取：刘 真
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(tar.resname.Replace(" ", ""), System.Text.Encoding.UTF8));
                        }
                        else if (resname.Replace(" ", "").Length == 3) {
                            // eg：刘天真，取：天真
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(tar.resname.Replace(" ", "").Substring(1, 2), System.Text.Encoding.UTF8));
                        }
                        else if (resname.IndexOf(" ") > 0) {
                            // eg：Jimmy Smith，取：JM
                            string[] arr = resname.Split(' ');
                            string s = string.Empty;
                            for (int m = 0; m < arr.Length; m++) {
                                s += arr[m].Substring(0, 1);
                            }
                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(s, System.Text.Encoding.UTF8));
                        }
                        else {

                            tar.resAvatarUrl = string.Format("/img/svgAvatar?code={0}&fill=hsl%28180%2C70%25%2C80%25%29&stroke=hsl%28180%2C90%25%2C20%25%29"
                                , System.Web.HttpUtility.UrlEncode(resname, System.Text.Encoding.UTF8));
                        }
                    }

                    newTargets.Add(tar);
                }
                agenda.targets = newTargets;
                agenda.schedule = repository.GetSchedule(agenda.scheduleid);
                if (agenda.schedule != null) {
                    agenda.schedule.type = "period";
                }
            }
            return list;
        }
        

        public IEnumerable<AgendaTarget> GetTargetsList(string agendaid) {
            return repository.GetTargetsList(Convert.ToInt32(agendaid));
        }
        public IEnumerable<KTResource> GetResourceList(string[] resIds) {
            return repository.GetResourceList(resIds);
        }

        public Agenda Insert(Agenda metadata) {
            return repository.Insert(metadata);
        }

        public int Update(Agenda metadata) {
            return repository.Update(metadata);
        }
        public int Delete(Agenda obj) {
            return repository.Delete(obj);
        }
        public int Delete(AgendaParams obj) {
            CommonService commonService = new CommonService();
            Agenda agenda = GetDetail(obj.ID);
            // 删除Schedule任务计划
            commonService.GetDBContext<Schedule>().DeleteById(agenda.id);
            // 删除AgendaTarget 成员
            commonService.GetDBContext<AgendaTarget>().Delete((t) => t.agendaid == obj.ID);

            return repository.Delete(agenda);
        }
        public IntID Maxid() {
            return repository.Maxid();
        }
    }
}
