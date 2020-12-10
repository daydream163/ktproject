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
        IEnumerable<KTResource> GetList(int orgid, string filter, int pageIndex, int pageSize, ref int totalCount);
        KTResource GetDetail(int id);

        KTResource Insert(KTResource obj);
        int Update(KTResource obj);
        int Delete(KTResource obj);

        IntID Maxid();
        KTResource GetDetailByUserid(int id);
        IEnumerable<KTResourceSimpleView> GetList(WorkgroupParams workgroupParams);
        IEnumerable<KTResource> GetList2(WorkgroupParams workgroupParams);
    }
}
