using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    public class KTResourceExt : KTResource
    {
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string myAvatar { get; set; }
        public string getRandomID
        {
            get
            {
                return new Random().Next(10000000, 99999999).ToString();
            }
        }
    }
}
