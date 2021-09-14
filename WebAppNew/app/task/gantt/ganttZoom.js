/*
 Copyright (c) 2012-2018 Open Lab
 Written by Roberto Bicchierai and Silvia Chelazzi https://roberto.twproject.com
 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */


function ZoomDrawer(zoom, zoomConfig) {
  this.zoom = zoom;
  this.minDate;
  this.maxDate;
  this.computedScaleX;
  this.adjustDates = zoomConfig.adjustDates;

  this.increment1 = zoomConfig.increment1;
  this.formatHead1 = zoomConfig.formatHead1;

  this.increment2 = zoomConfig.increment2;
  this.formatHead2 = zoomConfig.formatHead2;

  this.isHoliday = zoomConfig.isHoliday;
}
ZoomDrawer.prototype.formatHead1; // format the label for the first header
ZoomDrawer.prototype.formatHead2; // format the label for the second header
ZoomDrawer.prototype.isHoliday;  //it is defined only if the zoom level requires to show holidays


ZoomDrawer.prototype.createHeadCell = function (level, start, end) {
  var self = this;
  var lbl;
  if (level == 1) {
    lbl = this.formatHead1(start, end);
  } else {
    lbl = this.formatHead2(start, end);
  }
  var x = (start.getTime() - self.minDate.getTime()) * self.computedScaleX;
  var w = (end.getTime() - start.getTime()) * self.computedScaleX;
  var labelFitsSpace=w>(lbl.length*(level==1?9:7));
  var th = $("<div>").html(labelFitsSpace?lbl:""); // not show label if width<150 on line 1 width<60 on second line
  th.width(w).addClass("line"+level).css("left",x+"px");

  if (level==2 && self.isHoliday && self.isHoliday(start, end))
    th.addClass("holy");

  if (level == 2) //la seconda riga è piccola
    th.addClass("headSmall");

  //si aggiunge
  self.ganttGridHeader.append(th);
};

ZoomDrawer.prototype.createBodyCell = function (start, end) {
  var self = this;
  var ret = $("<div>").html("").addClass("ganttBodyCell");
  var w = (end.getTime() - start.getTime()) * self.computedScaleX;
  var x = (start.getTime() - self.minDate.getTime()) * self.computedScaleX;
  ret.width(w).css("left",x+"px");
  self.ganttGridBody.append(ret);
};


ZoomDrawer.prototype.drawGanttHeadersAndBody = function (gantt, minDate, maxDate, ganttGridHeader, ganttGridBody) {
  //console.debug("drawGanttHeadersAndBody")
  var self = this;
  self.ganttGridHeader = ganttGridHeader;
  self.ganttGridBody = ganttGridBody;


  //compute the ideal scale
  self.computedScaleX = 600 / millisFromString(self.zoom);

  // si calcolano gli estremi corretti. Queste date sono spostate dal metodo
  //console.debug("Original dates: " + new Date(minDate) + "-" + new Date(maxDate));

  //if left box is not filled at least 60% enlarge
  var widthDiff = (maxDate - minDate) * self.computedScaleX - (gantt.master.splitter? gantt.master.splitter.secondBox.outerWidth()*.6:0);
  if (widthDiff < 0) {
    minDate.setMilliseconds(widthDiff *.3 / self.computedScaleX);
    minDate.setHours(0,0,0,0);
    maxDate.setMilliseconds(-widthDiff *.7 / self.computedScaleX);
    maxDate.setHours(23,59,59,999);
    //console.debug("Enlarged dates: " + minDate.format() + "-" + maxDate.format());
  }

  this.adjustDates(minDate, maxDate);
  //console.debug("Adjusted dates: " + new Date(minDate) + "-" + new Date(maxDate));

  this.minDate=minDate;
  this.maxDate=maxDate;

  //compute the fitting scale
  var fittingComputedScaleX = gantt.master.workSpace.outerWidth() / 2 / (maxDate - minDate);

  //se il fattore di scala è troppo piccolo e genererebbe un grafico striminzito si allarga alla dimensione della finestra
  if (self.computedScaleX < fittingComputedScaleX)
    self.computedScaleX = fittingComputedScaleX;

  //si girano le date da inizio a fine per la prima riga
  var date = new Date(minDate);
  var start;
  while (date.getTime() < maxDate) {
    //salvo la data iniziale
    start = new Date(date);

    //incremento la data
    self.increment1(date);
    if (date>this.maxDate)
      date.setTime(this.maxDate);

    self.createHeadCell(1, start,date);
  }

 //si girano le date da inizio a fine per la seconda riga
  var date = new Date(minDate);
  var start;
  while (date.getTime() < maxDate) {
    //salvo la data iniziale
    start = new Date(date);

    //incremento la data
    self.increment2(date);
    if (date>this.maxDate)
      date.setTime(this.maxDate);

    //create head cell
    self.createHeadCell(2, start,date);

    //scrivo body
    self.createBodyCell(start,date);

    self.head2LabelStartDate = new Date(date);
  }
};


