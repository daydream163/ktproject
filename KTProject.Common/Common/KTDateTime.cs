using KTProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTProject.Common
{
    public class KTDateTime
    {
        /// <summary>
        /// 将Unix时间戳转换为DateTime类型时间
        /// </summary>
        /// <param name="d">double 型数字</param>
        /// <returns>DateTime</returns>
        public static System.DateTime ConvertIntDateTime(double d) {
            System.DateTime time = System.DateTime.MinValue;
            System.DateTime startTime = TimeZone.CurrentTimeZone.ToLocalTime(new System.DateTime(1970, 1, 1));
            time = startTime.AddMilliseconds(d);
            return time;
        }

        /// <summary>
        /// 将c# DateTime时间格式转换为Unix时间戳格式
        /// </summary>
        /// <param name="time">时间</param>
        /// <returns>long</returns>
        public static long ConvertDateTimeInt(System.DateTime time) {
            //double intResult = 0;
            System.DateTime startTime = TimeZone.CurrentTimeZone.ToLocalTime(new System.DateTime(1970, 1, 1, 0, 0, 0, 0));
            //intResult = (time- startTime).TotalMilliseconds;
            long t = (time.Ticks - startTime.Ticks) / 10000; //除10000调整为13位
            return t;
        }

        /// <summary>
        /// 获取时间范围，返回包含开始、结束时间的数组
        /// </summary>
        /// <param name="timeRangeEnum">查询类型</param>
        /// <param name="dateTime">参考时间点</param>
        /// <returns>时间范围数组，0：开始时间，1：结束时间</returns>
        public static DateTime[] GetTimeRange(TimeRangeEnum timeRangeEnum, DateTime? dateTime = null) {
            DateTime[] arrTimes = new DateTime[2];
            DateTime currentTime = dateTime ?? DateTime.Now;
            switch (timeRangeEnum) {
                case TimeRangeEnum.MINUTE:
                    break;
                case TimeRangeEnum.HOUR:
                    break;
                case TimeRangeEnum.DAY:
                    DateTime startDay = currentTime.AddHours(0 - Convert.ToInt32(currentTime.Hour.ToString("h")));  //本周周一
                    DateTime endDay = startDay.AddHours(24);  //本周周日
                    arrTimes[0] = startDay;
                    arrTimes[1] = endDay;
                    break;
                case TimeRangeEnum.WEEK:
                    DateTime startWeek = currentTime.Date.AddDays(1 - Convert.ToInt32(currentTime.DayOfWeek.ToString("d")));  //本周周一
                    DateTime endWeek = startWeek.AddDays(7).AddSeconds(-1);  //本周周日
                    arrTimes[0] = startWeek;
                    arrTimes[1] = endWeek;
                    break;
                case TimeRangeEnum.MONTH:
                    break;
                case TimeRangeEnum.QUARTER:
                    break;
                case TimeRangeEnum.YEAR:
                    break;
                default:
                    break;
            }
            
            return arrTimes;
        }
    }
}
