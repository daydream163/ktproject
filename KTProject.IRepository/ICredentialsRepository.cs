using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface ICredentialsRepository
    {
        bool Add(Credentials credentials);
        bool KickCredentialsByToken(string token);
        Credentials GetCredentialsByToken(string token);
        bool DisableCredentials(string token);
    }
}
