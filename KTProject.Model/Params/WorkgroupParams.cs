using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class WorkgroupParams
    {
        /*V_ID: 1342611325
        CM: WGSRCPEOPLE
        PEOPLE: 
        DEPARTMENT: 15405
        RESOURCE_TAGS: 
        PERM_REQUIRED: TW_res_r
        HAVE_LOGIN: no*/
        public string V_ID { get; set; }
        public string CM { get; set; }
        public string PEOPLE { get; set; }
        public string DEPARTMENT { get; set; }
        public string RESOURCE_TAGS { get; set; }
        public string PERM_REQUIRED { get; set; }
        public bool HAVE_LOGIN { get; set; }

        public bool canBeEmpty { get; set; }
        public bool useCallbackFunction { get; set; }
        public string title { get; set; }
        public string WG_IDS { get; set; }
    }
}
