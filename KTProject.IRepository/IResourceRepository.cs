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
        /// <summary>
        /// 资源分页查询
        /// </summary>
        /// <param name="orgid"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <param name="totalCount"></param>
        /// <returns></returns>
        IEnumerable<KTResource> GetList(int orgid, string filter, int pageIndex, int pageSize, ref int totalCount);
        KTResource GetDetail(int id);
        KTResource Insert(KTResource obj);
        int Update(KTResource obj);
        int Delete(KTResource obj);

        IntID Maxid();
        KTResource GetDetailByUserid(int userid);
        IEnumerable<KTResourceSimpleView> GetList(WorkgroupParams workgroupParams);
        IEnumerable<KTResource> GetList2(WorkgroupParams workgroupParams);
    }
}
