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
        IEnumerable<KTResource> GetList(int orgid, int pageIndex, int pageSize, ref int totalCount);
        KTResource GetDetail(int id);
    }
}
