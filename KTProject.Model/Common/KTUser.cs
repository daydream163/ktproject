using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace KTProject
{
    public class KTUser : IPrincipal
    {
        IIdentity IPrincipal.Identity => throw new NotImplementedException();

        bool IPrincipal.IsInRole(string role)
        {
            throw new NotImplementedException();
        }
    }
}
