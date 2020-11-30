using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class UserModel
    {
        public int id { get; set; }
        /// <summary>
        /// 登录后的token
        /// </summary>
        public string token { get; set; }
        /// <summary>
        /// guid字符串userid
        /// </summary>
        public string userid { get; set; }
        /// <summary>
        /// 登录名
        /// </summary>
        public string username { get; set; }
        /// <summary>
        /// 真实姓名
        /// </summary>
        public string realname { get; set; }
        /// <summary>
        /// 所属机构id，如:qinghua
        /// </summary>
        public string orgcode { get; set; }
    }
}
