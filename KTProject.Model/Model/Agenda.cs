using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    /// <summary>
    /// 文档表，与数据库表字段完全对应
    /// </summary>
    [SugarTable("twk_agendaevent")]
    public class Agenda
    {
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:False
        /// </summary>           
        public string id { get; set; }
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        [SugarColumn(ColumnName = "author")]
        public string authorid { get; set; }
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>
        [SugarColumn(IsIgnore = true)]
        public string authorname { get; set; }
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string creator { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public DateTime? creationDate { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string description { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:False
        /// </summary>           
        public bool reminder { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public DateTime? lastModified { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:False
        /// </summary>           
        public int status { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string lastModifier { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string summary { get; set; }


        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:False
        /// </summary>           
        public bool unavailability { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string exceptions { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string icalId { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public int? meeting { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        public string location { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        [SugarColumn(ColumnName = "schedule")]
        public int? scheduleid { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:False
        /// </summary>           
        public bool personal { get; set; }

        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName = "typename")]
        public string type { get; set; }
        /// <summary>
        /// Desc:
        /// Default:
        /// Nullable:True
        /// </summary>           
        [SugarColumn(ColumnName = "type")]
        public int? typeid { get; set; }


        [SugarColumn(IsIgnore = true)]
        public IEnumerable<AgendaTarget> targets { get; set; }

        [SugarColumn(IsIgnore = true)]
        public ScheduleView schedule { get; set; }


        [SugarColumn(IsIgnore = true)]
        public bool canManage { get; set; }
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName ="startx")]
        public DateTime startMillis { get; set; }
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName = "endx")]
        public DateTime endMillis { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isExternal { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isInvolved { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isMeeting { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isPersonal { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isReminder { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isUnavailability { get; set; }
    }
}
