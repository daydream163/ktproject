/** ************************************************************************************************************************
 *
 *  TWCHAT API
 *  Authors: Roberto Bicchierai, Matteo Bicocchi (Open Lab)
 *  2017 / 2018
 *
 ************************************************************************************************************************** */
function TWChat() {
  var self = this;
  self.chatWindow = null;
  self.chatBoard = null;
  self.chatList = null;
  self.chatRightHead = null;
  self.chatInput = null;
  self.chatButtons = [];

  self.activeChatId = null;
  self.controller = contextPath + "/applications/teamwork/socket/chat/chatAjaxController.jsp";
  self.maxVisibleAvatar = 7;

  self.active = false;

};

/**
 CHAT INIT
 */
TWChat.prototype.init = function (isTheFirstClient) {
  //console.debug("chat.init "+isTheFirstClient)
  var self = this;
  // Load CHAT Templates
  $.JST.ajaxLoadTemplates(contextPath + "/applications/teamwork/socket/chat/chatTemplates.jsp");

  self.setChatActive(isTheFirstClient);

  $("body").on("win-focus", function (ev) {
    //console.debug("chat win-focus")
    if (!self.active) {
      self.setChatActive(true);
    }
  });

  // agganciamo l'intercettazione dell'incolla sulla chat e pulisco il contenuto prima di incollare
  $("#twChatInput").get(0).addEventListener('paste', function (e) {
    handlePaste(e, self.chatInput);
  }, false);

  /** --------------------------------------------------  START SOCKET MESSAGE MANAGERS ---------------------------------------------- */


  /* --------------------- CHAT WAKE-UP ------------------------------------------------ */

  twComm.addActionManager("ws-chatWakeUp", function (message) {
    //console.debug("ws-chatWakeUp");
    self.setChatActive(true);
  });

  /* --------------------- SOCKET CLOSED ----------------------------------------------- */

  twComm.addActionManager("ws-socketClosed", function (message) {
    //console.debug("ws-socketClosed");
    getTop().$("#twChatOpener").addClass("disabled");

    self.deleteChatWindow();
  });

  /* --------------------- ANOTHER CHAT CLIENT HAS BEEN ACTIVATED ---------------------- */

  twComm.addActionManager("ws-chatClientActivated", function (message) {
    //console.debug("ws-chatClientActivated");
    self.setChatActive(false);
  });

  /* --------------------- NEW LOG RECEIVED -------------------------------------------- */

  twComm.addActionManager("ws-newLog", function (message) {
    //console.debug("ws-newLog", message);
    //if (!self.active)
    //  return;

    var log = message.data.log;

    //elemento del dom
    var domChat = $("#twChatListElement-" + log.chatId);
    var chat = domChat.data("chat");
    log.chat = chat;

    var minimizedOnChatList = self.chatWindow.is(".pinned.showChats");
    var editorClosed = self.chatWindow.is(".closed");
    var loggedIsAway = twComm.isAway;
    var logOnActiveChat = (log.chatId == self.activeChatId);
    var logOnListChat = domChat.size() > 0;
    var logByMyself = log.owner.id == twComm.loggedOperator.id; // potrei avere più fienestre aperte e inviare i messagg

    //Si marcano tutti gli utenti su quella chat come "da leggere"
    domChat.find(".twChatMembers img.face" + (logOnActiveChat ? ":not([opid=" + twComm.loggedOperator.id + "])" : "")).addClass("notYetRead");
    self.chatRightHead.find(".twChatMembers img.face" + (logOnActiveChat ? ":not([opid=" + twComm.loggedOperator.id + "])" : "")).addClass("notYetRead");

    //Se la chat non è presente si carica la chat mancante e si aggiorna quando si è caricata
    if (!logOnListChat) {
      self.loadAndDrawChatElement(log.chatId);

      //se arriva un messaggio sulla chat attiva si deve scrivere nella board
    } else if (logOnActiveChat) {
      self.appendLog(log);
      self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight);

      //se l'editor è chiuso deve mandare notifica desktop
      if (editorClosed || loggedIsAway || minimizedOnChatList) {
        //si incrementa il numero di messaggi non letti
        chat.chatStatus.unreadMessageCount++;
        self.refreshChatListElement(chat.id);
        self.updateGlobalCounter();

      } else {
        //dato che è nella chat attiva notifico al server che l'ho letto
        twComm.sendToServer("ws-chatRead", {chatId: log.chatId});
        //console.error("send ws-chatRead per ws-newLog editorClosed " + editorClosed + " loggedIsAway " + loggedIsAway)

      }

      // messaggio su una chat presente ma non in edit/attiva
    } else if (logOnListChat) {
      chat.chatStatus.unreadMessageCount++;
      self.refreshChatListElement(chat.id);
      self.updateGlobalCounter();
    }

    if (chat && chat.chatStatus.desktopNotification && !logByMyself && (!logOnActiveChat || editorClosed || loggedIsAway || !twComm.hasFocus )) {
      //si manda una notifica desktop
      var tmp = $("<div>").html(log.msg).text(); //si ripulisce html perchè non è supportato
      twComm.desktopNotification({
        title: chat.name,
        body: tmp,
        icon: log.owner.person.avatarUrl,
        duration: 10000,
        script: "window.focus();top.twChat.open(" + chat.id + ")",
        sound: contextPath + '/img/chat.mp3'
      });
    }

  });

  /* --------------------- WS CHAT CHANGED (WORKGROUP or NAME) ------------------------- */

  twComm.addActionManager("ws-chatChanged", function (message) {
    //console.debug("ws-chatChanged", message);
    if (!self.active)
      return;

    self.chatChanged(message.data.chat);
  });

  /* --------------------- WS REMOVED FROM CHAT ---------------------------------------- */

  twComm.addActionManager("ws-removedFromChat", function (message) {
    //console.debug("ws-removedFromChat")
    if (!self.active)
      return;
    var chatId = message.data.chatId;
    //si deve cancellare dalla lista
    $("#twChatListElement-" + chatId).remove();

    //e se è quella corrente si disegna la home
    if (self.activeChatId == chatId) {
      self.drawEmptyChatPage();
    }
  });

  /* --------------------- WS CHAT READ BY OPERATOR ------------------------------------ */

  twComm.addActionManager("ws-chatReadByOperator", function (message) {
    //console.debug("ws-chatReadByOperator", message);
    if (!self.active)
      return;
    var domChat = $("#twChatListElement-" + message.data.chatId);

    //si toglie l'unread
    domChat.find("img[opId=" + message.data.opId + "]").removeClass("notYetRead");
    self.chatRightHead.find("img[opId=" + message.data.opId + "]").removeClass("notYetRead");

    // se l'ho letto io devo togliere i numeri di unread
    if (message.data.opId == twComm.loggedOperator.id) {
      setTimeout(function () {
        var chat = domChat.data("chat");
        chat.chatStatus.unreadMessageCount = 0;
        self.refreshChatListElement(chat.id);
        self.updateGlobalCounter();
      }, 3500)
    }
  });

  /* --------------------- WS CHAT HAS BEEN DELETED ------------------------------------ */

  twComm.addActionManager("ws-chatDeleted", function (message) {
    //console.debug("ws-chatDeleted", message);
    if (!self.active)
      return;

    var chatId = message.data.chatId;
    self.deleteChatElements(chatId);

  });
};
/** --------------------------------------------------  END MANAGERS --------------------------------------------------------------- */

