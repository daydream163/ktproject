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


 todo For compatibility with IE and SVGElements.getElementsByClassName not implemented changed every find starting from SVGElement (the other works fine)
 .find(".classname"))  -> .find("[class*=classname])
 */
function ProgressCheckBar(master) {
	this.master = master; // is the a GantEditor instance
  this.checkBars={};
  this.element; // è il bottone che apre il date selector

  this.init();
  master.progressCheckBar=this;
}

/**
 * INIT Object
 */
ProgressCheckBar.prototype.init = function() {
  var self = this;
  //add show slider button on button bar
  this.element = $("<button>").addClass("button textual icon lreq30 actionButton checkBarSelector").attr("title", "SHOW_HISTORY").append("<span class=\"teamworkIcon\">&#x2014;</span>");
  this.element .click(function(){self.openCheckBarDateSelector()});
  var hid=$("<input type='hidden' id='cbdsf'>");

  $("#saveGanttButton").before(this.element).before(hid);

};


/**
 * Open
 * @param element
 */
ProgressCheckBar.prototype.openCheckBarDateSelector = function() {
  var self=this;

  //open date selector
  var domani=new Date();domani.setDate(domani.getDate()+1);
  self.element.dateField({inputField:$("#cbdsf"),maxDate:domani.format(),callback:function(dateSelected){
    //console.debug("openCheckBarDateSelector: date selected",dateSelected);

    //hide action buttons
    var ganttButtons = $(".ganttButtonBar .buttons");
    ganttButtons.find(".actionButton:not(.checkBarSelector)").hide();

    var checkBarLabel = dateSelected.format();

    //se la data non è ancora stata calcolata l'aggiungo
    if (!self.checkBars || !self.checkBars[checkBarLabel]) {

      //var color=dateSelected.isToday()?"red":("hsl("+((self.checkBars.length%5+1)*50)+",70%,50%)");

      //si caricano i dati e si accoda un redraw
      var color=self.getCheckBarData(dateSelected,function(){self.master.taskIsChanged()});


      //add a tag label as legenda and remove
      var label = $.JST.createFromTemplate({color: color, label: checkBarLabel}, "CHECKBAR_DATE_LABEL");
      label.find(".checkBarDateLabelRemove").click(function () {
        var el = $(this);
        var lbl = el.closestAttr("label");
        if (self.checkBars && self.checkBars[lbl])
          delete self.checkBars[lbl];

        //se non ci sono più barre si ripristinano i bottoni
        if (Object.size(self.checkBars) == 0)
          ganttButtons.find(".actionButton").show();

        //si elimina l'etichetta
        el.closest("[label]").remove();

        self.master.taskIsChanged();
      });

      self.element.after(label)
    }

  }})
};



/**
 * verticale di controllo
 * carica i dati e chiama il callback
 * il metodo è asincrono, ma restituisce subito il colore da usare per la label
 */
ProgressCheckBar.prototype.getCheckBarData = function(checkPointDate,callback) {
  var self=this;
  self.checkBarsCounter=self.checkBarsCounter||1; //si mette un contatore di barre
  var isTtoday = checkPointDate.isToday();

  self.checkBars=self.checkBars||[];

  //se non si passa si mette ad oggi
  checkPointDate=checkPointDate?checkPointDate:new Date();
  var checkPointMillis = checkPointDate.getTime();

  //se era già stato calcolato si esce a meno che non sia la data corrente che si rinfresca modificando i dati
  if(!isTtoday && self.checkBars[checkPointDate.format()]) {
    callback(self.checkBars[checkPointDate.format()]);
    return;
  }

  //si calcola il colore
  var color=isTtoday?"hsl(0,100%,43%)":("hsl("+(((self.checkBarsCounter++)%6+1)*60)+",70%,50%)");

  //se la data è di oggi si calcola la verticale con i dati correntio, quindi non leggendo la storia che potrebbe non esserci
  if(isTtoday){
    var points=self.computeTodayCheckBarData();
    self.checkBars[checkPointDate.format()]={points:points,color:color};

    callback({points:points,color:color});

  } else {
    //load the data history for that milliseconf from server
    $.getJSON(contextPath + "/applications/teamwork/task/taskAjaxController.jsp", {CM: "GETGANTTHISTORYAT", OBJID: ge.tasks[0].id, millis: checkPointMillis}, function (response) {
      jsonResponseHandling(response);
      hideSavingMessage();
      if (response.ok) {
        var points=[]; //array nello stesso ordine dei ge.tasks con il millisecondo che rapprestenta lo stato di avanzamento del task es. task inizia 1 finisce il 10 e siamo al 50% il valore è 5
        for (var i=0;i<self.master.tasks.length;i++){
          var task = self.master.tasks[i];
          var bl = response.baselines[task.id];
          //i dati della baseline per quel task potrebbero non esserci es. task creato dopo
          if (bl)
            points.push(self.computeBarDate(bl.start,bl.end,bl.progress,bl.status,checkPointMillis));
          else
            points.push(self.computeBarDate(checkPointMillis,checkPointMillis,0,"",checkPointMillis));
        }

        self.checkBars[checkPointDate.format()]={points:points,color:color};

        callback({points:points,color:color});

      }
    })
  }

  return color;
};


/**
 *
 * @returns il millisecondo corrispondente alla percentuale di avanzamento del task
 */
ProgressCheckBar.prototype.computeBarDate=function(start,end,progress, status, checkDate ){
  //console.debug("computeBarDate",start,end,progress, status, checkDate)
  var ret=checkDate;
  //se il task è completato/fallito si deve considerare la data di fine del task se è dopo la data
  if ("STATUS_DONE"==status || "STATUS_FAILED"==status)
    ret=checkDate<=end?end:checkDate;
  //se il grogress è a 0 ma il task è nel futuro vado giù dritto
  else if(progress==0 && start>=checkDate)
    ret=checkDate;
  else
    ret= parseInt(start+(end-start)*progress/100);
  return ret;
};


/**
 * @returns {Array}  tutti i millisecondi del progress per la data corrente
 */
ProgressCheckBar.prototype.computeTodayCheckBarData = function() {
  var self=this;
  var now=new Date().getTime();
  var points=[]; //array nello stesso ordine dei ge.tasks con il millisecondo che rapprestenta lo stato di avanzamento del task es. task inizia 1 finisce il 10 e siamo al 50% il valore è 5
  for (var i=0;i<self.master.tasks.length;i++){
    var task = self.master.tasks[i];
    points.push(self.computeBarDate(task.start,task.end,task.progress,task.status, now));
  }
  return points;
};


/**
 * Ridisegna tutto
 */
ProgressCheckBar.prototype.redraw = function() {
  var self = this;
  this.element.stopTime("ganttckbarredr");
  this.element.oneTime(10, "ganttckbarredr", function () {
    //console.debug("ProgressCheckBar.redraw ");

    var collapsedDescendant = self.master.getCollapsedDescendant();

    //si eliminano le barre esistenti
    $("#checkBarGroup").remove();

    //se ci sono barre da disegnare
    if (Object.size(self.checkBars) > 0) {

      //creates checkBarGroup
      self.checkBarGroup= self.master.gantt.svg.group("checkBarGroup");


      for (var checkBarLabel in self.checkBars) {
        var checkBarDate=Date.parseString(checkBarLabel);
        var points = self.checkBars[checkBarLabel].points;
        var color = self.checkBars[checkBarLabel].color;

        //si disegnano solo i task nel range di quelli visibili
        var fromIndex = Math.max(0, self.master.firstVisibleTaskIndex);
        var toIndex = Math.min(self.master.tasks.length, self.master.lastVisibleTaskIndex);
        var poly = [];
        for (var i = fromIndex; i <= toIndex; i++) {
          var task = self.master.tasks[i];
          //se non è collapsed
          if (collapsedDescendant.indexOf(task) < 0) {
            var y=parseInt(task.ganttElement.attr("y"))-self.master.gantt.taskVertOffset;
            var x = Math.round((points[i] - self.master.gantt.startMillis) * self.master.gantt.fx);
            poly.push([x, y]);
            poly.push([x, y + self.master.rowHeight]);
            //y += self.master.rowHeight;
          }
        }

        //si mette la prima linea
        var polyStart = [Math.round((checkBarDate.getTime() - self.master.gantt.startMillis) * self.master.gantt.fx) , poly[0][1]];
        poly.unshift(polyStart );

        //si mette la barra verticale
        var polyEnd = [Math.round((checkBarDate.getTime() - self.master.gantt.startMillis) * self.master.gantt.fx) , poly[poly.length - 1][1]];

        //console.debug(polyStart,polyEnd)
        poly.push(polyEnd );


        //console.debug("poly", poly)
        var p=self.master.gantt.svg.polyline(self.checkBarGroup, poly, {class: "checkBarLineSVG", stroke: color});
        $(p).attr("title",checkBarLabel); //usata per la stampa pdf

        self.master.gantt.svg.line(self.checkBarGroup, polyStart[0],polyStart[1],polyEnd[0],polyEnd[1], {class: "checkBarDateLineSVG", stroke: color});

      }
      //prof.stop();
    }
  });

};


