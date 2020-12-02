using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IService<T>
    {
        IEnumerable<T> GetList(string orgcode);
        T GetDetail(int id);
        T Insert(T obj);
        int Update(T obj);
        int Delete(T obj);
    }
}

