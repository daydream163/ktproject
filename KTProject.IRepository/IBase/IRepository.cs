using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetList(int userid, int pageIndex, int pageSize, ref int totalCount);
        T GetDetail(int id);
        int Update(T obj);
        T Insert(T obj);
        int Delete(T obj);
    }
}