Ganttalendar.prototype.initZoomlevels = function () {
  //console.debug("Ganttalendar.prototype.initZoomlevels");
  var self = this;
  // define the zoom level arrays 
  this.zoomLevels = [];
  this.zoomDrawers = {};


  function _addZoom(zoom, zoomConfig) {
    self.zoomLevels.push(zoom);
    self.zoomDrawers[zoom] = new ZoomDrawer(zoom, zoomConfig);
  }


  //-----------------------------  4 DAYS  600px-----------------------------
  _addZoom("4d", {
    adjustDates: function (start, end) {
      start.setDate(start.getDate() - 2);
      end.setDate(end.getDate() + 3);  // 350px =3d
    },
    increment1:   function (date) {
      if(date.getDay()!=Date.firstDayOfWeek) {
        date.setFirstDayOfThisWeek();
        date.add("d",7);
      } else
        date.add("d",7);
    },
    increment2:   function (date) {
      date.setDate(date.getDate() + 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      return   start.format("MMMM d") + " - " + end.format("MMMM d yyyy") + " (" + end.format("w") + ")";
    },
    formatHead2: function (start, end) {
      return start.format("EEE d");
    },
    isHoliday:   function (start, end) {
      return isHoliday(start);
    }

  });

  //-----------------------------  1 WEEK  600px -----------------------------
  _addZoom("1w", {
    adjustDates: function (start, end) {
      start.setFirstDayOfThisWeek();
      start.setDate(start.getDate() - 1);
      end.setDate(end.getDate() +5); // 350px = 4d
    },
    increment1:   function (date) {
      if(date.getDay()!=Date.firstDayOfWeek)
        date.setFirstDayOfThisWeek();
      date.add("d",7);
    },
    increment2:   function (date) {
      date.setDate(date.getDate() + 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      return  start.format("MMM d") + " - " + end.format("MMM d 'yy") + " (" + GanttMaster.messages["GANTT_WEEK_SHORT"] + end.format("w") + ")";
    },
    formatHead2: function (start, end) {
      return start.format("EEEE").substr(0, 1) + " (" + start.format("dd") + ")";
    },
    isHoliday:   function (start, end) {
      return isHoliday(start);
    }

  });


  //-----------------------------  2 WEEKS  600px -----------------------------
  _addZoom("2w", {
    adjustDates: function (start, end) {
      start.setFirstDayOfThisWeek();
      end.setDate(end.getDate() + 8); // 350px =8d
    },
    increment1:   function (date) {
      if(date.getDay()!=Date.firstDayOfWeek)
        date.setFirstDayOfThisWeek();
      date.add("d",7);
    },
    increment2:   function (date) {
      date.setDate(date.getDate() + 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      return  start.format("MMM d") + " - " + end.format("MMM d 'yy") + " (" + GanttMaster.messages["GANTT_WEEK_SHORT"] + end.format("w") + ")";
    },
    formatHead2: function (start, end) {
      return start.format("EEEE").substr(0, 1);
    },
    isHoliday:   function (start, end) {
      return isHoliday(start);
    }
  });


  //-----------------------------  1 MONTH  600px  -----------------------------
  _addZoom("1M", {
    adjustDates: function (start, end) {
      start.setDate(start.getDate() - 7);
      end.setDate(end.getDate()+18); // 350px =18d
    },
    increment1:   function (date) {
      if (date.getDate() != 1)
        date.setDate(1);
      date.add("M", 1);
    },
    increment2:   function (date) {
      date.setDate(date.getDate() + 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      return  start.format("MMMM yyyy");
    },
    formatHead2: function (start, end) {
      return start.format("d");
    },
    isHoliday:   function (start, end) {
      return isHoliday(start);
    }
  });

  //-----------------------------  MONTH/week  600px  -----------------------------
  _addZoom("1M1w", {
    adjustDates: function (start, end) {
      start.setDate(start.getDate() - 3);
      end.setDate(end.getDate() + 22); //  350px =22d
    },
    increment1:   function (date) {
      if(date.getDate()!=1) {
        date.setDate(1)
      }
      date.add("M", 1);
    },
    increment2:   function (date) {
      date.add("d", 7);
    },
    formatHead1: function (start, end) {
      var self = this;
      return  start.format("MMMM");
    },
    formatHead2: function (start, end) {
      return GanttMaster.messages["GANTT_WEEK_SHORT"] + end.format("w") ;
    }
  });


  //-----------------------------  1 QUARTERS   -----------------------------
  _addZoom("1Q", {
    adjustDates: function (start, end) {
      start.setDate(1);
      end.setDate(end.getDate() +53); // 350px =53d
    },
    increment1:   function (date) {
      if(date.getMonth()%3!=0)
        date.add("M",-date.getMonth()%3);
      date.add("M",3);
    },
    increment2:   function (date) {
      date.add("M", 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      var q = (Math.floor(start.getMonth() / 3) + 1);
      return GanttMaster.messages["GANTT_QUARTER"] + " " + q + "-" + start.format("yyyy");
    },
    formatHead2: function (start, end) {
      return start.format("MMMM");
    },
    closeSpan2:   function (start, end) {
      return true;
    },
    closeSpan1:   function (start, end) {
      return (start.getMonth() ) % 3 == 2;
    }
  });


  //-----------------------------  2 QUARTERS   -----------------------------
  _addZoom("2Q", {
    adjustDates: function (start, end) {
      start.setDate(1);
      end.setDate(end.getDate() +107); // 350px =107d
    },
    increment1:  function (date) {
      if(date.getMonth()%3!=0)
        date.add("M",-date.getMonth()%3);
      date.add("M",3);
    },
    increment2:   function (date) {
      date.add("M", 1);
    },
    formatHead1: function (start, end) {
      var self = this;
      var q = (Math.floor(start.getMonth() / 3) + 1);
      return GanttMaster.messages["GANTT_QUARTER"] + " " + q + "-" + start.format("yyyy");
    },
    formatHead2: function (start, end) {
      return start.format("MMMM");
    }
  });


  //-----------------------------  1 YEAR  -----------------------------
  _addZoom("1y", {
    adjustDates: function (start, end) {
      start.setDate(1);
      start.setMonth(start.getMonth() - 1);
      end.setDate(end.getDate() +213);// 350px =213d
    },
    increment1:  function (date) {
      if(date.getMonth()%6!=0)
        date.add("M",-date.getMonth()%6);
      date.add("M",6);
    },
    increment2:   function (date) {
      date.add("M",1)
    },
    formatHead1: function (start, end) {
      var self = this;
      var sem = (Math.floor(start.getMonth() / 6) + 1);
      return GanttMaster.messages["GANTT_SEMESTER"] + " " + sem + "-" + start.format("yy")
    },
    formatHead2: function (start, end) {
      return start.format("MMM");
    }
  });



  //-----------------------------  2 YEAR -----------------------------
  _addZoom("2y", {
    adjustDates: function (start, end) {
      start.setDate(1);
      start.setMonth(Math.floor(start.getMonth() / 6) * 6);
      end.setDate(end.getDate() + 426);  // 350px =426d
    },
     increment1:    function (date) {
       if(date.getMonth()!=0)
         date.add("M",-date.getMonth());
       date.add("y",1);
    },
    increment2:  function (date) {
      date.add("M",6)
    },
    formatHead1: function (start, end) {
      return start.format("yyyy");
    },
    formatHead2: function (start, end) {
      var sem = (Math.floor(start.getMonth() / 6) + 1);
      return GanttMaster.messages["GANTT_SEMESTER"] + " " + sem;
    }

  });


};

