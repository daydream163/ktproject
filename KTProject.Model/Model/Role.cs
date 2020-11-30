using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    [SugarTable("olpl_role")]
    public class Role
    {
        [SugarColumn(IsPrimaryKey = true)]
        public string id { get; set; }
        public string discriminator { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string permissionIds { get; set; }
        public DateTime creationDate { get; set; }
        public string creator { get; set; }
        public string lastModifier { get; set; }
        public DateTime lastModified { get; set; }
        public string code { get; set; }
        public bool localToAssignment { get; set; }
        public string defsubscript { get; set; }
        public int area { get; set; }
    }
}
