using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class UserDetail : User
    {
        // 扩展operrator表
        public string Roles { get; set; }
        public string myPhoto { get; set; }
        public string fullname { get; set; }
        public string accesstoken { get; set; }
        public string UserIp { get; set; }
        public string HostIp { get; set; }
        public string OrgId { get; set; }
        public string NickName { get; set; }
        public string DeptId { get; set; }
        public string DeptCode { get; set; }
        public string DeptName { get; set; }
    }
}
