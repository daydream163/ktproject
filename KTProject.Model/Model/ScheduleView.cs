using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Model
{
    /// <summary>
    /// Schedule表，前端查询返回数据 视图
    /// </summary>
    [SugarTable("olpl_schedule")]
    public class ScheduleView
    {
/*id: 106390
type: "period"
startMillis: 1607454900000
endMillis: 1607460300000
duration: 5400000
freq: 0
repeat: 1
trimmed: false*/
        public int id { get; set; }

        [SugarColumn(IsIgnore = true)]
        public string type { get; set; }

        [SugarColumn(ColumnName = "startMillis")]
        public double startMillis { get; set; }

        [SugarColumn(ColumnName = "endMillis")]
        public double endMillis { get; set; }

        public double startTime { get; set; }

        public double? duration { get; set; }

        public int? freq { get; set; }

        [SugarColumn(ColumnName = "repeatx")]
        public int? repeat { get; set; }

        [SugarColumn(IsIgnore = true, DefaultValue = "false")]
        public bool? trimmed { get; set; }
    }
}
