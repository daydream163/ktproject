using KTProject.Common;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Repository
{
    public class CommonRepository : MySqlHelper 
    {
        public SqlSugarClient db
        {
            get
            {
                return GetInstance(ConfigSettings.KTProjectConnectionString);
            }
        }

        public DbSet<T> GetDBContext<T>() where T : class, new() {
            return new DbSet<T>(db);
        }

        public T Insert<T>(T obj) where T : class, new() {
            return db.Insertable<T>(obj).ExecuteReturnEntity();
        }

    }
}
