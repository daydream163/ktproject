using KTProject.Common;
using KTProject.IRepository;
using KTProject.Model;
using MySql.Data.MySqlClient;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class UserRepository : MySqlHelper, IUserRepository
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        /// <summary>
        /// 根据用户名获取用户信息
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public User GetUserByUserName(string userName) {
            return db.Queryable<User>().Where(s => s.loginname == userName).First();
        }

        /// <summary>
        /// 根据用户名获取用户信息
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public UserDetail GetUserDetailByUserName(string userName) {
            return db.Queryable<User, KTResource>((u, r) => new object[] {
                        JoinType.Left, u.id == r.myself
                    }
                ).Where(u => u.loginname == userName).Select((u, r) => new UserDetail {
                    id = u.id,
                    discriminator = u.discriminator,
                    loginname = u.loginname,
                    password = u.password,
                    name = u.name,
                    surname = u.surname,
                    administrator = u.administrator,
                    enabled = u.enabled,
                    myPhoto = r.myPhoto,
                    fullname = r.name
                }).First();
        }

    }
}
