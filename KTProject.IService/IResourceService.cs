using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IService
{
    public interface IResourceService
    {
        IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount);
        KTResource GetDetail(int id);
    }
}
