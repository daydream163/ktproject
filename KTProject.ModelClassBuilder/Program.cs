using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using SqlSugar;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Reflection;

namespace KTProject.ModelClassBuilder
{
    class Program
    {
        static void Main(string[] args) {
            DbContext<object> ctx = new DbContext<object>();

            //string projectDir = Environment.CurrentDirectory;
            //string projectDir2 = Path.GetDirectoryName(Assembly.GetAssembly(typeof(Program)).CodeBase);
            string appPath = Directory.GetCurrentDirectory();
            string startupPath = Directory.GetParent(appPath).Parent.FullName + "\\Model";


            string test = "";

            // 通过上下文对象，将数据库里面的数据表生成到 D:\\Visual Studio\\cms_entity_code 下，所属命名空间为 CM.Models
            ctx.Db.DbFirst.Where(SqlSugar.DbObjectType.Table).CreateClassFile(startupPath, "KTProject.Model");
        }
    }
}