/**
 DRAW CHAT WINDOW
 */
TWChat.prototype.drawChatWindow = function () {
  //console.debug("drawChatWindow")
  var self = this;

  var isMin = self.chatWindow ? self.chatWindow.is(".pinned") : false;
  var isClosed = self.chatWindow ? self.chatWindow.is(".closed") : true;

  var oldActiveChatId = self.activeChatId;
  self.deleteChatWindow();

  var data = {chatTitle: ""};
  var chatWin = $.JST.createFromTemplate(data, "chatWin");
  chatWin.addClass(isClosed ? "closed" : "");
  chatWin.addClass(isMin ? "pinned" : "");

  $("body").prepend(chatWin);

  self.chatWindow = $("#twChatWindow");
  self.chatInput = $("#twChatInput");
  self.chatInputButton = $(".chatSend");

  self.chatBoard = $("#twChatBoard");
  self.chatList = $("#twChatList");
  self.chatRightHead = $("#twChatRightHead");

  //beautifullyfy scrollbars
  self.chatListScroll = setCustomScroll('#twChatLeftCol');
  self.chatBoardScroll = setCustomScroll('#twChatLeftCol');

  //se il sotto è già caricato, si abilita il bottoner della chat che potrebbe essere stato disabilitato perchè la connessione si è persa
  if (getTop().$) getTop().$("#twChatOpener").removeClass("disabled");

  //si aggancia un evento per dire di aver letto la chat corrente quando si mouve il mouse
  self.chatWindow.on("mouseenter", function () {
    if (self.activeChatId && $("#twChatListElement-" + self.activeChatId).data("chat").chatStatus.unreadMessageCount > 0 && !self.chatWindow.is(".pinned.showChats")) {
      //console.error("send ws-chatRead per mouseenter")
      //si notifica al server di aver letto
      twComm.sendToServer("ws-chatRead", {chatId: self.activeChatId});
    }
  });

  self.chatInput.on("keypress", function (ev) {
    if (ev.keyCode == 13) {
      if (!ev.ctrlKey && !ev.shiftKey) {
        if (self.chatInput.text().trim().length > 0)
          self.sendToServer();
        ev.preventDefault();
      } else {
        document.execCommand('insertHTML', false, '<br><br>');
      }
      return false;
    }
  }).on("keyup", function (ev) {

    if (self.chatInput.text().trim().length > 0) {
      self.chatInputButton.addClass("active");
    } else {
      self.chatInputButton.removeClass("active");
    }
  });//.focus();

  //si ricaricano altri log se siamo in cima, c'è una chat attiva e ci sono altri log
  self.chatBoard.on("scroll", function (e) {
    if (self.activeChatId && self.chatBoard.scrollTop() == 0 && self.chatBoard.is("[hasmoretop]")) {
      var chat=$("#twChatListElement-" + self.activeChatId).data("chat")
      self.appendLogs(chat, parseInt(self.chatBoard.find("[creationdate]:first").attr("creationdate")) - 1);
    }
  });

  if (!oldActiveChatId) {
    self.drawEmptyChatPage();
  } else {
    self.chatWindow.removeClass("chatHome");
  }

  self.drawChatList(null, function () {
    if (oldActiveChatId)
      $("#twChatListElement-" + oldActiveChatId).click();
    else
      $(".twChatListElement:first").click();
  });

  //$(window).focus();
};

/**
 DELETE CHAT WINDOW
 */
TWChat.prototype.deleteChatWindow = function () {
  var self = this;
  $("#twChatWindow").remove();
  self.chatButtons = [];
  self.chatWindow = null;
  self.chatInput = null;
  self.chatBoard = null;
  self.chatList = null;
  self.chatRightHead = null;
  self.activeChatId = null;
};

