using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.ModelClassBuilder
{
    public class DbContext<T> where T : class, new()
    {
        public DbContext() {
            Db = new SqlSugarClient(new ConnectionConfig() {
                ConnectionString = "server=192.168.50.60;database=ktproject;uid=root;pwd=P@$$W0rd;Pooling=true;Connection Lifetime=120;Connection Timeout=120",
                DbType = DbType.MySql,
                InitKeyType = InitKeyType.Attribute,//从特性读取主键和自增列信息
                IsAutoCloseConnection = true,//开启自动释放模式和EF原理一样我就不多解释了

            });
        }
        //注意：不能写成静态的
        public SqlSugarClient Db;//用来处理事务多表查询和复杂的操作
    }
}
