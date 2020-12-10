using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class AgendaParams
    {
        public string CM { get; set; }
        /// <summary>
        /// 查询类型 DAY/WEEK
        /// </summary>
        public string type { get; set; }
        public string FILTER { get; set; }
        /// <summary>
        /// 参与人员ID列表，resource表id
        /// </summary>
        public string WG_IDS { get; set; }
        public string PERM_REQUIRED { get; set; }
        public string focusMillis { get; set; }
        /// <summary>
        /// 时区 如：Asia/Shanghai
        /// </summary>
        public string timeZone { get; set; }

        #region 删除时独有的
        /// <summary>
        /// 当前操作的对象ID
        /// </summary>
        public string ID { get; set; }
        public string startMillis { get; set; }
        #endregion

        /// <summary>
        /// 查询开始时间
        /// </summary>
        public DateTime? fromTime { get; set; }
        /// <summary>
        /// 查询结束时间
        /// </summary>
        public DateTime? toTime { get; set; }
        /// <summary>
        /// 当前登录人的UserID
        /// </summary>
        public string userID { get; set; }
    }
}
