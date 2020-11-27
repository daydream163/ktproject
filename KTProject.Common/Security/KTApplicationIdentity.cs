using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common.Security
{
    public class KTApplicationIdentity : IIdentity
    {
        public KTApplicationIdentity() { }

        public string Token { get; set; }
        public IList<string> Roles { get; set; }

        public string FromToken { get; set; }
        public string FromName { get; set; }
        public string FromCode { get; set; }
        public string Extended { get; set; }
        public DateTime LastLoginTime { get; set; }
        public DateTime TokenExpireTime { get; set; }
        public DateTime ExpireDate { get; set; }
        public DateTime CreateTime { get; set; }
        public string IdNo { get; set; }
        public string IdType { get; set; }
        public string Email { get; set; }
        public bool IsAuthenticated { get; set; }
        public string WeChat { get; set; }
        public string Mobile { get; set; }
        public string Tel { get; set; }
        public string Position { get; set; }
        public string RealName { get; set; }
        public string NickName { get; set; }
        public string OrgName { get; set; }
        public string OrgCode { get; set; }
        public string OrgId { get; set; }
        public string Logo { get; set; }
        public string Name { get; set; }
        public string Id { get; set; }
        public string QQ { get; set; }
        public string AuthenticationType { get; }
    }
}