TWChat.prototype.newGroupChat = function () {
  var self = this;
  var request = {
    "PERM_REQUIRED": "TW_res_r",
    title: i18n.NEW_CHAT,
    buttonLabel: i18n.CREATE_CHAT,
    WG_IDS: "",
    "noSaveSearch": "yes",
    "loginOnly": "yes"
  };
  var ndo = openChooserPopup(contextPath + '/app/workgroup/workgroupPopup.html?' + $.param(request), 700, 580, function () {

    var iframe = $("iframe", ndo);
    var btn = iframe.get(0).contentWindow.$(".button.noprint.first");
    btn.removeAttr("onclick");
    btn.on("click", function () {
      var selIdsStr = iframe.get(0).contentWindow.$("#WG_IDS").val();
      var request = {CM: "GETGROUPCHAT", "WG_IDS": selIdsStr};
      showSavingMessage();
      $.getJSON(self.controller, request, function (response) {
        getTop().jsonResponseHandling(response);
        if (response.ok) {
          self.drawChatElement(response.chat, false).click();
        }
        hideSavingMessage();
      });
      ndo.parent().remove();
    });
  });
};

/**
 NEW CHAT PAGE
 Draw the new chat page
 */
TWChat.prototype.drawEmptyChatPage = function () {
  var self = this;

  //si disattiva la chat corrente
  self.activeChatId = null;
  self.ownerId = null;

  self.chatWindow.addClass("chatHome");

  var new_chat = $.JST.createFromTemplate({}, "emptyChatPage");

  self.chatRightHead.hide();
  self.chatRightHead.html("");
  $(".twChatListElement").removeClass("active");
  self.chatBoard.addClass("home");
  self.chatBoard.html(new_chat);

  self.chatInput.attr("contenteditable", false);
};

TWChat.prototype.createCompanyChat = function (resId) {
  var self = this;
  if (!resId)
    return;

  //si recuperano i dati del task e del workgroup
  var request = {CM: "GETCOMPANYWGINFO", "resId": resId};
  showSavingMessage();
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok) {

      //si disattiva la chat corrente
      self.activeChatId = null;
      self.ownerId = null;

      var newPage = $.JST.createFromTemplate(response, "newChatResourcePage");
      newPage.find(":radio:first").prop("checked", true);

      //si visualizza la pagina
      self.chatRightHead.hide();
      self.chatRightHead.html("");
      $(".twChatListElement").removeClass("active");
      self.chatBoard.addClass("home");
      self.chatBoard.html(newPage);
      self.chatWindow.addClass("chatHome").removeClass("closed");

    }
    hideSavingMessage();
  });
};

TWChat.prototype.createOrSelectCompanyChat = function (resId, expand) {
  //console.debug("createOrSelectCompanyChat resId. " + resId);
  var self = this;
  var request = {CM: "GETCOMPANYCHAT", "resId": resId, expand: expand ? "yes" : "no"};

  showSavingMessage();
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok && response.chat) {
      self.drawChatElement(response.chat, false).click();
    }
    hideSavingMessage();
  });
}

TWChat.prototype.createTaskChat = function (taskId) {
  var self = this;
  if (!taskId)
    return;

  //si recuperano i dati del task e del workgroup
  var request = {CM: "GETTASKWGINFO", "taskId": taskId};
  showSavingMessage();
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok) {

      //si disattiva la chat corrente
      self.activeChatId = null;
      self.ownerId = null;


      // 30/3/18 bicch: si salta la selezione
      //var newPage = $.JST.createFromTemplate(response, "newChatTaskPage");
      //newPage.find(":radio:first").prop("checked", true);
      var newPage="";

      //si visualizza la pagina
      self.chatRightHead.hide();
      self.chatRightHead.html("");
      $(".twChatListElement").removeClass("active");
      self.chatBoard.addClass("home");
      self.chatBoard.html(newPage);
      self.chatWindow.addClass("chatHome").removeClass("closed showChats");

      // 30/3/18 bicch: si crea per semplicità una chat sul workgroup esteso, se si lamentano si rimetterà la selezione
      self.createOrSelectTaskChat(taskId,true);

    }
    hideSavingMessage();
  });
};

TWChat.prototype.createOrSelectTaskChat = function (taskId, expand) {
  // console.debug("createOrSelectTaskChat taskId. "+taskId);
  var self = this;
  var request = {CM: "GETTASKCHAT", "taskId": taskId, expand: expand ? "yes" : "no"};

  showSavingMessage();
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok && response.chat) {
      self.drawChatElement(response.chat, false).click();
    }
    hideSavingMessage();
  });
}

TWChat.prototype.renameChat = function (newName) {
  var self = this;
  var chatId = self.activeChatId;
  var domChat = $("#twChatListElement-" + chatId);
  var chat = domChat.data("chat");

  if (newName == chat.name)
    return;

  var request = {CM: "RENCHAT", chatId: self.activeChatId, newName: newName};
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    //il Nuovo nome si ripesca dal socket
  })
};

TWChat.prototype.setChatActive = function (active) {
  //console.debug("setChatActive :"+active)
  var self = this;

  //disegna la chat se non c'è, ovvero la primissima volta
  if (!self.chatWindow)
    self.drawChatWindow();

  self.active = active;
  if (active) {

    //mette a posto il layout
    self.chatWindow.removeClass("disabled");

    //dice agli altri client che una chat sulla stessa sessione si è attivata (e quindi di spengersi)
    twComm.sendToServer("ws-chatClientActivated", {activeChatId: self.activeChatId});

  } else {
    //mette a posto il layout
    self.chatWindow.addClass("disabled");
  }

};

