using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IResourceRepository
    {
        IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount);
        KTResource GetDetail(int id);
    }
}
