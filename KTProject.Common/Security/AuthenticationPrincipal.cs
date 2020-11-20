using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common.Security
{
    public class AuthenticationPrincipal : IPrincipal
    {
        public IIdentity Identity { get; }
        private IList<string> _roles;

        public AuthenticationPrincipal(KTApplicationIdentity identity) {
            this.Identity = identity;
            _roles = identity.Roles;
        }

        public bool IsInRole(string role) {
            return _roles.Contains(role);
        }
    }
}