/**
 ADD LOG TO SERVER
 */
TWChat.prototype.sendToServer = function () {
  //console.debug("sendToServer",self.chatInput.text());
  var self = this;
  var msg = self.chatInput.html();

  if (msg.trim().length == 0)
    return;

  self.chatInput.empty();
  self.chatInputButton.removeClass("active");
  var request = {CM: "ADDLOG", chatId: self.activeChatId, msg: msg};
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    //il log salvato ri ripesca dal socket
  })
};

TWChat.prototype.drawChatElement = function (chat, prepend) {
  var self = this;
  var ndo = $("#twChatList");
  self.chatWindow.removeClass("noChats");

  var chatLine = $("[chatid=" + chat.id + "]");
  // Se esiste già nella lista punta a quello già esistente.
  if (chatLine.size() > 0) {
    ndo.prepend(chatLine);
    return chatLine;
  }

  var cgle = $.JST.createFromTemplate(chat, "chatListElement");

  // si deposita il json sul dom
  cgle.data("chat", chat);
  cgle.on("click", function () {
    self.selectChat($(this));
    self.chatWindow.removeClass("showChats");
  });
  if (prepend)
    ndo.prepend(cgle);
  else
    ndo.append(cgle);
  self.refreshChatListElement(chat.id);

  var memberCount = chat.members.length;
  if (memberCount > self.maxVisibleAvatar) {
    $(".twChatMembers div.twChatMember:nth-child(n+" + (self.maxVisibleAvatar + 2 ) + ")", cgle).hide();
    var diff = memberCount - self.maxVisibleAvatar;
    $(".members-more", cgle).remove();
    var text = "<div class='members-more' >+" + diff + "</div>";
    $(".twChatMembers", cgle).append(text);
  }

  return cgle;
};

TWChat.prototype.loadAndDrawChatElement = function (chatId, callback) {
  var self = this;
  var request = {CM: "GETCHAT", chatId: chatId};
  //showSavingMessage();
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok && response.chat) {
      self.drawChatElement(response.chat, true);
      self.updateGlobalCounter();

      if (typeof (callback) == "function")
        callback();
    }
  });
};

/**
 LOAD ALL CHATS
 */
TWChat.prototype.drawChatList = function (lastMillis, callback) {
  var self = this;

  //draw ADD CHAT button
  //var ndo = $("#twChatList");
  //var chatListBar = $.JST.createFromTemplate({}, "chatListBar");
  //ndo.after(chatListBar);

  var request = {CM: "GETCHATS", lastMillis: lastMillis};

  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok && response.chats) {

      if (response.chats.length > 0) {
        for (var i = 0; i < response.chats.length; i++) {
          var chat = response.chats[i];
          self.drawChatElement(chat, false);
        }
        self.updateGlobalCounter();
        self.chatWindow.removeClass("noChats");

      } else {
        self.chatWindow.addClass("noChats");
      }

      if (typeof (callback) == "function")
        callback(response);
    }
  });
};

TWChat.prototype.scrollToMillis = function (millis) {

};

/**
 UPDATE COUNTER
 Update the counter sending an event
 */
TWChat.prototype.updateGlobalCounter = function () {
  var self = this;
  var quant = $(".twChatUnreadNumber.unread").size();
  //console.error("updateGlobalCounter " + quant)
  self.totalUnreadChats = quant;

  twComm.enqueueMessageAsEvent({eventType: "ws-updateGlobalCounter", data: {"totalUnreadChats": quant}});
};
/**
 CHAT CHANGED
 Get .data("chat") of the chat list object
 ADD/UPDATE UNREAD
 ADD/REMOVE BOLD
 */
TWChat.prototype.refreshChatListElement = function (chatId) {
  //console.debug("refreshChatListElement ", chatId);
  var self = this;

  var domChat = $("#twChatListElement-" + chatId);
  var chat = domChat.data("chat");

  //gestione unread messages
  if (chat.chatStatus.unreadMessageCount > 0) {
    domChat.find(".twChatUnreadNumber").addClass("unread").html(chat.chatStatus.unreadMessageCount);
    domChat.addClass("chatNotRead");
  } else {
    domChat.find(".twChatUnreadNumber").removeClass("unread").html(chat.chatStatus.unreadMessageCount);
    domChat.removeClass("chatNotRead");
  }

};

/**
 CHAT CHANGED
 Get .data("chat") of the chat list object
 ADD/REMOVE MEMBERS
 UPDATE CHAT NAME
 */
