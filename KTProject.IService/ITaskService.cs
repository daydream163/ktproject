using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface ITaskService
    {
        IEnumerable<KTTask> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount);
        KTTask GetDetail(int id);
    }
}
