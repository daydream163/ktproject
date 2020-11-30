using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using KTProject.Model.Model;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class RoleRepository : MySqlHelper, IRoleRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public IEnumerable<UserRoleJoin> GetRolesByUserID(int userid) {

            return db.Queryable<UserRoles, User, Role>((ur, u, r) => new object[] {
                JoinType.Left, ur.@operator == u.id,
                JoinType.Left, ur.rolex == r.id
            })
            .Where((ur, u, r) => ur.@operator == userid)
            .Select((ur, u, r) => new UserRoleJoin {
                roleid = ur.rolex,
                operatorid = ur.@operator,
                rolename = r.name,
                rolecode = r.code,
                permissionids = r.permissionIds,
                loginname = u.loginname,
                name = u.name,
                surname = u.surname

            }).ToList();
        }
    }
}