TWChat.prototype.chatChanged = function (chat) {
  var self = this;

  var domChat = $("#twChatListElement-" + chat.id);

  if (domChat.size() == 0)
    return;

  var oldChat = domChat.data("chat");
  chat.chatStatus = oldChat.chatStatus;
  domChat.data("chat", chat);

  domChat.find(".twChatDesc").html(chat.name);

  /**
   UPDATE HEADER
   Update chat header if is the active chat
   */
  if (self.activeChatId == chat.id)
    $("#twChatHeaderTitle").html(chat.name);

  /**
   UPDATE AVARAR
   Update chat members avatar
   */
  domChat.find(".twChatMember").addClass("toBeRemoved");
  var ndo = domChat.find(".twChatHeaderMembersBox");

  for (var i = 0; i < chat.members.length; i++) {
    var op = chat.members[i];
    var domMemb = domChat.find("[opid=" + op.id + "]").closest(".twChatMember");

    if (domMemb.size() == 0) {
      var chMemb = $.JST.createFromTemplate({chat: chat, op: op}, "chatMember");
      ndo.append(chMemb);
    } else {
      domMemb.removeClass("toBeRemoved")
    }
  }

  /**
   TRIM MEMBERS
   Trim members if more then the allowed number
   */
  var memberCount = chat.members.length;
  if (memberCount > self.maxVisibleAvatar) {
    $(".twChatMembers div.twChatMember:nth-child(n+" + (self.maxVisibleAvatar + 1) + ")", domChat).hide();
    var diff = memberCount - self.maxVisibleAvatar;
    $(".members-more", domChat).remove();
    var text = "<div class='members-more' >+" + diff + "</div>";
    $(".twChatMembers", domChat).append(text);
  }

  /**
   REMOVE MEMBERS
   Remove "toBeRemoved" chat members
   */
  domChat.find(".toBeRemoved").remove();

  /**
   UPDATE RIGHT COLUMN
   Update chat options on right column
   */
  if (self.activeChatId == chat.id) {
    $("#twChatRightCol #twChatMembers .twChatMember").remove();
    $("#twChatMembers .twChatHeaderMembersBox").prepend(ndo.find(".twChatMember").clone(true).css({display: "inline-block"}));
  }
};

/**
 SELECT CHAT
 Select and draw the chat
 */
TWChat.prototype.selectChat = function (el, millis, refill) {
  var self = this;
  var chat = el.data("chat");
  //console.debug("selectChat ",chat,el, millis, refill);
  self.ownerId = chat.ownerId;

  if (chat.id == self.activeChatId && !refill)
    return;

  self.activeChatId = chat.id;

  setTimeout(function () {
    /**
     DRAW LOGS
     Clean up the logs and redraw them
     */
    self.chatRightHead.empty();

    $("#twChatBoard").empty();
    self.drawRightHead(chat);
    self.appendLogs(chat, millis, refill);

    el.parent().prepend(el);



    /**
     * Create Uploadizer area
     * Drag a document on the text area to upload it
     */
    $("#uploader").remove();

    var uploader = $("<div/>").attr("id", "uploader");
    self.chatInput.after(uploader);

    $("#uploader").uploadize({
      url:self.controller,
      showPlaceHolder:false,
      // activeElement: self.chatWindow,
      activeElement: self.chatInput,
      additionalRequestParameters:{CM:"DROPDOC",chatId: self.activeChatId},
      onLoadCallback:function(response){
        self.chatInput.html("");
      }
    });


  }, 300);

  self.chatInput.attr("contenteditable", true);

  $(".twChatListElement").removeClass("active");
  self.chatWindow.removeClass("chatHome");

  el.addClass("active");
};


TWChat.prototype.prependLog = function (log) {
  //console.debug("prependLog ",log)
  var self = this;

  var currentLogDate = new Date(log.creationDate).format("yyyyMMdd");

  /**
   DATE SEPARATOR
   Add date separator if it doesn't exist
   */
  var daySep = $("#daysep" + currentLogDate);
  if (daySep.length <= 0) {
    daySep = $("<div class='twChatDaySeparator' id='daysep" + currentLogDate + "'><span>" + (new Date().format("yyyyMMdd") == currentLogDate ? Date.today : new Date(log.creationDate).format()) + "</span></div>");
    self.chatBoard.prepend(daySep);
  }

  var templateName = "chatLog";
  switch (log.type) {
    case 0:
      templateName = "chatLog"
      break;
    case 1:
      templateName = "systemLog"
      break;
    case 2:
      log.icon = contextPath + "/img/mime/" + log.persistentFile.mime.replace(/\//g,"_") + ".png";
      templateName = "fileLog"
      break;
  }

  // console.debug(log)

  var cgle = $.JST.createFromTemplate(log, templateName);

  /**
   LOG COMPATTI
   If the log has the same operator and its date is less than a minute closed to the last log make it compact
   */
  var lastLog = self.chatBoard.find(".twChatLog:first");
  var lastLogOpId = lastLog.attr("opId");
  var lastLogTime = new Date(parseInt(lastLog.attr("creationdate"))).format("yyyyMMddhhmm");

  var currentLogOpId = log.owner.id;
  var logTime = new Date(log.creationDate).format("yyyyMMddhhmm");
  var timeIsChanged = lastLogTime != logTime;

  var sameLogAuthor = currentLogOpId == lastLogOpId;

  if (lastLog && sameLogAuthor && !timeIsChanged && log.type == 0) {
    lastLog.addClass("same");
  }

  if(log.type == 0) {
    cgle.activateTeamworkLinks(true).emoticonize();
    var content = cgle.find(".twChatLogText").clone();
    content.find("img:first").remove();
    //todo ottimizzare
    if (content.html().trim().replace(/&nbsp;/g, "").length == 0) {
      cgle.find(".twChatLogText img").addClass("emoticonBig");
    }
  } else if(log.type == 2) {
    var img = cgle.find(".chat_image");
    img.data('pf', log.persistentFile);

    img.on("load",function(){
      self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight);
    })
  }

  daySep.after(cgle);
  return cgle;
};

