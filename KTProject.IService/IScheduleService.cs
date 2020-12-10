using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IScheduleService
    {
        IEnumerable<Schedule> GetList(int userid, string filter, int pageIndex, int pageSize, ref int totalCount);
        IEnumerable<Schedule> GetList(int userid, string filter);
        Schedule GetDetail(int id);
        Schedule Insert(Schedule obj);
        int Update(Schedule obj);
        int Delete(Schedule obj);
    }
}
