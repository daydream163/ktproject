using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IAgendaService
    {
        IEnumerable<Agenda> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount);
        IEnumerable<AgendaView> GetList(int userid, string filter);
        IEnumerable<AgendaTarget> GetTargetsList(string agendaid);
        IEnumerable<KTResource> GetResourceList(string[] resIds);
        Agenda GetDetail(string id);
        Agenda Insert(Agenda obj);
        int Update(Agenda obj);
        int Delete(Agenda obj);
        int Delete(AgendaParams obj);
        IntID Maxid();
        IEnumerable<AgendaView> GetList(AgendaParams agendaParams);
    }
}
