using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IAgendaRepository
    {
        IEnumerable<Agenda> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount);
        IEnumerable<AgendaView> GetList(int userid, string filter);
        IEnumerable<AgendaView> GetList(AgendaParams agendaParams);
        Agenda GetDetail(string id);
        Agenda Insert(Agenda obj);
        int Update(Agenda obj);
        int Delete(Agenda obj);

        IEnumerable<AgendaTarget> GetTargetsList(int agendaid);

        ScheduleView GetSchedule(int? scheduleid);

        IntID Maxid();
        IEnumerable<KTResource> GetResourceList(string[] resIds);
    }
}
