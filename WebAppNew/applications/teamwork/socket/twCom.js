function TWComm() {
	this.socket;
	this.twWindow;
	this.loggedOperator;
	this.isOpen;
	this.isAway;
	this.lastActivity = new Date().getTime();

	this.hasFocus = false; // ci dice se la finestra corrente ha il focus (compresi gli iframe)
	this.queue = [];

	this.AWAY_TIMEOUT = 30000; //si va in stato away dopo x sec.
	this.actionManagers = {}; //mappa dove la chiave è l'eventType e il valore è un'array di funzioni che ricevono il message
}

TWComm.prototype.init = function (callback) {
	var self = this;

	//si aggiunge il desktopnotification action manager
	self.addActionManager("ws-notify", function (message) {
		if ("ws-notify" == message.eventType) {
			if (message.data)
				self.desktopNotification(message.data);
		}
	});

	if (!self.twWindow) {
		self.twWindow = top.frames["twTop"].contentWindow || top.frames["twTop"].window;
	}

	if (!self.socket) {
		var socket_url = window.location.protocol.replaceAll("http", "ws") + "//" + window.location.host + contextPath + "/TWSocket";
		self.socket = new WebSocket(socket_url);
	}

	window.onbeforeunload = function () {
		if (self.socket)
			self.socket.close();
	};

	var startd = new Date().getTime();

	self.socket.onopen = function (event) {
		//console.debug("socket.onopen",event)
		if (typeof (callback) == "function")
			callback(event);
		self.isOpen = true;
	};

	self.socket.onclose = function (event) {
		//console.log('close');
		self.isOpen = false;
		event.data = JSON.stringify({ eventType: "ws-socketClosed" });
		self.doAction(event, true);
	};

	self.socket.onmessage = function (e) {
		//console.log('message', e, e.message);
		self.doAction(e);
		self.isOpen = true;
	};
};

TWComm.prototype.addActionManager = function (eventName, action) {
	if (typeof (eventName) != "string" || typeof (action) != "function")
		return false;

	if (!this.actionManagers[eventName])
		this.actionManagers[eventName] = [];

	this.actionManagers[eventName].push(action);

};

TWComm.prototype.doAction = function (event, alwaysTrigger) {
	var self = this;
	var message = JSON.parse(event.data);
	//console.debug("doAction: "+message.eventType,message.data);

	//questo messaggio arriva dal server quando un client ha fatto logoff e serve per chiude i socket legati alla stessa session http
	if (message && message.eventType == "ws-forceDisconnection" && self.socket) {
		self.socket.close();
		location.reload();
	}

	var foundManager = false;
	//se trovo l'action per gestire questo evento bene, altrimenti (se non è forzato) lo accodo per essere triggerato come evento sulla pagina
	if (message && self.actionManagers[message.eventType]) {
		for (var i = 0; i < self.actionManagers[message.eventType].length; i++) {
			//console.debug("Found actionManager: "+message.eventType,message.data);
			self.actionManagers[message.eventType][i](message);
			foundManager = true;
		}

	}

	if (!foundManager || alwaysTrigger) {
		//console.debug("ActionManager not found. Enqueued as event: "+message.eventType,message.data);
		self.enqueueMessageAsEvent(message);
	}
};


//websocket check and keep-alive viene chiamata da un timer ogni
TWComm.prototype.checkAlive = function () {
	var self = this;

	if (self.isOpen) {
		//se dall'ultima attività è passato meno di AWAY_TIMEOUT se dormivi si manda un messaggio di wake-up altrimenti si conferma di essere svegli

		if (new Date().getTime() - self.lastActivity < self.AWAY_TIMEOUT) {
			if (self.isAway) {
				self.sendToServer("ws-wakeUp", { "ok": true });
			}
			self.isAway = false;

			//se è passato più di AWAY_TIMEOUT e sono sveglio in realtà allora sto dormendo e lo dico a tutti
		} else if (!self.isAway) {
			self.sendToServer("ws-sleep", { "ok": true });
			self.isAway = true;
		}
	}

};


TWComm.prototype.sendToServer = function (eventType, data) {
	//console.debug("TWComm.sendToServer ",eventType,data)
	var self = this;
	if (self.socket) {
		self.socket.send(JSON.stringify({ eventType: eventType, data: data }));
	}
};


TWComm.prototype.enqueueMessageAsEvent = function (message) {
	//console.debug("enqueueMessageAsEvent",message);

	var self = this;
	self.queue.push(message);

	clearInterval(self.manageQueue);
	self.manageQueue = setInterval(function () {
		if (self.queue.length == 0) {
			clearInterval(self.manageQueue);
		} else if (self.twWindow.twLoaded && self.twWindow.$) {

			while (self.queue.length > 0) {
				var message = self.queue.shift();
				//si notifica sul twSocketManager
				$("body").trigger(message.eventType, [message.data]);
				//si notifica su twTop (quello principale di TW)
				self.twWindow.$("body").trigger(message.eventType, [message.data]);
				//si notifica sugli eventuali iframe interni a TW
				self.twWindow.$("iframe").each(function () {
					if ((this.contentWindow || this.window).jQuery) // solo se nell'iframe è caricato jQuery
						(this.contentWindow || this.window).$("body").trigger(message.eventType, [message.data]);
				})
			}

		}
	}, 1000)
};

/**
 * Desktop notifications::
 *
 * @param options:
 *                 title:
 *                 badge:
 *                 body: contenuto testuale della notifica
 *                 icon: avatar o simili
 *                 image: immagine messa nel corpo del testo
 *                 url: dove andare con il click
 *                 script: cosa eseguire con il click
 *                 sound: url del file audio della notifica
 *                 requireInteraction: se true non si chiude in automatico
 *                 duration: in millisecond
 *
 * options list:
 * https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification
 */
TWComm.prototype.desktopNotification = function (options) {
	if (!options)
		return;

	var notify = function (options) {
		//console.debug("notify",options)
		new Audio(typeof (options.sound) == "string" ? options.sound : contextPath + '/img/notifyDefault.mp3').play();

		if (!options.icon)
			options.icon = contextPath + "/img/notifyDefault.jpg";

		var notification = new Notification(options.title, options);

		options.duration = options.duration || 14000;
		setTimeout(notification.close.bind(notification), options.duration);

		if (options.url) {
			notification.onclick = function () { window.open(options.url, "twprojectmain"); }
		} else if (options.script) {
			notification.onclick = function () { eval(options.script) };
		}
	};

	if (!("Notification" in window)) {
		// Let's check whether notification permissions have already been granted
	} else if (Notification.permission === "granted") {
		// If it's okay let's create a notification
		notify(options);
	}

	// Otherwise, we need to ask the user for permission
	else if (Notification.permission !== "denied") {
		Notification.requestPermission(function (permission) {
			// If the user accepts, let's create a notification
			if (permission === "granted") {
				notify(options);
			}
		});
	}
};