TWChat.prototype.appendLog = function (log) {
  var self = this;
  var currentLogDate = new Date(log.creationDate).format("yyyyMMdd");

  /**
   DATE SEPARATOR
   Add date separator if it doesn't exist
   */
  var daySep = $("#daysep" + currentLogDate);
  if (daySep.length <= 0) {
    daySep = $("<div class='twChatDaySeparator' id='daysep" + currentLogDate + "'><span>" + (new Date().format("yyyyMMdd") == currentLogDate ? Date.today : new Date(log.creationDate).format()) + "</span></div>");
    self.chatBoard.append(daySep);
  }

  var templateName = "chatLog";
  switch (log.type) {
    case 0:
      templateName = "chatLog"
      break;
    case 1:
      templateName = "systemLog"
      break;
    case 2:
      log.icon = contextPath + "/img/mime/" + log.persistentFile.mime.replace(/\//g,"_") + ".png";
      templateName = "fileLog"
      break;
  }

  var cgle = $.JST.createFromTemplate(log, templateName);

  /**
   LOG COMPATTI
   If the log has the same operator and its date is less than a minute closed to the last log make it compact
   */
  var lastLogOpId = self.chatBoard.find(".twChatLog:last").attr("opId");
  var currentLogOpIdn = log.owner.id;

  var lastLogTime = new Date(parseInt(self.chatBoard.find(".twChatLog:last").attr("creationdate"))).format("yyyyMMddhhmm");
  var logTime = new Date(log.creationDate).format("yyyyMMddhhmm");
  var timeIsChanged = lastLogTime != logTime;

  if (currentLogOpIdn == lastLogOpId && !timeIsChanged && log.type == 0) {
    cgle.addClass("same");
  }

  if(log.type == 0) {
    cgle.activateTeamworkLinks(true).emoticonize();
    var content = cgle.find(".twChatLogText").clone();
    content.find("img:first").remove();
    if (content.html().trim().replace(/&nbsp;/g, "").length == 0) {
      cgle.find(".twChatLogText img").addClass("emoticonBig");
    }
  }else if(log.type == 2) {
    var img = cgle.find(".chat_image");
    img.data('pf', log.persistentFile);
    img.on("load",function(){
      self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight);
    })
  }

  self.chatBoard.append(cgle);
  return cgle;
};

/**
 APPEND LOGS
 Get all chat logs and append them in hta dashboard
 */
TWChat.prototype.appendLogs = function (chat, millis, refill) {
  //console.debug("appendLogs",chat, millis,refill);

  var self = this;
  //si recuperano i post della chat

  self.chatBoard.removeClass("home").removeAttr("hasmoretop");

  var request = {CM: "GETLOGS", chatId: chat.id};
  if (millis) {
    request["millis"] = millis;
  }
  if (refill) {
    request["refill"] = "yes";
  }
  $.getJSON(self.controller, request, function (response) {
    jsonResponseHandling(response);
    if (response.ok) {
      if (response.hasMoreTop) {
        self.chatBoard.attr("hasmoretop", "1");
      }

      //si calcola lo scroll dal fondo
      var actualScrollFromBottom = self.chatBoard.get(0).scrollHeight - self.chatBoard.scrollTop();

      //Si prende il primo separatore data
      var firstDateSeparator = $(".twChatDaySeparator:first", self.chatBoard);

      //si recupera la chat
      //var domChat = $("#twChatListElement-" + chatId);
      //var chat = domChat.data("chat");

      for (var i = 0; i < response.logs.length; i++) {
        var log = response.logs[i];
        //si aggiunge la chat
        log.chat = chat;
        var chatLogEl = self.prependLog(log);

        //se è refill e c'è il millis evidenzio il log perchè è si arriva da un search
        if (refill && millis) {
          if (chatLogEl.is("[creationdate=" + millis + "]")) {
            chatLogEl.addClass("highLight");
          }
        }
      }

      if (refill && millis) {
        var selected = $(".twChatLog.highLight[creationdate=" + millis + "]");
        if (selected.length > 0) {
          self.chatBoard.scrollTop(selected.position().top + self.chatBoard.scrollTop());
          selected.oneTime(1500, "remSel", function () {
            $(this).removeClass("highLight")
          });
        }
      } else if (millis) { // si mantiene lo scroll al punto in cui si era
        self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight - actualScrollFromBottom);
      } else {

        // setTimeout(function(){
        self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight);
        //},400)

        if (self.chatBoard.scrollTop() == 0)
          self.chatBoard.scroll();
      }
    }
  })
};

TWChat.prototype.drawRightHead = function (chat) {
  //console.debug("drawRightHead",chat )
  var self = this;

  //Aggiungiamo numero max di avatar in lista ed il tipo di chat
  $.extend(chat, {type: (chat.referredClass.indexOf("Task") >= 0 ? "task" : "group")});

  var membersObject = $.JST.createFromTemplate(chat, "chatRightHead");
  self.chatRightHead.show();
  self.chatRightHead.html(membersObject);
};


/**
 CHANGE STATUS
 Change notification status
 */
TWChat.prototype.toggleNotifications = function (el) {
  var self = this;
  var chat = $("#twChatListElement-" + self.activeChatId).data("chat");
  chat.chatStatus.desktopNotification = !chat.chatStatus.desktopNotification;

  if (!chat.chatStatus.desktopNotification)
    $("#twChatRightHead .notifications").addClass("muted");
  else
    $("#twChatRightHead .notifications").removeClass("muted");

  var request = {
    CM: "CHTSETDSKNOT",
    "chatId": chat.id,
    "deskNot": chat.chatStatus.desktopNotification ? "yes" : "no"
  };
  $.getJSON(twChat.controller, request, function (response) {
    jsonResponseHandling(response);
  });
};

