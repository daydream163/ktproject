using KTProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Service
{
    public class CommonService 
    {        
        public DbSet<T> GetDBContext<T>() where T : class, new() {
            return new CommonRepository().GetDBContext<T>();
        }
    }
}
