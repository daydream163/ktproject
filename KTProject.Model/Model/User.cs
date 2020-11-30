using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    [SugarTable("olpl_operator")]
    public class User
    {
        public int id { get; set; }
        public string discriminator { get; set; }
        public DateTime creationDate { get; set; }
        public string creator { get; set; }
        public string lastModifier { get; set; }
        public DateTime lastModified { get; set; }
        public bool hidden { get; set; }
        public DateTime hiddenOn { get; set; }
        public string hiddenBy { get; set; }
        public DateTime lastLoggedOn { get; set; }
        public string authentication { get; set; }
        public bool administrator { get; set; }
        public string loginname { get; set; }
        public string password { get; set; }
        public DateTime lpcd { get; set; }
        public string piq { get; set; }
        public string pia { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public int anagraphicalData { get; set; }
        public bool enabled { get; set; }
        public int enabledOnlyOn { get; set; }
        public int owner { get; set; }
        public int location { get; set; }
        public string swimmingIn { get; set; }
        /*
   `id` int NOT NULL AUTO_INCREMENT,
   `discriminator` varchar(3) NOT NULL,
   `creationDate` datetime(3) DEFAULT NULL,
   `creator` varchar(255) DEFAULT NULL,
   `lastModifier` varchar(255) DEFAULT NULL,
   `lastModified` datetime(3) DEFAULT NULL,
   `hidden` bit(1) NOT NULL,
   `hiddenOn` datetime(3) DEFAULT NULL,
   `hiddenBy` varchar(255) DEFAULT NULL,
   `lastLoggedOn` datetime(3) DEFAULT NULL,
   `authentication` varchar(255) DEFAULT NULL,
   `administrator` bit(1) DEFAULT NULL,
   `loginname` varchar(255) NOT NULL,
   `password` varchar(255) NOT NULL,
   `lpcd` datetime(3) DEFAULT NULL,
   `piq` varchar(255) DEFAULT NULL,
   `pia` varchar(255) DEFAULT NULL,
   `name` varchar(255) DEFAULT NULL,
   `surname` varchar(255) DEFAULT NULL,
   `anagraphicalData` int DEFAULT NULL,
   `enabled` bit(1) NOT NULL,
   `enabledOnlyOn` int DEFAULT NULL,
   `owner` int DEFAULT NULL,
   `location` int DEFAULT NULL,
   `swimmingIn` varchar(255) DEFAULT NULL,
   */
    }
}
