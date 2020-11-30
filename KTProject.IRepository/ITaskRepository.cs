using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface ITaskRepository
    {
        IEnumerable<KTTask> GetList(int userid, int pageIndex, int pageSize, ref int totalCount);
        KTTask GetDetail(int id);
    }
}
