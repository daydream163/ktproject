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
        /*/// <summary>
        /// 获取部门类型列表
        /// </summary>
        /// <param name="orgid">机构id，暂时没用上</param>
        /// <returns></returns>
        IEnumerable<DepartmentType> GetDepartmentTypeList(string orgid);*/
    }
}
