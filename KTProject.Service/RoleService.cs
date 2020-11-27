using KTProject.IRepository;
using KTProject.IService;
using KTProject.Model;
using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Service
{
    public class RoleService: IRoleService
    {
        private IRoleRepository roleRepository = new RoleRepository();

        public IEnumerable<UserRoleJoin> GetRolesByUserID(int userid) {

            var list = roleRepository.GetRolesByUserID(userid);
            return list;
        }
    }
}
