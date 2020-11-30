using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model.Model
{
    [SugarTable("olpl_op_roles")]
    public class UserRoles
    {
        [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
        public int id { get; set; }
        public int @operator { get; set; }
        public string rolex { get; set; }
    }
}
