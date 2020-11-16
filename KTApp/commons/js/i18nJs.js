
  
  function dateToRelative(localTime){
    var diff=new Date().getTime()-localTime;
    var ret="";

    var min=60000;
    var hour=3600000;
    var day=86400000;
    var wee=604800000;
    var mon=2629800000;
    var yea=31557600000;

    if (diff<-yea*2)
    ret ="##年".replace("##",(-diff/yea).toFixed(0));

    else if (diff<-mon*9)
    ret ="##个月后".replace("##",(-diff/mon).toFixed(0));

    else if (diff<-wee*5)
    ret ="##周后".replace("##",(-diff/wee).toFixed(0));

    else if (diff<-day*2)
    ret ="##天".replace("##",(-diff/day).toFixed(0));

    else if (diff<-hour)
    ret ="##小时后，".replace("##",(-diff/hour).toFixed(0));

    else if (diff<-min*35)
    ret ="约一小时后";

    else if (diff<-min*25)
    ret ="经过约30分钟";

    else if (diff<-min*10)
    ret ="几分钟后";

    else if (diff<-min*2)
    ret ="几分钟后";

    else if (diff<=min)
    ret ="现在";

    else if (diff<=min*5)
    ret ="几分钟前，";

    else if (diff<=min*15)
    ret ="不多时前";

    else if (diff<=min*35)
    ret ="大约30分钟前";

    else if (diff<=min*75)
    ret ="大约一个小时前";

    else if (diff<=hour*5)
    ret ="几个小时前";

    else if (diff<=hour*24)
    ret ="##之前的时间".replace("##",(diff/hour).toFixed(0));

    else if (diff<=day*7)
    ret ="##天前".replace("##",(diff/day).toFixed(0));

    else if (diff<=wee*5)
    ret ="##周前".replace("##",(diff/wee).toFixed(0));

    else if (diff<=mon*12)
    ret ="##最新星期一".replace("##",(diff/mon).toFixed(0));

    else
    ret ="##年前".replace("##",(diff/yea).toFixed(0));

    return ret;
    }

  //override date format i18n
  
  Date.monthNames = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  // Month abbreviations. Change this for local month names
  Date.monthAbbreviations = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  // Full day names. Change this for local month names
  Date.dayNames =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  // Day abbreviations. Change this for local month names
  Date.dayAbbreviations = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  // Used for parsing ambiguous dates like 1/2/2000 - default to preferring 'American' format meaning Jan 2.
  // Set to false to prefer 'European' format meaning Feb 1
  Date.preferAmericanFormat = false;

  Date.firstDayOfWeek =0;
  Date.defaultFormat = "yyyy-M-d";
  Date.masks = {
    fullDate:       "yyyy'年'M'月'd'日' EEEE",
    shortTime:      "ah:mm"
    };
  Date.today="今天";

  Number.decimalSeparator = ".";
  Number.groupingSeparator = ",";
  Number.minusSign = "-";
  Number.currencyFormat = "###,##0.00";



  var millisInWorkingDay =28800000;
  var workingDaysPerWeek =5;

  function isHoliday(date) {
    var friIsHoly =false;
    var satIsHoly =true;
    var sunIsHoly =true;

    var pad = function (val) {
      val = "0" + val;
      return val.substr(val.length - 2);
    };

    var holidays = "##";

    var ymd = "#" + date.getFullYear() + "_" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
    var md = "#" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
    var day = date.getDay();

    return  (day == 5 && friIsHoly) || (day == 6 && satIsHoly) || (day == 0 && sunIsHoly) || holidays.indexOf(ymd) > -1 || holidays.indexOf(md) > -1;
    }


  
  var i18n = {
    YES:                 "是",
    NO:                  "否",
    FLD_CONFIRM_DELETE:  "确认删除?",
    INVALID_DATA:        "插入数据字段的格式无效。",
    ERROR_ON_FIELD:      "错误的",
    OUT_OF_BOUDARIES:      "实地坦言值：",
    CLOSE_ALL_CONTAINERS:"全部关闭？",
    DO_YOU_CONFIRM:      "是否确定？",
    ERR_FIELD_MAX_SIZE_EXCEEDED:      "超过最大尺寸限制",
    WEEK_SHORT:      "周",

    FILE_TYPE_NOT_ALLOWED:"文件类型不允许。",
    FILE_UPLOAD_COMPLETED:"文件上传完成。",
    UPLOAD_MAX_SIZE_EXCEEDED:"超出最大文件大小",
    ERROR_UPLOADING:"错误上传",
    UPLOAD_ABORTED:"上传中止",
    DROP_HERE:"此文件拖放",

    FORM_IS_CHANGED:     "该页面尚有未保存的数据！",

    PIN_THIS_MENU: "保持此菜单中打开",
    UNPIN_THIS_MENU: "不要让这个菜单中打开",
    OPEN_THIS_MENU: "打开这个菜单",
    CLOSE_THIS_MENU: "关闭此菜单",
    PROCEED: "执行?",

    PREV: "Previous",
    NEXT: "下一个",
    HINT_SKIP: "我关闭的提示。",

    WANT_TO_SAVE_FILTER: "保存这个搜索",
    NEW_FILTER_NAME: "名称的新的过滤器",
    SAVE: "保存",
    DELETE: "删除",
    HINT_SKIP: "我关闭的提示。",

    COMBO_NO_VALUES: "没有可用的值...?",

    FILTER_UPDATED:"筛选更新",
    FILTER_SAVED:"过滤器可以正确保存。",


    NEW_CHAT:"创建一个新的聊天",
    CREATE_CHAT:"创建"


    };


  