/**
 DELETE CHAT
 Delete chat and its content
 */
TWChat.prototype.deleteChat = function (el) {
  var self=this;
  var chat = $("#twChatListElement-" + el.closestAttr("chatid")).data("chat");
  if (chat.ownerId == twComm.loggedOperator.id) {
    el.confirm(function () {
      var request = {CM: "DELCHAT", "chatId": chat.id};
      $.getJSON(twChat.controller, request, function (response) {
        jsonResponseHandling(response);
        if (response.ok){
          self.deleteChatElements(chat.id);
        }
      });
    })
  }
};


TWChat.prototype.deleteChatElements=function(chatId){
  var self=this;
  var domChat = $("#twChatListElement-" + chatId);
  domChat.remove();
  self.drawChatList();
  if (self.activeChatId == chatId) {
    //if ($(".twChatListElement:first").size() > 0) {
    //  $(".twChatListElement:first").click();
    //} else {
      self.drawEmptyChatPage();
    //}
  }

  //si aggiorna il contatore
  self.updateGlobalCounter();
}


TWChat.prototype.createIssue = function (el) {
  //console.debug("openTaskEditor",el);
  if (el.is("[taskId]")) {
    var logDom = el.closest(".twChatLog");
    var taskId = el.attr("taskId");
    var reqId = el.attr("resId");
    var when = new Date(parseInt(logDom.attr("creationdate"))).format();
    var descr = logDom.find(".twChatLogText").text();

    //var editUrl = contextPath + "/applications/teamwork/issue/issueEditorSimple.jsp?CM=AD&ISSUE_TASK=" + taskId + "&ISSUE_DESCRIPTION=" + encodeURIComponent(descr) + "&ISSUE_DATE_SIGNALLED=" + when + "&ASSIGNED_BY=" + reqId + "&ASSIGNEE=" + reqId;
    getTop().openIssueEditorInBlack("","AD","ISSUE_TASK=" + taskId + "&ISSUE_DESCRIPTION=" + encodeURIComponent(descr) + "&ISSUE_DATE_SIGNALLED=" + when + "&ASSIGNED_BY=" + reqId + "&ASSIGNEE=" + reqId);
  }

};

TWChat.prototype.openTaskEditor = function (el) {
  //console.debug("openTaskEditor",el);
  var self = this;
  getTop().location.href = contextPath + "/app/taskOverview.html??CM=ED&OBJID=" + el.attr("referredId");
  self.reduce(true);
};

TWChat.prototype.openCompanyEditor = function (el) {
  //console.debug("openCompanyEditor",el);
  var self = this;
  getTop().location.href = contextPath + "/resource/resourceEditor.html?CM=ED&OBJID=" + el.attr("referredId");
  self.reduce(true);
};

TWChat.prototype.openChatMembersBox = function (el) {
  var self = this;
  el.oneTime(500, function () {
    $("#twChatRightHead .teamworkIcon.more.closed").click();
  })
};

TWChat.prototype.open = function (chatId, millis, refill) {
  //console.debug("TWChat.prototype.open",chatId, millis, refill)
  var self = this;
  self.chatWindow.removeClass("closed");
  $("body").addClass("chatOpen");

  if (chatId) {
    var el = $("#twChatListElement-" + chatId);
    //se c'è già la la chat nella lista
    if (el.length > 0) {
      self.selectChat(el, millis, refill);
      self.chatWindow.removeClass("showChats");

      // si deve caricare la chat
    } else {
      self.loadAndDrawChatElement(chatId, function () {
        var el = $("#twChatListElement-" + chatId);
        self.selectChat(el, millis, refill);
        self.chatWindow.removeClass("showChats");
      })
    }

  } else if (self.chatList.find(".twChatListElement").length > 0) {
    self.chatWindow.addClass('showChats');
  } else {
    self.chatWindow.removeClass('showChats');
    self.drawEmptyChatPage();
  }

  getTop().$("#twChatOpener").addClass("open");
};

/**
 CLOSE CHAT WINDOW
 */
TWChat.prototype.close = function () {
  this.chatWindow.addClass("closed");
  $("body").removeClass("chatOpen");

  getTop().$("#twChatOpener").removeClass("open");
};

/**
 REDUCE THE WINDOW
 */
TWChat.prototype.reduce = function (forceReduce) {
  var self = this;

  if (forceReduce)
    self.chatWindow.addClass("pinned");
  else
    self.chatWindow.toggleClass("pinned");

  setTimeout(function () {
    self.chatBoard.scrollTop(self.chatBoard.get(0).scrollHeight);
  }, 500);

  self.chatInput.focus();
};

/**
 EDIT CHAT TITLE
 */
TWChat.prototype.editChatTitle = function (el) {

  $("#twChatHeaderTitle").off("blur keydown").on("blur keydown", function (e) {

    if (e.type == "blur" || (e.type == "keydown" && e.keyCode == 13 )) {
      var newTitle = $("#twChatHeaderTitle").text();
      self.renameChat(newTitle);
      $("#twChatHeaderTitle").attr("contenteditable", false);
      return false;
    }
  });

  $("#twChatHeaderTitle").attr("contenteditable", true).focus();
  document.execCommand('selectAll', false, null);

  var self = this;

};


/**
 OPEN CHAT MORE WINDOW
 */
TWChat.prototype.openChatMore = function (el) {
  if ($('#twChatRightMore').is(':visible')) {
    $('#twChatRightMore').slideUp(300);
    el.addClass("closed");
  } else {
    $('#twChatRightMore').slideDown(300);
    el.removeClass("closed");
  }
};

