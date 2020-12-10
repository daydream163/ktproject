using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IMetadataRepository
    {
        /// <summary>
        /// 获取指定类型列表
        /// </summary>
        /// <param name="orgid">机构code</param>
        /// <param name="type">类型字符串</param>
        /// <param name="areaids">域id列表</param>
        /// <returns></returns>
        IEnumerable<Metadata> GetList(string orgcode, string type, int[] areaids);
        IEnumerable<Metadata> GetList(string orgid, string type, string filter, int[] areaids);
        Metadata GetDetail(int id);
        Metadata Insert(Metadata metadata);
        int Update(Metadata metadata);
        int Delete(int areaid, int id);
    }
}
