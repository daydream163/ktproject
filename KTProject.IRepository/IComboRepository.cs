using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IComboRepository
    {
        /// <summary>
        /// 隶属于 下拉列表
        /// </summary>
        /// <returns></returns>
        IEnumerable<ComboData> GetParentIDList(string areaid, string userid, string searchvalue = "");

        /// <summary>
        /// 上级主管列表
        /// </summary>
        /// <returns></returns>
        IEnumerable<ComboData> GetManageList(string areaid, string userid, string searchvalue = "");
        IEnumerable<T> GetTypeList<T>(string areaid, string userid, string searchvalue) where T : class, new();
    }
}
