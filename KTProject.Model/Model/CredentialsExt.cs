using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class CredentialsExt : Credentials
    {
        public string myPhoto { get; set; }
        public string fullname { get; set; }
    }
}
