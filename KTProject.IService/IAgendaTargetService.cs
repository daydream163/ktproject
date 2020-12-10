using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IAgendaTargetService
    {
        IEnumerable<AgendaTarget> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount);
        IEnumerable<AgendaTarget> GetList(int userid, string filter);
        AgendaTarget GetDetail(int id);
        AgendaTarget Insert(AgendaTarget obj);
        bool Insert(List<AgendaTarget> objs);
        int Update(AgendaTarget obj);
        int Delete(AgendaTarget obj);
    }
}
