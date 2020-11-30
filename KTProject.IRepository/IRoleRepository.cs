using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.IRepository
{
    public interface IRoleRepository
    {
        IEnumerable<UserRoleJoin> GetRolesByUserID(int userid);
    }
}