/**
 OPEN ADD MEMBER TOOL
 */
TWChat.prototype.addMemebers = function () {
  var request = {
    "PERM_REQUIRED": "TW_res_r",
    title: i18n.ADD_MEMBERS,
    WG_IDS: "",
    "noPrefill": "yes",
    "noSaveSearch": "yes",
    "loginOnly": "yes"
  };
  var ndo = openChooserPopup(contextPath + '/app/workgroup/workgroupPopup.html?' + $.param(request), 760, 580, function () {
    var iframe = $("iframe", ndo);
    var btn = iframe.get(0).contentWindow.$(".button.noprint.first");
    btn.removeAttr("onclick");
    btn.on("click", function () {
      var selIdsStr = iframe.get(0).contentWindow.$("#WG_IDS").val();
      var request = {CM: "ADDMEMB", "chatId": twChat.activeChatId, "WG_IDS": selIdsStr};
      //showSavingMessage();
      $.getJSON(twChat.controller, request, function (response) {
        jsonResponseHandling(response);
      });
      ndo.parent().remove();
    });
  });
};


/************************************************************************************************************************ UTILITIES */

function openChooserPopup(url, width, heigth, callback) {

  var ndo = top.createModalPopup(width, heigth, null, "#fff", null, window);

  callback = callback || function () {
  };

  var iframe = $("<iframe/>").attr("id", "chat-people").css({
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF',
    border: 0,
    position: "absolute",
    top: 0,
    left: 0
  }).prop("src", url).on("load", callback);

  ndo.append(iframe);
  return ndo;
}

/**
 REMOVE MYSELF FROM CHAT AVATARS
 */
function chatRemoveMyself(el) {
  el.confirm(function () {
    var request = {CM: "REMOVEME", chatId: twChat.activeChatId};
    //showSavingMessage();
    $.getJSON(twChat.controller, request, function (response) {
      jsonResponseHandling(response);
    });
  });
}

/************************************************************************************************************************ COPY / PASTE
 * COPY / PASTE
 Intercetta e gestisce il copia incolla nell'input della chat
 */
function handlePaste(e, editableDiv) {
  var types, pastedData, savedContent;
  // Browsers that support the 'text/html' type in the Clipboard API (Chrome, Firefox 22+)
  if (e && e.clipboardData && e.clipboardData.types && e.clipboardData.getData) {
    // Check for 'text/html' in types list. See abligh's answer below for deatils on
    // why the DOMStringList bit is needed
    types = e.clipboardData.types;
    if (((types instanceof DOMStringList) && types.contains("text/html")) ||
        (types.indexOf && types.indexOf('text/html') !== -1)) {
      // Extract data and pass it to callback
      pastedData = e.clipboardData.getData('text/html');
      processPaste(editableDiv, pastedData);
      // Stop the data from actually being pasted
      e.stopPropagation();
      e.preventDefault();
      return false;
    } else if(((types instanceof DOMStringList) && types.contains("text/plain")) ||
        (types.indexOf && types.indexOf('text/plain') !== -1)) {
      pastedData = e.clipboardData.getData('text/plain');
      pastedData = pastedData.replace(/\n/g, "<br>");
      processPaste(editableDiv, pastedData);
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }
  // Everything else: Move existing element contents to a DocumentFragment for safekeeping
  savedContent = document.createDocumentFragment();

  if(!editableDiv.childNodes)
    return;

  while (editableDiv.childNodes.length > 0) {
    savedContent.appendChild(editableDiv.childNodes[0]);
  }
  // Then wait for browser to paste content into it and cleanup
  waitForPastedData(editableDiv, savedContent);
  return true;
}

function placeCaretAtEnd(el) {
  if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
    var range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
}


function waitForPastedData(elem, savedContent) {
  // If data has been processes by browser, process it
  if (elem.childNodes && elem.childNodes.length > 0) {
    // Retrieve pasted content via innerHTML
    // (Alternatively loop through elem.childNodes or elem.getElementsByTagName here)
    var pastedData = elem.innerHTML;
    // Restore saved content
    elem.innerHTML = "";
    elem.appendChild(savedContent);
    // Call callback
    processPaste(elem, pastedData);

    // Else wait 20ms and try again
  } else {
    setTimeout(function () {
      waitForPastedData(elem, savedContent)
    }, 20);
  }
}

function processPaste(elem, pastedData) {
  var txt = pastedData.replace(/<\/p>/g, "</p><br>").replace(/<\/div>/g, "</div><br>").replace(/<br>/g, "###");
  var temp = $("<div/>").html(txt).text();
  temp = temp.replace(/###/g, "<br>"); //.replace(/</g, "&lt;").replace(/>/g, "&gt;")

  insertHtmlAtCursor(temp);
  //$(elem).html(temp);
  elem.focus();
}

function insertTextAtCursor(text) {

  var sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
    }
  } else if (document.selection && document.selection.createRange) {
    document.selection.createRange().html = text;
  }
}

function pasteHtmlAtCaret(html) {
  var sel, range;
  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(), node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else if (document.selection && document.selection.type != "Control") {
    // IE < 9
    document.selection.createRange().pasteHTML(html);
  }
}

function insertHtmlAtCursor(html) {
  var sel, range, node;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = window.getSelection().getRangeAt(0);
      range.collapse(false);

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(), node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    range.collapse(false);
    range.pasteHTML(html);
  }

  // place cursor at end
  range.collapse(false);

}


function saveSelection() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}

function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

/************************************************************************************************************************ END COPY / PASTE */
