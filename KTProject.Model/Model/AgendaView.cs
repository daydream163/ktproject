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
    public class AgendaView
    {
        /*id: "662"
        lastModifier: "Kaiser Joe"
        lastModified: 1607562515235
        creator: "Kaiser Joe"
        creationDate: 1607562515235
        authorId: 15403
        authorName: "Kaiser Joe"
        summary: "睡个午觉"
        description: "描述一下吧"
        location: "B110"
        isPersonal: true
        isReminder: false
        isUnavailability: true
        isMeeting: false
        icalId: "TW_662"
                    targets
                    schedule
        type: "Holidays"
        typeId: 46946
        isExternal: false
        exceptions: ""
        canManage: true
        isInvolved: true
        startMillis: 1607454900000
        endMillis: 1607460300000
        trimmed: false*/
        public string id { get; set; }
        [SugarColumn(ColumnName = "author")]
        public string authorid { get; set; }
        [SugarColumn(IsIgnore = true)]
        public string authorname { get; set; }
        public string summary { get; set; }
        public string creator { get; set; }
        [SugarColumn(ColumnName = "creationDateunix")]
        public double? creationDate { get; set; }
        public string description { get; set; }
        public string location { get; set; }
        [SugarColumn(ColumnName = "reminder")]
        public bool isReminder { get; set; }
        [SugarColumn(ColumnName = "personal")]
        public bool isPersonal { get; set; }
        [SugarColumn(ColumnName = "unavailability")]
        public bool isUnavailability { get; set; }
        [SugarColumn(ColumnName = "meeting")]
        public bool isMeeting { get; set; }
        public string lastModifier { get; set; }
        [SugarColumn(ColumnName = "lastModifiedunix")]
        public double? lastModified { get; set; }
        public string icalId { get; set; }
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName = "typename")]
        public string type { get; set; }
        [SugarColumn(ColumnName = "type")]
        public int? typeid { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isExternal { get; set; }
        public string exceptions { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool canManage { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool isInvolved { get; set; }
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName = "startx")]
        public double startMillis { get; set; }
        [SugarColumn(IsOnlyIgnoreUpdate = true, IsOnlyIgnoreInsert = true, ColumnName = "endx")]
        public double endMillis { get; set; }
        [SugarColumn(IsIgnore = true)]
        public bool trimmed { get; set; }
        [SugarColumn(IsIgnore = true)]
        public IEnumerable<AgendaTarget> targets { get; set; }

        [SugarColumn(IsIgnore = true)]
        public ScheduleView schedule { get; set; }
        [SugarColumn(ColumnName = "schedule")]
        public int? scheduleid { get; set; }
    }
}
