



/*
*
* TWPROJECT javascript framework
*
*/
var serverURL = "https://demo.twproject.com";
var contextPath = "";
var buildNumber = "65017";
var socketEnbled = true;  //se true le pagine vengono caricate dentro un iframe




//**************************************************************************************************  jquery/ui/jquery-ui.js
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function (t, e) { function i(e, i) { var n, o, a, r = e.nodeName.toLowerCase(); return "area" === r ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap=#" + o + "]")[0], !!a && s(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && s(e) } function s(e) { return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () { return "hidden" === t.css(this, "visibility") }).length } var n = 0, o = /^ui-id-\d+$/; t.ui = t.ui || {}, t.extend(t.ui, { version: "1.10.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), t.fn.extend({ focus: function (e) { return function (i, s) { return "number" == typeof i ? this.each(function () { var e = this; setTimeout(function () { t(e).focus(), s && s.call(e) }, i) }) : e.apply(this, arguments) } }(t.fn.focus), scrollParent: function () { var e; return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () { return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x")) }).eq(0) : this.parents().filter(function () { return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e }, zIndex: function (i) { if (i !== e) return this.css("zIndex", i); if (this.length) for (var s, n, o = t(this[0]); o.length && o[0] !== document;) { if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n; o = o.parent() } return 0 }, uniqueId: function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++n) }) }, removeUniqueId: function () { return this.each(function () { o.test(this.id) && t(this).removeAttr("id") }) } }), t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function (e) { return function (i) { return !!t.data(i, e) } }) : function (e, i, s) { return !!t.data(e, s[3]) }, focusable: function (e) { return i(e, !isNaN(t.attr(e, "tabindex"))) }, tabbable: function (e) { var s = t.attr(e, "tabindex"), n = isNaN(s); return (n || s >= 0) && i(e, !n) } }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, s) { function n(e, i, s, n) { return t.each(o, function () { i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i } var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], a = s.toLowerCase(), r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight }; t.fn["inner" + s] = function (i) { return i === e ? r["inner" + s].call(this) : this.each(function () { t(this).css(a, n(this, i) + "px") }) }, t.fn["outer" + s] = function (e, i) { return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function () { t(this).css(a, n(this, e, !0, i) + "px") }) } }), t.fn.addBack || (t.fn.addBack = function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) { return function (i) { return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this) } }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({ disableSelection: function () { return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) { t.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } }), t.extend(t.ui, { plugin: { add: function (e, i, s) { var n, o = t.ui[e].prototype; for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]) }, call: function (t, e, i) { var s, n = t.plugins[e]; if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (s = 0; n.length > s; s++)t.options[n[s][0]] && n[s][1].apply(t.element, i) } }, hasScroll: function (e, i) { if ("hidden" === t(e).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1; return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n) } }) })(jQuery), function (t, e) { var i = 0, s = Array.prototype.slice, n = t.cleanData; t.cleanData = function (e) { for (var i, s = 0; null != (i = e[s]); s++)try { t(i).triggerHandler("remove") } catch (o) { } n(e) }, t.widget = function (i, s, n) { var o, a, r, h, l = {}, c = i.split(".")[0]; i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) { return !!t.data(e, o) }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) { return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i) }, t.extend(r, a, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) { return t.isFunction(n) ? (l[i] = function () { var t = function () { return s.prototype[i].apply(this, arguments) }, e = function (t) { return s.prototype[i].apply(this, t) }; return function () { var i, s = this._super, o = this._superApply; return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i } }(), e) : (l[i] = n, e) }), r.prototype = t.widget.extend(h, { widgetEventPrefix: a ? h.widgetEventPrefix || i : i }, l, { constructor: r, namespace: c, widgetName: i, widgetFullName: o }), a ? (t.each(a._childConstructors, function (e, i) { var s = i.prototype; t.widget(s.namespace + "." + s.widgetName, r, i._proto) }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r) }, t.widget.extend = function (i) { for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o); return i }, t.widget.bridge = function (i, n) { var o = n.prototype.widgetFullName || i; t.fn[i] = function (a) { var r = "string" == typeof a, h = s.call(arguments, 1), l = this; return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () { var s, n = t.data(this, o); return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'") }) : this.each(function () { var e = t.data(this, o); e ? e.option(a || {})._init() : t.data(this, o, new n(a, this)) }), l } }, t.Widget = function () { }, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (e, s) { s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++ , this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, { remove: function (t) { t.target === s && this.destroy() } }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: t.noop, widget: function () { return this.element }, option: function (i, s) { var n, o, a, r = i; if (0 === arguments.length) return t.widget.extend({}, this.options); if ("string" == typeof i) if (r = {}, n = i.split("."), i = n.shift(), n.length) { for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)o[n[a]] = o[n[a]] || {}, o = o[n[a]]; if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i]; o[i] = s } else { if (1 === arguments.length) return this.options[i] === e ? null : this.options[i]; r[i] = s } return this._setOptions(r), this }, _setOptions: function (t) { var e; for (e in t) this._setOption(e, t[e]); return this }, _setOption: function (t, e) { return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this }, enable: function () { return this._setOption("disabled", !1) }, disable: function () { return this._setOption("disabled", !0) }, _on: function (i, s, n) { var o, a = this; "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) { function h() { return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e } "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++); var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2]; u ? o.delegate(u, c, h) : s.bind(c, h) }) }, _off: function (t, e) { e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e) }, _delay: function (t, e) { function i() { return ("string" == typeof t ? s[t] : t).apply(s, arguments) } var s = this; return setTimeout(i, e || 0) }, _hoverable: function (e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function (e) { t(e.currentTarget).addClass("ui-state-hover") }, mouseleave: function (e) { t(e.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function (e) { t(e.currentTarget).addClass("ui-state-focus") }, focusout: function (e) { t(e.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (e, i, s) { var n, o, a = this.options[e]; if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]); return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) { t.Widget.prototype["_" + e] = function (s, n, o) { "string" == typeof n && (n = { effect: n }); var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e; n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) { t(this)[e](), o && o.call(s[0]), i() }) } }) }(jQuery), function (t) { var e = !1; t(document).mouseup(function () { e = !1 }), t.widget("ui.mouse", { version: "1.10.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () { var e = this; this.element.bind("mousedown." + this.widgetName, function (t) { return e._mouseDown(t) }).bind("click." + this.widgetName, function (i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (i) { if (!e) { this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i; var s = this, n = 1 === i.which, o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1; return n && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { s.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) { return s._mouseMove(t) }, this._mouseUpDelegate = function (t) { return s._mouseUp(t) }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0 } }, _mouseMove: function (e) { return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) }, _mouseUp: function (e) { return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1 }, _mouseDistanceMet: function (t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }) }(jQuery), function (t) { t.widget("ui.draggable", t.ui.mouse, { version: "1.10.4", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () { "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit() }, _destroy: function () { this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy() }, _mouseCapture: function (e) { var i = this.options; return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () { t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 }).css(t(this).offset()).appendTo("body") }), !0) : !1) }, _mouseStart: function (e) { var i = this.options; return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, this.offset.scroll = !1, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) }, _mouseDrag: function (e, i) { if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1; this.position = s.position } return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1 }, _mouseStop: function (e) { var i = this, s = !1; return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { i._trigger("stop", e) !== !1 && i._clear() }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1 }, _mouseUp: function (e) { return t("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function (e) { return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0 }, _createHelper: function (e) { var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s }, _adjustOffsetFromHelper: function (e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _getParentOffset: function () { var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var t = this.element.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var e, i, s, n = this.options; return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined) }, _convertPositionTo: function (e, i) { i || (i = this.position); var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent; return this.offset.scroll || (this.offset.scroll = { top: n.scrollTop(), left: n.scrollLeft() }), { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s } }, _generatePosition: function (e) { var i, s, n, o, a = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = e.pageX, l = e.pageY; return this.offset.scroll || (this.offset.scroll = { top: r.scrollTop(), left: r.scrollLeft() }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) } }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1 }, _trigger: function (e, i, s) { return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } }), t.ui.plugin.add("draggable", "connectToSortable", { start: function (e, i) { var s = t(this).data("ui-draggable"), n = s.options, o = t.extend({}, i, { item: s.element }); s.sortables = [], t(n.connectToSortable).each(function () { var i = t.data(this, "ui-sortable"); i && !i.options.disabled && (s.sortables.push({ instance: i, shouldRevert: i.options.revert }), i.refreshPositions(), i._trigger("activate", e, o)) }) }, stop: function (e, i) { var s = t(this).data("ui-draggable"), n = t.extend({}, i, { item: s.element }); t.each(s.sortables, function () { this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n)) }) }, drag: function (e, i) { var s = t(this).data("ui-draggable"), n = this; t.each(s.sortables, function () { var o = !1, a = this; this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function () { return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () { return i.helper[0] }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1) }) } }), t.ui.plugin.add("draggable", "cursor", { start: function () { var e = t("body"), i = t(this).data("ui-draggable").options; e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor) }, stop: function () { var e = t(this).data("ui-draggable").options; e._cursor && t("body").css("cursor", e._cursor) } }), t.ui.plugin.add("draggable", "opacity", { start: function (e, i) { var s = t(i.helper), n = t(this).data("ui-draggable").options; s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity) }, stop: function (e, i) { var s = t(this).data("ui-draggable").options; s._opacity && t(i.helper).css("opacity", s._opacity) } }), t.ui.plugin.add("draggable", "scroll", { start: function () { var e = t(this).data("ui-draggable"); e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset()) }, drag: function (e) { var i = t(this).data("ui-draggable"), s = i.options, n = !1; i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e) } }), t.ui.plugin.add("draggable", "snap", { start: function () { var e = t(this).data("ui-draggable"), i = e.options; e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () { var i = t(this), s = i.offset(); this !== e.element[0] && e.snapElements.push({ item: this, width: i.outerWidth(), height: i.outerHeight(), top: s.top, left: s.left }) }) }, drag: function (e, i) { var s, n, o, a, r, h, l, c, u, d, p = t(this).data("ui-draggable"), f = p.options, g = f.snapTolerance, m = i.offset.left, v = m + p.helperProportions.width, _ = i.offset.top, b = _ + p.helperProportions.height; for (u = p.snapElements.length - 1; u >= 0; u--)r = p.snapElements[u].left, h = r + p.snapElements[u].width, l = p.snapElements[u].top, c = l + p.snapElements[u].height, r - g > v || m > h + g || l - g > b || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(l - b), n = g >= Math.abs(c - _), o = g >= Math.abs(r - v), a = g >= Math.abs(h - m), s && (i.position.top = p._convertPositionTo("relative", { top: l - p.helperProportions.height, left: 0 }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", { top: c, left: 0 }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", { top: 0, left: r - p.helperProportions.width }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", { top: 0, left: h }).left - p.margins.left)), d = s || n || o || a, "outer" !== f.snapMode && (s = g >= Math.abs(l - _), n = g >= Math.abs(c - b), o = g >= Math.abs(r - m), a = g >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", { top: l, left: 0 }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", { top: c - p.helperProportions.height, left: 0 }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", { top: 0, left: r }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", { top: 0, left: h - p.helperProportions.width }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u].snapping = s || n || o || a || d) } }), t.ui.plugin.add("draggable", "stack", { start: function () { var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function (e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) }); s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) { t(this).css("zIndex", e + i) }), this.css("zIndex", e + s.length)) } }), t.ui.plugin.add("draggable", "zIndex", { start: function (e, i) { var s = t(i.helper), n = t(this).data("ui-draggable").options; s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex) }, stop: function (e, i) { var s = t(this).data("ui-draggable").options; s._zIndex && t(i.helper).css("zIndex", s._zIndex) } }) }(jQuery), function (t) {
    function e(t, e, i) { return t > e && e + i > t } t.widget("ui.droppable", {
        version: "1.10.4", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) { return t.is(s) }, this.proportions = function () { return arguments.length ? (e = arguments[0], undefined) : e ? e : e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
        }, _destroy: function () { for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)i[e] === this && i.splice(e, 1); this.element.removeClass("ui-droppable ui-droppable-disabled") }, _setOption: function (e, i) { "accept" === e && (this.accept = t.isFunction(i) ? i : function (t) { return t.is(i) }), t.Widget.prototype._setOption.apply(this, arguments) }, _activate: function (e) { var i = t.ui.ddmanager.current; this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i)) }, _deactivate: function (e) { var i = t.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i)) }, _over: function (e) { var i = t.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i))) }, _out: function (e) { var i = t.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i))) }, _drop: function (e, i) { var s = i || t.ui.ddmanager.current, n = !1; return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () { var e = t.data(this, "ui-droppable"); return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, { offset: e.element.offset() }), e.options.tolerance) ? (n = !0, !1) : undefined }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1 }, ui: function (t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } }
    }), t.ui.intersect = function (t, i, s) { if (!i.offset) return !1; var n, o, a = (t.positionAbs || t.position.absolute).left, r = (t.positionAbs || t.position.absolute).top, h = a + t.helperProportions.width, l = r + t.helperProportions.height, c = i.offset.left, u = i.offset.top, d = c + i.proportions().width, p = u + i.proportions().height; switch (s) { case "fit": return a >= c && d >= h && r >= u && p >= l; case "intersect": return a + t.helperProportions.width / 2 > c && d > h - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > l - t.helperProportions.height / 2; case "pointer": return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(o, u, i.proportions().height) && e(n, c, i.proportions().width); case "touch": return (r >= u && p >= r || l >= u && p >= l || u > r && l > p) && (a >= c && d >= a || h >= c && d >= h || c > a && h > d); default: return !1 } }, t.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (e, i) { var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack(); t: for (s = 0; o.length > s; s++)if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) { for (n = 0; r.length > n; n++)if (r[n] === o[s].element[0]) { o[s].proportions().height = 0; continue t } o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight })) } }, drop: function (e, i) { var s = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () { this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s }, dragStart: function (e, i) { e.element.parentsUntil("body").bind("scroll.droppable", function () { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) }, drag: function (e, i) { e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () { if (!this.options.disabled && !this.greedyChild && this.visible) { var s, n, o, a = t.ui.intersect(e, this, this.options.tolerance), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null; r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () { return t.data(this, "ui-droppable").options.scope === n }), o.length && (s = t.data(o[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i))) } }) }, dragStop: function (e, i) { e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) } }
}(jQuery), function (t) { function e(t) { return parseInt(t, 10) || 0 } function i(t) { return !isNaN(parseInt(t, 10)) } t.widget("ui.resizable", t.ui.mouse, { version: "1.10.4", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _create: function () { var e, i, s, n, o, a = this, r = this.options; if (this.element.addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n); this._renderAxis = function (e) { var i, s, n, o; e = e || this.element; for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () { a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () { r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show()) }).mouseleave(function () { r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide()) })), this._mouseInit() }, _destroy: function () { this._mouseDestroy(); var e, i = function (e) { t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _mouseCapture: function (e) { var i, s, n = !1; for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0); return !this.options.disabled && n }, _mouseStart: function (i) { var s, n, o, a = this.options, r = this.element.position(), h = this.element; return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({ position: "absolute", top: h.css("top"), left: h.css("left") }) : h.is(".ui-draggable") && h.css({ position: "absolute", top: r.top, left: r.left }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), a.containment && (s += t(a.containment).scrollLeft() || 0, n += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: s, top: n }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: h.width(), height: h.height() }, this.originalSize = this._helper ? { width: h.outerWidth(), height: h.outerHeight() } : { width: h.width(), height: h.height() }, this.originalPosition = { left: s, top: n }, this.sizeDiff = { width: h.outerWidth() - h.width(), height: h.outerHeight() - h.height() }, this.originalMousePosition = { left: i.pageX, top: i.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0 }, _mouseDrag: function (e) { var i, s = this.helper, n = {}, o = this.originalMousePosition, a = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - o.left || 0, d = e.pageY - o.top || 0, p = this._change[a]; return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1 }, _mouseStop: function (e) { this.resizing = !1; var i, s, n, o, a, r, h, l = this.options, c = this; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = { width: c.helper.width() - o, height: c.helper.height() - n }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, { top: h, left: r })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1 }, _updateVirtualBoundaries: function (t) { var e, s, n, o, a, r = this.options; a = { minWidth: i(r.minWidth) ? r.minWidth : 0, maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: i(r.minHeight) ? r.minHeight : 0, maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, s = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), a.maxWidth > s && (a.maxWidth = s), a.maxHeight > o && (a.maxHeight = o)), this._vBoundaries = a }, _updateCache: function (t) { this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width) }, _updateRatio: function (t) { var e = this.position, s = this.size, n = this.axis; return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t }, _respectSize: function (t) { var e = this._vBoundaries, s = this.axis, n = i(t.width) && e.maxWidth && e.maxWidth < t.width, o = i(t.height) && e.maxHeight && e.maxHeight < t.height, a = i(t.width) && e.minWidth && e.minWidth > t.width, r = i(t.height) && e.minHeight && e.minHeight > t.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, c = /sw|nw|w/.test(s), u = /nw|ne|n/.test(s); return a && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), o && (t.height = e.maxHeight), a && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), o && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) { var t, e, i, s, n, o = this.helper || this.element; for (t = 0; this._proportionallyResizeElements.length > t; t++) { if (n = this._proportionallyResizeElements[t], !this.borderDif) for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0); n.css({ height: o.height() - this.borderDif[0] - this.borderDif[2] || 0, width: o.width() - this.borderDif[1] - this.borderDif[3] || 0 }) } } }, _renderProxy: function () { var e = this.element, i = this.options; this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function (t, e) { return { width: this.originalSize.width + e } }, w: function (t, e) { var i = this.originalSize, s = this.originalPosition; return { left: s.left + e, width: i.width - e } }, n: function (t, e, i) { var s = this.originalSize, n = this.originalPosition; return { top: n.top + i, height: s.height - i } }, s: function (t, e, i) { return { height: this.originalSize.height + i } }, se: function (e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, sw: function (e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s])) }, ne: function (e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, nw: function (e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s])) } }, _propagate: function (e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), t.ui.plugin.add("resizable", "animate", { stop: function (e) { var i = t(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, o = n.length && /textarea/i.test(n[0].nodeName), a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width, h = { width: i.size.width - r, height: i.size.height - a }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null; i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function () { var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) }; n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e) } }) } }), t.ui.plugin.add("resizable", "containment", { start: function () { var i, s, n, o, a, r, h, l = t(this).data("ui-resizable"), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d; p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) { s[t] = e(i.css("padding" + n)) }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = { height: i.innerHeight() - s[3], width: i.innerWidth() - s[1] }, n = l.containerOffset, o = l.containerSize.height, a = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a, h = t.ui.hasScroll(p) ? p.scrollHeight : o, l.parentData = { element: p, left: n.left, top: n.top, width: r, height: h })) }, resize: function (e) { var i, s, n, o, a = t(this).data("ui-resizable"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = { top: 0, left: 0 }, d = a.containerElement; d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? h.top : 0), a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top, i = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width), s = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - h.top) + a.sizeDiff.height), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o && (i -= Math.abs(a.parentData.left)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio)) }, stop: function () { var e = t(this).data("ui-resizable"), i = e.options, s = e.containerOffset, n = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(), h = a.outerWidth() - e.sizeDiff.width, l = a.outerHeight() - e.sizeDiff.height; e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }) } }), t.ui.plugin.add("resizable", "alsoResize", { start: function () { var e = t(this).data("ui-resizable"), i = e.options, s = function (e) { t(e).each(function () { var e = t(this); e.data("ui-resizable-alsoresize", { width: parseInt(e.width(), 10), height: parseInt(e.height(), 10), left: parseInt(e.css("left"), 10), top: parseInt(e.css("top"), 10) }) }) }; "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) { s(t) }) }, resize: function (e, i) { var s = t(this).data("ui-resizable"), n = s.options, o = s.originalSize, a = s.originalPosition, r = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - a.top || 0, left: s.position.left - a.left || 0 }, h = function (e, s) { t(e).each(function () { var e = t(this), n = t(this).data("ui-resizable-alsoresize"), o = {}, a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; t.each(a, function (t, e) { var i = (n[e] || 0) + (r[e] || 0); i && i >= 0 && (o[e] = i || null) }), e.css(o) }) }; "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) { h(t, e) }) }, stop: function () { t(this).removeData("resizable-alsoresize") } }), t.ui.plugin.add("resizable", "ghost", { start: function () { var e = t(this).data("ui-resizable"), i = e.options, s = e.size; e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper) }, resize: function () { var e = t(this).data("ui-resizable"); e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width }) }, stop: function () { var e = t(this).data("ui-resizable"); e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0)) } }), t.ui.plugin.add("resizable", "grid", { resize: function () { var e = t(this).data("ui-resizable"), i = e.options, s = e.size, n = e.originalSize, o = e.originalPosition, a = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p; i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = o.top - u) : (e.size.height = l, e.position.top = o.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = o.left - c) : (e.size.width = h, e.position.left = o.left + n.width - h)) } }) }(jQuery), function (t) { t.widget("ui.selectable", t.ui.mouse, { version: "1.10.4", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () { var e, i = this; this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () { e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () { var e = t(this), i = e.offset(); t.data(this, "selectable-item", { element: this, $element: e, left: i.left, top: i.top, right: i.left + e.outerWidth(), bottom: i.top + e.outerHeight(), startselected: !1, selected: e.hasClass("ui-selected"), selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting") }) }) }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>") }, _destroy: function () { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() }, _mouseStart: function (e) { var i = this, s = this.options; this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () { var s = t.data(this, "selectable-item"); s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element })) }), t(e.target).parents().addBack().each(function () { var s, n = t.data(this, "selectable-item"); return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1) : undefined })) }, _mouseDrag: function (e) { if (this.dragged = !0, !this.options.disabled) { var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY; return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: h - a }), this.selectees.each(function () { var i = t.data(this, "selectable-item"), l = !1; i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || o > i.right || i.top > h || a > i.bottom) : "fit" === n.tolerance && (l = i.left > o && r > i.right && i.top > a && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function (e) { var i = this; return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () { var s = t.data(this, "selectable-item"); s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element }) }), t(".ui-selecting", this.element[0]).each(function () { var s = t.data(this, "selectable-item"); s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element }) }), this._trigger("stop", e), this.helper.remove(), !1 } }) }(jQuery), function (t) {
    function e(t, e, i) { return t > e && e + i > t } function i(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) } t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _create: function () { var t = this.options; this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0 }, _destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item"); return this }, _setOption: function (e, i) { "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments) }, _mouseCapture: function (e, i) { var s = null, n = !1, o = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () { return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () { this === e.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function (e, i, s) { var n, o, a = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", e, this._uiHash(this)); return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0 }, _mouseDrag: function (e) {
            var i, s, n, o, a = this.options, r = !1; for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash()); break
            } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        }, _mouseStop: function (e, i) { if (e) { if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) { var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {}; o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () { s._clear(e) }) } else this._clear(e, i); return !1 } }, cancel: function () { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function (e) { var i = this._getItemsAsjQuery(e && e.connected), s = []; return e = e || {}, t(i).each(function () { var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/); i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2])) }), !s.length && e.key && s.push(e.key + "="), s.join("&") }, toArray: function (e) { var i = this._getItemsAsjQuery(e && e.connected), s = []; return e = e || {}, i.each(function () { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s }, _intersectsWith: function (t) { var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2 }, _intersectsWithPointer: function (t) { var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection(); return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1 }, _intersectsWithSides: function (t) { var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection(); return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i) }, _getDragVerticalDirection: function () { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") }, refresh: function (t) { return this._refreshItems(t), this.refreshPositions(), this }, _connectWith: function () { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith }, _getItemsAsjQuery: function (e) { function i() { r.push(this) } var s, n, o, a, r = [], h = [], l = this._connectWith(); if (l && e) for (s = l.length - 1; s >= 0; s--)for (o = t(l[s]), n = o.length - 1; n >= 0; n--)a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]); for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i); return t(r) }, _removeCurrentsFromItems: function () { var e = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = t.grep(this.items, function (t) { for (var i = 0; e.length > i; i++)if (e[i] === t.item[0]) return !1; return !0 }) }, _refreshItems: function (e) { this.items = [], this.containers = [this]; var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]], d = this._connectWith(); if (d && this.ready) for (i = d.length - 1; i >= 0; i--)for (n = t(d[i]), s = n.length - 1; s >= 0; s--)o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o)); for (i = u.length - 1; i >= 0; i--)for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function (e) { this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, s, n, o; for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function (e) { e = e || this; var i, s = e.options; s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function () { var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper"); return "tr" === s ? e.currentItem.children().each(function () { t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n) }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n }, update: function (t, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))) } }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder) }, _contactContainers: function (s) { var n, o, a, r, h, l, c, u, d, p, f = null, g = null; for (n = this.containers.length - 1; n >= 0; n--)if (!t.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) { if (f && t.contains(this.containers[n].element[0], f.element[0])) continue; f = this.containers[n], g = n } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0); if (f) if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1); else { for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down")); if (!r && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[g]) return; r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1 } }, _createHelper: function (e) { var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function (e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var e, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function (e, i) { i || (i = this.position); var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s } }, _generatePosition: function (e) { var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (t, e, i, s) { i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter; this._delay(function () { n === this.counter && this.refreshPositions(!s) }) }, _clear: function (t, e) { function i(t, e, i) { return function (s) { i._trigger(t, s, e._uiHash(e)) } } this.reverting = !1; var s, n = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !e && n.push(function (t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (n.push(function (t) { this._trigger("remove", t, this._uiHash()) }), n.push(function (t) { return function (e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function (t) { return function (e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) { if (!e) { for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++)n[s].call(this, t); this._trigger("stop", t, this._uiHash()) } return this.fromOutside = !1, !1 } if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) { for (s = 0; n.length > s; s++)n[s].call(this, t); this._trigger("stop", t, this._uiHash()) } return this.fromOutside = !1, !0 }, _trigger: function () { t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    })
}(jQuery), function (t, e) { var i = "ui-effects-"; t.effects = { effect: {} }, function (t, e) { function i(t, e, i) { var s = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t) } function s(i) { var s = l(), n = s._rgba = []; return i = i.toLowerCase(), f(h, function (t, o) { var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba"; return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i] } function n(t, e, i) { return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t } var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }], l = t.Color = function (e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) }, c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, u = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, d = l.support = {}, p = t("<p>")[0], f = t.each; p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, { parse: function (n, a, r, h) { if (n === e) return this._rgba = [null, null, null, null], this; (n.jquery || n.nodeType) && (n = t(n).css(a), a = e); var u = this, d = t.type(n), p = this._rgba = []; return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) { p[e.idx] = i(n[e.idx], e) }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) { n[e.cache] && (u[e.cache] = n[e.cache].slice()) }) : f(c, function (e, s) { var o = s.cache; f(s.props, function (t, e) { if (!u[o] && s.to) { if ("alpha" === t || null == n[t]) return; u[o] = s.to(u._rgba) } u[o][e.idx] = i(n[t], e, !0) }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o]))) }), this) : e }, is: function (t) { var i = l(t), s = !0, n = this; return f(c, function (t, o) { var a, r = i[o.cache]; return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) { return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e })), s }), s }, _space: function () { var t = [], e = this; return f(c, function (i, s) { e[s.cache] && t.push(i) }), t.pop() }, transition: function (t, e) { var s = l(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? l("transparent") : this, r = a[o.cache] || o.to(a._rgba), h = r.slice(); return s = s[o.cache], f(o.props, function (t, n) { var o = n.idx, a = r[o], l = s[o], c = u[n.type] || {}; null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n))) }), this[n](h) }, blend: function (e) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba; return l(t.map(i, function (t, e) { return (1 - s) * n[e] + s * t })) }, toRgbaString: function () { var e = "rgba(", i = t.map(this._rgba, function (t, e) { return null == t ? e > 2 ? 1 : 0 : t }); return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")" }, toHslaString: function () { var e = "hsla(", i = t.map(this.hsla(), function (t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t }); return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")" }, toHexString: function (e) { var i = this._rgba.slice(), s = i.pop(); return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c; return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a] }, c.hsla.from = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a; return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o] }, f(c, function (s, n) { var o = n.props, a = n.cache, h = n.to, c = n.from; l.fn[s] = function (s) { if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice(); var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice(); return f(o, function (t, e) { var s = u["object" === r ? t : e.idx]; null == s && (s = d[e.idx]), d[e.idx] = i(s, e) }), c ? (n = l(c(d)), n[a] = d, n) : l(d) }, f(o, function (e, i) { l.fn[e] || (l.fn[e] = function (n) { var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx]; return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l))) }) }) }), l.hook = function (e) { var i = e.split(" "); f(i, function (e, i) { t.cssHooks[i] = { set: function (e, n) { var o, a, r = ""; if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) { if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) { for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;)try { r = t.css(a, "backgroundColor"), a = a.parentNode } catch (h) { } n = n.blend(r && "transparent" !== r ? r : "_default") } n = n.toRgbaString() } try { e.style[i] = n } catch (h) { } } }, t.fx.step[i] = function (e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) } }) }, l.hook(a), t.cssHooks.borderColor = { expand: function (t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function (i, s) { e["border" + s + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(jQuery), function () { function i(e) { var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {}; if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]); return o } function s(e, i) { var s, n, a = {}; for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n)); return a } var n = ["add", "remove", "toggle"], o = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) { t.fx.step[i] = function (t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0) } }), t.fn.addBack || (t.fn.addBack = function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function (e, o, a, r) { var h = t.speed(o, a, r); return this.queue(function () { var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a; l = l.map(function () { var e = t(this); return { el: e, start: i(this) } }), o = function () { t.each(n, function (t, i) { e[i] && a[i + "Class"](e[i]) }) }, o(), l = l.map(function () { return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this }), a.attr("class", r), l = l.map(function () { var e = this, i = t.Deferred(), s = t.extend({}, h, { queue: !1, complete: function () { i.resolve(e) } }); return this.el.animate(this.diff, s), i.promise() }), t.when.apply(t, l.get()).done(function () { o(), t.each(arguments, function () { var e = this.el; t.each(this.diff, function (t) { e.css(t, "") }) }), h.complete.call(a[0]) }) }) }, t.fn.extend({ addClass: function (e) { return function (i, s, n, o) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function (e) { return function (i, s, n, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function (i) { return function (s, n, o, a, r) { return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? { add: s } : { remove: s }, o, a, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: s }, n, o, a) } }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o) } }) }(), function () { function s(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e } function n(e) { return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0 } t.extend(t.effects, { version: "1.10.4", save: function (t, e) { for (var s = 0; e.length > s; s++)null !== e[s] && t.data(i + e[s], t[0].style[e[s]]) }, restore: function (t, s) { var n, o; for (o = 0; s.length > o; o++)null !== s[o] && (n = t.data(i + s[o]), n === e && (n = ""), t.css(s[o], n)) }, setMode: function (t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e }, getBaseline: function (t, e) { var i, s; switch (t[0]) { case "top": i = 0; break; case "middle": i = .5; break; case "bottom": i = 1; break; default: i = t[0] / e.height }switch (t[1]) { case "left": s = 0; break; case "center": s = .5; break; case "right": s = 1; break; default: s = t[1] / e.width }return { x: s, y: i } }, createWrapper: function (e) { if (e.parent().is(".ui-effects-wrapper")) return e.parent(); var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float") }, s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), n = { width: e.width(), height: e.height() }, o = document.activeElement; try { o.id } catch (a) { o = document.body } return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function (t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show() }, removeWrapper: function (e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e }, setTransition: function (e, i, s, n) { return n = n || {}, t.each(i, function (t, i) { var o = e.cssUnit(i); o[0] > 0 && (n[i] = o[0] * s + o[1]) }), n } }), t.fn.extend({ effect: function () { function e(e) { function s() { t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e() } var n = t(this), o = i.complete, r = i.mode; (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : a.call(n[0], i, s) } var i = s.apply(this, arguments), n = i.mode, o = i.queue, a = t.effects.effect[i.effect]; return t.fx.off || !a ? n ? this[n](i.duration, i.complete) : this.each(function () { i.complete && i.complete.call(this) }) : o === !1 ? this.each(e) : this.queue(o || "fx", e) }, show: function (t) { return function (e) { if (n(e)) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "show", this.effect.call(this, i) } }(t.fn.show), hide: function (t) { return function (e) { if (n(e)) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "hide", this.effect.call(this, i) } }(t.fn.hide), toggle: function (t) { return function (e) { if (n(e) || "boolean" == typeof e) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "toggle", this.effect.call(this, i) } }(t.fn.toggle), cssUnit: function (e) { var i = this.css(e), s = []; return t.each(["em", "px", "%", "pt"], function (t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s } }) }(), function () { var e = {}; t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) { e[i] = function (e) { return Math.pow(e, t + 2) } }), t.extend(e, { Sine: function (t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function (t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function (t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function (t) { return t * t * (3 * t - 2) }, Bounce: function (t) { for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(e, function (e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function (t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } }) }() }(jQuery), function (t) {
    var e = 0, i = {}, s = {}; i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.4", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, _create: function () { var e = this.options; this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh() }, _getCreateEventData: function () { return { header: this.active, panel: this.active.length ? this.active.next() : t(), content: this.active.length ? this.active.next() : t() } }, _createIcons: function () {
            var e = this.options.icons; e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        }, _destroyIcons: function () { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() }, _destroy: function () { var t; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () { /^ui-accordion/.test(this.id) && this.removeAttribute("id") }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () { /^ui-accordion/.test(this.id) && this.removeAttribute("id") }), "content" !== this.options.heightStyle && t.css("height", "") }, _setOption: function (t, e) { return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined) }, _keydown: function (e) { if (!e.altKey && !e.ctrlKey) { var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1; switch (e.keyCode) { case i.RIGHT: case i.DOWN: o = this.headers[(n + 1) % s]; break; case i.LEFT: case i.UP: o = this.headers[(n - 1 + s) % s]; break; case i.SPACE: case i.ENTER: this._eventHandler(e); break; case i.HOME: o = this.headers[0]; break; case i.END: o = this.headers[s - 1] }o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault()) } }, _panelKeyDown: function (e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus() }, refresh: function () { var e = this.options; this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function () { this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide() }, _refresh: function () { var i, s = this.options, n = s.heightStyle, o = this.element.parent(), a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e); this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (e) { var i = t(this), s = i.attr("id"), n = i.next(), o = n.attr("id"); s || (s = a + "-header-" + e, i.attr("id", s)), o || (o = a + "-panel-" + e, n.attr("id", o)), i.attr("aria-controls", o), n.attr("aria-labelledby", s) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = o.height(), this.element.siblings(":visible").each(function () { var e = t(this), s = e.css("position"); "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0)) }), this.headers.each(function () { i -= t(this).outerHeight(!0) }), this.headers.next().each(function () { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function () { i = Math.max(i, t(this).css("height", "").height()) }).height(i)) }, _activate: function (e) { var i = this._findActive(e)[0]; i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function (e) { return "number" == typeof e ? this.headers.eq(e) : t() }, _setupEvents: function (e) { var i = { keydown: "_keydown" }; e && t.each(e.split(" "), function (t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function (e) { var i = this.options, s = this.active, n = t(e.currentTarget), o = n[0] === s[0], a = o && i.collapsible, r = a ? t() : n.next(), h = s.next(), l = { oldHeader: s, oldPanel: h, newHeader: a ? t() : n, newPanel: r }; e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = a ? !1 : this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active"))) }, _toggle: function (e) { var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel; this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", tabIndex: 0, "aria-expanded": "true" }) }, _animate: function (t, e, n) { var o, a, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function () { h._toggleComplete(n) }; return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, { duration: r, easing: a, step: function (t, e) { e.now = Math.round(t) } }), t.hide().animate(s, { duration: r, easing: a, complete: p, step: function (t, i) { i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l), l = 0) } }), undefined) : e.animate(i, r, a, p) : t.animate(s, r, a, p) }, _toggleComplete: function (t) { var e = t.oldPanel; e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t) }
    })
}(jQuery), function (t) { t.widget("ui.autocomplete", { version: "1.10.4", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () { var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n; this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function (n) { if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, undefined; e = !1, s = !1, i = !1; var o = t.ui.keyCode; switch (n.keyCode) { case o.PAGE_UP: e = !0, this._move("previousPage", n); break; case o.PAGE_DOWN: e = !0, this._move("nextPage", n); break; case o.UP: e = !0, this._keyEvent("previous", n); break; case o.DOWN: e = !0, this._keyEvent("next", n); break; case o.ENTER: case o.NUMPAD_ENTER: this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n)); break; case o.TAB: this.menu.active && this.menu.select(n); break; case o.ESCAPE: this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault()); break; default: i = !0, this._searchTimeout(n) } }, keypress: function (s) { if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined; if (!i) { var n = t.ui.keyCode; switch (s.keyCode) { case n.PAGE_UP: this._move("previousPage", s); break; case n.PAGE_DOWN: this._move("nextPage", s); break; case n.UP: this._keyEvent("previous", s); break; case n.DOWN: this._keyEvent("next", s) } } }, input: function (t) { return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined) }, focus: function () { this.selectedItem = null, this.previous = this._value() }, blur: function (t) { return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined) } }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().data("ui-menu"), this._on(this.menu.element, { mousedown: function (e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur }); var i = this.menu.element[0]; t(e.target).closest(".ui-menu-item").length || this._delay(function () { var e = this; this.document.one("mousedown", function (s) { s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close() }) }) }, menufocus: function (e, i) { if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () { t(e.target).trigger(e.originalEvent) }), undefined; var s = i.item.data("ui-autocomplete-item"); !1 !== this._trigger("focus", e, { item: s }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value) }, menuselect: function (t, e) { var i = e.item.data("ui-autocomplete-item"), s = this.previous; this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s, this.selectedItem = i })), !1 !== this._trigger("select", t, { item: i }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i } }), this.liveRegion = t("<span>", { role: "status", "aria-live": "polite" }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _destroy: function () { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function (t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() }, _appendTo: function () { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e }, _initSource: function () { var e, i, s = this; t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) { s(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) { s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function (t) { n(t) }, error: function () { n([]) } }) }) : this.source = this.options.source }, _searchTimeout: function (t) { clearTimeout(this.searching), this.searching = this._delay(function () { this.term !== this._value() && (this.selectedItem = null, this.search(null, t)) }, this.options.delay) }, search: function (t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined }, _search: function (t) { this.pending++ , this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) }, _response: function () { var e = ++this.requestIndex; return t.proxy(function (t) { e === this.requestIndex && this.__response(t), this.pending-- , this.pending || this.element.removeClass("ui-autocomplete-loading") }, this) }, __response: function (t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() }, close: function (t) { this.cancelSearch = !0, this._close(t) }, _close: function (t) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) }, _change: function (t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) }, _normalize: function (e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) { return "string" == typeof e ? { label: e, value: e } : t.extend({ label: e.label || e.value, value: e.value || e.label }, e) }) }, _suggest: function (e) { var i = this.menu.element.empty(); this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next() }, _resizeMenu: function () { var t = this.menu.element; t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (e, i) { var s = this; t.each(i, function (t, i) { s._renderItemData(e, i) }) }, _renderItemData: function (t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) }, _renderItem: function (e, i) { return t("<li>").append(t("<a>").text(i.label)).appendTo(e) }, _move: function (t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined) }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (t, e) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault()) } }), t.extend(t.ui.autocomplete, { escapeRegex: function (t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (e, i) { var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function (t) { return s.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (t) { var e; this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e)) } }) }(jQuery), function (t) { var e, i = "ui-button ui-widget ui-state-default ui-corner-all", s = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", n = function () { var e = t(this); setTimeout(function () { e.find(":ui-button").button("refresh") }, 1) }, o = function (e) { var i = e.name, s = e.form, n = t([]); return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () { return !this.form })), n }; t.widget("ui.button", { version: "1.10.4", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function () { this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, n), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title"); var s = this, a = this.options, r = "checkbox" === this.type || "radio" === this.type, h = r ? "" : "ui-state-active"; null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () { a.disabled || this === e && t(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function () { a.disabled || t(this).removeClass(h) }).bind("click" + this.eventNamespace, function (t) { a.disabled && (t.preventDefault(), t.stopImmediatePropagation()) }), this._on({ focus: function () { this.buttonElement.addClass("ui-state-focus") }, blur: function () { this.buttonElement.removeClass("ui-state-focus") } }), r && this.element.bind("change" + this.eventNamespace, function () { s.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { return a.disabled ? !1 : undefined }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { if (a.disabled) return !1; t(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true"); var e = s.element[0]; o(e).not(e).map(function () { return t(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false") }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () { return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, s.document.one("mouseup", function () { e = null }), undefined) }).bind("mouseup" + this.eventNamespace, function () { return a.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined) }).bind("keydown" + this.eventNamespace, function (e) { return a.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () { t(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) { e.keyCode === t.ui.keyCode.SPACE && t(this).click() })), this._setOption("disabled", a.disabled), this._resetButton() }, _determineButtonType: function () { var t, e, i; this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element }, widget: function () { return this.buttonElement }, _destroy: function () { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") }, _setOption: function (t, e) { return this._super(t, e), "disabled" === t ? (this.element.prop("disabled", !!e), e && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined) }, refresh: function () { var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled"); e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? o(this.element[0]).each(function () { t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")) }, _resetButton: function () { if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined; var e = this.buttonElement.removeClass(s), i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(), n = this.options.icons, o = n.primary && n.secondary, a = []; n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (o ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" ")) } }), t.widget("ui.buttonset", { version: "1.10.4", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (t, e) { "disabled" === t && this.buttons.button("option", t, e), this._super(t, e) }, refresh: function () { var e = "rtl" === this.element.css("direction"); this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () { return t(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end() }, _destroy: function () { this.element.removeClass("ui-buttonset"), this.buttons.map(function () { return t(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") } }) }(jQuery), function (t, e) {
    function i() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) } function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.delegate(i, "mouseout", function () { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", function () { t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }) } function n(e, i) { t.extend(e, i); for (var s in i) null == i[s] && (e[s] = i[s]); return e } t.extend(t.ui, { datepicker: { version: "1.10.4" } }); var o, a = "datepicker"; t.extend(i.prototype, {
        markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (t) { return n(this._defaults, t || {}), this }, _attachDatepicker: function (e, i) { var s, n, o; s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o) }, _newInst: function (e, i) { var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function (e, i) { var s = t(e); i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, a, i), i.settings.disabled && this._disableDatepicker(e)) }, _attachments: function (e, i) { var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL"); i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function () { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 })) }, _autoSize: function (t) { if (this._get(t, "autoSize") && !t.inline) { var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat"); a.match(/[DM]/) && (e = function (t) { for (i = 0, s = 0, n = 0; t.length > n; n++)t[n].length > i && (i = t[n].length, s = n); return s }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length) } }, _inlineDatepicker: function (e, i) { var s = t(e); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, a, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (e, i, s, o, r) { var h, l, c, u, d, p = this._dialogInst; return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], a, p)), n(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], a, p), this }, _destroyDatepicker: function (e) { var i, s = t(e), n = t.data(e, a); s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, a), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty()) }, _enableDatepicker: function (e) { var i, s, n = t(e), o = t.data(e, a); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t })) }, _disableDatepicker: function (e) { var i, s, n = t(e), o = t.data(e, a); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e) }, _isDisabledDatepicker: function (t) { if (!t) return !1; for (var e = 0; this._disabledInputs.length > e; e++)if (this._disabledInputs[e] === t) return !0; return !1 }, _getInst: function (e) { try { return t.data(e, a) } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (i, s, o) { var a, r, h, l, c = this._getInst(i); return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (a = s || {}, "string" == typeof s && (a = {}, a[s] = o), c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, a), null !== h && a.dateFormat !== e && a.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && a.dateFormat !== e && a.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in a && (a.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c)), e) }, _changeDatepicker: function (t, e, i) { this._optionDatepicker(t, e, i) }, _refreshDatepicker: function (t) { var e = this._getInst(t); e && this._updateDatepicker(e) }, _setDateDatepicker: function (t, e) { var i = this._getInst(t); i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null }, _doKeyDown: function (e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl"); if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9: t.datepicker._hideDatepicker(), a = !1; break; case 13: return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1; case 27: t.datepicker._hideDatepicker(); break; case 33: t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break; case 34: t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break; case 35: (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey; break; case 36: (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey; break; case 37: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break; case 38: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey; break; case 39: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break; case 40: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey; break; default: a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1; a && (e.preventDefault(), e.stopPropagation())
        }, _doKeyPress: function (i) { var s, n, o = t.datepicker._getInst(i.target); return t.datepicker._get(o, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e }, _doKeyUp: function (e) { var i, s = t.datepicker._getInst(e.target); if (s.input.val() !== s.lastVal) try { i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (e) { if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) { var i, s, o, a, r, h, l; i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), o = s ? s.apply(e, [e, i]) : {}, o !== !1 && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function () { return a |= "fixed" === t(this).css("position"), !a }), r = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute", display: "none", left: r.left + "px", top: r.top + "px" }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i)) } }, _updateDatepicker: function (e) { this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover(); var i, s = this._getNumberOfMonths(e), n = s[1], a = 17; e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0)) }, _shouldFocusInput: function (t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") }, _checkOffset: function (e, i, s) { var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop()); return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i }, _findPos: function (e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)e = e[n ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] }, _hideDatepicker: function (e) { var i, s, n, o, r = this._curInst; !r || e && r !== t.data(e, a) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function () { t.datepicker._tidyDialog(r) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (t) { t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (e) { if (t.datepicker._curInst) { var i = t(e.target), s = t.datepicker._getInst(i[0]); (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker() } }, _adjustDate: function (e, i, s) { var n = t(e), o = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o)) }, _gotoToday: function (e) { var i, s = t(e), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (e, i, s) { var n = t(e), o = this._getInst(n[0]); o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n) }, _selectDay: function (e, i, s, n) { var o, a = t(e); t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))) }, _clearDate: function (e) { var i = t(e); this._selectDate(i, "") }, _selectDate: function (e, i) { var s, n = t(e), o = this._getInst(n[0]); i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null) }, _updateAlternate: function (e) { var i, s, n, o = this._get(e, "altField"); o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function () { t(this).val(n) })) }, noWeekends: function (t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] }, iso8601Week: function (t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 }, parseDate: function (i, s, n) { if (null == i || null == s) throw "Invalid arguments"; if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null; var o, a, r, h, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, g = (n ? n.monthNames : null) || this._defaults.monthNames, m = -1, v = -1, _ = -1, b = -1, y = !1, w = function (t) { var e = i.length > o + 1 && i.charAt(o + 1) === t; return e && o++ , e }, x = function (t) { var e = w(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, n = RegExp("^\\d{1," + i + "}"), o = s.substring(l).match(n); if (!o) throw "Missing number at position " + l; return l += o[0].length, parseInt(o[0], 10) }, k = function (i, n, o) { var a = -1, r = t.map(w(i) ? o : n, function (t, e) { return [[e, t]] }).sort(function (t, e) { return -(t[1].length - e[1].length) }); if (t.each(r, function (t, i) { var n = i[1]; return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = i[0], l += n.length, !1) : e }), -1 !== a) return a + 1; throw "Unknown name at position " + l }, D = function () { if (s.charAt(l) !== i.charAt(o)) throw "Unexpected literal at position " + l; l++ }; for (o = 0; i.length > o; o++)if (y) "'" !== i.charAt(o) || w("'") ? D() : y = !1; else switch (i.charAt(o)) { case "d": _ = x("d"); break; case "D": k("D", d, p); break; case "o": b = x("o"); break; case "m": v = x("m"); break; case "M": v = k("M", f, g); break; case "y": m = x("y"); break; case "@": h = new Date(x("@")), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate(); break; case "!": h = new Date((x("!") - this._ticksTo1970) / 1e4), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate(); break; case "'": w("'") ? D() : y = !0; break; default: D() }if (s.length > l && (r = s.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r; if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), b > -1) for (v = 1, _ = b; ;) { if (a = this._getDaysInMonth(m, v - 1), a >= _) break; v++ , _ -= a } if (h = this._daylightSavingAdjust(new Date(m, v - 1, _)), h.getFullYear() !== m || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date"; return h }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (t, e, i) { if (!e) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (e) { var i = t.length > s + 1 && t.charAt(s + 1) === e; return i && s++ , i }, l = function (t, e, i) { var s = "" + e; if (h(t)) for (; i > s.length;)s = "0" + s; return s }, c = function (t, e, i, s) { return h(t) ? s[e] : i[e] }, u = "", d = !1; if (e) for (s = 0; t.length > s; s++)if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) { case "d": u += l("d", e.getDate(), 2); break; case "D": u += c("D", e.getDay(), n, o); break; case "o": u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": u += l("m", e.getMonth() + 1, 2); break; case "M": u += c("M", e.getMonth(), a, r); break; case "y": u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100; break; case "@": u += e.getTime(); break; case "!": u += 1e4 * e.getTime() + this._ticksTo1970; break; case "'": h("'") ? u += "'" : d = !0; break; default: u += t.charAt(s) }return u }, _possibleChars: function (t) { var e, i = "", s = !1, n = function (i) { var s = t.length > e + 1 && t.charAt(e + 1) === i; return s && e++ , s }; for (e = 0; t.length > e; e++)if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += t.charAt(e) }return i }, _get: function (t, i) { return t.settings[i] !== e ? t.settings[i] : this._defaults[i] }, _setDateFromField: function (t, e) { if (t.input.val() !== t.lastVal) { var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t); try { o = this.parseDate(i, s, a) || n } catch (r) { s = e ? "" : s } t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t) } }, _getDefaultDate: function (t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) }, _determineDate: function (e, i, s) { var n = function (t) { var e = new Date; return e.setDate(e.getDate() + t), e }, o = function (i) { try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) { switch (l[2] || "d") { case "d": case "D": r += parseInt(l[1], 10); break; case "w": case "W": r += 7 * parseInt(l[1], 10); break; case "m": case "M": a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a)); break; case "y": case "Y": o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a)) }l = h.exec(i) } return new Date(o, a, r) }, a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a) }, _daylightSavingAdjust: function (t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null }, _setDate: function (t, e, i) { var s = !e, n = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date)); t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t)) }, _getDate: function (t) { var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return e }, _attachHandlers: function (e) { var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\"); e.dpDiv.find("[data-handler]").map(function () { var e = { prev: function () { t.datepicker._adjustDate(s, -i, "M") }, next: function () { t.datepicker._adjustDate(s, +i, "M") }, hide: function () { t.datepicker._hideDatepicker() }, today: function () { t.datepicker._gotoToday(s) }, selectDay: function () { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } }; t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) }, _generateHTML: function (t) { var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, v, _, b, y, w, x, k, D, C, I, P, T, M, S, z, A, E, H, N, W, O, F, R, L = new Date, j = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())), Y = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), V = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), U = this._get(t, "showCurrentAtPos"), Q = this._get(t, "stepMonths"), X = 1 !== q[0] || 1 !== q[1], $ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - U, te = t.drawYear; if (0 > Z && (Z += 12, te--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - q[0] * q[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;)Z-- , 0 > Z && (Z = 11, te--); for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - Q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : V ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + Q, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : V ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? $ : j, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; q[0] > x; x++) { for (k = "", this.maxRows = 4, D = 0; q[1] > D; D++) { if (C = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", P = "", X) { if (P += "<div class='ui-datepicker-group", q[1] > 1) switch (D) { case 0: P += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left"); break; case q[1] - 1: P += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right"); break; default: P += " ui-datepicker-group-middle", I = "" }P += "'>" } for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === x ? Y ? o : s : "") + (/all|right/.test(I) && 0 === x ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, G, J, x > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)M = (w + c) % 7, T += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>"; for (P += T + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((z + S) / 7), E = X ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = E, H = this._daylightSavingAdjust(new Date(te, Z, 1 - z)), N = 0; E > N; N++) { for (P += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++)O = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], F = H.getMonth() !== Z, R = F && !_ || !O[0] || G && G > H || J && H > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (H.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (H.getTime() === $.getTime() ? " " + this._currentClass : "") + (H.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === j.getTime() ? " ui-state-highlight" : "") + (H.getTime() === $.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H); P += W + "</tr>" } Z++ , Z > 11 && (Z = 0, te++), P += "</tbody></table>" + (X ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += P } y += k } return y += l, t._keyEvent = !1, y }, _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) { var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = ""; if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>"); y += "</select>" } if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else { for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>"; t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null } return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>" }, _adjustInstDate: function (t, e, i) { var s = t.drawYear + ("Y" === i ? e : 0), n = t.drawMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o))); t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t) }, _restrictMinMax: function (t, e) { var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e; return s && n > s ? s : n }, _notifyChange: function (t) { var e = this._get(t, "onChangeMonthYear"); e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]) }, _getNumberOfMonths: function (t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e }, _getMinMaxDate: function (t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) }, _getDaysInMonth: function (t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() }, _getFirstDayOfMonth: function (t, e) { return new Date(t, e, 1).getDay() }, _canAdjustMonth: function (t, e, i, s) { var n = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)); return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o) }, _isInRange: function (t, e) { var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear()) }, _getFormatConfig: function (t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } }, _formatDate: function (t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function (e) { if (!this.length) return this; t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.4"
}(jQuery), function (t) {
    var e = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, i = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }; t.widget("ui.dialog", {
        version: "1.10.4", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (e) { var i = t(this).css(e).offset().top; 0 > i && t(this).css("top", e.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, _create: function () { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1 }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) }, _destroy: function () { var t, e = this.originalPosition; this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element) }, widget: function () { return this.uiDialog }, disable: t.noop, enable: t.noop, close: function (e) { var i, s = this; if (this._isOpen && this._trigger("beforeClose", e) !== !1) { if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try { i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur() } catch (n) { } this._hide(this.uiDialog, this.options.hide, function () { s._trigger("close", e) }) } }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() }, _moveToTop: function (t, e) { var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length; return i && !e && this._trigger("focus", t), i }, open: function () { var e = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () { e._focusTabbable(), e._trigger("focus") }), this._trigger("open"), undefined) }, _focusTabbable: function () { var t = this.element.find("[autofocus]"); t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus() }, _keepFocus: function (e) { function i() { var e = this.document[0].activeElement, i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e); i || this._focusTabbable() } e.preventDefault(), i.call(this), this._delay(i) }, _createWrapper: function () { this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, { keydown: function (e) { if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), undefined; if (e.keyCode === t.ui.keyCode.TAB) { var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last"); e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault()) } }, mousedown: function (t) { this._moveToTop(t) && this._focusTabbable() } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) }, _createTitlebar: function () { var e; this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function (e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function (t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({ "aria-labelledby": e.attr("id") }) }, _title: function (t) { this.options.title || t.html("&#160;"), t.text(this.options.title) }, _createButtonPane: function () { this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() }, _createButtons: function () { var e = this, i = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function (i, s) { var n, o; s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, s.click = function () { n.apply(e.element[0], arguments) }, o = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet) }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined) }, _makeDraggable: function () { function e(t) { return { position: t.position, offset: t.offset } } var i = this, s = this.options; this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (s, n) { t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n)) }, drag: function (t, s) { i._trigger("drag", t, e(s)) }, stop: function (n, o) { s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o)) } }) }, _makeResizable: function () {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } } var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"), a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: a, start: function (s, n) { t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n)) }, resize: function (t, s) { i._trigger("resize", t, e(s)) }, stop: function (n, o) { s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o)) } }).css("position", o)
        }, _minHeight: function () { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) }, _position: function () { var t = this.uiDialog.is(":visible"); t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide() }, _setOptions: function (s) { var n = this, o = !1, a = {}; t.each(s, function (t, s) { n._setOption(t, s), t in e && (o = !0), t in i && (a[t] = s) }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a) }, _setOption: function (t, e) { var i, s, n = this.uiDialog; "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({ label: "" + e }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function () { var t, e, i, s = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function (e) { return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length }, _createOverlay: function () { if (this.options.modal) { var e = this, i = this.widgetFullName; t.ui.dialog.overlayInstances || this._delay(function () { t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (s) { e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable()) }) }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), t.ui.dialog.overlayInstances++ } }, _destroyOverlay: function () { this.options.modal && this.overlay && (t.ui.dialog.overlayInstances-- , t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null) }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, { _position: function () { var e, i = this.options.position, s = [], n = [0, 0]; i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function (t, e) { +s[t] === s[t] && (n[t] = s[t], s[t] = e) }), i = { my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]), at: s.join(" ") }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide() } })
}(jQuery), function (t) { var e = /up|down|vertical/, i = /up|left|vertical|horizontal/; t.effects.effect.blind = function (s, n) { var o, a, r, h = t(this), l = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(h, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === c; h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), o = t.effects.createWrapper(h).css({ overflow: "hidden" }), a = o[p](), r = parseFloat(o.css(f)) || 0, m[p] = v ? a : 0, g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({ position: "absolute" }), m[f] = v ? r : a + r), v && (o.css(p, 0), g || o.css(f, r + a)), o.animate(m, { duration: s.duration, easing: s.easing, queue: !1, complete: function () { "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n() } }) } }(jQuery), function (t) { t.effects.effect.bounce = function (e, i) { var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(a, e.mode || "effect"), l = "hide" === h, c = "show" === h, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || l ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = a.queue(), y = b.length; for ((c || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = { opacity: 1 }, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), l && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m).animate(o, g, m), d = l ? 2 * d : d / 2; l && (n = { opacity: 0 }, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m)), a.queue(function () { l && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i() }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue() } }(jQuery), function (t) { t.effects.effect.clip = function (e, i) { var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(a, e.mode || "hide"), l = "show" === h, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {}; t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({ overflow: "hidden" }), n = "IMG" === a[0].tagName ? s : a, o = n[d](), l && (n.css(d, 0), n.css(p, o / 2)), f[d] = l ? o : 0, f[p] = l ? 0 : o / 2, n.animate(f, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { l || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i() } }) } }(jQuery), function (t) { t.effects.effect.drop = function (e, i) { var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], a = t.effects.setMode(n, e.mode || "hide"), r = "show" === a, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h ? "pos" : "neg", u = { opacity: r ? 1 : 0 }; t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i() } }) } }(jQuery), function (t) { t.effects.effect.explode = function (e, i) { function s() { b.push(this), b.length === u * d && n() } function n() { p.css({ visibility: "visible" }), t(b).remove(), g || p.hide(), i() } var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = []; for (o = 0; u > o; o++)for (h = m.top + o * _, c = o - (u - 1) / 2, a = 0; d > a; a++)r = m.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -a * v, top: -o * _ }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: _, left: r + (g ? l * v : 0), top: h + (g ? c * _ : 0), opacity: g ? 0 : 1 }).animate({ left: r + (g ? 0 : l * v), top: h + (g ? 0 : c * _), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, s) } }(jQuery), function (t) { t.effects.effect.fade = function (e, i) { var s = t(this), n = t.effects.setMode(s, e.mode || "toggle"); s.animate({ opacity: n }, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) } }(jQuery), function (t) { t.effects.effect.fold = function (e, i) { var s, n, o = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(o, e.mode || "hide"), h = "show" === r, l = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = h !== d, f = p ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {}; t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({ overflow: "hidden" }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? { height: 0, width: c } : { height: c, width: 0 }), m[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () { l && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i() }) } }(jQuery), function (t) { t.effects.effect.highlight = function (e, i) { var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"], o = t.effects.setMode(s, e.mode || "show"), a = { backgroundColor: s.css("backgroundColor") }; "hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(a, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { "hide" === o && s.hide(), t.effects.restore(s, n), i() } }) } }(jQuery), function (t) { t.effects.effect.pulsate = function (e, i) { var s, n = t(this), o = t.effects.setMode(n, e.mode || "show"), a = "show" === o, r = "hide" === o, h = a || "hide" === o, l = 2 * (e.times || 5) + (h ? 1 : 0), c = e.duration / l, u = 0, d = n.queue(), p = d.length; for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++)n.animate({ opacity: u }, c, e.easing), u = 1 - u; n.animate({ opacity: u }, c, e.easing), n.queue(function () { r && n.hide(), i() }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue() } }(jQuery), function (t) { t.effects.effect.puff = function (e, i) { var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), o = "hide" === n, a = parseInt(e.percent, 10) || 150, r = a / 100, h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }; t.extend(e, { effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: o ? a : 100, from: o ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r } }), s.effect(e) }, t.effects.effect.scale = function (e, i) { var s = t(this), n = t.extend(!0, {}, e), o = t.effects.setMode(s, e.mode || "effect"), a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100), r = e.direction || "both", h = e.origin, l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }, c = { y: "horizontal" !== r ? a / 100 : 1, x: "vertical" !== r ? a / 100 : 1 }; n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * c.y, width: l.width * c.x, outerHeight: l.outerHeight * c.y, outerWidth: l.outerWidth * c.x }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n) }, t.effects.effect.size = function (e, i) { var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(a, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both", m = e.origin || ["middle", "center"], v = a.css("position"), _ = f ? r : h, b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; "show" === p && a.show(), s = { height: a.height(), width: a.width(), outerHeight: a.outerHeight(), outerWidth: a.outerWidth() }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)), o = { from: { y: a.from.height / s.height, x: a.from.width / s.width }, to: { y: a.to.height / s.height, x: a.to.width / s.width } }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(l), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), m && (n = t.effects.getBaseline(m, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), a.find("*[width]").each(function () { var i = t(this), s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() }; f && t.effects.save(i, l), i.from = { height: s.height * o.from.y, width: s.width * o.from.x, outerHeight: s.outerHeight * o.from.y, outerWidth: s.outerWidth * o.from.x }, i.to = { height: s.height * o.to.y, width: s.width * o.to.x, outerHeight: s.height * o.to.y, outerWidth: s.width * o.to.x }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () { f && t.effects.restore(i, l) }) })), a.animate(a.to, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { 0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({ position: "relative", top: a.to.top, left: a.to.left }) : t.each(["top", "left"], function (t, e) { a.css(e, function (e, i) { var s = parseInt(i, 10), n = t ? a.to.left : a.to.top; return "auto" === i ? n + "px" : s + n + "px" }) })), t.effects.removeWrapper(a), i() } }) } }(jQuery), function (t) { t.effects.effect.shake = function (e, i) { var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], a = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", h = e.distance || 20, l = e.times || 3, c = 2 * l + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length; for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++)n.animate(g, u, e.easing).animate(m, u, e.easing); n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () { "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i() }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue() } }(jQuery), function (t) { t.effects.effect.slide = function (e, i) { var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "width", "height"], a = t.effects.setMode(n, e.mode || "show"), r = "show" === a, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = {}; t.effects.save(n, o), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({ overflow: "hidden" }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i() } }) } }(jQuery), function (t) { t.effects.effect.transfer = function (e, i) { var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, h = o ? a.scrollLeft() : 0, l = n.offset(), c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() }, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({ top: u.top - r, left: u.left - h, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function () { d.remove(), i() }) } }(jQuery), function (t) { t.widget("ui.menu", { version: "1.10.4", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () { this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }).bind("click" + this.eventNamespace, t.proxy(function (t) { this.options.disabled && t.preventDefault() }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({ "mousedown .ui-menu-item > a": function (t) { t.preventDefault() }, "click .ui-state-disabled > a": function (t) { t.preventDefault() }, "click .ui-menu-item:has(a)": function (e) { var i = t(e.target).closest(".ui-menu-item"); !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function (e) { var i = t(e.currentTarget); i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i) }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) { var i = this.active || this.element.children(".ui-menu-item").eq(0); e || this.focus(t, i) }, blur: function (e) { this._delay(function () { t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e) }) }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function (e) { t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1 } }) }, _destroy: function () { this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () { var e = t(this); e.data("ui-menu-submenu-carat") && e.remove() }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content") }, _keydown: function (e) { function i(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") } var s, n, o, a, r, h = !0; switch (e.keyCode) { case t.ui.keyCode.PAGE_UP: this.previousPage(e); break; case t.ui.keyCode.PAGE_DOWN: this.nextPage(e); break; case t.ui.keyCode.HOME: this._move("first", "first", e); break; case t.ui.keyCode.END: this._move("last", "last", e); break; case t.ui.keyCode.UP: this.previous(e); break; case t.ui.keyCode.DOWN: this.next(e); break; case t.ui.keyCode.LEFT: this.collapse(e); break; case t.ui.keyCode.RIGHT: this.active && !this.active.is(".ui-state-disabled") && this.expand(e); break; case t.ui.keyCode.ENTER: case t.ui.keyCode.SPACE: this._activate(e); break; case t.ui.keyCode.ESCAPE: this.collapse(e); break; default: h = !1, n = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === n ? a = !0 : o = n + o, r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () { return r.test(t(this).children("a").text()) }), s = a && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (o = String.fromCharCode(e.keyCode), r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () { return r.test(t(this).children("a").text()) })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () { delete this.previousFilter }, 1e3)) : delete this.previousFilter) : delete this.previousFilter }h && e.preventDefault() }, _activate: function (t) { this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) }, refresh: function () { var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus); this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0); s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id")) }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({ tabIndex: -1, role: this._itemRole() }), e.children(":not(.ui-menu-item)").each(function () { var e = t(this); /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider") }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (t, e) { "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e) }, focus: function (t, e) { var i, s; this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e }) }, _scrollIntoView: function (e) { var i, s, n, o, a, r; this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r)) }, blur: function (t, e) { e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, { item: this.active })) }, _startOpening: function (t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () { this._close(), this._open(t) }, this.delay)) }, _open: function (e) { var i = t.extend({ of: this.active }, this.options.position); clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function (e, i) { clearTimeout(this.timer), this.timer = this._delay(function () { var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu")); s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s }, this.delay) }, _close: function (t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active") }, collapse: function (t) { var e = this.active && this.active.parent().closest(".ui-menu-item", this.element); e && e.length && (this._close(), this.focus(t, e)) }, expand: function (t) { var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first(); e && e.length && (this._open(e.parent()), this._delay(function () { this.focus(t, e) })) }, next: function (t) { this._move("next", "first", t) }, previous: function (t) { this._move("prev", "last", t) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (t, e, i) { var s; this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s) }, nextPage: function (e) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () { return i = t(this), 0 > i.offset().top - s - n }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined) }, previousPage: function (e) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () { return i = t(this), i.offset().top - s + n > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined) }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (e) { this.active = this.active || t(e.target).closest(".ui-menu-item"); var i = { item: this.active }; this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i) } }) }(jQuery), function (t, e) { function i(t, e, i) { return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)] } function s(e, i) { return parseInt(t.css(e, i), 10) || 0 } function n(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } } t.ui = t.ui || {}; var o, a = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position; t.position = { scrollbarWidth: function () { if (o !== e) return o; var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = n.children()[0]; return t("body").append(n), i = a.offsetWidth, n.css("overflow", "scroll"), s = a.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), o = i - s }, getScrollInfo: function (e) { var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight; return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 } }, getWithinInfo: function (e) { var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType; return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s ? i.width() : i.outerWidth(), height: s ? i.height() : i.outerHeight() } } }, t.fn.position = function (e) { if (!e || !e.of) return f.apply(this, arguments); e = t.extend({}, e); var o, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(y), x = (e.collision || "flip").split(" "), k = {}; return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () { var t, i, s = (e[this] || "").split(" "); 1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]] }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(k.at, p, g), v.left += o[0], v.top += o[1], this.each(function () { var n, l, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), D = u + f + s(this, "marginRight") + w.width, C = d + _ + s(this, "marginBottom") + w.height, I = t.extend({}, v), P = i(k.my, c.outerWidth(), c.outerHeight()); "right" === e.my[0] ? I.left -= u : "center" === e.my[0] && (I.left -= u / 2), "bottom" === e.my[1] ? I.top -= d : "center" === e.my[1] && (I.top -= d / 2), I.left += P[0], I.top += P[1], t.support.offsetFractions || (I.left = h(I.left), I.top = h(I.top)), n = { marginLeft: f, marginTop: _ }, t.each(["left", "top"], function (i, s) { t.ui.position[x[i]] && t.ui.position[x[i]][s](I, { targetWidth: p, targetHeight: g, elemWidth: u, elemHeight: d, collisionPosition: n, collisionWidth: D, collisionHeight: C, offset: [o[0] + P[0], o[1] + P[1]], my: e.my, at: e.at, within: y, elem: c }) }), e.using && (l = function (t) { var i = m.left - I.left, s = i + p - u, n = m.top - I.top, o = n + g - d, h = { target: { element: b, left: m.left, top: m.top, width: p, height: g }, element: { element: c, left: I.left, top: I.top, width: u, height: d }, horizontal: 0 > s ? "left" : i > 0 ? "right" : "center", vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle" }; u > p && p > r(i + s) && (h.horizontal = "center"), d > g && g > r(n + o) && (h.vertical = "middle"), h.important = a(r(i), r(s)) > a(r(n), r(o)) ? "horizontal" : "vertical", e.using.call(this, t, h) }), c.offset(t.extend(I, { using: l })) }) }, t.ui.position = { fit: { left: function (t, e) { var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, o = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - o - n; e.collisionWidth > o ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left) }, top: function (t, e) { var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, o = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - o - n; e.collisionHeight > o ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top) } }, flip: { left: function (t, e) { var i, s, n = e.within, o = n.offset.left + n.scrollLeft, a = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - a - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0]; 0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f)) }, top: function (t, e) { var i, s, n = e.within, o = n.offset.top + n.scrollTop, a = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - a - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1]; 0 > c ? (s = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g)) } }, flipfit: { left: function () { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function () { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } } }, function () { var e, i, s, n, o, a = document.getElementsByTagName("body")[0], r = document.createElement("div"); e = document.createElement(a ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, a && t.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" }); for (o in s) e.style[o] = s[o]; e.appendChild(r), i = a || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e) }() }(jQuery), function (t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.4", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () {
        this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        }, _destroy: function () { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() }, value: function (t) { return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e) }, _constrainedValue: function (t) { return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t)) }, _setOptions: function (t) { var e = t.value; delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue() }, _setOption: function (t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) }, _percentage: function () { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function () { var e = this.options.value, i = this._percentage(); this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete") }
    })
}(jQuery), function (t) { var e = 5; t.widget("ui.slider", t.ui.mouse, { version: "1.10.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, _create: function () { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 }, _refresh: function () { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function () { var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", a = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)a.push(o); this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) { t(this).data("ui-slider-handle-index", e) }) }, _createRange: function () { var e = this.options, i = ""; e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function () { var t = this.handles.add(this.range).filter("a"); this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t) }, _destroy: function () { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() }, _mouseCapture: function (e) { var i, s, n, o, a, r, h, l, c = this, u = this.options; return u.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) { var i = Math.abs(s - c.values(e)); (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e) }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - h.left - o.width() / 2, top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (t) { var e = { x: t.pageX, y: t.pageY }, i = this._normValueFromMouse(e); return this._slide(t, this._handleIndex, i), !1 }, _mouseStop: function (t) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function (t) { var e, i, s, n, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o) }, _start: function (t, e) { var i = { handle: this.handles[e], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i) }, _slide: function (t, e, i) { var s, n, o; this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, { handle: this.handles[e], value: i, values: n }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, { handle: this.handles[e], value: i }), o !== !1 && this.value(i)) }, _stop: function (t, e) { var i = { handle: this.handles[e], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i) }, _change: function (t, e) { if (!this._keySliding && !this._mouseSliding) { var i = { handle: this.handles[e], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i) } }, value: function (t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value() }, values: function (e, i) { var s, n, o; if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined; if (!arguments.length) return this._values(); if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value(); for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)s[o] = this._trimAlignValue(n[o]), this._change(null, o); this._refreshValue() }, _setOption: function (e, i) { var s, n = 0; switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) { case "orientation": this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s); this._animateOff = !1; break; case "min": case "max": this._animateOff = !0, this._refreshValue(), this._animateOff = !1; break; case "range": this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _value: function () { var t = this.options.value; return t = this._trimAlignValue(t) }, _values: function (t) { var e, i, s; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function (t) { if (this._valueMin() >= t) return this._valueMin(); if (t >= this._valueMax()) return this._valueMax(); var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i; return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () { var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, c = {}; this.options.values && this.options.values.length ? this.handles.each(function (s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate })) }, _handleEvents: { keydown: function (i) { var s, n, o, a, r = t(i.target).data("ui-slider-handle-index"); switch (i.keyCode) { case t.ui.keyCode.HOME: case t.ui.keyCode.END: case t.ui.keyCode.PAGE_UP: case t.ui.keyCode.PAGE_DOWN: case t.ui.keyCode.UP: case t.ui.keyCode.RIGHT: case t.ui.keyCode.DOWN: case t.ui.keyCode.LEFT: if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return }switch (a = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) { case t.ui.keyCode.HOME: o = this._valueMin(); break; case t.ui.keyCode.END: o = this._valueMax(); break; case t.ui.keyCode.PAGE_UP: o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e); break; case t.ui.keyCode.PAGE_DOWN: o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e); break; case t.ui.keyCode.UP: case t.ui.keyCode.RIGHT: if (n === this._valueMax()) return; o = this._trimAlignValue(n + a); break; case t.ui.keyCode.DOWN: case t.ui.keyCode.LEFT: if (n === this._valueMin()) return; o = this._trimAlignValue(n - a) }this._slide(i, r, o) }, click: function (t) { t.preventDefault() }, keyup: function (e) { var i = t(e.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active")) } } }) }(jQuery), function (t) { function e(t) { return function () { var e = this.element.val(); t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change") } } t.widget("ui.spinner", { version: "1.10.4", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function () { var e = {}, i = this.element; return t.each(["min", "max", "step"], function (t, s) { var n = i.attr(s); void 0 !== n && n.length && (e[s] = n) }), e }, _events: { keydown: function (t) { this._start(t) && this._keydown(t) && t.preventDefault() }, keyup: "_stop", focus: function () { this.previous = this.element.val() }, blur: function (t) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0) }, mousewheel: function (t, e) { if (e) { if (!this.spinning && !this._start(t)) return !1; this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () { this.spinning && this._stop(t) }, 100), t.preventDefault() } }, "mousedown .ui-spinner-button": function (e) { function i() { var t = this.element[0] === this.document[0].activeElement; t || (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s })) } var s; s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur, i.call(this) }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) { return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0 }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function () { var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()); this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable() }, _keydown: function (e) { var i = this.options, s = t.ui.keyCode; switch (e.keyCode) { case s.UP: return this._repeat(null, 1, e), !0; case s.DOWN: return this._repeat(null, -1, e), !0; case s.PAGE_UP: return this._repeat(null, i.page, e), !0; case s.PAGE_DOWN: return this._repeat(null, -i.page, e), !0 }return !1 }, _uiSpinnerHtml: function () { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" }, _buttonHtml: function () { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>" }, _start: function (t) { return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 }, _repeat: function (t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) }, _spin: function (t, e) { var i = this.value() || 0; this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function (e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 }, _precision: function () { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function (t) { var e = "" + t, i = e.indexOf("."); return -1 === i ? 0 : e.length - i - 1 }, _adjustValue: function (t) { var e, i, s = this.options; return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t }, _stop: function (t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) }, _setOption: function (t, e) { if ("culture" === t || "numberFormat" === t) { var i = this._parse(this.element.val()); return this.options[t] = e, this.element.val(this._format(i)), void 0 } ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable"))) }, _setOptions: e(function (t) { this._super(t), this._value(this.element.val()) }), _parse: function (t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t }, _format: function (t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t }, _refresh: function () { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, _value: function (t, e) { var i; "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh() }, _destroy: function () { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: e(function (t) { this._stepUp(t) }), _stepUp: function (t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) }, stepDown: e(function (t) { this._stepDown(t) }), _stepDown: function (t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) }, pageUp: e(function (t) { this._stepUp((t || 1) * this.options.page) }), pageDown: e(function (t) { this._stepDown((t || 1) * this.options.page) }), value: function (t) { return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val()) }, widget: function () { return this.uiSpinner } }) }(jQuery), function (t, e) { function i() { return ++n } function s(t) { return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, "")) } var n = 0, o = /#.*$/; t.widget("ui.tabs", { version: "1.10.4", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _create: function () { var e = this, i = this.options; this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) { return e.tabs.index(t) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function () { var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1); return null === i && (n && this.tabs.each(function (s, o) { return t(o).attr("aria-controls") === n ? (i = s, !1) : e }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i }, _getCreateEventData: function () { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } }, _tabKeydown: function (i) { var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), o = !0; if (!this._handlePageNav(i)) { switch (i.keyCode) { case t.ui.keyCode.RIGHT: case t.ui.keyCode.DOWN: n++; break; case t.ui.keyCode.UP: case t.ui.keyCode.LEFT: o = !1, n--; break; case t.ui.keyCode.END: n = this.anchors.length - 1; break; case t.ui.keyCode.HOME: n = 0; break; case t.ui.keyCode.SPACE: return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e; case t.ui.keyCode.ENTER: return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e; default: return }i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () { this.option("active", n) }, this.delay)) } }, _panelKeydown: function (e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus()) }, _handlePageNav: function (i) { return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e }, _findNextTab: function (e, i) { function s() { return e > n && (e = 0), 0 > e && (e = n), e } for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)e = i ? e + 1 : e - 1; return e }, _focusNextTab: function (t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t }, _setOption: function (t, i) { return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e) }, _tabId: function (t) { return t.attr("aria-controls") || "ui-tabs-" + i() }, _sanitizeSelector: function (t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function () { var e = this.options, i = this.tablist.children(":has(a[href])"); e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) { return i.index(t) }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh() }, _refresh: function () { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-expanded": "false", "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-expanded": "true", "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function () { var e = this; this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function () { return t("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = t(), this.anchors.each(function (i, n) { var o, a, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls"); s(n) ? (o = n.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(l), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && l.data("ui-tabs-aria-controls", c), l.attr({ "aria-controls": o.substring(1), "aria-labelledby": h }), a.attr("aria-labelledby", h) }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel") }, _getList: function () { return this.tablist || this.element.find("ol,ul").eq(0) }, _createPanel: function (e) { return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) }, _setupDisabled: function (e) { t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1); for (var i, s = 0; i = this.tabs[s]; s++)e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled"); this.options.disabled = e }, _setupEvents: function (e) { var i = { click: function (t) { t.preventDefault() } }; e && t.each(e.split(" "), function (t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function (e) { var i, s = this.element.parent(); "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () { var e = t(this), s = e.css("position"); "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0)) }), this.element.children().not(this.panels).each(function () { i -= t(this).outerHeight(!0) }), this.panels.each(function () { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () { i = Math.max(i, t(this).height("").height()) }).height(i)) }, _eventHandler: function (e) { var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0], r = a && i.collapsible, h = r ? t() : this._getPanelForTab(o), l = s.length ? this._getPanelForTab(s) : t(), c = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h }; e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c)) }, _toggle: function (e, i) { function s() { o.running = !1, o._trigger("activate", e, i) } function n() { i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s()) } var o = this, a = i.newPanel, r = i.oldPanel; this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () { i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({ "aria-expanded": "false", "aria-hidden": "true" }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), a.attr({ "aria-expanded": "true", "aria-hidden": "false" }), i.newTab.attr({ "aria-selected": "true", tabIndex: 0 }) }, _activate: function (e) { var i, s = this._findActive(e); s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function (e) { return e === !1 ? t() : this.tabs.eq(e) }, _getIndex: function (t) { return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t }, _destroy: function () { this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function () { var e = t(this), i = e.data("ui-tabs-aria-controls"); i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function (i) { var s = this.options.disabled; s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) { return t !== i ? t : null }) : t.map(this.tabs, function (t, e) { return e !== i ? e : null })), this._setupDisabled(s)) }, disable: function (i) { var s = this.options.disabled; if (s !== !0) { if (i === e) s = !0; else { if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return; s = t.isArray(s) ? t.merge([i], s).sort() : [i] } this._setupDisabled(s) } }, load: function (e, i) { e = this._getIndex(e); var n = this, o = this.tabs.eq(e), a = o.find(".ui-tabs-anchor"), r = this._getPanelForTab(o), h = { tab: o, panel: r }; s(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) { setTimeout(function () { r.html(t), n._trigger("load", i, h) }, 1) }).complete(function (t, e) { setTimeout(function () { "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr }, 1) }))) }, _ajaxSettings: function (e, i, s) { var n = this; return { url: e.attr("href"), beforeSend: function (e, o) { return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s)) } } }, _getPanelForTab: function (e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) } }) }(jQuery), function (t) {
    function e(e, i) { var s = (e.attr("aria-describedby") || "").split(/\s+/); s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" "))) } function i(e) { var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s); -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby") } var s = 0; t.widget("ui.tooltip", {
        version: "1.10.4", options: { content: function () { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _create: function () { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable() }, _setOption: function (e, i) { var s = this; return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) { s._updateContent(e) }), void 0) }, _disable: function () { var e = this; t.each(this.tooltips, function (i, s) { var n = t.Event("blur"); n.target = n.currentTarget = s[0], e.close(n, !0) }), this.element.find(this.options.items).addBack().each(function () { var e = t(this); e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "") }) }, _enable: function () { this.element.find(this.options.items).addBack().each(function () { var e = t(this); e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")) }) }, open: function (e) { var i = this, s = t(e ? e.target : this.element).closest(this.options.items); s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () { var e, s = t(this); s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", "")) }), this._updateContent(s, e)) }, _updateContent: function (t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) { t.data("ui-tooltip-open") && n._delay(function () { e && (e.type = o), this._open(e, t, i) }) }), i && this._open(e, t, i), void 0)
        }, _open: function (i, s, n) { function o(t) { l.of = t, a.is(":hidden") || a.position(l) } var a, r, h, l = t.extend({}, this.options.position); if (n) { if (a = this._find(s), a.length) return a.find(".ui-tooltip-content").html(n), void 0; s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, { mousemove: o }), o(i)) : a.position(t.extend({ of: s }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () { a.is(":visible") && (o(l.of), clearInterval(h)) }, t.fx.interval)), this._trigger("open", i, { tooltip: a }), r = { keyup: function (e) { if (e.keyCode === t.ui.keyCode.ESCAPE) { var i = t.Event(e); i.currentTarget = s[0], this.close(i, !0) } }, remove: function () { this._removeTooltip(a) } }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r) } }, close: function (e) { var s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n); this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () { s._removeTooltip(t(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) { t(i.element).attr("title", i.title), delete s.parents[e] }), this.closing = !0, this._trigger("close", e, { tooltip: o }), this.closing = !1) }, _tooltip: function (e) { var i = "ui-tooltip-" + s++, n = t("<div>").attr({ id: i, role: "tooltip" }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")); return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n }, _find: function (e) { var i = e.data("ui-tooltip-id"); return i ? t("#" + i) : t() }, _removeTooltip: function (t) { t.remove(), delete this.tooltips[t.attr("id")] }, _destroy: function () { var e = this; t.each(this.tooltips, function (i, s) { var n = t.Event("blur"); n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title")) }) }
    })
}(jQuery);

//**************************************************************************************************  jquery/liveQuery.js


//************************************************************************************************** utilities.js
// works also for IE8 beta
var isExplorer = navigator.userAgent.toUpperCase().indexOf("MSIE") >= 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
var isMozilla = navigator.userAgent.toUpperCase().indexOf("FIREFOX") >= 0;
var isSafari = navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0;


//Version detection
var version = navigator.appVersion.substring(0, 1);
var inProduction = false;
if (inProduction) {
    window.console = undefined;
}

// deprecated use $("#domid")...
function obj(element) {
    if (arguments.length > 1) {
        alert("invalid use of obj with multiple params:" + element)
    }
    var el = document.getElementById(element);
    if (!el)
        console.error("element not found: " + element);
    return el;
}

if (!window.console) {
    window.console = new function () {
        this.log = function (str) {/*alert(str)*/
        };
        this.debug = function (str) {/*alert(str)*/
        };
        this.error = function (str) {/*alert(str)*/
        };
    };
}
if (!window.console.debug || !window.console.error || !window.console.log) {
    window.console = new function () {
        this.log = function (str) {/*alert(str)*/
        };
        this.debug = function (str) {/*alert(str)*/
        };
        this.error = function (str) {/*alert(str)*/
        };
    };
}

String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};

String.prototype.startsWith = function (t, i) {
    if (!i) {
        return (t == this.substring(0, t.length));
    } else {
        return (t.toLowerCase() == this.substring(0, t.length).toLowerCase());
    }
};

String.prototype.endsWith = function (t, i) {
    if (!i) {
        return (t == this.substring(this.length - t.length));
    } else {
        return (t.toLowerCase() == this.substring(this.length - t.length).toLowerCase());
    }
};

// leaves only char from A to Z, numbers, _ -> valid ID
String.prototype.asId = function () {
    return this.replace(/[^a-zA-Z0-9_]+/g, '');
};

String.prototype.replaceAll = function (from, to) {
    return this.replace(new RegExp(RegExp.quote(from), 'g'), to);
};

function htmlEncodeApexes(str) {
    if (typeof (str) == "string")
        return str.replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
    else
        return str;
}


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}


Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


// transform string values to printable: \n in <br>
function transformToPrintable(data) {
    for (var prop in data) {
        var value = data[prop];
        if (typeof (value) == "string")
            data[prop] = (value + "").replace(/\n/g, "<br>");
    }
    return data;
}


RegExp.quote = function (str) {
    return str.replace(/([.?*+^$[\]\\(){}-])/g, "\\$1");
};


/* Object Functions */

function stopBubble(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
}


// ------ ------- -------- wraps http://www.mysite.com/.......   with <a href="...">
jQuery.fn.activateLinks = function (showImages) {
    var httpRE = /(['"]\s*)?(http[s]?:[\d]*\/\/[^"<>\s]*)/g;
    var wwwRE = /(['"/]\s*)?(www\.[^"<>\s]+)/g;
    var imgRE = /(['"]\s*)?(http[s]?:[\d]*\/\/[^"<>\s]*\.(?:gif|jpg|png|jpeg|bmp))/g;

    //console.debug("activateLinks",this)

    this.each(function () {

        var el = $(this);
        var html = el.html();

        if (showImages) {
            // workaround for negative look ahead
            html = html.replace(imgRE, function ($0, $1) {
                return $1 ? $0 : "<div class='imgWrap'  onclick=\"window.open('" + $0 + "','_blank');event.stopPropagation();\"><img src='" + $0 + "' title='" + $0 + "'></div>";
            });
        }

        html = html.replace(httpRE, function ($0, $1) {
            //return $1 ? $0 : "<a href='#' onclick=\"window.open('" + $0 + "','_blank');event.stopPropagation();\">" + $0 + "</a>";
            return $1 ? $0 : "<a href='" + $0 + "' onclick=\"event.stopPropagation();\" onbuttondown=\"event.stopPropagation();return false;\" onbuttonup=\"event.stopPropagation();return false;\" target='_blank'>" + $0 + "</a>";
        });

        html = html.replace(wwwRE, function ($0, $1) {
            //return $1 ? $0 : "<a href='#' onclick=\"window.open('http://" + $0 + "','_blank');event.stopPropagation();\">" + $0 + "</a>";
            return $1 ? $0 : "<a href='http://" + $0 + "' onclick=\"event.stopPropagation();\" onbuttondown=\"event.stopPropagation();return false;\" onbuttonup=\"event.stopPropagation();return false;\" target='_blank'>" + $0 + "</a>";
        });

        el.empty().append(html);

        if (showImages) {
            //inject expand capability on images
            el.find("div.imgWrap").each(function () {
                var imageDiv = $(this);

                imageDiv.click(function (e) {
                    if (e.ctrlKey || e.metaKey) {
                        window.open(imageDiv.find("img").prop("src"), "_blank");
                    } else {
                        var imageClone = imageDiv.find("img").clone();
                        imageClone.mouseout(function () {
                            $(this).remove();
                        });
                        imageClone.addClass("imageClone").css({ "position": "absolute", "display": "none", "top": imageDiv.position().top, "left": imageDiv.position().left, "z-index": 1000000 });
                        imageDiv.after(imageClone);
                        imageClone.fadeIn();
                    }
                });
            });
        }

    });
    return this;
};

var twEmoticons = {

    ":-)": "smile",
    ":-]": "polite_smile",
    ":-(": "frown",
    ":-/": "skepticism",
    ":-|": "sarcasm",
    ";-)": "wink",
    ":-D": "grin",
    ":-P": "tongue",
    ":-o": "surprise",
    ":'-(": "tear",
    "(@)": "angry",
    "B|": "sunglasses",
    "&gt;:(": "grumpy",
    "3:)": "devil",
    "O:)": "angel",
    ":-*": "kiss",
    "&lt;3": "heart",
    "^_^": "kiki",
    "-_-": "squint",
    "o.O": "confused",
    "&gt;:O": "upset",
    "(:3": "curlylips",
    "(y)": "thumb",
    ":|]": "robot",

    ":)": "smile",
    ",-)": "wink",
    ":(": "frown",
    ":-p": "tongue",
    ":-O": "surprise",
    ":-0": "surprise",
    ":*": "kiss",
    "^-^": "kiki",
    "&lt;:o": "upset",
    "(Y)": "thumb"
};

var twEmoticonsgetRegExp = function (twEmoticons) {
    var ret = "/";
    $.each(twEmoticons, function (i) {
        var emot = i.replace(/\)/g, "\\)").replace(/\(/g, "\\(").replace(/\//g, "\\/").replace(/\|/g, "\\|").replace(/\*/g, "\\*").replace(/\^/g, "\\^").replace(/\./g, "\\.");
        ret += "(" + emot + ")|";
    });
    ret = ret.substr(0, ret.length - 1);
    ret += "/g";
    // return ret;
    return eval(ret);
}


jQuery.fn.emoticonsBox = function (target) {

    var emoticonsButton = this;
    emoticonsButton.hideBalloon(false);
    $(".emoticonsBox").remove();

    var box = $("<div/>").addClass("emoticonsBox offScreen");
    box.css({ maxWidth: 200 });

    $("body").off("click.emoticon").on("click.emoticon", ".emoticonElement", function () {
        var emoticon = $(this).attr("emoticon");

        // var target = $(this).data("target");
        // console.debug(emoticon);

        target.focus();
        pasteHtmlAtCaret(emoticon + "&nbsp;");
        target.keyup();
        emoticonsButton.hideBalloon(true, function () {
            box.remove();
        });
    });

    var emoValues = [];
    for (var emoticon in twEmoticons) {
        if (twEmoticons.hasOwnProperty(emoticon)) {

            if (emoValues.indexOf(twEmoticons[emoticon]) >= 0)
                continue;
            emoValues.push(twEmoticons[emoticon]);

            // var emo = $("<span onclick='insertEmoticon($(this))'/>").html(emoticon);
            var emo = $("<span/>").addClass("emoticonElement").html(emoticon);
            emo.attr("title", twEmoticons[emoticon]);
            emo.emoticonize();
            box.append(emo);
            emo.data("target", target);
            emo.attr("emoticon", emoticon);
        }
    }

    $("body").append(box);

    emoticonsButton.showBalloon(null, {
        balloon: box.removeClass("offScreen").css({ padding: 5 }),
        cloneContent: false,
        oncursor: false,
        bgcolor: "#FFF",
        bordercolor: "#CCC",
        textcolor: "#000",
        addoverlay: false,
        storeData: false,
        autoHide: false,
        addclose: true
    });
    return;
};

jQuery.fn.emoticonize = function () {
    function convert(text) {
        // var emoRE = /(:-\))|(:-])|(:-\()|(:-\/)|(:-\\)|(:-\|)|(;-\))|(:-D)|(:-P)|(:-p)|(:-0)|(:-o)|(:-O)|(:'-\()|(\(@\))|(B|)|(>:\()|(\(3:\))|(O:\))|(:-*)|(<3)|(\^_\^)|(-_-)|(o.O)|(>:O)|(:3)|(\(y\))|(:\|])/g;
        var emoRE = twEmoticonsgetRegExp(twEmoticons);

        return text.replace(emoRE, function (str) {
            var ret = twEmoticons[str];
            if (ret) {
                ret = "<img src='" + contextPath + "/img/smiley/" + ret + ".png' align='absmiddle' class='twEmoticon'>";
                return ret;
            } else
                return twEmoticons[str];
        });
    }

    function addBold(text) {
        var returnedValue;
        var faccRE = /\*\*[^*]*\*\*/ig;
        return text.replace(faccRE, function (str) {
            var temp = str.substr(2);
            var temp2 = temp.substr(0, temp.length - 2);
            return "<b>" + temp2 + "</b>";
        });
    }

    this.each(function () {
        var el = $(this);
        var html = convert(el.html());
        html = addBold(html);
        el.html(html);
    });
    return this;
};


$.fn.closestAttr = function (attributeName) {
    var el = this.closest("[" + attributeName + "]");
    return el.length > 0 ? el.attr(attributeName) : undefined;
};

$.fn.unselectable = function () {
    this.each(function () {
        $(this).addClass("unselectable").attr("unselectable", "on");
    });
    return $(this);
};

$.fn.clearUnselectable = function () {
    this.each(function () {
        $(this).removeClass("unselectable").removeAttr("unselectable");
    });
    return $(this);
};

// ---------------------------------- initialize management
var __initedComponents = new Object();

function initialize(url, type, ndo) {
    //console.debug("initialize before: " + url);
    var normUrl = url.asId();
    var deferred = $.Deferred();

    if (!__initedComponents[normUrl]) {
        __initedComponents[normUrl] = deferred;

        if ("CSS" == (type + "").toUpperCase()) {
            var link = $("<link rel='stylesheet' type='text/css'>").prop("href", url);
            $("head").append(link);
            deferred.resolve();

        } else if ("SCRIPT" == (type + "").toUpperCase()) {
            $.ajax({
                type: "GET",
                url: url + "?" + buildNumber,
                dataType: "script",
                cache: true,
                success: function () {
                    deferred.resolve()
                },
                error: function () {
                    deferred.reject();
                }
            });


        } else {
            url = url + (url.indexOf("?") > -1 ? "&" : "?") + buildNumber;
            var text = $.ajax({
                type: "GET",
                url: url,
                dataType: "html",
                cache: true,
                success: function (text) {
                    ndo = ndo || $("body");
                    ndo.append(text);
                    deferred.resolve()
                },
                error: function () {
                    deferred.reject();
                }
            });
        }
    }

    return __initedComponents[normUrl].promise();
}


/**
 *  callback receive event, data
 *  data.response  contiene la response json arrivata dal controller
 *  E.G.:
 *     $("body").trigger("worklogEvent",[{type:"delete",response:response}])
 *
 *     in caso di delete di solito c'Ã¨ il response.deletedId
 */
function registerEvent(eventName, callback) {
    $("body").off(eventName).on(eventName, callback);
}



var pfGallery = {};

/**
 * Issue image gallery
 * @param fileId
 * @returns {boolean}
 */
function drawPfImageGallery(fileId, containerId) {

    var container;
    if (containerId)
        container = $(containerId);
    else
        container = $("[pf=" + fileId + "]").parent(".filesBox");

    var pfFiles = container.find("[pf]");

    var imagesCount = 0;
    pfGallery.container = $("<div/>").attr("id", "galleryContainer").css({ textAlign: "center", position: "relative", width: "70vw", height: "80vh", margin: "auto" });
    pfGallery.actualIdx = 0;

    pfFiles.each(function () {
        var imgData = $(this).data("pf");
        if (imgData.mime.indexOf("image") >= 0) {
            var image = $("<img/>").attr({ src: imgData.url, idx: imagesCount }).addClass("PfImageGalleryElement");
            image.css({ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto", objectFit: "contain", maxWidth: "100%", maxHeight: "100%" });
            image.hide();
            image.data("src")
            pfGallery.container.append(image);


            if (imgData.id == fileId) {
                pfGallery.actualIdx = imagesCount;
                $("img[idx=" + imagesCount + "]", pfGallery.container).fadeIn().addClass("actualImage");
            }
            imagesCount++;
        }
    });

    if (imagesCount == 0)
        return false;

    var prev = $("<span/>").addClass("galleryNav prev teamworkIcon").html("{").on("click.pfGallery", function () {
        pfGallery.actualIdx--
        if (pfGallery.actualIdx == -1)
            pfGallery.actualIdx = imagesCount - 1;
        gotoIdx(pfGallery.actualIdx);
    });

    var next = $("<span/>").addClass("galleryNav next teamworkIcon").html("}").on("click.pfGallery", function () {
        pfGallery.actualIdx++
        if (pfGallery.actualIdx == imagesCount)
            pfGallery.actualIdx = 0;
        gotoIdx(pfGallery.actualIdx);
    });

    function gotoIdx(idx) {

        $("img:visible", pfGallery.container).fadeOut().removeClass("actualImage zoom");
        $("img[idx=" + idx + "]", pfGallery.container).fadeIn().addClass("actualImage");
    }

    if (imagesCount > 1)
        pfGallery.container.append(prev).append(next);

    var newWinLink = $("<a/>").attr({ href: "#" }).addClass("teamworkIcon galleryZoom").html("@").on("click", function () {
        var url = $("img:visible", pfGallery.container).attr("src");
        window.open(url, "galleryImage");
    });

    $(pfGallery.container).on("click", "")

    pfGallery.container.append(newWinLink);

    var t = window.self;
    try {
        if (getTop() != window.self)
            t = getTop();
    } catch (e) { }

    t.createModalPopup(function () { return $(t).width() * .8 }, function () { return $(t).height() * .8 }).append(pfGallery.container);

    $("#galleryContainer [idx=" + pfGallery.actualIdx + "]").fadeIn();

    /**
     * Keyboard controls
     */
    $(document).off("keydown.PfImageGallery").on("keydown.PfImageGallery", function (e) {
        e = e || window.event;

        if (getTop().$(".bwinPopupd").is(":visible") && imagesCount > 1)
            switch (e.keyCode) {
                case 39:
                    next.click();
                    break;
                case 37:
                    prev.click();
                    break;
                /*
                        case 32:
                          newWinLink.click();
                          break;
                */
                case 27:
                    getTop().$(".bwinPopupd .close").click();
                    break;
            }
    });

    return pfGallery.container; //imagesCount > 0;

}

function openPersistentFile(file) {
    //console.debug("openPersistentFile",file);
    var t = window.self;
    try {
        if (getTop() != window.self)
            t = getTop();
    } catch (e) { }

    if (file.mime.indexOf("image") >= 0) {

        var isGallery = drawPfImageGallery(file.id);

        if (isGallery)
            return;


        var img = $("<img>").prop("src", file.url).css({ position: "absolute", top: "-10000px", left: "-10000px" }).one("load", function () {
            var img = $(this);
            var w = img.width();
            var h = img.height();
            var f = w / h;
            var ww = $(t).width() * .8;
            var wh = $(t).height() * .8;
            if (w > ww) {
                w = ww;
                h = w / f;
            }
            if (h > wh) {
                h = wh;
                w = h * f;
            }

            var hasTop = false;
            img.width(w).height(h).css({ position: "static", top: 0, left: 0 });

            t.createModalPopup(w + 100, h + 100).append(img);
        });

        t.$("body").append(img);
    } else if (file.mime.indexOf("pdf") >= 0 || file.type == "RF") {
        t.openBlackPopup(file.url, $(t).width() * .8, $(t).height() * .8);
    } else {
        window.open(file.url + "&TREATASATTACH=yes");
    }
}


function wrappedEvaluer(toEval) {
    eval(toEval);
}

function evalInContext(stringToEval, context) {
    wrappedEvaluer.apply(context, [stringToEval]);
}


Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    return this.getItem(key) && JSON.parse(this.getItem(key));
};

function objectSize(size) {
    var divisor = 1;
    var unit = "bytes";
    if (size >= 1024 * 1024) {
        divisor = 1024 * 1024;
        unit = "MB";
    } else if (size >= 1024) {
        divisor = 1024;
        unit = "KB";
    }
    if (divisor == 1)
        return size + " " + unit;

    return (size / divisor).toFixed(2) + ' ' + unit;
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



//workaround for jquery 3.x
if (typeof ($.fn.size) != "funcion")
    $.fn.size = function () {
        return this.length
    };


function callAPI(request, successFunction, errorFunction) {
    console.log(JSON.stringify(request));
    //var API = contextPath + "/API/V1/";
    var API = "" + "/V1/GetData/?command=" + request.command;
    $.ajax({
        url: API,
        method: "GET",
        dataType: "json",
        success: successFunction,
        error: errorFunction
    });
}


//-------------------------------------- color conversion utilities  -------------------------------
function hslToRgb(hue, sat, light) {
    var t1, t2, r, g, b;
    hue = hue / 60;
    if (light <= 0.5) {
        t2 = light * (sat + 1);
    } else {
        t2 = light + sat - (light * sat);
    }
    t1 = light * 2 - t2;
    r = hueToRgb(t1, t2, hue + 2) * 255;
    g = hueToRgb(t1, t2, hue) * 255;
    b = hueToRgb(t1, t2, hue - 2) * 255;
    return { r: r, g: g, b: b };

    function hueToRgb(t1, t2, hue) {
        if (hue < 0) hue += 6;
        if (hue >= 6) hue -= 6;
        if (hue < 1) return (t2 - t1) * hue + t1;
        else if (hue < 3) return t2;
        else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
        else return t1;
    }
}

function rgbToHsl(r, g, b) {
    var min, max, i, l, s, maxcolor, h, rgb = [];
    rgb[0] = r / 255;
    rgb[1] = g / 255;
    rgb[2] = b / 255;
    min = rgb[0];
    max = rgb[0];
    maxcolor = 0;
    for (i = 0; i < rgb.length - 1; i++) {
        if (rgb[i + 1] <= min) { min = rgb[i + 1]; }
        if (rgb[i + 1] >= max) { max = rgb[i + 1]; maxcolor = i + 1; }
    }
    if (maxcolor == 0) {
        h = (rgb[1] - rgb[2]) / (max - min);
    }
    if (maxcolor == 1) {
        h = 2 + (rgb[2] - rgb[0]) / (max - min);
    }
    if (maxcolor == 2) {
        h = 4 + (rgb[0] - rgb[1]) / (max - min);
    }
    if (isNaN(h)) { h = 0; }
    h = h * 60;
    if (h < 0) { h = h + 360; }
    l = (min + max) / 2;
    if (min == max) {
        s = 0;
    } else {
        if (l < 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2 - max - min);
        }
    }
    return { h: h, s: s, l: l };
}

function rgbContrast(rgb) {
    var ret = { r: 0, g: 0, b: 0 };
    tot = (rgb.r + rgb.g + rgb.b) / 3;
    if (tot < 170)
        ret = { r: 255, g: 255, b: 255 };
    return ret;
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}



//**************************************************************************************************  date.js -- WARNING: prima di i18nJs.js
/**
 * Copyright (c)2005-2009 Matt Kruse (javascripttoolbox.com)
 * Dual licensed under the MIT and GPL licenses.
 * This basically means you can use this code however you want for
 */
/*
 Date functions

 These functions are used to parse, format, and manipulate Date objects.
 See documentation and examples at http://www.JavascriptToolbox.com/lib/date/

 */
Date.$VERSION = 1.02;

// Utility function to append a 0 to single-digit numbers
Date.LZ = function (x) { return (x < 0 || x > 9 ? "" : "0") + x };
// Full month names. Change this for local month names
Date.monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
// Month abbreviations. Change this for local month names
Date.monthAbbreviations = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
// Full day names. Change this for local month names
Date.dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
// Day abbreviations. Change this for local month names
Date.dayAbbreviations = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
// Used for parsing ambiguous dates like 1/2/2000 - default to preferring 'American' format meaning Jan 2.
// Set to false to prefer 'European' format meaning Feb 1
Date.preferAmericanFormat = true;

// Set to 0=SUn for American 1=Mon for european
Date.firstDayOfWeek = 0;

//default
Date.defaultFormat = "dd/MM/yyyy";

// If the getFullYear() method is not defined, create it
if (!Date.prototype.getFullYear) {
    Date.prototype.getFullYear = function () { var yy = this.getYear(); return (yy < 1900 ? yy + 1900 : yy); };
}

// Parse a string and convert it to a Date object.
// If no format is passed, try a list of common formats.
// If string cannot be parsed, return null.
// Avoids regular expressions to be more portable.
Date.parseString = function (val, format, lenient) {
    // If no format is specified, try a few common formats
    if (typeof (format) == "undefined" || format == null || format == "") {
        var generalFormats = new Array(Date.defaultFormat, 'y-M-d', 'MMM d, y', 'MMM d,y', 'y-MMM-d', 'd-MMM-y', 'MMM d', 'MMM-d', 'd-MMM');
        var monthFirst = new Array('M/d/y', 'M-d-y', 'M.d.y', 'M/d', 'M-d');
        var dateFirst = new Array('d/M/y', 'd-M-y', 'd.M.y', 'd/M', 'd-M');
        var checkList = new Array(generalFormats, Date.preferAmericanFormat ? monthFirst : dateFirst, Date.preferAmericanFormat ? dateFirst : monthFirst);
        for (var i = 0; i < checkList.length; i++) {
            var l = checkList[i];
            for (var j = 0; j < l.length; j++) {
                var d = Date.parseString(val, l[j]);
                if (d != null) {
                    return d;
                }
            }
        }
        return null;
    };

    this.isInteger = function (val) {
        for (var i = 0; i < val.length; i++) {
            if ("1234567890".indexOf(val.charAt(i)) == -1) {
                return false;
            }
        }
        return true;
    };
    this.getInt = function (str, i, minlength, maxlength) {
        for (var x = maxlength; x >= minlength; x--) {
            var token = str.substring(i, i + x);
            if (token.length < minlength) {
                return null;
            }
            if (this.isInteger(token)) {
                return token;
            }
        }
        return null;
    };


    this.decodeShortcut = function (str) {
        str = str ? str : ""; // just in case
        var dateUpper = str.trim().toUpperCase();
        var ret = new Date();
        ret.clearTime();

        if (["NOW", "N"].indexOf(dateUpper) >= 0) {
            ret = new Date();

        } else if (["TODAY", "T"].indexOf(dateUpper) >= 0) {
            //do nothing

        } else if (["YESTERDAY", "Y"].indexOf(dateUpper) >= 0) {
            ret.setDate(ret.getDate() - 1);

        } else if (["TOMORROW", "TO"].indexOf(dateUpper) >= 0) {
            ret.setDate(ret.getDate() + 1);

        } else if (["W", "TW", "WEEK", "THISWEEK", "WEEKSTART", "THISWEEKSTART"].indexOf(dateUpper) >= 0) {
            ret.setFirstDayOfThisWeek();

        } else if (["LW", "LASTWEEK", "LASTWEEKSTART"].indexOf(dateUpper) >= 0) {
            ret.setFirstDayOfThisWeek();
            ret.setDate(ret.getDate() - 7);

        } else if (["NW", "NEXTWEEK", "NEXTWEEKSTART"].indexOf(dateUpper) >= 0) {
            ret.setFirstDayOfThisWeek();
            ret.setDate(ret.getDate() + 7);

        } else if (["M", "TM", "MONTH", "THISMONTH", "MONTHSTART", "THISMONTHSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);

        } else if (["LM", "LASTMONTH", "LASTMONTHSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);
            ret.setMonth(ret.getMonth() - 1);

        } else if (["NM", "NEXTMONTH", "NEXTMONTHSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);
            ret.setMonth(ret.getMonth() + 1);

        } else if (["Q", "TQ", "QUARTER", "THISQUARTER", "QUARTERSTART", "THISQUARTERSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);
            ret.setMonth(Math.floor((ret.getMonth()) / 3) * 3);

        } else if (["LQ", "LASTQUARTER", "LASTQUARTERSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);
            ret.setMonth(Math.floor((ret.getMonth()) / 3) * 3 - 3);

        } else if (["NQ", "NEXTQUARTER", "NEXTQUARTERSTART"].indexOf(dateUpper) >= 0) {
            ret.setDate(1);
            ret.setMonth(Math.floor((ret.getMonth()) / 3) * 3 + 3);


        } else if (/^-?[0-9]+[DWMY]$/.test(dateUpper)) {
            var lastOne = dateUpper.substr(dateUpper.length - 1);
            var val = parseInt(dateUpper.substr(0, dateUpper.length - 1));
            if (lastOne == "W")
                ret.setDate(ret.getDate() + val * 7);
            else if (lastOne == "M")
                ret.setMonth(ret.getMonth() + val);
            else if (lastOne == "Y")
                ret.setYear(ret.getYear() + val);
        } else {
            ret = undefined;
        }

        return ret;
    };

    var ret = this.decodeShortcut(val);
    if (ret)
        return ret;

    this._getDate = function (val, format) {
        val = val + "";
        format = format + "";
        var i_val = 0;
        var i_format = 0;
        var c = "";
        var token = "";
        var token2 = "";
        var x, y;
        var year = new Date().getFullYear();
        var month = 1;
        var date = 1;
        var hh = 0;
        var mm = 0;
        var ss = 0;
        var ampm = "";
        while (i_format < format.length) {
            // Get next token from format string
            c = format.charAt(i_format);
            token = "";
            while ((format.charAt(i_format) == c) && (i_format < format.length)) {
                token += format.charAt(i_format++);
            }
            // Extract contents of value based on format token
            if (token == "yyyy" || token == "yy" || token == "y") {
                if (token == "yyyy") {
                    x = 4;
                    y = 4;
                }
                if (token == "yy") {
                    x = 2;
                    y = 2;
                }
                if (token == "y") {
                    x = 2;
                    y = 4;
                }
                year = this.getInt(val, i_val, x, y);
                if (year == null) {
                    return null;
                }
                i_val += year.length;
                if (year.length == 2) {
                    if (year > 70) {
                        year = 1900 + (year - 0);
                    }
                    else {
                        year = 2000 + (year - 0);
                    }
                }

                //		} else if (token=="MMM" || token=="NNN"){
            } else if (token == "MMM" || token == "MMMM") {
                month = 0;
                var names = (token == "MMMM" ? (Date.monthNames.concat(Date.monthAbbreviations)) : Date.monthAbbreviations);
                for (var i = 0; i < names.length; i++) {
                    var month_name = names[i];
                    if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) {
                        month = (i % 12) + 1;
                        i_val += month_name.length;
                        break;
                    }
                }
                if ((month < 1) || (month > 12)) {
                    return null;
                }
            } else if (token == "E" || token == "EE" || token == "EEE" || token == "EEEE") {
                var names = (token == "EEEE" ? Date.dayNames : Date.dayAbbreviations);
                for (var i = 0; i < names.length; i++) {
                    var day_name = names[i];
                    if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) {
                        i_val += day_name.length;
                        break;
                    }
                }
            } else if (token == "MM" || token == "M") {
                month = this.getInt(val, i_val, token.length, 2);
                if (month == null || (month < 1) || (month > 12)) {
                    return null;
                }
                i_val += month.length;
            } else if (token == "dd" || token == "d") {
                date = this.getInt(val, i_val, token.length, 2);
                if (date == null || (date < 1) || (date > 31)) {
                    return null;
                }
                i_val += date.length;
            } else if (token == "hh" || token == "h") {
                hh = this.getInt(val, i_val, token.length, 2);
                if (hh == null || (hh < 1) || (hh > 12)) {
                    return null;
                }
                i_val += hh.length;
            } else if (token == "HH" || token == "H") {
                hh = this.getInt(val, i_val, token.length, 2);
                if (hh == null || (hh < 0) || (hh > 23)) {
                    return null;
                }
                i_val += hh.length;
            } else if (token == "KK" || token == "K") {
                hh = this.getInt(val, i_val, token.length, 2);
                if (hh == null || (hh < 0) || (hh > 11)) {
                    return null;
                }
                i_val += hh.length;
                hh++;
            } else if (token == "kk" || token == "k") {
                hh = this.getInt(val, i_val, token.length, 2);
                if (hh == null || (hh < 1) || (hh > 24)) {
                    return null;
                }
                i_val += hh.length;
                hh--;
            } else if (token == "mm" || token == "m") {
                mm = this.getInt(val, i_val, token.length, 2);
                if (mm == null || (mm < 0) || (mm > 59)) {
                    return null;
                }
                i_val += mm.length;
            } else if (token == "ss" || token == "s") {
                ss = this.getInt(val, i_val, token.length, 2);
                if (ss == null || (ss < 0) || (ss > 59)) {
                    return null;
                }
                i_val += ss.length;
            } else if (token == "a") {
                if (val.substring(i_val, i_val + 2).toLowerCase() == "am") {
                    ampm = "AM";
                } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") {
                    ampm = "PM";
                } else {
                    return null;
                }
                i_val += 2;
            } else {
                if (val.substring(i_val, i_val + token.length) != token) {
                    return null;
                } else {
                    i_val += token.length;
                }
            }
        }
        // If there are any trailing characters left in the value, it doesn't match
        if (i_val != val.length) {
            return null;
        }
        // Is date valid for month?
        if (month == 2) {
            // Check for leap year
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) { // leap year
                if (date > 29) {
                    return null;
                }
            } else {
                if (date > 28) {
                    return null;
                }
            }
        }
        if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
            if (date > 30) {
                return null;
            }
        }
        // Correct hours value
        if (hh < 12 && ampm == "PM") {
            hh = hh - 0 + 12;
        }
        else if (hh > 11 && ampm == "AM") {
            hh -= 12;
        }
        return new Date(year, month - 1, date, hh, mm, ss);
    };

    var theDate = this._getDate(val, format);
    if (!theDate && lenient) {
        //try with short format
        var f = format.replace("MMMM", "M").replace("MMM", "M").replace("MM", "M")
            .replace("yyyy", "y").replace("yyy", "y").replace("yy", "y")
            .replace("dd", "d");
        return this._getDate(val, f);
    } else {
        return theDate;
    }

};

// Check if a date string is valid
Date.isValid = function (val, format, lenient) {
    return (Date.parseString(val, format, lenient) != null);
};

// Check if a date object is before another date object
Date.prototype.isBefore = function (date2) {
    if (date2 == null) {
        return false;
    }
    return (this.getTime() < date2.getTime());
};

// Check if a date object is after another date object
Date.prototype.isAfter = function (date2) {
    if (date2 == null) {
        return false;
    }
    return (this.getTime() > date2.getTime());
};

Date.prototype.isOutOfRange = function (minDate, maxDate) {

    minDate = minDate || this;
    maxDate = maxDate || this;

    if (typeof minDate == "string")
        minDate = Date.parseString(minDate);

    if (typeof maxDate == "string")
        maxDate = Date.parseString(maxDate);

    return (this.isBefore(minDate) || this.isAfter(maxDate));
};

// Check if two date objects have equal dates and times
Date.prototype.equals = function (date2) {
    if (date2 == null) {
        return false;
    }
    return (this.getTime() == date2.getTime());
};

// Check if two date objects have equal dates, disregarding times
Date.prototype.equalsIgnoreTime = function (date2) {
    if (date2 == null) {
        return false;
    }
    var d1 = new Date(this.getTime()).clearTime();
    var d2 = new Date(date2.getTime()).clearTime();
    return (d1.getTime() == d2.getTime());
};

/**
 * Get week number in the year.
 */
Date.prototype.getWeekNumber = function () {
    var d = new Date(+this);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
};

// Format a date into a string using a given format string
Date.prototype.format = function (format) {
    if (!format)
        format = Date.defaultFormat;
    format = format + "";
    var result = "";
    var i_format = 0;
    var c = "";
    var token = "";
    var y = this.getFullYear() + "";
    var M = this.getMonth() + 1;
    var d = this.getDate();
    var E = this.getDay();
    var H = this.getHours();
    var m = this.getMinutes();
    var s = this.getSeconds();
    var w = this.getWeekNumber();
    // Convert real date parts into formatted versions
    var value = new Object();
    if (y.length < 4) {
        y = "" + (+y + 1900);
    }
    value["y"] = "" + y;
    value["yyyy"] = y;
    value["yy"] = y.substring(2, 4);
    value["M"] = M;
    value["MM"] = Date.LZ(M);
    value["MMM"] = Date.monthAbbreviations[M - 1];
    value["MMMM"] = Date.monthNames[M - 1];
    value["d"] = d;
    value["dd"] = Date.LZ(d);
    value["E"] = Date.dayAbbreviations[E];
    value["EE"] = Date.dayAbbreviations[E];
    value["EEE"] = Date.dayAbbreviations[E];
    value["EEEE"] = Date.dayNames[E];
    value["H"] = H;
    value["HH"] = Date.LZ(H);
    value["w"] = w;
    value["ww"] = Date.LZ(w);
    if (H == 0) {
        value["h"] = 12;
    }
    else if (H > 12) {
        value["h"] = H - 12;
    }
    else {
        value["h"] = H;
    }
    value["hh"] = Date.LZ(value["h"]);
    value["K"] = value["h"] - 1;
    value["k"] = value["H"] + 1;
    value["KK"] = Date.LZ(value["K"]);
    value["kk"] = Date.LZ(value["k"]);
    if (H > 11) {
        value["a"] = "PM";
    }
    else {
        value["a"] = "AM";
    }
    value["m"] = m;
    value["mm"] = Date.LZ(m);
    value["s"] = s;
    value["ss"] = Date.LZ(s);
    while (i_format < format.length) {
        c = format.charAt(i_format);
        token = "";
        while ((format.charAt(i_format) == c) && (i_format < format.length)) {
            token += format.charAt(i_format++);
        }
        if (typeof (value[token]) != "undefined") {
            result = result + value[token];
        }
        else {
            result = result + token;
        }
    }
    return result;
};

// Get the full name of the day for a date
Date.prototype.getDayName = function () {
    return Date.dayNames[this.getDay()];
};

// Get the abbreviation of the day for a date
Date.prototype.getDayAbbreviation = function () {
    return Date.dayAbbreviations[this.getDay()];
};

// Get the full name of the month for a date
Date.prototype.getMonthName = function () {
    return Date.monthNames[this.getMonth()];
};

// Get the abbreviation of the month for a date
Date.prototype.getMonthAbbreviation = function () {
    return Date.monthAbbreviations[this.getMonth()];
};

// Clear all time information in a date object
Date.prototype.clearTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

// Add an amount of time to a date. Negative numbers can be passed to subtract time.
Date.prototype.add = function (interval, number) {
    if (typeof (interval) == "undefined" || interval == null || typeof (number) == "undefined" || number == null) {
        return this;
    }
    number = +number;
    if (interval == 'y') { // year
        this.setFullYear(this.getFullYear() + number);
    } else if (interval == 'M') { // Month
        this.setMonth(this.getMonth() + number);
    } else if (interval == 'd') { // Day
        this.setDate(this.getDate() + number);
    } else if (interval == 'w') { // Week
        this.setDate(this.getDate() + number * 7);
    } else if (interval == 'h') { // Hour
        this.setHours(this.getHours() + number);
    } else if (interval == 'm') { // Minute
        this.setMinutes(this.getMinutes() + number);
    } else if (interval == 's') { // Second
        this.setSeconds(this.getSeconds() + number);
    }
    return this;

};

Date.prototype.toInt = function () {
    return this.getFullYear() * 10000 + (this.getMonth() + 1) * 100 + this.getDate();
};

Date.fromInt = function (dateInt) {
    var year = parseInt(dateInt / 10000);
    var month = parseInt((dateInt - year * 10000) / 100);
    var day = parseInt(dateInt - year * 10000 - month * 100);
    return new Date(year, month - 1, day, 12, 00, 00);
};


Date.prototype.isHoliday = function () {
    return isHoliday(this);
};

Date.prototype.isToday = function () {
    return this.toInt() == new Date().toInt();
};


Date.prototype.incrementDateByWorkingDays = function (days) {
    //console.debug("incrementDateByWorkingDays start ",d,days)
    var q = Math.abs(days);
    while (q > 0) {
        this.setDate(this.getDate() + (days > 0 ? 1 : -1));
        if (!this.isHoliday())
            q--;
    }
    return this;
};


Date.prototype.distanceInDays = function (toDate) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
    var utc2 = Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
    return Math.floor((utc2 - utc1) / (3600000 * 24));
};

//low performances in case of long distance
/*Date.prototype.distanceInWorkingDays= function (toDate){
 var pos = new Date(this.getTime());
 pos.setHours(23, 59, 59, 999);
 var days = 0;
 var nd=new Date(toDate.getTime());
 nd.setHours(23, 59, 59, 999);
 var end=nd.getTime();
 while (pos.getTime() <= end) {
 days = days + (isHoliday(pos) ? 0 : 1);
 pos.setDate(pos.getDate() + 1);
 }
 return days;
 };*/

//low performances in case of long distance
// bicch 22/4/2016: modificato per far ritornare anche valori negativi, cosÃ¬ come la controparte Java in CompanyCalendar.
// attenzione che prima tornava 1 per due date uguali adesso torna 0
Date.prototype.distanceInWorkingDays = function (toDate) {
    var pos = new Date(Math.min(this, toDate));
    pos.setHours(12, 0, 0, 0);
    var days = 0;
    var nd = new Date(Math.max(this, toDate));
    nd.setHours(12, 0, 0, 0);
    while (pos < nd) {
        days = days + (isHoliday(pos) ? 0 : 1);
        pos.setDate(pos.getDate() + 1);
    }
    days = days * (this > toDate ? -1 : 1);
    return days;
};

Date.prototype.setFirstDayOfThisWeek = function (firstDayOfWeek) {
    if (!firstDayOfWeek)
        firstDayOfWeek = Date.firstDayOfWeek;
    this.setDate(this.getDate() - this.getDay() + firstDayOfWeek - (this.getDay() == 0 && firstDayOfWeek != 0 ? 7 : 0));
    return this;
};


/* ----- millis format --------- */
/**
 * @param         str         - Striga da riempire
 * @param         len         - Numero totale di caratteri, comprensivo degli "zeri"
 * @param         ch          - Carattere usato per riempire
 */

function pad(str, len, ch) {
    if ((str + "").length < len) {
        return new Array(len - ('' + str).length + 1).join(ch) + str;
    } else {
        return str
    }
}

function getMillisInHours(millis) {
    if (!millis)
        return "";
    var hour = Math.floor(millis / 3600000);
    return (millis >= 0 ? "" : "-") + pad(hour, 1, "0");
}
function getMillisInHoursMinutes(millis) {
    if (typeof (millis) != "number")
        return "";

    var sgn = millis >= 0 ? 1 : -1;
    millis = Math.abs(millis);
    var hour = Math.floor(millis / 3600000);
    var min = Math.floor((millis % 3600000) / 60000);
    return (sgn > 0 ? "" : "-") + pad(hour, 1, "0") + ":" + pad(min, 2, "0");
}

function getMillisInDaysHoursMinutes(millis) {
    if (!millis)
        return "";
    // millisInWorkingDay is set on partHeaderFooter
    var sgn = millis >= 0 ? 1 : -1;
    millis = Math.abs(millis);
    var days = Math.floor(millis / millisInWorkingDay);
    var hour = Math.floor((millis % millisInWorkingDay) / 3600000);
    var min = Math.floor((millis - days * millisInWorkingDay - hour * 3600000) / 60000);
    return (sgn >= 0 ? "" : "-") + (days > 0 ? days + "  " : "") + pad(hour, 1, "0") + ":" + pad(min, 2, "0");
}


function millisToString(millis, considerWorkingdays) {
    // console.debug("millisToString",millis)
    if (!millis)
        return "";
    // millisInWorkingDay is set on partHeaderFooter
    var sgn = millis >= 0 ? 1 : -1;
    millis = Math.abs(millis);
    var wm = (considerWorkingdays ? millisInWorkingDay : 3600000 * 24);
    var days = Math.floor(millis / wm);
    var hour = Math.floor((millis % wm) / 3600000);
    var min = Math.floor((millis - days * wm - hour * 3600000) / 60000);
    var sec = Math.floor((millis - days * wm - hour * 3600000 - min * 60000) / 1000);
    return (sgn >= 0 ? "" : "-") + (days > 0 ? days + "d " : "") + (hour > 0 ? (days > 0 ? " " : "") + hour + "h" : "") + (min > 0 ? (days > 0 || hour > 0 ? " " : "") + min + "m" : "") + (sec > 0 ? +sec + "s" : "");
}



function millisFromHourMinute(stringHourMinutes) { //All this format are valid: "12:58" "13.75"  "63635676000" (this is already in milliseconds)
    var semiColSeparator = stringHourMinutes.indexOf(":");
    if (semiColSeparator == 0) // :30 minutes
        return millisFromHourMinuteSecond("00" + stringHourMinutes + ":00");
    else if (semiColSeparator > 0) // 1:15 hours:minutes
        return millisFromHourMinuteSecond(stringHourMinutes + ":00");
    else
        return millisFromHourMinuteSecond(stringHourMinutes);

}

function millisFromHourMinuteSecond(stringHourMinutesSeconds) { //All this format are valid: "00:12:58" "12:58:55" "13.75"  "63635676000" (this is already in milliseconds)
    var result = 0;
    stringHourMinutesSeconds.replace(",", ".");
    var semiColSeparator = stringHourMinutesSeconds.indexOf(":");
    var dotSeparator = stringHourMinutesSeconds.indexOf(".");

    if (semiColSeparator < 0 && dotSeparator < 0 && stringHourMinutesSeconds.length > 5) {
        return parseInt(stringHourMinutesSeconds, 10); //already in millis
    } else {

        if (dotSeparator > -1) {
            var d = parseFloat(stringHourMinutesSeconds);
            result = d * 3600000;
        } else {
            var hour = 0;
            var minute = 0;
            var second = 0;

            if (semiColSeparator == -1)
                hour = parseInt(stringHourMinutesSeconds, 10);
            else {

                var units = stringHourMinutesSeconds.split(":")

                hour = parseInt(units[0], 10);
                minute = parseInt(units[1], 10);
                second = parseInt(units[2], 10);
            }
            result = hour * 3600000 + minute * 60000 + second * 1000;
        }
        if (typeof (result) != "number")
            result = NaN;
        return result;
    }
}

/**
 * @param string              "3y 4d", "4D:08:10", "12M/3d", "1.5D", "2H4D", "3M4d,2h", "12:30", "11", "3", "1.5", "2m/3D", "12/3d", "1234"
 *                            by default 2 means 2 hours 1.5 means 1:30
 * @param considerWorkingdays if true day length is from global.properties CompanyCalendar.MILLIS_IN_WORKING_DAY  otherwise in 24
 * @return milliseconds. 0 if invalid string
 */
function millisFromString(string, considerWorkingdays) {
    if (!string)
        return 0;

    //var regex = new RegExp("(\\d+[Yy])|(\\d+[M])|(\\d+[Ww])|(\\d+[Dd])|(\\d+[Hh])|(\\d+[m])|(\\d+[Ss])|(\\d+:\\d+)|(:\\d+)|(\\d*[\\.,]\\d+)|(\\d+)", "g"); // bicch 14/1/16 supporto per 1.5d
    var regex = new RegExp("([0-9\\.,]+[Yy])|([0-9\\.,]+[Qq])|([0-9\\.,]+[M])|([0-9\\.,]+[Ww])|([0-9\\.,]+[Dd])|([0-9\\.,]+[Hh])|([0-9\\.,]+[m])|([0-9\\.,]+[Ss])|(\\d+:\\d+:\\d+)|(\\d+:\\d+)|(:\\d+)|(\\d*[\\.,]\\d+)|(\\d+)", "g");

    var matcher = regex.exec(string);
    var totMillis = 0;

    if (!matcher)
        return NaN;

    while (matcher != null) {
        for (var i = 1; i < matcher.length; i++) {
            var match = matcher[i];
            if (match) {
                var number = 0;
                try {
                    //number = parseInt(match); // bicch 14/1/16 supporto per 1.5d
                    number = parseFloat(match.replace(',', '.'));
                } catch (e) {
                }
                if (i == 1) { // years
                    totMillis = totMillis + number * (considerWorkingdays ? millisInWorkingDay * workingDaysPerWeek * 52 : 3600000 * 24 * 365);
                } else if (i == 2) { // quarter
                    totMillis = totMillis + number * (considerWorkingdays ? millisInWorkingDay * workingDaysPerWeek * 4 : 3600000 * 24 * 91);
                } else if (i == 3) { // months
                    totMillis = totMillis + number * (considerWorkingdays ? millisInWorkingDay * workingDaysPerWeek * 4 : 3600000 * 24 * 30);
                } else if (i == 4) { // weeks
                    totMillis = totMillis + number * (considerWorkingdays ? millisInWorkingDay * workingDaysPerWeek : 3600000 * 24 * 7);
                } else if (i == 5) { // days
                    totMillis = totMillis + number * (considerWorkingdays ? millisInWorkingDay : 3600000 * 24);
                } else if (i == 6) { // hours
                    totMillis = totMillis + number * 3600000;
                } else if (i == 7) { // minutes
                    totMillis = totMillis + number * 60000;
                } else if (i == 8) { // seconds
                    totMillis = totMillis + number * 1000;
                } else if (i == 9) { // hour:minutes:seconds
                    totMillis = totMillis + millisFromHourMinuteSecond(match);
                } else if (i == 10) { // hour:minutes
                    totMillis = totMillis + millisFromHourMinute(match);
                } else if (i == 11) { // :minutes
                    totMillis = totMillis + millisFromHourMinute(match);
                } else if (i == 12) { // hour.minutes
                    totMillis = totMillis + millisFromHourMinute(match);
                } else if (i == 13) { // hours
                    totMillis = totMillis + number * 3600000;
                }
            }
        }
        matcher = regex.exec(string);
    }

    return totMillis;
}
/**
 * @param string              "3y 4d", "4D:08:10", "12M/3d", "2H4D", "3M4d,2h", "12:30", "11", "3", "1.5", "2m/3D", "12/3d", "1234"
 *                            by default 2 means 2 hours 1.5 means 1:30
 * @param considerWorkingdays if true day length is from global.properties CompanyCalendar.MILLIS_IN_WORKING_DAY  otherwise in 24
 * @return milliseconds. 0 if invalid string
 */
function daysFromString(string, considerWorkingdays) {
    if (!string)
        return undefined;

    //var regex = new RegExp("(\\d+[Yy])|(\\d+[Mm])|(\\d+[Ww])|(\\d+[Dd])|(\\d*[\\.,]\\d+)|(\\d+)", "g"); // bicch 14/1/16 supporto per 1.5d
    //var regex = new RegExp("([0-9\\.,]+[Yy])|([0-9\\.,]+[Qq])|([0-9\\.,]+[Mm])|([0-9\\.,]+[Ww])|([0-9\\.,]+[Dd])|(\\d*[\\.,]\\d+)|(\\d+)", "g");
    var regex = new RegExp("([\\-]?[0-9\\.,]+[Yy])|([\\-]?[0-9\\.,]+[Qq])|([\\-]?[0-9\\.,]+[Mm])|([\\-]?[0-9\\.,]+[Ww])|([\\-]?[0-9\\.,]+[Dd])|([\\-]?\\d*[\\.,]\\d+)|([\\-]?\\d+)", "g");

    var matcher = regex.exec(string);
    var totDays = 0;

    if (!matcher)
        return NaN;

    while (matcher != null) {
        for (var i = 1; i < matcher.length; i++) {
            var match = matcher[i];
            if (match) {
                var number = 0;
                try {
                    number = parseInt(match);// bicch 14/1/16 supporto per 1.5d
                    number = parseFloat(match.replace(',', '.'));
                } catch (e) {
                }
                if (i == 1) { // years
                    totDays = totDays + number * (considerWorkingdays ? workingDaysPerWeek * 52 : 365);
                } else if (i == 2) { // quarter
                    totDays = totDays + number * (considerWorkingdays ? workingDaysPerWeek * 12 : 91);
                } else if (i == 3) { // months
                    totDays = totDays + number * (considerWorkingdays ? workingDaysPerWeek * 4 : 30);
                } else if (i == 4) { // weeks
                    totDays = totDays + number * (considerWorkingdays ? workingDaysPerWeek : 7);
                } else if (i == 5) { // days
                    totDays = totDays + number;
                } else if (i == 6) { // days.minutes
                    totDays = totDays + number;
                } else if (i == 7) { // days
                    totDays = totDays + number;
                }
            }
        }
        matcher = regex.exec(string);
    }

    return parseInt(totDays);
}


//************************************************************************************************** forms.js
var muteAlertOnChange = false;


// isRequired ----------------------------------------------------------------------------

//return true if every mandatory field is filled, but DO NOT highlight empty ones
jQuery.fn.isFilled = function () {
    var isFilled = true;
    this.each(function () {
        var theElement = $(this);
        theElement.removeClass("formElementsError");
        if (theElement.is("[required]") && theElement.val().trim().length == 0 || theElement.attr("invalid") == "true") {
            isFilled = false;
        }
    });
    return isFilled;
};



//return true if every mandatory field is filled and highlight empty ones
jQuery.fn.isFullfilled = function () {
    var canSubmit = true;
    var firstErrorElement = "";

    this.each(function () {
        var theElement = $(this);
        theElement.removeClass("formElementsError");
        if (theElement.is("[required]") && theElement.val().trim().length == 0 || theElement.attr("invalid") == "true") {
            if (theElement.attr("type") == "hidden") {
                theElement = theElement.prevAll("#" + theElement.prop("id") + "_txt:first");
            } else if (theElement.is("[withEditIt]")) {
                theElement = $("[data-textarea-name=" + theElement.attr("name") + "]");
            }
            theElement.addClass("formElementsError");
            canSubmit = false;

            if (firstErrorElement == "")
                firstErrorElement = theElement;
        }
    });

    if (!canSubmit) {
        // get the tabdiv
        var theTabDiv = firstErrorElement.closest(".tabBox");
        if (theTabDiv.length > 0)
            clickTab(theTabDiv.attr("tabId"));

        // highlight element
        firstErrorElement.effect("highlight", { color: "red" }, 1500);
    }
    return canSubmit;

};

function canSubmitForm(formOrId) {
    //console.debug("canSubmitForm",formOrId);
    if (typeof formOrId != "object")
        formOrId = $("#" + formOrId);
    return formOrId.find(":input[required],:input[invalid=true]").isFullfilled();
}

function showSavingMessage() {
    $("#savingMessage:hidden").fadeIn();
    $("body").addClass("waiting");
    //$(window).resize(); //rompe la worklogWeek
}

function hideSavingMessage() {
    $("#savingMessage:visible").fadeOut();
    $("body").removeClass("waiting");
    //$(window).resize();  //rompe la worklogWeek
}

/* Types Function */

function isValidURL(url) {
    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    return RegExp.test(url);
}

function isValidEmail(email) {
    //var RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
    var RegExp = /^.+@\S+\.\S+$/;
    return RegExp.test(email);
}

function isValidInteger(n) {
    reg = new RegExp("^[-+]{0,1}[0-9]*$");
    return reg.test(n) || isNumericExpression(n);
}

function isValidDouble(n) {
    var sep = Number.decimalSeparator;
    reg = new RegExp("^[-+]{0,1}[0-9]*[" + sep + "]{0,1}[0-9]*$");
    return reg.test(n) || isNumericExpression(n);
}

function isValidTime(n) {
    return !isNaN(millisFromHourMinute(n));
}

function isValidDurationDays(n) {
    return !isNaN(daysFromString(n));
}

function isValidDurationMillis(n) {
    return !isNaN(millisFromString(n));
}

function isNumericExpression(expr) {
    try {
        var a = eval(expr);
        return typeof (a) == 'number';
    } catch (t) {
        return false;
    }

}

function getNumericExpression(expr) {
    var ret;
    try {
        var a = eval(expr);
        if (typeof (a) == 'number')
            ret = a;
    } catch (t) {
    }
    return ret;

}

/*
 supports almost all Java currency format e.g.: ###,##0.00EUR   â‚¬#,###.00  #,###.00â‚¬  -$#,###.00  $-#,###.00
 */
function isValidCurrency(numStr) {
    //first try to convert format in a regex
    var regex = "";
    var format = Number.currencyFormat + "";

    var minusFound = false;
    var numFound = false;
    var currencyString = "";
    var numberRegex = "[0-9\\" + Number.groupingSeparator + "]+[\\" + Number.decimalSeparator + "]?[0-9]*";

    for (var i = 0; i < format.length; i++) {
        var ch = format.charAt(i);

        if (ch == "." || ch == "," || ch == "0") {
            //skip it
            if (currencyString != "") {
                regex = regex + "(?:" + RegExp.quote(currencyString) + ")?";
                currencyString = "";
            }

        } else if (ch == "#") {
            if (currencyString != "") {
                regex = regex + "(?:" + RegExp.quote(currencyString) + ")?";
                currencyString = "";
            }

            if (!numFound) {
                numFound = true;
                regex = regex + numberRegex;
            }

        } else if (ch == "-") {
            if (currencyString != "") {
                regex = regex + "(?:" + RegExp.quote(currencyString) + ")?";
                currencyString = "";
            }
            if (!minusFound) {
                minusFound = true;
                regex = regex + "[-]?";
            }

        } else {
            currencyString = currencyString + ch;
        }
    }
    if (!minusFound)
        regex = "[-]?" + regex;

    if (currencyString != "")
        regex = regex + "(?:" + RegExp.quote(currencyString) + ")?";

    regex = "^" + regex + "$";

    var rg = new RegExp(regex);
    return rg.test(numStr) || isNumericExpression(numStr);
}

function getCurrencyValue(numStr) {
    if (!isValidCurrency(numStr))
        return NaN;

    var ripul = numStr.replaceAll(Number.groupingSeparator, "").replaceAll(Number.decimalSeparator, ".");
    return getNumericExpression(ripul) || parseFloat(ripul.replace(/[^-0123456789.]/, ""));
}


function formatCurrency(numberString) {
    return formatNumber(numberString, Number.currencyFormat);
}


function formatNumber(numberString, format) {
    if (!format)
        format = "##0.00";

    var dec = Number.decimalSeparator;
    var group = Number.groupingSeparator;
    var neg = Number.minusSign;

    var round = true;

    var validFormat = "0#-,.";

    // strip all the invalid characters at the beginning and the end
    // of the format, and we'll stick them back on at the end
    // make a special case for the negative sign "-" though, so
    // we can have formats like -$23.32
    var prefix = "";
    var negativeInFront = false;
    for (var i = 0; i < format.length; i++) {
        if (validFormat.indexOf(format.charAt(i)) == -1) {
            prefix = prefix + format.charAt(i);
        } else {
            if (i == 0 && format.charAt(i) == '-') {
                negativeInFront = true;
            } else {
                break;
            }
        }
    }
    var suffix = "";
    for (var i = format.length - 1; i >= 0; i--) {
        if (validFormat.indexOf(format.charAt(i)) == -1)
            suffix = format.charAt(i) + suffix;
        else
            break;
    }

    format = format.substring(prefix.length);
    format = format.substring(0, format.length - suffix.length);

    // now we need to convert it into a number
    //while (numberString.indexOf(group) > -1)
    //	numberString = numberString.replace(group, '');
    //var number = new Number(numberString.replace(dec, ".").replace(neg, "-"));
    var number = new Number(numberString);


    var forcedToZero = false;
    if (isNaN(number)) {
        number = 0;
        forcedToZero = true;
    }

    // special case for percentages
    if (suffix == "%")
        number = number * 100;

    var returnString = "";
    if (format.indexOf(".") > -1) {
        var decimalPortion = dec;
        var decimalFormat = format.substring(format.lastIndexOf(".") + 1);

        // round or truncate number as needed
        if (round)
            number = new Number(number.toFixed(decimalFormat.length));
        else {
            var numStr = number.toString();
            numStr = numStr.substring(0, numStr.lastIndexOf('.') + decimalFormat.length + 1);
            number = new Number(numStr);
        }

        var decimalValue = number % 1;
        var decimalString = new String(decimalValue.toFixed(decimalFormat.length));
        decimalString = decimalString.substring(decimalString.lastIndexOf(".") + 1);

        for (var i = 0; i < decimalFormat.length; i++) {
            if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) != '0') {
                decimalPortion += decimalString.charAt(i);
            } else if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) == '0') {
                var notParsed = decimalString.substring(i);
                if (notParsed.match('[1-9]')) {
                    decimalPortion += decimalString.charAt(i);
                } else {
                    break;
                }
            } else if (decimalFormat.charAt(i) == "0") {
                decimalPortion += decimalString.charAt(i);
            }
        }
        returnString += decimalPortion;
    } else {
        number = Math.round(number);
    }
    var ones = Math.floor(number);
    if (number < 0)
        ones = Math.ceil(number);

    var onesFormat = "";
    if (format.indexOf(".") == -1)
        onesFormat = format;
    else
        onesFormat = format.substring(0, format.indexOf("."));

    var onePortion = "";
    if (!(ones == 0 && onesFormat.substr(onesFormat.length - 1) == '#') || forcedToZero) {
        // find how many digits are in the group
        var oneText = new String(Math.abs(ones));
        var groupLength = 9999;
        if (onesFormat.lastIndexOf(",") != -1)
            groupLength = onesFormat.length - onesFormat.lastIndexOf(",") - 1;
        var groupCount = 0;
        for (var i = oneText.length - 1; i > -1; i--) {
            onePortion = oneText.charAt(i) + onePortion;
            groupCount++;
            if (groupCount == groupLength && i != 0) {
                onePortion = group + onePortion;
                groupCount = 0;
            }
        }

        // account for any pre-data padding
        if (onesFormat.length > onePortion.length) {
            var padStart = onesFormat.indexOf('0');
            if (padStart != -1) {
                var padLen = onesFormat.length - padStart;

                // pad to left with 0's or group char
                var pos = onesFormat.length - onePortion.length - 1;
                while (onePortion.length < padLen) {
                    var padChar = onesFormat.charAt(pos);
                    // replace with real group char if needed
                    if (padChar == ',')
                        padChar = group;
                    onePortion = padChar + onePortion;
                    pos--;
                }
            }
        }
    }

    if (!onePortion && onesFormat.indexOf('0', onesFormat.length - 1) !== -1)
        onePortion = '0';

    returnString = onePortion + returnString;

    // handle special case where negative is in front of the invalid characters
    if (number < 0 && negativeInFront && prefix.length > 0)
        prefix = neg + prefix;
    else if (number < 0)
        returnString = neg + returnString;

    if (returnString.lastIndexOf(dec) == returnString.length - 1) {
        returnString = returnString.substring(0, returnString.length - 1);
    }
    returnString = prefix + returnString + suffix;
    return returnString;
}


//validation functions - used by textfield and datefield
jQuery.fn.validateField = function () {
    //console.debug("validateField")
    var isValid = true;

    this.each(function () {
        var el = $(this);
        el.clearErrorAlert();

        var value = el.val();
        if (value) {
            var rett = true;
            var type = (el.attr('entryType') + "").toUpperCase();
            var errParam;

            if (type == "INTEGER") {
                rett = isValidInteger(value);
            } else if (type == "DOUBLE") {
                rett = isValidDouble(value);
            } else if (type == "PERCENTILE") {
                rett = isValidDouble(value);
            } else if (type == "URL") {
                rett = isValidURL(value);
            } else if (type == "EMAIL") {
                rett = isValidEmail(value);
            } else if (type == "DURATIONMILLIS") {
                rett = isValidDurationMillis(value);
            } else if (type == "DURATIONDAYS") {
                rett = isValidDurationDays(value);
            } else if (type == "DATE") {
                rett = Date.isValid(value, el.attr("format"), true);
                if (!rett)
                    errParam = el.attr("format");
            } else if (type == "TIME") {
                rett = isValidTime(value);
            } else if (type == "CURRENCY") {
                rett = isValidCurrency(value);
            }

            if (!rett) {
                el.createErrorAlert(i18n.ERROR_ON_FIELD, i18n.INVALID_DATA + (errParam ? " " + errParam : ""));
                isValid = false;
            }


            //check limits  minValue : maxValue
            if (rett && (el.attr("minValue") || el.attr("maxValue"))) {
                var val = value;
                var min = el.attr("minValue");
                var max = el.attr("maxValue");
                if (type == "INTEGER") {
                    val = parseInt(value);
                    min = parseInt(min);
                    max = parseInt(max);
                } else if (type == "DOUBLE" || type == "PERCENTILE") {
                    val = parseDouble(value);
                    min = parseDouble(min);
                    max = parseDouble(max);
                } else if (type == "URL") {
                    val = value;
                } else if (type == "EMAIL") {
                    val = value;
                } else if (type == "DURATIONMILLIS") {
                    val = millisFromString(value);
                    min = millisFromString(min);
                    max = millisFromString(max);

                } else if (type == "DURATIONDAYS") {
                    val = daysFromString(value);
                    min = daysFromString(min);
                    max = daysFromString(max);
                } else if (type == "DATE") {
                    val = Date.parseString(value, el.attr("format"), true).getTime();
                    min = Date.parseString(min, el.attr("format"), true).getTime();
                    max = Date.parseString(max, el.attr("format"), true).getTime();
                } else if (type == "TIME") {
                    val = millisFromHourMinute(value);
                    min = millisFromHourMinute(min);
                    max = millisFromHourMinute(max);
                } else if (type == "CURRENCY") {
                    val = getCurrencyValue(value);
                    min = getCurrencyValue(min);
                    max = getCurrencyValue(max);
                }

                if (el.attr("minValue") && val < min) {
                    el.createErrorAlert(i18n.ERROR_ON_FIELD, i18n.OUT_OF_BOUDARIES + " (" + el.attr("minValue") + " : " + (el.attr("maxValue") ? el.attr("maxValue") : "--") + ")");
                    rett = false;
                    isValid = false;

                    $("body").trigger("error");
                }

                if (rett && el.attr("maxValue") && val > max) {
                    el.createErrorAlert(i18n.ERROR_ON_FIELD, i18n.OUT_OF_BOUDARIES + " (" + (el.attr("minValue") ? el.attr("minValue") : "--") + " : " + el.attr("maxValue") + ")");
                    rett = false;
                    isValid = false;
                }

            }

        }

    });

    return isValid;
};

jQuery.fn.clearErrorAlert = function () {
    this.each(function () {
        var el = $(this);
        el.removeAttr("invalid").removeClass("formElementsError");
        $("#" + el.prop("id") + "error").remove();
    });
    return this;
};

jQuery.fn.createErrorAlert = function (errorCode, message) {
    this.each(function () {
        var el = $(this);
        el.attr("invalid", "true").addClass("formElementsError");
        if ($("#" + el.prop("id") + "error").length <= 0) {
            var errMess = (errorCode ? errorCode : "") + ": " + (message ? message : "");
            var err = "<span class='formElementExclamation' id=\"" + el.prop("id") + "error\" error='1'";
            err += " onclick=\"alert($(this).attr('title'))\" border='0' align='absmiddle'>&nbsp;";
            err += "</span>\n";
            err = $(err);
            err.prop("title", errMess);
            el.after(err);
        }
    });
    return this;
};


// button submit support BEGIN ------------------

function saveFormValues(idForm) {
    var formx = obj(idForm);
    formx.setAttribute("savedAction", formx.action);
    formx.setAttribute("savedTarget", formx.target);
    var el = formx.elements;
    for (i = 0; i < el.length; i++) {
        if (el[i].getAttribute("savedValue") != null) {
            el[i].setAttribute("savedValue", el[i].value);
        }
    }
}

function restoreFormValues(idForm) {
    var formx = obj(idForm);
    formx.action = formx.getAttribute("savedAction");
    formx.target = formx.getAttribute("savedTarget");
    var el = formx.elements;
    for (i = 0; i < el.length; i++) {
        if (el[i].getAttribute("savedValue") != null) {
            el[i].value = el[i].getAttribute("savedValue");
        }
    }
}

function changeActionAndSubmit(action, command) {
    var f = $("form:first");
    f.prop("action", action);
    f.find("[name=CM]").val(command);
    f.submit();
}



// textarea limit size -------------------------------------------------
function limitSize(ob) {
    if (ob.getAttribute("maxlength")) {
        var ml = parseInt(ob.getAttribute("maxlength"));
        var val = ob.value;//.replace(/\r\n/g,"\n");
        if (val.length > ml) {
            ob.value = val.substr(0, ml);
            $(ob).createErrorAlert("Error", i18n.ERR_FIELD_MAX_SIZE_EXCEEDED);
        } else {
            $(ob).clearErrorAlert();
        }
    }
    return true;
}


// verify before unload BEGIN ----------------------------------------------------------------------------

function alertOnUnload(container) {
    //console.debug("alertOnUnload",container,muteAlertOnChange);
    if (!muteAlertOnChange) {

        //first try to call a function eventually defined on the page
        if (typeof (managePageUnload) == "function")
            managePageUnload();

        container = container || $("body");
        var inps = $("[alertonchange=true]", container).find("[oldValue=1]");
        for (var j = 0; j < inps.length; j++) {
            var anInput = inps.eq(j);
            var oldValue = anInput.getOldValue() + "";
            if (!('true' == '' + anInput.attr('excludeFromAlert'))) {
                if (anInput.isValueChanged()) {
                    var inputLabel = $("label[for='" + anInput.prop("id") + "']").text(); //use label element
                    inputLabel = inputLabel ? inputLabel : anInput.prop("name");
                    return i18n.FORM_IS_CHANGED + " \"" + inputLabel + "\"";
                }
            }
        }
    }
    return undefined;
}

function canILeave() {
    var ret = window.onbeforeunload();
    if (typeof (ret) != "undefined" && !confirm(ret + "  \n" + i18n.PROCEED))
        return false;
    else
        return true;
}

// ---------------------------------- oldvalues management
// update all values selected
jQuery.fn.updateOldValue = function () {
    //console.debug("updateOldValue",this,this.length);
    this.each(function () {
        var el = $(this);
        //console.debug("updateOldValue "+el.attr("name")+" :"+el.val());
        var val = (el.is(":checkbox,:radio") ? el.prop("checked") : el.val()) + "";
        el.data("_oldvalue", val);
    });
    return this;
};

// return true if at least one element has changed
jQuery.fn.isValueChanged = function () {
    var ret = false;
    this.each(function () {
        var el = $(this);
        var val = (el.is(":checkbox,:radio") ? el.prop("checked") : el.val()) + "";
        if (val != el.data("_oldvalue") + "") {
            ret = true;
            return false;
        }
    });
    return ret;
};

jQuery.fn.getOldValue = function () {
    return $(this).data("_oldvalue");
};

jQuery.fn.fillJsonWithInputValues = function (jsonObject) {
    var inputs = this.find(":input,textarea");
    $.each(inputs.serializeArray(), function () {
        if (this.name) {
            jsonObject[this.name] = this.value;
        }
    });

    inputs.filter(":checkbox[name]").each(function () {
        var el = $(this);
        jsonObject[el.attr("name")] = el.is(":checked") ? "yes" : "no";
    });

    return this;
};


//serve per evitare i doppi tripli click sui bottoni
jQuery.fn.disableForAWhile = function (millis) {
    this.addClass("disabled").oneTime(millis, "aspett1sec", function () { $(this).removeClass("disabled") });
};


function enlargeTextArea(immediate) {
    //console.debug("enlargeTextArea",immediate);
    var el = $(this);

    var delay = immediate === true ? 1 : 300;
    el.stopTime("taResizeApply");
    el.oneTime(delay, "taResizeApply", function () {

        var miH = el.is("[minHeight]") ? parseInt(el.attr("minHeight")) : 30;
        var maH = el.is("[maxHeight]") ? parseInt(el.attr("maxHeight")) : 400;
        var inc = el.is("[lineHeight]") ? parseInt(el.attr("lineHeight")) : 30;

        //si copiano nel css per sicurezza
        el.css({ maxHeight: maH, minHeight: miH });

        var domEl = el.get(0);
        var pad = el.outerHeight() - el.height();
        //devo allargare
        if (domEl.scrollHeight > el.outerHeight() && el.outerHeight() < maH) {
            var nh = domEl.scrollHeight - pad + inc;
            nh = nh > maH - pad ? maH - pad : nh;
            el.height(nh);
        } else if (el.height() > miH) {
            //devo stringere
            el.height(el.height() - inc);

            while (el.outerHeight() - domEl.scrollHeight > 0 && el.height() > miH) {
                el.height(el.height() - inc);
            }
            var newH = domEl.scrollHeight - pad + inc;
            //newH=newH<minH?minH:newH;
            el.height(newH);

        }
        $("body").scroll();

    });
}


jQuery.fn.initFields = function () {
    //console.debug("initFields",this);

    // Any textarea with "autosize" class is initialized
    this.find("textarea.autosize").off('keyup focus', enlargeTextArea).on('keyup focus', enlargeTextArea).each(enlargeTextArea);

    this.find(":input[oldValue]").updateOldValue();

    //Validate any fields on blur
    this.find(".validated").on('blur', function () { $(this).validateField(); });


    //tagbox field
    if (jQuery.fn.tagBoxBind)
        this.find(".tagBox[taggableClass]").tagBoxBind();


    return this;
};




//************************************************************************************************** layout.js

//----------------------------------positioning-----------------------------------------------
jQuery.fn.centerOnScreen = function () {
    return this.each(function () {
        var container = $(this);
        //console.debug($(window).height(), container.outerHeight(),(($(window).height() - container.outerHeight()) / 2))
        container.css("position", "fixed");
        container.css("top", (($(window).height() - container.outerHeight()) / 2) + 'px');
        container.css("left", (($(window).width() - container.outerWidth()) / 2) + 'px');
    });
};


function nearBestPosition(whereId, theObjId, centerOnEl) {

    var el = whereId;
    var target = theObjId;

    if (typeof whereId != "object") {
        el = $("#" + whereId);
    }
    if (typeof theObjId != "object") {
        target = $("#" + theObjId);
    }

    if (el) {
        target.css("visibility", "hidden");
        var hasContainment = false;

        target.parents().each(function () {
            if ($(this).css("position") == "static")
                return;

            hasContainment = true;
        });

        var trueX = hasContainment ? el.position().left : el.offset().left;
        var trueY = hasContainment ? el.position().top : el.offset().top;
        var h = el.outerHeight();
        var elHeight = parseFloat(h);

        if (centerOnEl) {
            var elWidth = parseFloat(el.outerWidth());
            var targetWidth = parseFloat(target.outerWidth());
            trueX += (elWidth - targetWidth) / 2;
        }

        trueY += parseFloat(elHeight);

        var left = trueX;
        var top = trueY;
        var barHeight = 45;
        var barWidth = 20;

        if (trueX && trueY) {
            target.css("left", left);
            target.css("top", top);
        }

        if (target.offset().left >= (($(window).width() + $(window).scrollLeft()) - target.outerWidth())) {

            left = (($(window).width() + $(window).scrollLeft()) - target.outerWidth() - 10);
            target.css({ left: left, marginTop: 0 });
        }

        if (target.offset().left < 0) {
            left = 10;
            target.css("left", left);
        }


        if ((target.offset().top + target.outerHeight() >= (($(window).height() + $(window).scrollTop()) - barHeight)) && (target.outerHeight() < $(window).height())) {
            var marginTop = -(target.outerHeight() + el.outerHeight());
            target.css("margin-top", marginTop);
        }

        if (target.offset().top < 0) {
            top = 0;
            target.css("top", top);
        }


        target.css("visibility", "visible");
    }
}

$.fn.keepItVisible = function (ref) {
    var thisTop = $(this).offset().top;
    var thisLeft = $(this).offset().left;
    var fromTop = 0;
    var fromLeft = 0;

    var windowH = $(window).height() + $(window).scrollTop();
    var windowW = $(window).width() + $(window).scrollLeft();

    if (ref) {
        fromTop = windowH - (ref.offset().top);
        fromLeft = windowW - (ref.offset().left + ref.outerWidth());
    }

    if (thisTop + $(this).outerHeight() > windowH) {
        var mt = (thisTop + $(this).outerHeight()) - windowH;
        //		$(this).css("margin-top", -$(this).outerHeight() - fromTop);
        $(this).css("margin-top", -mt - fromTop);
    }
    if (thisLeft + $(this).outerWidth() > windowW) {
        var mL = (thisLeft + $(this).outerWidth()) - windowW;
        //		$(this).css("margin-left", -$(this).outerWidth() - fromLeft);
        $(this).css("margin-left", -mL - fromLeft);
    }
    $(this).css("visibility", "visible");
};

//END positioning


/*   Caret Functions
 	 Use setSelection with start = end to set caret
 */
function setSelection(input, start, end) {
    input.setSelectionRange(start, end);
}

$.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};

$.fn.hasOverflow = function () {
    var element = this.get(0);
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}

//-- Caret Functions END ---------------------------------------------------------------------------- --

/*----------------------------------------------------------------- manage bbButtons*/
$.buttonBar = {
    defaults: {
        mainContainer: window
    },

    init: function (opt) {

        $.extend($.buttonBar.defaults, opt);
        var wrapper = $.buttonBar.defaults.mainContainer;

        setTimeout(function () {
            $.buttonBar.manageButtonBar();
            $(wrapper).on("scroll.ButtonBar", function () {
                $.buttonBar.manageButtonBar();
            });
            $(window).on("resize.ButtonBar", function () {
                $.buttonBar.manageButtonBar();
            });
        }, 10);

    },

    manageButtonBar: function (anim) {
        var wrapper = $.buttonBar.defaults.mainContainer;

        $(".buttonArea").not(".bbCloned").not(".notFix").each(function () {
            var bb = this;

            //se usiamo questi si rompe la button bar flottante del save sulla issue list
            //bb.originalHeigh=bb.originalHeigh ||  $(bb).height();
            //bb.originalOffsetTop=bb.originalOffsetTop||$(bb).offset().top;

            bb.originalHeigh = $(bb).height();
            bb.originalOffsetTop = $(bb).offset().top;

            if (wrapper == window) {
                bb.isOut = $(wrapper).scrollTop() + $(wrapper).height() - bb.originalHeigh < bb.originalOffsetTop;
            } else {
                bb.isOut = $(bb).offset().top > $(wrapper).height() - bb.originalHeigh;
            }

            if (bb.bbHolder)
                bb.bbHolder.css({ width: $(bb).outerWidth(), left: $(bb).offset().left });

            if (bb.isOut && !bb.isCloned) {
                if (bb.bbHolder)
                    bb.bbHolder.remove();
                bb.isCloned = true;
                bb.bbHolder = $(bb).clone().addClass("bbCloned clone bottom").css({ width: $(bb).outerWidth(), marginTop: 0, left: $(bb).offset().left });
                bb.bbHolder.hide();
                bb.bbHolder.css({ position: "fixed", bottom: 0, left: $(bb).offset().left });
                $(bb).after(bb.bbHolder);
                bb.bbHolder.show();
                $(bb).css("visibility", "hidden");

            } else if (!bb.isOut && bb.isCloned) {
                //} else {
                bb.isCloned = false;
                bb.bbHolder.remove();
                $(bb).css("visibility", "visible");
            }
        });
    },

    refreshButtonBar: function () {
        var wrapper = $.buttonBar.defaults.mainContainer;

        $(".bbCloned").remove();
        $(".buttonArea").not(".bbCloned").each(function () {
            var bb = this;
            bb.isCloned = false;
        });

        $.buttonBar.manageButtonBar(false);
    }
};

//-- Custom scrolls ---------------------------------------------------------------------------- --

function setCustomScroll(elID) {
    if (!isOSX)
        return new PerfectScrollbar(elID);
    else
        return;
}


//************************************************************************************************** ajaxFunctions.js
//-- START AJAX ---------------------------------------------------------------------------

function executeCommand(command, data) {
    $.ajax({
        url: contextPath + "/command.jsp?CM=" + command,
        data: data,
        dataType: "text"
        //success:function(resp){alert(">"+resp+"<")}
    });
}

/**
 *
 * @param formId
 * @param domIdToReload
 * @deprecated
 */
function ajaxSubmit(formId, domIdToReload) {
    var form = $("#" + formId);
    var settings = {
        success: function (response) {
            hideSavingMessage();
            if (domIdToReload)
                $('#' + domIdToReload).replaceWith(response);
        },
        data: form.serialize()
    };
    showSavingMessage();
    $.ajax(form.attr("action"), settings);
}



/**
 *  shows messages from controller and in case of errors set respons to false
 *  shows client entriesErrors
 *  domScope is used to define where your input are in case of not unique field e.g.: a list with multiple inpout field named "code"
 *   errors =[{ceName:ceErrorCode},...]
 **/

function jsonResponseHandling(response, domScope) {

    //primo: si girano le clientEntries per vedere se ci sono errori
    var ceMessage = "";
    for (var i = 0; response.errors && i < response.errors.length; i++) {
        var err = response.errors[i];
        var field = domScope ? domScope.find(":input[name=" + err.name + "]") : $(":input[name=" + err.name + "]");
        if (field.length > 0)
            field.createErrorAlert(err.error);
        else
            ceMessage += "\"" + err.label + "\":&nbsp;" + err.error + "<br>";
        response.ok = false; // se ci sono errori sulle ce Ã¨ sempre picche!
    }

    if (ceMessage.trim().length > 0) {
        showFeedbackMessage("ERROR", ceMessage);
    }

    //secondo: si mandano i messaggi
    if (response.messagesFromController) {
        for (var j = 0; response.messagesFromController && j < response.messagesFromController.length; j++) {
            var m = response.messagesFromController[j];
            showFeedbackMessage(m.type, m.message, m.title);
        }
    }
}

// END AJAX ----------------------------------------------------------------------------


//************************************************************************************************** jquery/JST/jquery.JST.js
$.fn.loadTemplates = function () {
    $.JST.loadTemplates($(this));
    return this;
};

$.JST = {
    _templates: new Object(),
    _decorators: new Object(),

    loadTemplates: function (elems) {
        elems.each(function () {
            $(this).find(".__template__").each(function () {
                var tmpl = $(this);
                var type = tmpl.attr("type");

                //template may be inside <!-- ... --> or not in case of ajax loaded templates
                var found = false;
                var el = tmpl.get(0).firstChild;
                while (el && !found) {
                    if (el.nodeType == 8) { // 8==comment
                        var templateBody = el.nodeValue; // this is inside the comment
                        found = true;
                        break;
                    }
                    el = el.nextSibling;
                }
                if (!found)
                    var templateBody = tmpl.html(); // this is the whole template

                if (!templateBody.match(/##\w+##/)) { // is Resig' style? e.g. (#=id#) or (# ...some javascript code 'obj' is the alias for the object #)   (#! .... #)  htmlEncodeApexes
                    var strFunc =
                        "var p=[],print=function(){p.push.apply(p,arguments);};" +
                        "with(obj){p.push('" +
                        templateBody.replace(/[\r\t\n]/g, " ")
                            .replace(/'(?=[^#]*#\))/g, "\t")
                            .split("'").join("\\'")
                            .split("\t").join("'")
                            .replace(/\(#=(.+?)#\)/g, "',$1,'")
                            .replace(/\(#!(.+?)#\)/g, "',htmlEncodeApexes($1),'")// aggiunta R&S 2/7/2019  (#! .... #)  encode
                            .split("(#").join("');")
                            .split("#)").join("p.push('")
                        + "');}return p.join('');";

                    try {
                        $.JST._templates[type] = new Function("obj", strFunc);
                    } catch (e) {
                        console.error("JST error: " + type, e, strFunc);
                    }

                } else { //plain template   e.g. ##id##
                    try {
                        $.JST._templates[type] = templateBody;
                    } catch (e) {
                        console.error("JST error: " + type, e, templateBody);
                    }
                }

                tmpl.remove();

            });
        });
    },

    createFromTemplate: function (jsonData, template, transformToPrintable) {
        var templates = $.JST._templates;

        var jsData = new Object();
        if (transformToPrintable) {
            for (var prop in jsonData) {
                var value = jsonData[prop];
                if (typeof (value) == "string")
                    value = (value + "").replace(/\n/g, "<br>");
                jsData[prop] = value;
            }
        } else {
            jsData = jsonData;
        }

        function fillStripData(strip, data) {
            for (var prop in data) {
                var value = data[prop];
                strip = strip.replace(new RegExp("##" + prop + "##", "gi"), value);
            }
            // then clean the remaining ##xxx##
            strip = strip.replace(new RegExp("##\\w+##", "gi"), "");
            return strip;
        }

        var stripString = "";
        if (typeof (template) == "undefined") {
            alert("Template is required");
            stripString = "<div>Template is required</div>";

        } else if (typeof (templates[template]) == "function") { // resig template
            try {
                stripString = templates[template](jsData);// create a jquery object in memory
            } catch (e) {
                console.error("JST error: " + template, e.message);
                stripString = "<div> ERROR: " + template + "<br>" + e.message + "</div>";
            }

        } else {
            stripString = templates[template]; // recover strip template
            if (!stripString || stripString.trim() == "") {
                console.error("No template found for type '" + template + "'");
                return $("<div>");

            } else {
                stripString = fillStripData(stripString, jsData); //replace placeholders with data
            }
        }

        var ret = $(stripString);// create a jquery object in memory
        ret.attr("__template", template); // set __template attribute

        //si inizializzano gli eventuali input
        ret.initFields();

        //decorate the strip
        var dec = $.JST._decorators[template];
        if (typeof (dec) == "function")
            dec(ret, jsData);

        return ret;
    },


    existsTemplate: function (template) {
        return $.JST._templates[template];
    },

    //decorate function is like function(domElement,jsonData){...}
    loadDecorator: function (template, decorator) {
        $.JST._decorators[template] = decorator;
    },

    getDecorator: function (template) {
        return $.JST._decorators[template];
    },

    decorateTemplate: function (element) {
        var dec = $.JST._decorators[element.attr("__template")];
        if (typeof (dec) == "function")
            dec(editor);
    },

    // asynchronous
    ajaxLoadAsynchTemplates: function (templateUrl, callback) {

        $.get(templateUrl, function (data) {

            var div = $("<div>");
            div.html(data);

            $.JST.loadTemplates(div);

            if (typeof (callback == "function"))
                callback();
        }, "html");
    },

    ajaxLoadTemplates: function (templateUrl) {
        $.ajax({
            async: false,
            url: templateUrl,
            dataType: "html",
            success: function (data) {
                var div = $("<div>");
                div.html(data);
                $.JST.loadTemplates(div);
            }
        });

    }


};



//************************************************************************************************** jquery/confirm/jquery.confirm.js
/*******************************************************************************
 *
 * confirm
 * Author: mbicocchi
 * Creation date: 30/04/15
 *
 ******************************************************************************/

// ------------------ jQuery.confirm
$.fn.confirm = function (action, message) {
    var timer = 6000;
    if (typeof (action) != "function")
        return;

    $(".confirmBox").remove();

    this.each(function () {
        var el = $(this);
        var div = $("<div>").addClass("confirmBox").
            html(message ? message : i18n.DO_YOU_CONFIRM);
        div.css({ "min-width": el.outerWidth(), "min-height": el.outerHeight() });
        div.oneTime(timer, "autoHide", function () {
            $(this).fadeOut(100, function () {
                el.show();
                $(this).remove();
            });
        });

        var no = $("<span>").addClass("confirmNo").html(i18n.NO).click(function (ev) {
            ev.stopPropagation();
            el.show();
            $(this).parent().hide().stopTime("autoHide").remove();
        });

        var yes = $("<span>").addClass("confirmYes").html(i18n.YES).click(function (ev) {
            ev.stopPropagation();
            $(this).parent().hide().stopTime("autoHide").remove();
            el.show();
            action.apply(el.get(0));
        });

        div.append("&nbsp;&nbsp;")
            .append(yes)
            .append("&nbsp;/&nbsp;")
            .append(no);

        el.after(div);

        var l = el.position().left + el.outerWidth() - div.outerWidth() + 10;

        if ((l + div.outerWidth()) > $(window).width()) {
            var diff = (l + div.outerWidth()) - $(window).width();
            l = l - diff;
        }

        div.css({ marginTop: - (div.offset().top - el.offset().top + 10), left: l });

        var lOffset = div.offset().left;
        if (lOffset < 0) {
            l = 0;
        }
        div.css({ left: l });

    });
    return this;

};


//************************************************************************************************** ../layout/smartCombo/partSmartCombo.js
function scDropDownRowClicked(row) {
    //console.debug("scDropDownRowClicked");
    var dropDown = row.parents(".cbDropDown:first");
    var hiddField = dropDown.nextAll("input[type=hidden]:first");
    var txtField = dropDown.prevAll("input:text:first");
    txtField.val(row.attr('selectText')).trigger("change");
    hiddField.val(row.attr('selectValue')).trigger("change");
    txtField.blur();
}

function createDropDown(txtField, ifrWidth, ifrHeight) {
    var hiddField = txtField.nextAll("input[type=hidden]:first");
    var dropDown = txtField.nextAll(".cbDropDown:first");

    if (dropDown.size() == 0) {
        dropDown = $("<div>");
        dropDown.addClass("cbDropDown");
        //var css = {left: txtField.position().left}; // 9/3/2016 Mattie Rob sembra non servire e scassa il mobile
        var css = {};
        if (ifrWidth)
            css.width = ifrWidth;
        if (ifrHeight)
            css.height = ifrHeight;
        dropDown.css(css);

        if ($("body").is(".mobile")) {
            enableComponentOverlay(txtField, dropDown);
        }
        dropDown.attr("fieldId", hiddField.prop("id"));

        var isIos = $("body").is(".isIos");
        dropDown.on(isIos ? "click" : "mousedown", function (ev) { //si usa il mousedown
            txtField.removeClass("doNotFinalize");
            if ($(ev.target).closest(".scTr").size() > 0) {
                scDropDownRowClicked($(ev.target).closest(".scTr"));
            } else if ($(ev.target).closest(".addEntityLine").size() > 0) { // click on add entity line
                return false;
            } else {
                //stop finalization
                txtField.addClass("doNotFinalize");
            }

            ev.stopPropagation();
            ev.preventDefault();

        }).on("mouseup", function (ev) {
            txtField.removeClass("doNotFinalize");
        });
        txtField.after(dropDown);
    }
    if (!$("body").is(".mobile"))
        dropDown.keepItVisible(txtField);
}

function refreshDropDown(dropDown, txtField, key) {
    //console.debug("scRefreshDropDown",key);
    var txt = txtField.val();
    row = 0;
    var hiddField = dropDown.nextAll("input[type=hidden]:first");
    if (!hiddField || hiddField.length == 0)
        return;

    //txt = txt.replace(/&backslash;/g, '\\');  //commentata il 12/1/2014
    dropDown.load(contextPath + "/smartCombo/" + hiddField.attr("jspPart"),
        {
            id: dropDown.attr("fieldId"),
            filter: txt,
            key: key,
            hiddenValue: hiddField.val(),
            ststrnz: (new Date()).getTime()
        }, function () {
            dropDown.show();

            //nel caso di mobile si attiva iscroll
            if ($("body").is(".mobile.isIos")) {
                if (dropDown.data("iscroll")) {
                    dropDown.data("iscroll").destroy();
                }
                var overlay_iscroll = new IScroll(dropDown.get(0), { click: true });
                dropDown.data("iscroll", overlay_iscroll);
            };
        });
}

function finalizeOperation(dropDown, required, addAllowed) {
    //console.debug("scFinalizeOperation");
    var txtField = dropDown.prevAll("input:text:first");
    if (txtField.is(".doNotFinalize")) {
        txtField.removeClass("doNotFinalize");
        return;
    }

    var hidField = dropDown.nextAll("input[type=hidden]:first");
    if (required) {
        if (addAllowed) {
            if (txtField.val() == '') {
                txtField.addClass('formElementsError');
            } else {
                txtField.removeClass('formElementsError');
            }
        } else {
            if (hidField.val() == '') {
                txtField.addClass('formElementsError');
            } else {
                txtField.removeClass('formElementsError');
            }
        }
    } else {
        if (!addAllowed && (txtField.val() != '' && hidField.val() == '')) {
            txtField.addClass('formElementsError');
        } else {
            txtField.removeClass('formElementsError');
        }
    }

    //hide image linking to entity on new selection
    var linkedEnt = txtField.nextAll("._lnk:first");
    if (linkedEnt) {
        if (hidField.isValueChanged()) {
            linkedEnt.hide();
        } else {
            linkedEnt.show();
        }
    }

    if ($("body").is(".mobile")) {
        disableComponentOverlay();
    }

    dropDown.remove();

    var fieldId = hidField.prop("id");
    try {
        // riscritta per poter chiamare il letSubmit.. con un contesto
        //if (eval("typeof(letSubmit" + fieldId + ")") == 'function') {
        //  eval("letSubmit" + fieldId + "()");
        //}
        if (typeof window["letSubmit" + fieldId] == 'function')
            window["letSubmit" + fieldId].apply(hidField.get(0));

    } catch (e) {
        //console.error(e)
    }

}

function scrollDropDown(dropDown, inc) {
    dropDown.scrollTop(inc);
}

function stopKeyEvent(event) {
    var ret = true;
    switch (event.keyCode) {
        case 13: //enter
            stopBubble(event);
            ret = false;
            break;
    }
    return ret;
}

var row = 0;
var theRow = false;

function manageKeyEvent(txtField, oEvent, required, addAllowed) {
    //console.debug("manageKeyEvent",txtField.attr('id'),oEvent);
    var dropDown = txtField.nextAll(".cbDropDown:first");
    var totalRow = dropDown.find("tr[selectValue]").size() + 1;
    var hidField = txtField.nextAll("input[type=hidden]:first");

    var refreshQueue;
    var ret = true;
    switch (oEvent.keyCode) {

        case 38: //up arrow
            var nextRowId = row > 1 ? "ROW_" + row : "ROW_1";
            if (row > 1) {
                row--;
                var rowId = "ROW_" + row;
                theRow = dropDown.find("#" + rowId);
                thePrevRow = dropDown.find("#" + nextRowId);
                if (theRow.position().top < 0)
                    dropDown.scrollTop(dropDown.scrollTop() - theRow.outerHeight() - 3);
                theRow.addClass("trSel");
                if (thePrevRow.size() > 0)
                    thePrevRow.removeClass("trSel");
                return false;
            }
            break;

        case 40: //down arrow
            var prevRowId = "ROW_" + (row);
            if (row < totalRow - 1) {
                row++;
                var rowId = "ROW_" + row;
                theRow = dropDown.find("#" + rowId);
                thePrevRow = dropDown.find("#" + prevRowId);

                if (theRow.position().top > (dropDown.height() - theRow.outerHeight()))
                    dropDown.scrollTop(dropDown.scrollTop() + theRow.outerHeight() + 3);

                theRow.addClass("trSel");
                if (thePrevRow.size() > 0)
                    thePrevRow.removeClass("trSel");
                return false;
            }
            break;

        case 33: //page up
            var prevRowId = row > 1 ? "ROW_" + row : "ROW_1";
            if (row > 1) {
                row = 1;
                var rowId = "ROW_" + row;
                theRow = dropDown.find("#" + rowId);
                thePrevRow = dropDown.find("#" + prevRowId);
                dropDown.scrollTop(0);
                theRow.addClass("trSel");
                if (thePrevRow.size() > 0) {
                    thePrevRow.removeClass("trSel");
                }
                return false;
            }
            break;

        case 34: //page down
            var nextRowId = row > 1 ? "ROW_" + row : "ROW_1";
            if (row < totalRow - 1) {
                row = totalRow - 1;
                var rowId = "ROW_" + row;

                theRow = dropDown.find("#" + rowId);
                thePrevRow = dropDown.find("#" + nextRowId);

                dropDown.scrollTop(20000);
                theRow.addClass("trSel");
                if (thePrevRow.size() > 0) {
                    thePrevRow.removeClass("trSel");
                }
                return false;
            }
            break;

        // in those cases do nothing, do not need to refresh combo, only caret movement
        case 37: //left arrow
        case 39: //right arrow
        case 36: //home
        case 35: //end
        case 27: //esc
        case 16: //shift
        case 17: //ctrl
        case 18: //alt
        case 20: //caps lock
        case 255: // ???
            break;


        case 9:  //tab
        case 13: //enter
            if (theRow) {
                stopBubble(oEvent);
                txtField.val($(theRow).attr('selectText'));
                hidField.val($(theRow).attr('selectValue'));
                txtField.get(0).blur();

                row = 0;
                theRow = false;


                //17/06/2013 bicch & chel: si prova a dare il focus all'input dopo
                var allvis = $(":input:visible");
                var nextField = allvis.get(allvis.index(txtField.get(0)) + 1);
                if (nextField)
                    nextField.focus();

                return false;
                // break; move out of "if" 24/1/13  in order to avoid field invalidation when moving using tab
            }
            break;


        // in this case must refresh combo
        case 8: //backspace
        case 46: //delete
        default:
            hidField.val("");  // WARNING added on 12/12/2007 in order to manage correctly combo.addAllowed
            row = 0;
            //var cleanedText = txtField.val().replace(/\\/g, '&backslash;');  commentata il 12/1/2014
            var cleanedText = txtField.val();
            dropDown.stopTime("refreshQueue");
            dropDown.oneTime(500, "refreshQueue", function () {
                refreshDropDown($(this), txtField, "");
            });
            break;
    }
    return false;
}


function removeSmartComboEntry(smartComboName) {
    //console.debug("removeSmartComboEntry",smartComboName)
    $("#" + smartComboName).val('');
    $("#" + smartComboName + "_txt").val('');
}

function setSmartComboEntry(smartComboName, code, descr) {
    $("#" + smartComboName).val(code);
    $("#" + smartComboName + "_txt").val(descr);
}



//**************************************************************************************************  ../layout/colorValueChooser/partColorValueChooser.js

var _colorValueData = _colorValueData || {};

function cvc_clickColValSel(colorSquare, event) {
    //console.debug("cvc_clickColValSel");
    var component = colorSquare.closest("[cvcType]");
    var hiddenInput = component.find(":input:first");
    if (hiddenInput.is("[readonly]"))
        return;

    var isMultiSelect = component.is(".cvcMultiSelect");
    var isDisplayValue = component.is(".cvcDisplayValue");

    //se Ã¨ giÃ  aperta si esce subito
    if (component.find(".cvcDropDown").size() > 0) {
        component.find(".cvcDropDown").remove();
        return;
    }

    var type = component.attr("cvcType");
    var cvcData = _colorValueData[type];
    var colors = cvcData.values;

    //si costruisce la lista
    var divList = $("<div>").addClass("cvcDropDown");

    //si prendono i valori settati
    var val = hiddenInput.val();
    var selectedCodes = val ? val.split(",") : [""];

    if (typeof (cvcData.callback) == "function") {
        var callback = cvcData.callback;
        component.off("cvcChange").on("cvcChange", function (ev, data) {
            callback($(this).find(":input:first"), data);
        });
    }


    //per tutti i codici/colori in lista
    for (var i = 0; i < colors.length; i++) {
        var codeColor = colors[i];
        var code = codeColor.code;

        var colorLine = $("<div>").addClass("cvcLine").html(codeColor.value).attr("code", code);
        var icon = $("<span>").addClass("teamworkIcon").css({ "color": codeColor.color }).html("&#169; ");
        colorLine.prepend(icon);

        if (codeColor.enabled) {
            colorLine.on("click touchend", function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                var selCode = $(this).attr("code");
                if (isMultiSelect) {
                    if (!selCode || selCode == "") {
                        selectedCodes = [];
                        divList.find(".cvcLine").removeClass("selected");
                    } else {
                        var pos = selectedCodes.indexOf("");
                        if (pos >= 0)
                            selectedCodes.splice(pos, 1);
                        if ($(this).toggleClass("selected").is(".selected")) {
                            selectedCodes.push(selCode);
                        } else {
                            selectedCodes.splice(selectedCodes.indexOf(selCode), 1);
                        }

                    }
                    hiddenInput.val(selectedCodes.join(","));
                    hiddenInput.clearErrorAlert();

                } else {
                    hiddenInput.val(selCode);
                    hiddenInput.clearErrorAlert();
                    component.find(".cvcDropDown").remove();
                }
                cvc_redraw(component);

                //callback
                component.trigger("cvcChange", [cvc_getValueFromCode(hiddenInput.val(), colors)]);
            });
        } else {
            colorLine.css("pointer-events", "none").addClass("disabled");
        }

        //Ã¨ selezionato?
        if (selectedCodes.indexOf(code) >= 0)
            colorLine.addClass("selected");

        divList.append(colorLine);
    }

    //si bindano gli enventi di chiusura
    component.bind("mouseleave", function () { $(this).oneTime(200, "delDrop", function () { $(this).find(".cvcDropDown").remove(); }) });
    component.bind("mouseenter", function () { component.stopTime("delDrop") });

    colorSquare.append(divList);

    divList.keepItVisible(colorSquare);

    stopBubble(event);
    return false;
}

function cvc_redraw(component) {
    //console.debug("cvc_redraw",component.attr("cvcType"));
    var val = component.find(":input:first").val();
    var selectedCodes = val ? val.split(",") : [""];
    component.find(".cvcSelBox").remove();

    var isMultiSelect = component.is(".cvcMultiSelect");
    var isDisplayValue = component.is(".cvcDisplayValue");

    var colorValueData = _colorValueData[component.attr("cvcType")];

    for (var i = 0; i < selectedCodes.length; i++) {
        //var ccv = colorValueData[selectedCodes[i]];
        var ccv = cvc_getValueFromCode(selectedCodes[i], colorValueData.values);
        if (ccv) {
            var div = $("<div>").addClass("cvcSelBox").attr("code", ccv.code).attr("title", ccv.value);
            if (!isMultiSelect && isDisplayValue) {
                div.css({ color: ccv.textColor, "background-color": ccv.color });
            } else {
                var span = $("<span>").addClass("teamworkIcon").css("color", ccv.color).html("&#169;");
                div.append(span);
            }

            if (isDisplayValue) {
                var valueSpan = $("<span/>").addClass("cvcDescription").html(ccv.value);
                div.append(valueSpan);
            }

            component.find(".cvcStatuses").append(div);
        }
    }
}

function cvc_selectValueOrFirstElement(component, val) {
    //console.debug("cvc_selectValueOrFirstElement")
    var type = component.attr("cvcType").toUpperCase();
    var values = _colorValueData[type].values;
    var pos = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i].code == val) {
            pos = i;
            break;
        }
    }
    component.find(":input[type=hidden]").val(values[pos].code);
}

function cvc_selectFirstElement(component) {
    var type = component.attr("cvcType").toUpperCase();
    component.find(":input[type=hidden]").val(_colorValueData[type].values[0].code);
}

function cvc_getValueFromCode(code, colorValueData) {
    var ret;
    for (var i = 0; i < colorValueData.length; i++) {
        if (code == colorValueData[i].code) {
            ret = colorValueData[i];
            break;
        }
    }
    return ret;
}


//**************************************************************************************************  ../layout/comboBox/partComboBox.js
var _comboBoxData = _comboBoxData || {};

function cb_inputBlur(input) {
    //console.debug("blur");
    var comboDiv = input.data("comboDiv");
    input.oneTime(200, "cb_inputBlur", function () {
        comboDiv.remove()
    });
}

var currentRow;  //global to be shared between keydown and keyup :-(
function cb_keyDown(element, keyCode) {
    var comboType = element.attr("comboType");
    var comboDiv = element.data("comboDiv");
    currentRow = undefined;
    if (!comboDiv.is(":visible")) {
        comboDiv.show();
        var newRow = cb_findRow(element.val(), comboDiv);
        if (newRow)
            currentRow = newRow;
        keyCode = "fuckyou"; //in order skip  find
    }

    if (!currentRow) {
        currentRow = comboDiv.find(".trSel:first");
        if (currentRow.size() == 0)
            currentRow = comboDiv.find(".comboRow:first");
    }
    comboDiv.find(".trSel").removeClass("trSel");

    switch (keyCode) {
        case 38: //up arrow
            var newRow = currentRow.prev();
            if (newRow.size() > 0) {
                currentRow = newRow;
            }
            break;

        case 40: //down arrow
            var newRow = currentRow.next();
            if (newRow.size() > 0) {
                currentRow = newRow;
            }
            break;
    }
    currentRow.addClass("trSel");
    comboDiv.scrollTop(currentRow.get(0).offsetTop - comboDiv.height() / 2);
}


function cb_keyUp(element, keyCode) {
    var comboType = element.attr("comboType");
    var comboDiv = element.data("comboDiv");

    switch (keyCode) {
        case 38, 40: //up arrow down arrow
            break;

        case 13: //enter
            currentRow.click();
            break;

        default:
            var newRow = cb_findRow(element.val(), comboDiv);
            if (newRow) {
                currentRow = newRow;
                comboDiv.find(".trSel").removeClass("trSel");
                currentRow.addClass("trSel");
                comboDiv.scrollTop(currentRow.get(0).offsetTop - comboDiv.height() / 2);
            }
            break;
    }
}

function cb_findRow(string, comboDiv) {
    var inputValue = string.toLowerCase();
    var currentRow;
    if (inputValue && inputValue.length > 0) {
        comboDiv.find("[comboValue]").each(function () {
            currentRow = $(this);
            if (currentRow.attr("comboValue").toLowerCase().indexOf(inputValue) >= 0) {
                return false;
            }
        });
    }
    return currentRow;
}


function cb_initializeCombo(element) {
    var type = element.attr("comboType");
    var comboData = _comboBoxData[type];
    //console.debug("cb_initializeCombo",element,comboData);

    $(".comboBoxDiv").remove();

    var comboDiv = $("<div>").addClass("comboBoxDiv").attr({ comboType: comboData.type, style: comboData.style, onSelectScript: comboData.onSelectScript });
    var table = $("<table>").addClass("table comboTable");
    for (var i = 0; i < comboData.values.length; i++) {
        var tr = $("<tr>").addClass("alternate comboRow").prop("id", comboData.type + "_ROW_" + i).attr("comboValue", comboData.values[i]);
        var td = $("<td>").append(comboData.values[i]);
        tr.append(td);
        table.append(tr);
    }
    if (i == 0) {
        var tr = $("<tr>").addClass("alternate comboRow").prop("id", comboData.type + "_ROW_" + i).attr("comboValue", comboData.values[i]);
        var td = $("<td>").append(i18n.COMBO_NO_VALUES);
        tr.append(td);
        table.append(tr);
    }

    comboDiv.append(table);

    comboDiv.on("mouseleave", function () {
        comboDiv[0].timer = setTimeout(function () {
            comboDiv.remove();
        }, 1000);
    }).on("mouseenter", function () {
        clearTimeout(comboDiv[0].timer);
    });

    //bind events
    comboDiv.find(".comboRow").click(function (e) {
        var row = $(this);
        var input = comboDiv.data("opener");
        input.stopTime("cb_inputBlur");
        input.val(row.attr("comboValue"));

        //execute onSelectScript using input as "this" for the executon context
        evalInContext(comboDiv.attr("onSelectScript"), input);
        comboDiv.remove();

    });

    comboDiv.scroll(function () {
        var input = $(this).data("opener");
        input.stopTime("cb_inputBlur");
    });

    element.data('comboDiv', comboDiv);
    comboDiv.data('opener', element);
    comboDiv.find(".trSel").removeClass("trSel");
    element.after(comboDiv);
    comboDiv.show();
    nearBestPosition(element, comboDiv);
    comboDiv.keepItVisible();

    cb_keyUp(element, "fake");

    //select text
    element.get(0).select();
}

function cb_clickOpener(arrow) {
    var input = arrow.prevAll(':input:first');
    var comboType = input.attr("comboType");
    var comboDiv = $("#" + comboType + "_DIV");
    if (comboDiv.size() > 0 && comboDiv.is(":visible"))
        comboDiv.remove();
    else
        input.focus();
}


//**************************************************************************************************  ../layout/partButtonsOnMouseover.js
var _timerIdForButtonsOMO = new Object();

function bjs_showButtonsOMO(divId, bjsId) {
    $(".buttonsomo").hide();

    $("#" + divId).show();
    nearBestPosition(bjsId, divId, true);
    if (_timerIdForButtonsOMO[divId] !== null)
        clearTimeout(_timerIdForButtonsOMO[divId]);
}

function bjs_hideButtonsOMO(divid) {
    //console.debug("bjs_hideButtonsOMO")
    $("#" + divid).hide();
}

function div_hideButtonsOMOWithTimeout(divId) {
    _timerIdForButtonsOMO[divId] = setTimeout("$('#" + divId + "').hide()", 500);
}

function div_showButtonsOMO(divId) {
    if (_timerIdForButtonsOMO !== null)
        clearTimeout(_timerIdForButtonsOMO[divId]);
    $("#" + divId).show();
}


//**************************************************************************************************  ../layout/partDivOnMouseover.js
var divomoHoverTimer = 2000;
var divomoCloseAfter = 1000;

function bjs_showMenuDiv(divId, bjsId, centered) {
    //console.debug(typeof (bjsId),bjsId,typeof (bjsId)!="object")
    var opener = bjsId;
    if (typeof (opener) != "object")
        opener = $("#" + bjsId);

    if (opener.is("[disabled]"))
        return;

    $(document).off("click.divomo");
    clearTimeout(opener[0].delayOpen);
    opener.off("mouseleave");

    if (opener.parent().is(".arrowHover")) {
        $(".arrowHover").removeClass("arrowHover");
        bjs_hideDivOnMouseover(divId);
        return;
    }

    if (typeof centered == "undefined")
        centered = true;

    $(".divomo").hide();

    var divomo = $("#" + divId);

    divomo.appendTo("body");

    /*
     Matteo: Terrible hack to solve incompatibility between CSS column and slideDown method in Safari.
     */
    if (isSafari)
        divomo.show();

    divomo.appendTo("body").slideDown(100, function () {
        $(this).css({ overflow: "visible" });
    });

    setTimeout(function () {
        opener.off("mouseleave.divomo").on("mouseleave.divomo", function () {
            clearTimeout(el._timerIdForDivOnMouseOver);
            div_hideDivOnMouseoverWithTimeout(divId);
            clearTimeout(opener[0].delayOpen);
        });

        divomo.off("mouseenter.divomo").off("mouseleave.divomo");
        divomo.on("mouseenter.divomo", function () {
            clearTimeout(this._timerIdForDivOnMouseOver);
        }).on("mouseleave.divomo", function () {
            div_hideDivOnMouseoverWithTimeout(divId);
            clearTimeout(opener[0].delayOpen);
        });

        $(document).on("click.divomo", function (e) {
            var isSelf = $(e.target).is(".divomo") || $(e.target).parents(".divomo").length > 0;
            if (!isSelf)
                $("body").oneTime(10, "bjs_hideDivOnMouseover", function () { bjs_hideDivOnMouseover(divId) });
        });

        $(".divomo .button").not(".maintain").one("click", function () {
            bjs_hideDivOnMouseover(divId);
        });
        opener.parent().addClass("arrowHover");
    }, 50);

    nearBestPosition(opener, divId, centered);

    $(".divomoArrow", divomo).css({ left: (opener.offset().left - divomo.offset().left) + (opener.outerWidth() / 2) - 12 });

    setTimeout(function () {
        $(window).on("resize.divomo", function () {
            nearBestPosition(opener, divId, centered);
            $(".divomoArrow", divomo).css({ left: (opener.offset().left - divomo.offset().left) + (opener.outerWidth() / 2) - 12 });
        });
    }, 300);

    var el = divomo.get(0);
    clearTimeout(el._timerIdForDivOnMouseOver);
}

function bjs_showMenuDivOnMouseOver(divId, bjsId, centered) {

    var opener = $("#" + bjsId);

    if (opener.is("[disabled]"))
        return;

    if (opener.parent().is(".arrowHover")) {
        return;
    }
    opener.off("mouseleave").on("mouseleave", function () {
        div_hideDivOnMouseoverWithTimeout(divId);
        clearTimeout(opener[0].delayOpen);
    });

    if (typeof centered == "undefined")
        centered = true;

    opener[0].delayOpen = setTimeout(function () {
        $(".divomo").hide();



        $("#" + divId).appendTo("body").slideDown(100, function () {
            $(this).css({ overflow: "visible" });
            $(this).on("mouseenter", function () {
                var el = $("#" + divId).get(0);
                clearTimeout(el._timerIdForDivOnMouseOver);
            }).on("mouseleave", function () {
                div_hideDivOnMouseoverWithTimeout(divId);
                clearTimeout(opener[0].delayOpen);
            });
        });

        setTimeout(function () {
            $(".divomo .button").not(".maintain").one("click", function () {
                bjs_hideDivOnMouseover(divId);
            });
            opener.parent().addClass("arrowHover");
        }, 50);

        nearBestPosition(bjsId, divId, centered);
        $(".divomoArrow", $("#" + divId)).css({ left: ($("#" + bjsId).offset().left - $("#" + divId).offset().left) + (opener.outerWidth() / 2) - 12 });

        setTimeout(function () {
            $(window).on("resize.divomo", function () {
                nearBestPosition(bjsId, divId, centered);
                $(".divomoArrow", $("#" + divId)).css({ left: ($("#" + bjsId).offset().left - $("#" + divId).offset().left) + (opener.outerWidth() / 2) - 12 });
            });
        }, 300);

        opener.parent().addClass("arrowHover");

        var el = $("#" + divId).get(0);
        clearTimeout(el._timerIdForDivOnMouseOver);

    }, divomoHoverTimer)

}

function bjs_hideDivOnMouseover(divid) {
    $(".arrowHover").removeClass("arrowHover");
    $("#" + divid).slideUp(100, function () { $(this).trigger("hideDivOnMouseover") });
    $(document).off("click.divomo");
    $(window).off("resize.divomo");

}

function div_hideDivOnMouseoverWithTimeout(divId) {
    var el = $("#" + divId).get(0);
    el._timerIdForDivOnMouseOver = null;

    el._timerIdForDivOnMouseOver = setTimeout("bjs_hideDivOnMouseover('" + divId + "')", divomoCloseAfter);
}

function div_showDivOnMouseover(divId) {
    var el = $("#" + divId).get(0);
    clearTimeout(el._timerIdForDivOnMouseOver);
    $("#" + divId).show();
}


//**************************************************************************************************  ../layout/partUploader.js
function uplClickManage(el) {
    //console.debug("uplClickManage");
    var table = el.closest("table.upvtable");
    var spanFi = table.find(".sp_fi");
    var spanTf = table.find(".sp_tf");
    var img = table.find("img");
    var upl = table.find("[type=file]");

    if (!spanFi.is(":visible")) { //click on X
        spanFi.show();
        upl.get(0).disabled = false;
        upl.data("_oldvalue", "sporc"); // hack as the val() for file in unchangeable
        spanTf.hide();
        img.prop("src", contextPath + "/img/uploader/link.png");
    } else { //click on rondell
        spanFi.hide();
        upl.get(0).disabled = true;
        upl.updateOldValue();
        spanTf.show();
        img.prop("src", contextPath + "/img/uploader/unlink.png");

    }
}


//**************************************************************************************************  ../layout/dataTable/partDataTable.js
$(function () {
    //console.debug("dataTableSetup");
    $("[data-table]").each(function () {
        var tbl = $(this);
        //move order by field inside the form in order to get saveable with filters
        $("#" + tbl.attr("formId")).append($("#OB_" + tbl.attr("id")));

        //bind
        if (tbl.is("[bindReturnKey]")) {
            $("#" + tbl.attr("formId")).keyup(function (ev) {
                if (ev.keyCode == 13 && $(ev.target).closest(".filterActiveElements").length) // solo sugli elementi nel filtro
                    dataTableSearchClick(tbl.attr("id"));
            });
        }

        dataTableRefreshPaginator(tbl);
        dataTableRefreshOrderHeaders(tbl);
        if (tbl.find(".dataTableBody[noData]").length) {
            dataTableRefresh(tbl);
        } else {
            $(function () { sinchDataTableComponents(tbl) });
        }
    });
});

function dataTableChangeOrder(el, dataTableId) {
    //console.debug("dataTableChangeOrder");
    if (!canILeave()) return;
    var orderState = parseInt(el.attr("orderState")) + 1;
    orderState = orderState % 3;
    el.attr("orderState", orderState);

    var dataTable = $("#" + dataTableId);

    $("[name=OB_" + dataTableId + "]").val((orderState == 1 ? el.attr("orderingHql") + " ASC" : (orderState == 2 ? el.attr("orderingHql") + " DESC" : "")));
    dataTableRefresh(dataTable);
}


function dataTableRefresh(dataTable, resetPaginator) {
    //console.debug("dataTableRefresh", typeof (dataTable),resetPaginator);
    if (typeof (dataTable) != "object")
        dataTable = $("#" + dataTable);

    var dataTableId = dataTable.prop("id");
    if (resetPaginator)
        $("#" + dataTableId + "_PGtf").val(0); // altrimenti il search ti lascia alla pagina corrente

    //si recupera il form
    var form = $("#" + dataTable.attr("formId"));

    var data = {};
    /*form.find(".filterActiveElements :input").each(function () {
      var inp = $(this);
      data[inp.prop("name")] = inp.val();
    });*/
    form.find(".filterActiveElements").fillJsonWithInputValues(data);


    data.CM = "FN";
    data["DATA_TBL_ID"] = dataTableId;

    //ci si mettono sempre i dati del paginator e dell'order in quanto potrebbero essere fuori dalla form
    data["_FP_PG_N"] = $("#" + dataTableId + "_PGtf").val();
    data["_FP_PG_S"] = $("#_FP_PG_S").val();
    data["OB_" + dataTableId] = $("[name=OB_" + dataTableId + "]").val();

    var searchString = "";
    for (var n in data) {
        if (data[n] && data[n].length > 0)
            searchString += encodeURIComponent(n) + "=" + encodeURIComponent(data[n]) + "&";
    }


    if (history.replaceState) {
        history.replaceState("", "", window.location.pathname + "?" + searchString);
    } else { //this is required for ie9
        window.location.href = window.location.pathname + "?" + searchString;
        return;
    }


    var settings = {
        success: function (response) { sinchDataTableComponents(dataTable, response) },
        data: data
    };
    showSavingMessage();

    var paginators = $("[dataTableId=" + dataTable.prop("id") + "]");
    paginators.find(".paginatorSearching").show();
    paginators.find(".paginatorNotFound,.paginatorFoundN,.pagSize").hide();

    $.ajax(contextPath + "/dataTable/dataTableAjax", settings);
}

function sinchDataTableComponents(dataTable, response) {
    //console.debug("sinchDataTableComponents",dataTable.length);
    if (response) {
        dataTable.children("tfoot").remove();
        dataTable.children("tbody").replaceWith(response);
        $.tableHF.refreshTfoot();
    }
    var tBody = dataTable.children("tbody");
    var tHead = dataTable.children("thead");

    if (tBody.attr("totalnumberofelements") == "0") {
        $(dataTable).after($(".paginatorNotFound"));
        $(".paginatorNotFound").hide();
        $(".paginatorNotFound:first").show().addClass("hint");
        $("#workSpace").hide();
    } else {
        $("#workSpace").show();
    }


    dataTableRefreshPaginator(dataTable);
    dataTableRefreshOrderHeaders(dataTable);

    //rise a load event on dataTable
    dataTable.trigger('load.dataTable');

    //se nell'head c'Ã¨ un filtro attivo si svuota
    tHead.find(".tableFilterElementBox").removeClass("filterOn").find("input").val("");


    //si ritorna in cima alla pagina
    //console.debug("scroll",window.scrollX,window.scrollY)
    window.scrollTo(window.scrollX, 0);

    //chiama, se Ã¨ definita, una funzione js sulla pagina principale con il numero di elementi trovati
    if (typeof dataTableCallback == "function") {
        dataTableCallback(parseInt(tBody.attr("totalnumberofelements")));
    }
    hideSavingMessage();

    $(window).resize();

}

function dataTableRefreshOrderHeaders(dataTable) {
    //console.debug("dataTableRefreshOrderHeaders");
    var tHead = dataTable.find(".dataTableHead");
    var tBody = dataTable.find(".dataTableBody");
    var orderBy = tBody.attr("orderBy");
    // reset sort
    tHead.find(".tableHeadEl[orderingHql]").attr("orderState", 0);

    if (orderBy && orderBy.length > 0) {
        var order = orderBy.split(" "); // task.orderState ASC
        var el = tHead.find("[orderingHql^='" + order[0] + "']");
        var newOrder = 1;
        if (order.length > 1) {
            newOrder = ("ASC" == order[1].toUpperCase()) ? 1 : (("DESC" == order[1].toUpperCase()) ? 2 : 1);
        }
        //console.debug("neworder",newOrder)
        el.attr("orderState", newOrder);
    }
}


function dataTableRefreshPaginator(dataTable) {
    //console.debug("dataTableRefreshPaginator");
    var bd = dataTable.find("tbody");
    var totalNumberOfElements = parseInt(bd.attr("totalNumberOfElements"));
    var pageSize = parseInt(bd.attr("pageSize"));

    var pageNumber = parseInt(bd.attr("pageNumber"));
    //console.debug(totalNumberOfElements, pageSize, pageNumber);
    var paginators = $("[dataTableId=" + dataTable.prop("id") + "]");

    paginators.find(".paginatorSearching").hide();

    //---------------------- trovato niente ----------------------------------
    if (!totalNumberOfElements || totalNumberOfElements <= 0) {
        paginators.find(".paginatorSearching, .paginatorFound1,.paginatorFoundN,.pagSize").hide();
        paginators.find(".paginatorNotFound:first").show();
        paginators.find(".paginatorPages").empty();
        //---------------------- trovato 1 ----------------------------------
    } else if (totalNumberOfElements == 1) {
        paginators.find(".paginatorSearching, .paginatorNotFound,.paginatorFoundN,.pagSize").hide();
        paginators.find(".paginatorFound1").show();
        paginators.find(".paginatorPages").empty();
        //---------------------- trovati N ----------------------------------
    } else {
        paginators.find(".paginatorSearching, .paginatorNotFound,.paginatorFound1").hide();
        paginators.find(".paginatorFoundN .totalNumberOfElements").html(totalNumberOfElements);
        paginators.find(".paginatorFoundN,.pagSize").show();
        var newPages = $("<span>").addClass("paginatorPages");
        var quantPagesShow = 10;
        var minPage = 0;
        var maxPage = 0;
        var lastPageNumber = parseInt((totalNumberOfElements - 1) / pageSize); // Ã¨ zero based

        if (pageNumber > lastPageNumber - quantPagesShow / 2)
            minPage = lastPageNumber - quantPagesShow;
        else
            minPage = pageNumber - quantPagesShow / 2;

        if (minPage <= 0)
            minPage = 0;

        maxPage = minPage + quantPagesShow;
        if (maxPage >= lastPageNumber)
            maxPage = lastPageNumber;

        paginators.find(".paginatorPages").css({ visibility: "visible" });

        if (pageNumber >= 1) {
            newPages.append("<span class='dataTablePrev' style=font-weight:700 onclick='dataTableGoToPage($(this)," + (pageNumber) + ")'><span class='teamworkIcon sm'>{</span>&nbsp;" + i18n.PREV + "</span>");
        }

        if (minPage > 1) {
            newPages.append("<span onclick='dataTableGoToPage($(this),1)'>1...</span>");
        }

        if (minPage != maxPage) {
            for (var i = minPage; i <= maxPage; i++) {
                newPages.append("<span onclick='dataTableGoToPage($(this)," + (i + 1) + ")'>" + (i == pageNumber ? "<b>" + (i + 1) + "</b>" : (i + 1)) + "</span>");
            }
        }

        if (maxPage < lastPageNumber) {
            newPages.append("<span onclick='dataTableGoToPage($(this)," + (lastPageNumber + 1) + ")'>..." + (lastPageNumber + 1) + "</span>");
        }

        if (pageNumber < lastPageNumber) {
            newPages.append("<span class='dataTableNext' style=font-weight:700 onclick='dataTableGoToPage($(this)," + (pageNumber + 2) + ")'>" + i18n.NEXT + "&nbsp;<span class='teamworkIcon sm'>}</span></span>");
        }
        paginators.find(".paginatorPages").replaceWith(newPages);

        if (!maxPage)
            paginators.find(".paginatorPages").css({ visibility: "hidden" });
        else
            paginators.find(".paginatorPages").css({ visibility: "visible" });
    }
}


function dataTableGoToPage(el, pageNumber) {
    //console.debug("dataTableGoToPage",pageNumber);
    if (!canILeave()) return;
    var dataTableId = el.closestAttr("dataTableId");
    $("#" + dataTableId + "_PGtf").val(pageNumber);
    dataTableRefresh($("#" + dataTableId));
}

function dataTableSearchClick(dataTableId) {
    debugger;

    if (!canILeave()) return;

    $(".paginatorNotFound").hide();
    var filtTitle = $(".filterTitle");
    filtTitle.html(filtTitle.attr("defaultTitle"));
    dataTableRefresh(dataTableId, true);
}

function dataTableChangePageSize(dataTable) {
    //check if something is changed
    if (!canILeave()) return;
    dataTableRefresh(dataTable, true);
}

function generatePluginLink(link, height, width, targetBlank) {

    var dataTable = $("table.dataTable[formid]");
    var form = $("#" + dataTable.attr("formId"));

    var data = {};
    form.find(".filterActiveElements").fillJsonWithInputValues(data);
    data.CM = "FN";


    var searchString = "";
    for (var n in data) {
        if (data[n] && data[n].length > 0)
            searchString += encodeURIComponent(n) + "=" + encodeURIComponent(data[n]) + "&";
    }


    if (history.pushState) {
        history.pushState("", "", window.location.pathname + "?" + searchString);
    } else { //this is required for ie9
        window.location.href = window.location.pathname + "?" + searchString;
        return;
    }

    if (width > 0 || height > 0) {
        openBlackPopup(link + "?" + searchString, width + "px", height + "px");
    } else {
        if (targetBlank)
            window.open(link + "?" + searchString);
        else
            location.href = link + "?" + searchString;

    }
}


//**************************************************************************************************  ../layout/dateDurationInput/partDateDurationInput.js
function resynchDates(fieldName, startTaskId, startIsMilesId, durTaskId, endTaskId, endIsMilesId) {
    //console.debug("resynchDates",fieldName);

    var durTask = $("#" + durTaskId);
    var startTask = $("#" + startTaskId);
    var endTask = $("#" + endTaskId);
    var startIsMiles = $("#" + startIsMilesId);
    var endIsMiles = $("#" + endIsMilesId);


    function resynchDatesSetFields(command) {
        //var duration = parseInt(durTask.val());
        var duration = daysFromString(durTask.val(), true);
        if (!duration || duration < 1)
            duration = 1;

        var date = Date.parseString(startTask.val());

        while (isHoliday(date)) {
            date.setDate(date.getDate() + 1);
        }

        var start = date.getTime();

        var end = endTask.val();
        if (end.length > 0) {
            date = Date.parseString(end);
            while (isHoliday(date)) {
                date.setDate(date.getDate() + 1);
            }
            end = date.getTime();
        }

        if ("CHANGE_END" == command) {
            date.setTime(start);
            var workingDays = duration - 1;
            date.incrementDateByWorkingDays(workingDays);
            endTask.val(date.format());
        } else if ("CHANGE_START" == command) {
            date.setTime(end);
            var workingDays = duration - 1;
            date.incrementDateByWorkingDays(-workingDays);
            startTask.val(date.format());
        } else if ("CHANGE_DURATION" == command) {
            durTask.val(new Date(start).distanceInWorkingDays(new Date(end)) + 1);
        }
    }

    //console.debug("resynchDatesSetFields")

    var durIsFilled = durTask.val().length > 0;
    var startIsFilled = startTask.val().length > 0;
    var endIsFilled = endTask.val().length > 0;

    var startIsMilesAndFilled = startIsFilled && (startIsMiles.val() == 'yes' || startTask.is("[readOnly]"));
    var endIsMilesAndFilled = endIsFilled && (endIsMiles.val() == 'yes' || endTask.is("[readOnly]"));
    var durIsFixedAndFilled = durIsFilled && durTask.is("[readOnly]");

    if (durIsFilled) {
        //if (parseInt(durTask.val()) == NaN || parseInt(durTask.val()) < 1)
        if (!daysFromString(durTask.val()))
            durTask.val(1);
    }

    if (fieldName == 'MILES') {
        if (startIsMilesAndFilled && endIsMilesAndFilled) {
            durTask.prop("readOnly", true);
            durTask.css("background-color", "#f3f3f3");
        } else {
            durTask.prop("readOnly", false);
            durTask.css("background-color", "#ffffff");
        }
        return;
    }

    //need at least two values to resynch the third
    if ((durIsFilled ? 1 : 0) + (startIsFilled ? 1 : 0) + (endIsFilled ? 1 : 0) < 2)
        return;

    if (fieldName == 'START' && startIsFilled) {
        if (endIsMilesAndFilled && durIsFilled) {
            resynchDatesSetFields("CHANGE_DURATION");
            //} else if (durIsFilled) { // 27/11/2015 deve fare il calcolo comunque, tanto se non c'Ã¨ si considera "1"
        } else {
            resynchDatesSetFields("CHANGE_END");
        }

    } else if (fieldName == 'TASK_DURATION' && durIsFilled && !(endIsMilesAndFilled && startIsMilesAndFilled)) {
        if (endIsMilesAndFilled && !startIsMilesAndFilled) {
            resynchDatesSetFields("CHANGE_START");
        } else if (!endIsMilesAndFilled) {
            resynchDatesSetFields("CHANGE_END");
        }

    } else if (fieldName == 'END' && endIsFilled) {
        if (durIsFixedAndFilled) {
            resynchDatesSetFields("CHANGE_START");
        } else {
            resynchDatesSetFields("CHANGE_DURATION");
        }
    }
}


//**************************************************************************************************  ../layout/deletePreviewer/partDeletePreview.js
function deletePreview(deletePreviewerId, delendoId, callback) {
    //console.debug("deletePreview", deletePreviewerId, delendoId);
    var request = { "DEL_PREV_ID": deletePreviewerId, OBJID: delendoId, CM: "DELETEPREVIEW", ISCALLBACK: callback == null ? "no" : "yes" };  //se c'Ã¨ la callback non dovrÃ  fare redirect dopo il delete
    var diag = createModalPopup(550, 300, callback);
    $.get(contextPath + "/app/deletecheck/checkhtml", request, function (response) {
        diag.append(response);
        $(window).resize();
    });
}

function performDelete(deletePreviewerId, delendoId, useCallback) {
    //console.debug("performDelete", deletePreviewerId, delendoId,useCallback);
    $("#deleteErrorFeedback").hide();

    var request = { "DEL_PREV_ID": deletePreviewerId, OBJID: delendoId, CM: "DL" };
    var diag = getBlackPopup();
    diag.find(":radio:checked").each(function () {
        var el = $(this);
        request[el.prop("name")] = el.val();
    });

    $.getJSON(contextPath + "/app/deletecheck/deleteajax", request, function (response) {
        jsonResponseHandling(response);
        if (response.ok) {
            if (!useCallback && response.REDIRECT_TO) {
                location.href = response.REDIRECT_TO;
            } else {
                closeBlackPopup(response); //in questo modo si passa la response al callback che puÃ² eventualmente cancellare la riga
            }
        } else if (response.stackTrace) {
            //mostra errore
            $("#referrers").hide();
            var stTrace = $("#deleteErrorFeedback code");
            stTrace.empty();
            if (response.stackTrace)
                stTrace.append(response.stackTrace);
            $("#deleteErrorFeedback").show();
        }
        hideSavingMessage();
    });
}

function showFullError(el) {
    var box = el.closest("#deleteErrorFeedback");
    createModalPopup(700, 800).append(box.find("code").clone().show());
}

//**************************************************************************************************  jquery/dateField/jquery.dateField.js
/*
 Copyright (c) 2009 Open Lab
 Written by Roberto Bicchierai https://roberto.twproject.com
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

jQuery.fn.dateField = function (options) {
    //console.debug("dateField",options);
    //check if the input field is passed correctly
    if (!options.inputField) {
        console.error("You must supply an input field");
        return false;
    }

    var theOpener = this.eq(0);

    // --------------------------  start default option values --------------------------

    if (typeof (options.firstDayOfWeek) == "undefined")
        options.firstDayOfWeek = Date.firstDayOfWeek;

    if (typeof (options.useWheel) == "undefined")
        options.useWheel = true;

    if (typeof (options.dateFormat) == "undefined")
        options.dateFormat = Date.defaultFormat;

    if (typeof (options.todayLabel) == "undefined")
        options.todayLabel = Date.today;

	/* optional
	 options.notBeforeMillis //disable buttons if before millis
	 options.notAfterMillis //disable buttons if after millis
	 options.width // imposta una larghezza al calendario
	 options.height
	 options.showToday // show "today" on the year or month bar
	 options.centerOnScreen //se true centra invece che usa nearBestPosition
	 options.useYears:0 // se >0 non disegna prev-next ma n anni prima e n anni dopo quello corrente
	 options.useMonths:0 // se >0 non disegna prev-next ma n mesi prima e n mesi dopo quello corrente
	 options.minDate // la data di inizio del range
	 options.maxDate // la data di fine del range
	 options.disableHolidays // se non si puÃ² selezionare gli holiday
	 */

    // --------------------------  end default option values --------------------------


    // ------------------ start
    if (options.inputField.is("[readonly]") && !options.inputField.is(".noFocus") || options.inputField.is("[disabled]"))
        return;

    var calendar = { currentDate: new Date() };
    calendar.options = options;

    //build the calendar on the first element in the set of matched elements.
    var theDiv = $("<div>").addClass("calBox");

    if (options.width)
        theDiv.css("width", options.width);

    if (options.height)
        theDiv.css("height", options.height);


    //create calendar elements elements
    var divNavBar = $("<div>").addClass("calNav");
    var divDays = $("<div>").addClass("calDay");

    divDays.addClass("calFullMonth");
    theDiv.append(divNavBar).append(divDays);

    if (options.isSearchField) {
        var divShortcuts = $("<div>").addClass("shortCuts").html("<span title='last quarter'>LQ</span> <span title='last month'>LM</span> <span title='this month'>M</span> <span title='last week'>LW</span> <span title='this week'>W</span> <span title='yesterday'>Y</span> <span title='today'>T</span><span title='tomorrow'>TO</span><span title='next week'>NW</span> <span title='next month'>NM</span> <span title='this quarter'>Q</span> <span title='next quarter'>NQ</span>");
        divShortcuts.click(function (ev) {
            var el = $(ev.target);
            if (el.is("span")) {
                if (!options.isSearchField)
                    options.inputField.val(Date.parseString(el.text().trim(), options.dateFormat, true).format(options.dateFormat));
                else
                    options.inputField.val(el.text().trim());
                calendar.closeCalendar()
            }
        });
        theDiv.append(divShortcuts);
    }

    //mobile management
    if ($("body").is(".mobile")) {
        enableComponentOverlay(options.inputField, theDiv);
    }
    $("body").append(theDiv);
    theDiv.css({ opacity: 0 })

    theDiv.oneTime(10, "ce", function () {
        if (options.centerOnScreen) {
            $(this).centerOnScreen();
        } else {
            nearBestPosition(theOpener, theDiv);
        }
        theDiv.fadeTo(100, 1);
    });

    theDiv.css("z-index", 10000);


    //register for click outside. Delayed to avoid it run immediately
    $("body").oneTime(100, "regclibodcal", function () {
        $("body").bind("click.dateField", function () {
            calendar.closeCalendar();
        });
    });

    calendar.drawCalendar = function (date) {
        calendar.currentDate = date;

        if (options.minDate)
            options.notBeforeMillis = Date.parseString(options.minDate).getTime(); //this is at 00:00:00

        if (options.maxDate)
            options.notAfterMillis = Date.parseString(options.maxDate).getTime() + 86400000 - 5; //this is at 23:59:59:995


        var fillNavBar = function (date) {
            var today = new Date();//today
            divNavBar.empty();

            var showToday = options.showToday;
            //use the classic prev next bar
            if (!options.useYears && !options.useMonths) {
                var t = new Date(date.getTime());
                t.setDate(1);
                t.setMonth(t.getMonth() - 1);
                var spanPrev = $("<span>").addClass("calElement noCallback prev").attr("millis", t.getTime());
                var spanToday = $("<span>").addClass("calElement noCallback goToday").attr("millis", new Date().getTime()).attr("title", "today");
                t.setMonth(t.getMonth() + 1);
                var spanMonth = $("<span>").html(t.format("MMMM yyyy"));
                t.setMonth(t.getMonth() + 1);
                var spanNext = $("<span>").addClass("calElement noCallback next").attr("millis", t.getTime());
                divNavBar.append(spanPrev, spanToday, spanMonth, spanNext);

                // use the year month bar
            } else {
                if (options.useYears > 0) {
                    options.useMonths = options.useMonths || 1; //if shows years -> shows also months
                    t = new Date(date.getTime());
                    var yB = $("<div class='calYear'>");
                    var w = 100 / (2 * options.useYears + 1 + (showToday ? 1 : 0));
                    t.setFullYear(t.getFullYear() - options.useYears);
                    if (showToday) {
                        var s = $("<span>").addClass("calElement noCallback goToday").attr("millis", today.getTime()).append(options.todayLabel).css("width", w + "%");
                        showToday = false;
                        yB.append(s);
                    }
                    for (var i = -options.useYears; i <= options.useYears; i++) {
                        var s = $("<span>").addClass("calElement noCallback").attr("millis", t.getTime()).append(t.getFullYear()).css("width", w + "%");
                        if (today.getFullYear() == t.getFullYear()) //current year
                            s.addClass("today");
                        if (i == 0) //selected year
                            s.addClass("selected");

                        yB.append(s);
                        t.setFullYear(t.getFullYear() + 1);
                    }
                    divNavBar.append(yB);
                }
                if (options.useMonths > 0) {
                    t = new Date(date.getTime());
                    t.setDate(1);
                    var w = 100 / (2 * options.useMonths + 1 + (showToday ? 1 : 0));
                    t.setMonth(t.getMonth() - options.useMonths);
                    var yB = $("<div class='calMonth'>");

                    if (showToday) {
                        var s = $("<span>").addClass("calElement noCallback goToday").attr("millis", today.getTime()).append(options.todayLabel).css("width", w + "%");
                        yB.append(s);
                    }

                    for (var i = -options.useMonths; i <= options.useMonths; i++) {
                        var s = $("<span>").addClass("calElement noCallback").attr("millis", t.getTime()).append(t.format("MMM")).css("width", w + "%");
                        if (today.getFullYear() == t.getFullYear() && today.getMonth() == t.getMonth()) //current year
                            s.addClass("today");
                        if (i == 0) //selected month
                            s.addClass("selected");
                        yB.append(s);
                        t.setMonth(t.getMonth() + 1);
                    }
                    divNavBar.append(yB);
                }
            }
        };

        var fillDaysFullMonth = function (date) {
            divDays.empty();
            var today = new Date();//today
            var w = 100 / 7;
            // draw day headers
            var d = new Date(date);
            d.setFirstDayOfThisWeek(options.firstDayOfWeek);
            for (var i = 0; i < 7; i++) {
                var span = $("<span>").addClass("calDayHeader").attr("day", d.getDay());

                if (d.isHoliday())
                    span.addClass("holy");

                span.css("width", w + "%");
                span.html(Date.dayAbbreviations[d.getDay()]);

                //call the dayHeaderRenderer
                if (typeof (options.dayHeaderRenderer) == "function")
                    options.dayHeaderRenderer(span, d.getDay());

                divDays.append(span);
                d.setDate(d.getDate() + 1);
            }

            //draw cells
            d = new Date(date);
            d.setDate(1); // set day to start of month
            d.setFirstDayOfThisWeek(options.firstDayOfWeek);//go to first day of week

            var i = 0;

            while ((d.getMonth() <= date.getMonth() && d.getFullYear() <= date.getFullYear()) || d.getFullYear() < date.getFullYear() || (i % 7 != 0)) {

                var span = $("<span>").addClass("calElement day").attr("millis", d.getTime());
                span.html("<span class='dayNumber'>" + d.getDate() + "</span>").css("width", w + "%");
                if (d.getYear() == today.getYear() && d.getMonth() == today.getMonth() && d.getDate() == today.getDate())
                    span.addClass("today");
                if (d.getYear() == date.getYear() && d.getMonth() == date.getMonth() && d.getDate() == date.getDate())
                    span.addClass("selected");

                if (d.isHoliday()) {
                    span.addClass("holy" + (options.disableHolidays ? " disabled" : ""));
                }

                if (d.getMonth() != date.getMonth())
                    span.addClass("calOutOfScope");

                //call the dayRenderer
                if (typeof (options.dayRenderer) == "function")
                    options.dayRenderer(span, d);

                divDays.append(span);
                d.setDate(d.getDate() + 1);
                i++;
            }

        };

        fillNavBar(date);
        fillDaysFullMonth(date);

        //disable all buttons out of validity period  o holidays
        if (options.notBeforeMillis || options.notAfterMillis) {
            var notBefore = options.notBeforeMillis ? options.notBeforeMillis : Number.MIN_VALUE;
            var notAfter = options.notAfterMillis ? options.notAfterMillis : Number.MAX_VALUE;
            divDays.find(".calElement[millis]").each(function () {

                var el = $(this);
                var m = parseInt(el.attr("millis"));

                if (m > notAfter || m < notBefore) {
                    el.addClass("disabled");
                }

            })
        }

    };

    calendar.closeCalendar = function () {
        //mobile management
        if ($("body").is(".mobile")) {
            disableComponentOverlay();
        }
        theDiv.remove();
        $("body").unbind("click.dateField");
    };

    theDiv.click(function (ev) {
        var el = $(ev.target).closest(".calElement");
        if (el.length > 0) {
            var millis = parseInt(el.attr("millis"));
            var date = new Date(millis);

            if (el.is(".disabled")) {
                ev.stopPropagation();
                return;
            }

            if (el.hasClass("day")) {
                calendar.closeCalendar();
                if (!el.is(".noCallback")) {
                    options.inputField.val(date.format(options.dateFormat)).attr("millis", date.getTime()).focus();
                    if (typeof (options.callback) == "function")
                        options.callback.apply(options.inputField, [date]); // in callBack you can use "this" that refers to the input
                }

                // robicch 12/01/18 per poter eseguire script una volta selezionata una data senza aspettare il blur
                options.inputField.change();
            } else {

                var min, max;
                if (options.minDate) {
                    min = Date.parseString(options.minDate);
                    min.setMonth(min.getMonth() - 1);
                }

                if (options.maxDate) {
                    max = Date.parseString(options.maxDate);
                    //					max.setMonth(max.getMonth() + 1);
                }

                if ((options.minDate || options.maxDate) && date.isOutOfRange(min, max)) {
                    ev.stopPropagation();
                    return;
                }

                calendar.drawCalendar(date);

            }
        }
        ev.stopPropagation();
    });


    //if mousewheel
    if ($.event.special.mousewheel && options.useWheel) {
        divDays.mousewheel(function (event, delta) {
            var d = new Date(calendar.currentDate.getTime());
            d.setMonth(d.getMonth() + delta);
            calendar.drawCalendar(d);
            return false;
        });
    }

    // start calendar to the date in the input
    var dateStr = options.inputField.val();
    var date;
    if (!dateStr || !Date.isValid(dateStr, options.dateFormat, true)) {
        date = new Date();
    } else {
        date = Date.parseString(dateStr, options.dateFormat, true);
        var newDateStr = date.format(options.dateFormat);

        //set date string formatted if not equals
        if (!options.isSearchField) {
            options.inputField.attr("millis", date.getTime());

            if (dateStr != newDateStr)
                options.inputField.val(newDateStr);
        }
    }

    //check if the date is available, otherwhise go to the first available date
    if ((options.minDate || options.maxDate) && date.isOutOfRange(options.minDate, options.maxDate)) {
        date = Date.parseString(options.minDate);
    }

    calendar.drawCalendar(date);

    return calendar;
};


//**************************************************************************************************  jquery/jquery.timers.js
jQuery.fn.extend({
    everyTime: function (interval, label, fn, times, belay) {
        return this.each(function () {
            jQuery.timer.add(this, interval, label, fn, times, belay);
        });
    },
    oneTime: function (interval, label, fn) {
        return this.each(function () {
            jQuery.timer.add(this, interval, label, fn, 1);
        });
    },
    stopTime: function (label, fn) {
        return this.each(function () {
            jQuery.timer.remove(this, label, fn);
        });
    }
});

jQuery.extend({
    timer: {
        guid: 1,
        global: {},
        regex: /^([0-9]+)\s*(.*s)?$/,
        powers: {
            // Yeah this is major overkill...
            'ms': 1,
            'cs': 10,
            'ds': 100,
            's': 1000,
            'das': 10000,
            'hs': 100000,
            'ks': 1000000
        },
        timeParse: function (value) {
            if (value == undefined || value == null)
                return null;
            var result = this.regex.exec(jQuery.trim(value.toString()));
            if (result[2]) {
                var num = parseInt(result[1], 10);
                var mult = this.powers[result[2]] || 1;
                return num * mult;
            } else {
                return value;
            }
        },
        add: function (element, interval, label, fn, times, belay) {
            var counter = 0;

            if (jQuery.isFunction(label)) {
                if (!times)
                    times = fn;
                fn = label;
                label = interval;
            }

            interval = jQuery.timer.timeParse(interval);

            if (typeof interval != 'number' || isNaN(interval) || interval <= 0)
                return;

            if (times && times.constructor != Number) {
                belay = !!times;
                times = 0;
            }

            times = times || 0;
            belay = belay || false;

            if (!element.$timers)
                element.$timers = {};

            if (!element.$timers[label])
                element.$timers[label] = {};

            fn.$timerID = fn.$timerID || this.guid++;

            var handler = function () {
                if (belay && this.inProgress)
                    return;
                this.inProgress = true;
                if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
                    jQuery.timer.remove(element, label, fn);
                this.inProgress = false;
            };

            handler.$timerID = fn.$timerID;

            if (!element.$timers[label][fn.$timerID])
                element.$timers[label][fn.$timerID] = window.setInterval(handler, interval);

            if (!this.global[label])
                this.global[label] = [];
            this.global[label].push(element);

        },
        remove: function (element, label, fn) {
            var timers = element.$timers, ret;

            if (timers) {

                if (!label) {
                    for (label in timers)
                        this.remove(element, label, fn);
                } else if (timers[label]) {
                    if (fn) {
                        if (fn.$timerID) {
                            window.clearInterval(timers[label][fn.$timerID]);
                            delete timers[label][fn.$timerID];
                        }
                    } else {
                        for (var fn in timers[label]) {
                            window.clearInterval(timers[label][fn]);
                            delete timers[label][fn];
                        }
                    }

                    for (ret in timers[label]) break;
                    if (!ret) {
                        ret = null;
                        delete timers[label];
                    }
                }

                for (ret in timers) break;
                if (!ret)
                    element.$timers = null;
            }
        }
    }
});

jQuery(window).one("unload", function () {
    var global = jQuery.timer.global;
    for (var label in global) {
        var els = global[label], i = els.length;
        while (--i)
            jQuery.timer.remove(els[i], label);
    }
});




//**************************************************************************************************  jquery/uploadize/jquery.uploadize.js
jQuery.fn.uploadize = function (opt) {

    var options = {
        fieldName: "file", // se Ã¨ useSingleCall le CE saranno [fieldName]1, [fieldName]2 ...., altrimenti si chiamerÃ   e verrÃ  fatto un solo post
        maxSize: 5 * 1024 * 1024, //5MB
        //acceptFileTypes:            /(\.|\/)(gif|jpe?g|png)$/i,
        //onFinishProcess
        //onStartProcess
        multi: true,
        useSingleCall: false, //se Ã¨ useSingleCall si fa una sola chiamata server side con tanti [fieldName]1, [fieldName]2... ci saÃ  inoltre una CE "numberOfUploadedFiles"
        preview: false,
        fileAreaSelector: false, // jquery selector to identify where to list file during upload phase. If false use the element itself
        fileAreaAppend: false, // append or insert on file list
        additionalRequestParameters: false, //map of parameters to add to request {CM:"SV","TASK_ID":2}
        showPlaceHolder: true, //shows the "Drop here placehoder"
        activeElement: "body",

        onLoadCallback: function (response) {
            //console.debug(response);
        },
        validateFile: function (file) {
            //console.debug("validateFile", file);
            if (options.maxSize && file.size > options.maxSize)
                return i18n.UPLOAD_MAX_SIZE_EXCEEDED;
            else if (options.acceptFileTypes && !(options.acceptFileTypes.test(file.type) || options.acceptFileTypes.test(file.name)))
                return i18n.FILE_TYPE_NOT_ALLOWED;
            else
                return true;

        },
        url: '__I_WANT_404__',  // server side url to manage uploads, you have to change it
        resolvePasteElement: function (event) {
            return $(".isUploadizer");
        }
    };

    for (var k in opt)
        options[k] = opt[k];

    var test_dnd = 'draggable' in document.createElement('span');
    var test_formdata = !!window.FormData;

    //se non posso fare post nascondo tutto
    if (!test_formdata) {
        $(this).hide();
        return this;
    }


    var updateProgress = function (progress, perc) {
        var progressBar = progress.find(".uploadizeProgress");
        progressBar.css("width", perc + "%").html(perc + " %");
    };

    var setFileEndMessage = function (el, progress, resp) {
        if (typeof (options.onFinishProcess) == "function") {
            //console.debug("onFinishProcess");
            options.onFinishProcess.call(el, resp);
        }
        resp = resp ? resp : { ok: false, message: i18n.ERROR_UPLOADING };
        if (!resp.ok)
            resp.message = i18n.ERROR_UPLOADING;

        progress.data("resp", resp);

        var progressBar = progress.find(".uploadizeProgress");
        progressBar.css("width", "100%").html(resp.message).addClass(resp.ok ? "uploadizeOK" : "uploadizeError");

        progress.oneTime(resp.ok ? 1500 : 3000, function () {
            $(this).fadeOut(500, function () {
                var resp = $(this).data("resp");
                $(this).remove();
                if (resp && resp.ok && typeof (options.onLoadCallback) == "function") {
                    options.onLoadCallback.call(el, resp)
                }
            });
        });
    };


    var previewfile = function (el, file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var image = new Image();
            image.src = event.target.result;
            image.width = 250; // a fake resize
            el.append(image);
        };

        reader.readAsDataURL(file);
    };


    var sendFiles = function (el, files) {

        if (typeof (options.onStartProcess) == "function") {
            //console.debug("onStartProcess");
            options.onStartProcess.call(el, files);
        }


        if (options.useSingleCall)
            sendFilesSingleCall(el, files);
        else
            sendFilesMultiCall(el, files);
    };


    var sendFilesSingleCall = function (el, files) {
        //		console.debug("sendFilesSingleCall", files);

        // si prepara un singolo form con n campi file, uno per file caricato i nomi sono [fieldName]0,[fieldName]1,
        var formData = new FormData();
        var numberOfUploadedFiles = 0;
        var fileNames = "";
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (typeof (options.validateFile) == "function") {
                var message = options.validateFile(file);
                if (message !== true) {
                    setFileEndMessage(el, progress, { ok: false, message: message });
                    continue;
                }
            }

            formData.append(options.fieldName + numberOfUploadedFiles, file, file.name);
            fileNames += " " + file.name;

            if (options.preview)
                previewfile(el, file);

            // no multi -> break
            if (!options.multi)
                break;

            numberOfUploadedFiles++;

        }

        //additional parameters
        formData.append("numberOfUploadedFiles", numberOfUploadedFiles);

        __submitForm(el, fileNames, formData)

    };


    var sendFilesMultiCall = function (el, files) {
        //		console.debug("sendFilesMultiCall", files);
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            var formData = new FormData();
            formData.append(options.fieldName, file, file.name);

            if (options.preview)
                previewfile(el, files[i]);

            __submitForm(el, file.name, formData); // si

            // no multi -> break
            if (!options.multi)
                break;
        }
    };


    var __submitForm = function (el, fileName, formData) {
        //console.debug("__submitForm",fileName,formData);

        if (options.additionalRequestParameters) {
            for (var key in options.additionalRequestParameters)
                formData.append(key, options.additionalRequestParameters[key]);
        }

        //apped progress element
        var progress = $("<div class='uploadizeFileBox'>").html(fileName).click(function () {
            $(this).data("xhr").abort();
        });
        var progressBar = $("<div class='uploadizeProgress'>");
        progress.append(progressBar);

        if (options.fileAreaSelector) {
            if (options.fileAreaAppend)
                $(options.fileAreaSelector).append(progress);
            else
                $(options.fileAreaSelector).prepend(progress);
        } else {
            if (options.fileAreaAppend)
                el.append(progress);
            else
                el.prepend(progress);
        }

        //si prepara la request
        var xhr = new XMLHttpRequest();
        progress.data("xhr", xhr); // link progress to xhr request
        xhr.open('POST', options.url);
        xhr.upload.progress = progress;
        xhr.upload.xhr = xhr;

        // LOAD: finish loading file
        xhr.onload = function (event) {
            xhr = event.currentTarget;
            //console.debug("load",xhr.readyState,xhr.status,event);
            var message = i18n.FILE_UPLOAD_COMPLETED;
            var resp = {};
            if (xhr.status != 200) {
                resp.message = i18n.ERROR_UPLOADING + ": " + xhr.status;
                resp.ok = false;
            } else {
                resp = JSON.parse(xhr.response);
                if (resp.errors) {
                    resp.message = resp.errors[0].error;
                    resp.ok = false;
                }
                resp.message = resp.message ? resp.message : i18n.FILE_UPLOAD_COMPLETED;
            }
            setFileEndMessage(el, xhr.upload.progress, resp);
        };

        //ABORT
        xhr.upload.addEventListener("abort", function (event) {
            //console.debug("abort",event)
            setFileEndMessage(el, event.currentTarget.progress, { ok: false, message: i18n.UPLOAD_ABORTED });
        }, false);


        //ERROR on response ---> never called
        xhr.addEventListener("error", function (event) {
            var xhr = event.currentTarget;
            //console.error("error",event)
            setFileEndMessage(el, xhr.upload.progress, { ok: false, message: i18n.ERROR_UPLOADING });
        }, false);

        //ERROR on response ---> never called too
        xhr.upload.addEventListener("error", function (event) {
            //console.error("upload.error",event)
            setFileEndMessage(el, event.currentTarget.progress, { ok: false, message: i18n.ERROR_UPLOADING });
        }, false);

        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                var complete = (event.loaded / event.total * 100 | 0);
                updateProgress(event.currentTarget.progress, complete);
            }
        };

        //si sparano i dati al server in una sola volta
        xhr.send(formData);
    };


    //NON BUTTARE VIA Ã¨ da mettere dove viene
    $(document).pasteImageReader(function (result) {
        //console.debug("pasteImageReader: callback")
        var el = options.resolvePasteElement(result.event);
        if (el.size() > 0) {
            //console.debug("pasteImageReader: execute");
            this.op
            sendFiles(el, [result.file])
        }
    });

    this.each(function () {
        var el = this;
        var $el = $(this);
        $el.addClass("isUploadizer");
        $el.prop("title", i18n.DROP_HERE);

        el.optons = options;

        //if area is "disabled" do nothing
        if ($el.is("[disabled]"))
            return true;

        //inject input type file
        el.inputId = "inputFile_" + (el.id || Math.random() * 1000);
        $("#" + el.inputId).remove();

        var inputFile = $("<input id='" + el.inputId + "' type='file'" + (options.multi ? "multiple" : "") + ">")
            .addClass("uploadizeInputFile")
            .change(function () {
                sendFiles($el, this.files);
            });

        $el.after(inputFile);

        if (test_dnd) {

            document.dragIsLeft = false;
            el.counter = 0;

            var activeEl = $(options.activeElement);

            $el.attr("data-dropel", options.activeElement);

            activeEl.off("dragenter.uploadize dragover.uploadize dragend.uploadize dragleave.uploadize drop.uploadize").on("dragenter", function (e) {

                if ($el.is("[disabled]"))
                    return true;

                el.counter++;
                clearTimeout(this.leave);
                e.preventDefault();
                activeEl.addClass("uploadizeDragOver");
                return false;

            }).on("dragover.uploadize", function (e) {

                if ($el.is("[disabled]"))
                    return true;

                e.originalEvent.dataTransfer.dropEffect = 'copy';

                e.preventDefault();
                return false;

            }).on("dragend.uploadize dragleave.uploadize", function (e) {

                if ($el.is("[disabled]"))
                    return true;

                el.counter--;
                e.preventDefault();

                if ($(e.target).is(activeEl)) {
                    this.leave = setTimeout(function () {
                        activeEl.removeClass("uploadizeDragOver");
                    }, 100);
                } else {
                    if (el.counter == 0)
                        activeEl.removeClass("uploadizeDragOver");
                }

                return false;

            }).on("drop.uploadize", function (e) {

                activeEl.removeClass("uploadizeDragOver");
                e.originalEvent.dataTransfer.dropEffect = 'none';
                el.counter = 0;

                if ($el.is("[disabled]"))
                    return false;

                e.preventDefault();

                $el.css({ visibility: "visible" });
                $el.find(".uploadizeDropHere").remove();
                sendFiles($el, e.originalEvent.dataTransfer.files);
            });

            $el.on("click", function (e) {
                $el.next(".uploadizeInputFile").click();
                e.preventDefault();
                return false;
            });

        } else {
            inputFile.show();
        }
    });
    return this;
}
    ;

$.fn.destroyUplodize = function (opt) {

}

var disableUploadize = function () {
    $(".isUploadizer").each(function () {
        $(this).attr("disabled", "disabled");
    })
};

var enableUploadize = function () {
    $(".isUploadizer").each(function () {
        $(this).removeAttr("disabled");
    })
};

$(document).on("mouseover", ".uploadizeDragOver", function () {
    $(this).removeClass("uploadizeDragOver");
});

$.fn.pasteImageReader = function (options) {
    //console.debug("pasteImageReader")
    if (typeof options === "function") {
        options = {
            callback: options
        };
    }
    options = $.extend({}, { callback: $.noop, matchType: /image.*/ }, options);

    return this.each(function () {
        var $this, element;
        element = this;
        $this = $(this);
        return $this.off("paste").on('paste', function (event) {
            //console.debug("pasteImageReader: paste",event.originalEvent.clipboardData);

            var clipboardData;
            clipboardData = event.originalEvent.clipboardData;

            if (!clipboardData || !clipboardData.items) {

                $(".uploadizeDrop").addClass("pasting");
                setTimeout(function () {
                    var imgSrc = $(".uploadizeDrop img").attr("src") || "";
                    $(".uploadizeDrop").empty();
                    $(".uploadizeDrop").removeClass("pasting");

                    if (!imgSrc.length) return;

                    if (imgSrc.indexOf("webkit-fake-url:") >= 0) {
                        alert("Your browser doesn't support copy/paste of images.");
                        return;
                    }

                    function dataURItoBlob(dataURI, mime) {
                        var BASE64_MARKER = ';base64,';
                        var base64Index = dataURI.indexOf(BASE64_MARKER);
                        dataURI = dataURI.substring(base64Index + BASE64_MARKER.length);
                        // convert base64 to raw binary data held in a string
                        // doesn't handle URLEncoded DataURIs
                        // separate out the mime component
                        //dataURI= dataURI.substring(dataURI.indexOf(',')+1,dataURI.length);
                        // write the ArrayBuffer to a blob, and you're done
                        var byteString = window.atob(dataURI);
                        // write the bytes of the string to an ArrayBuffer
                        //var ab = new ArrayBuffer(byteString.length);
                        var ia = new Uint8Array(byteString.length);
                        for (var i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }
                        return new Blob([ia], { type: mime });
                    }

                    var blob = dataURItoBlob(imgSrc, "image/jpg");
                    blob.name = "pasteBoard_" + new Date().getTime() + ".jpg";

                    return options.callback.call(element, {
                        dataURL: imgSrc,
                        event: event,
                        file: blob
                    });

                }, 10);

                return;
            }

            setTimeout(function () { $(".uploadizeDrop").empty(); }, 10);

            var files = [];
            for (var i = 0; i < clipboardData.items.length; i++) {
                var item = clipboardData.items[i];
                var type = item.type;

                if (type.match(options.matchType)) {
                    var file = item.getAsFile();
                    file.name = "clipboard_" + new Date().format("yyyyMMddHHmmss") + "." + (type.split("/")[1]);
                    var reader = new FileReader();
                    reader.onload = function (evt) {
                        return options.callback.call(element, {
                            dataURL: evt.target.result,
                            event: evt,
                            file: file
                        });
                    };
                    reader.readAsDataURL(file);
                    break;
                }
            }
        });
    });
};






//**************************************************************************************************  ../layout/tagBox/tagBox.js

// spostata su froms.js initFields
/*$(document).ready(function() {
	$("[taggableClass]").livequery(tagBoxBind);
});*/

jQuery.fn.tagBoxBind = function () {
    //console.debug("tagBoxBind")
    this.bind("focus", tagBoxFocus).bind("blur", tagBoxBlur).bind("keydown", tagBoxKey);
    return this;
};

function tagBoxFocus(e) {
    var theEl = $(this);
    // check if the result box exists
    var theDiv = $("#" + theEl.prop("id") + "_DIV");
    if (theDiv.size() <= 0) {
        //create the div
        var boxDiv = $("<div>").attr("id", theEl.prop("id") + "_DIV").addClass('tbDiv').css("width", theEl.width() + "px");
        theEl.after(boxDiv);
        boxDiv.css({ left: theEl.position().left });
        boxDiv.css("z-index", "1000");
        theDiv = $("#" + theEl.prop("id") + "_DIV");
    }
    if (theEl.attr("autoStart") == "1")
        tagBoxRefreshDiv(theEl, theDiv);
}

function tagBoxBlur(e) {
    var theEl = $(this);
    var theDiv = $("#" + theEl.prop("id") + "_DIV");
    // reformat string
    var separator = ","
    var splitted = theEl.val().split(",");
    if (splitted.length == 1) {
        splitted = theEl.val().split("|");
        if (splitted.length > 1) {
            separator = "|"
        }
    }
    var resArr = [];
    var res = "";
    for (i = 0; i < splitted.length; i++) {
        var tag = splitted[i].trim();
        if (tag != "" && resArr.indexOf(tag) < 0) {
            resArr.push(tag);
        }
    }
    theEl.val(resArr.join(separator + " "));

    theEl.stopTime("tagHideBox").oneTime(200, "tagHideBox", function () {
        theDiv.remove();
    })

}

function tagBoxKey(e) {
    //console.debug("tagBoxKey key:"+e.which)

    var theEl = $(this);
    var theDiv = $("#" + theEl.prop("id") + "_DIV");
    var rows = theDiv.find("div");
    var rowNum = rows.index(theDiv.find("div.tagBoxSel"));

    var ret = true;
    switch (e.which) {
        case 38: //up arrow
            rowNum = (rowNum < 1 ? 0 : rowNum - 1);
            tagBoxHLSCR(theDiv, rows.eq(rowNum), true);
            break;

        case 40: //down arrow
            rowNum = (rowNum < rows.size() - 1 ? rowNum + 1 : rows.size() - 1);
            tagBoxHLSCR(theDiv, rows.eq(rowNum), false);
            break;

        case 13: //enter
            var theRow = rows.eq(rowNum);
            tagBoxClickRow(theRow);
            ret = false;
            e.preventDefault();
            break;

        default:
            $(document).stopTime("tagBoxRefresh");
            $(document).oneTime(400, "tagBoxRefresh", function () {
                tagBoxRefreshDiv(theEl, theDiv);
            });
            break;
    }
    return ret;
}


function tagBoxRefreshDiv(theEl, theDiv) {
    //console.debug("tagBoxRefreshDiv")

    var lastComma = theEl.val().lastIndexOf(",");
    if (lastComma < 0)
        lastComma = theEl.val().lastIndexOf("|");

    var search = theEl.val().substr(lastComma + 1).trim();

    theDiv.hide();
    if (search != "" || theEl.attr("autoStart") == "1") {

        showSavingMessage();
        var request = {
            "CM": "FINDTAG",
            "CL": theEl.attr("taggableClass"),
            "AID": theEl.attr("areaId"),
            "FN": search,
            "MR": theEl.attr("maxResult"),
            "TPN": theEl.attr("tagPropertyName")
        };

        //console.debug(request)
        $.getJSON(contextPath + '/commons/layout/tagBox/tagBoxAjaxController.jsp', request, function (response) {
            theDiv.empty();
            jsonResponseHandling(response);
            if (response.ok && response.tags) {
                theDiv.data("theEl", theEl);
                for (var i = 0; i < response.tags.length; i++) {
                    var tagElement = $("<div>").addClass("tagBoxLine tag button textual" + (i == 0 ? " tagBoxSel" : "")).append(response.tags[i]).click(function () {
                        tagBoxClickRow($(this));
                    });

                    theDiv.append(tagElement);
                }
                theDiv.fadeIn();

                hideSavingMessage();
            }

        });
    }
}

function tagBoxHLSCR(theDiv, theRowJQ, isUp) {
    if (theRowJQ.size() > 0) {
        var div = theDiv.get(0);
        var theRow = theRowJQ.get(0)
        if (isUp) {
            if (theDiv.scrollTop() > theRow.offsetTop) {
                theDiv.scrollTop(theRow.offsetTop);
            }
        } else {
            if ((theRow.offsetTop + theRow.offsetHeight) > (div.scrollTop + div.offsetHeight)) {
                div.scrollTop = theRow.offsetTop + theRow.offsetHeight - div.offsetHeight;
            }
        }
        theDiv.find(".tagBoxSel").removeClass("tagBoxSel");
        theRowJQ.addClass("tagBoxSel");
    }
}

function tagBoxClickRow(el) {
    //console.debug("tagBoxClickRow") ;\
    var theRow = el;//$(this);
    var theEl = theRow.closest(".tbDiv").data("theEl");

    if (!theEl || !theEl.length)
        return;

    var lastComma = theEl.val().lastIndexOf(",");
    if (lastComma < 0)
        lastComma = theEl.val().lastIndexOf("|");

    var newVal = (theEl.val().substr(0, lastComma + 1) + " " + theRow.text()).trim();

    theEl.val(newVal);

    theEl.stopTime("tagHideBox").oneTime(200, "tagHideBox", function () {
        theRow.parent().remove();
        theEl.focus();
    })

}


//**************************************************************************************************  IF IN DEVELOPMENT profiling.js


//************************************************************************************************** ON DOCUMENT LOAD GENERIC

window.onbeforeunload = function () {
    return alertOnUnload();
};
//again because... something does not work.. RB and MB don't remember..

/*

SPOSTATI su forms.js

// Update input oldValue attribute
$(":input[oldValue]").livequery(function () {
	$(this).updateOldValue();
});

//Validate any fields on blur
$(document).on('blur', '.validated', function () {
	$(this).validateField()
});

// Any textarea with "autosize" class is initialized
$("textarea.autosize").livequery(function () {
	$(this).on('keyup focus', enlargeTextArea);
	enlargeTextArea.apply(this, [true]);
});
*/

// Disable caching of AJAX responses */
// set UTF-8 as default jquery ajax encoding
$.ajaxSetup({
    cache: false,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8"
});




//**************************************************************************************************  jquery/UI-touch-punch.js
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011â€“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) { function f(a, b) { if (!(a.originalEvent.touches.length > 1)) { a.preventDefault(); var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents"); d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d) } } if (a.support.touch = "onclick" in document, a.support.touch) { var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy; b._touchStart = function (a) { var b = this; !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown")) }, b._touchMove = function (a) { e && (this._touchMoved = !0, f(a, "mousemove")) }, b._touchEnd = function (a) { e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1) }, b._mouseInit = function () { var b = this; b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b) }, b._mouseDestroy = function () { var b = this; b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b) } } }(jQuery);



//**************************************************************************************************  dialogs.js

function getTop() {

    if (!socketEnbled)
        return top;

    if (top.frames["twTop"])
        return top.frames["twTop"].contentWindow || top.frames["twTop"].window;

    return top;
}

function centerPopup(url, target, w, h, scroll, resiz) {
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;
    var winprops = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' + winl + ',scrollbars=' + scroll + ',resizable=' + resiz + ', toolbars=false, status=false, menubar=false';
    var win = window.open(url, target, winprops);
    if (!win)
        alert("A popup blocker was detected: please allow them for this application (check out the upper part of the browser window).");
    if (parseInt(navigator.appVersion) >= 4) {
        win.window.focus();
    }
}

function openCenteredWindow(url, target, winprops) {
    var prop_array = winprops.split(",");
    var i = 0;
    var w = 800;
    var h = 600;
    if (winprops && winprops != '') {
        while (i < prop_array.length) {
            if (prop_array[i].indexOf('width') > -1) {
                s = prop_array[i].substring(prop_array[i].indexOf('=') + 1);
                w = parseInt(s);
            } else if (prop_array[i].indexOf('height') > -1) {
                s = prop_array[i].substring(prop_array[i].indexOf('=') + 1);
                h = parseInt(s);
            }
            i += 1;
        }
        var winl = (screen.width - w) / 2;
        var wint = (screen.height - h) / 2;
        winprops = winprops + ",top=" + wint + ",left=" + winl;
    }
    win = window.open(url, target, winprops);
    if (!win)
        alert("A popup blocker was detected: please allow them for this application (check out the upper part of the browser window).");
    if (parseInt(navigator.appVersion) >= 4) {
        win.window.focus();
    }
}

function showFeedbackMessage(typeOrObject, message, title, autoCloseTime) {
    //console.debug("showFeedbackMessage",typeOrObject, message, title);

    if (!autoCloseTime)
        autoCloseTime = 0;

    var place = $("#__FEEDBACKMESSAGEPLACE");
    var mess;
    if (typeof (typeOrObject) == "object")
        mess = typeOrObject;
    else
        mess = { type: typeOrObject, message: message, title: title };
    //if exists append error message
    var etm = $(".FFC_" + mess.type + ":visible ._errorTemplateMessage");
    if (etm.length > 0) {
        etm.append("<hr>" + (mess.title ? "<b>" + mess.title + "</b><br>" : "") + mess.message + "<br>");
    } else {
        etm = $.JST.createFromTemplate(mess, "errorTemplate");
        place.append(etm);
        place.fadeIn();
    }

    if (autoCloseTime > 0)
        setTimeout(function () {
            etm.fadeOut();
        }, autoCloseTime);

    $(".FFC_OK").stopTime("ffchide").oneTime(1500, "ffchide", function () { $(this).fadeOut(400, function () { $(this) }) });
    $(".FFC_WARNING").stopTime("ffchide").oneTime(75000, "ffchide", function () { $(this).fadeOut(400, function () { $(this) }) });
    $(".FFC_ERROR").stopTime("ffchide").oneTime(10000, "ffchide", function () { $(this).fadeOut(400, function () { $(this) }) });
}

function showFeedbackMessageInDiv(type, message, divId) {
    var place = $("#" + divId);
    var mess = { type: type, message: message };
    place.prepend($.JST.createFromTemplate(mess, "errorTemplate"));
    place.fadeIn();
    $("body").oneTime(1200, function () {
        $(".FFC_OK").fadeOut();
    });
}
function hideFeedbackMessages() {
    $("#__FEEDBACKMESSAGEPLACE").empty();
}


function submitInBlack(formId, actionHref, w, h) {

    if (!w)
        w = $(window).width() - 100;
    if (!h)
        h = $(window).height() - 50;

    openBlackPopup('', w + "px", h + "px", null, formId + "_ifr");
    var form = $("#" + formId);
    var oldAction = form.prop("action");
    var oldTarget = form.prop("target");
    form.prop("action", actionHref);
    form.prop("target", formId + "_ifr");
    $(window).data("openerForm", form);
    form.submit();
    form.prop("action", oldAction);
    if (oldTarget)
        form.prop("target", oldTarget);
    else
        form.removeAttr("target");
}


var __popups = [];
function createModalPopup(width, height, onCloseCallBack, cssClass, element, popupOpener) {
    //console.debug("createModalPopup");


    if (typeof (disableUploadize) == "function")
        disableUploadize();
    // se non diversamenete specificato l'openere Ã¨ la window corrente;
    popupOpener = popupOpener || window;

    if (!width)
        width = "80%";

    if (!height)
        height = "80%";

    var localWidth = width, localHeight = height;

    var wWidth = $(window).width();
    var wHeight = $(window).height();

    if (typeof (width) == "string" && width.indexOf("%") > 0) {
        localWidth = function () {
            return (wWidth * parseFloat(width)) / 100
        };
    }

    if (typeof (height) == "string" && height.indexOf("%") > 0)
        localHeight = function () { return ($(window).height() * parseFloat(height)) / 100 };

    var popupWidth = localWidth;
    var popupHeight = localHeight;

    if (typeof localWidth == "function")
        popupWidth = localWidth();

    if (typeof localHeight == "function")
        popupHeight = localHeight();

    popupWidth = parseFloat(popupWidth);
    popupHeight = parseFloat(popupHeight);

    //se sono piÃ¹ grandi della finestra allora la misura della finestra
    popupWidth = popupWidth > wWidth ? wWidth : popupWidth;
    popupHeight = popupHeight > wHeight ? wHeight : popupHeight;

    if (typeof onCloseCallBack == "string")
        cssClass = onCloseCallBack;

    //$("#__popup__").remove();

    var popupN = __popups.length + 1;
    __popups.push("__popup__" + popupN);

    var isInIframe = isIframe();

    var bg = $("<div>").prop("id", "__popup__" + popupN);
    bg.addClass("modalPopup" + (isInIframe ? " inIframe" : "")).hide();

    if (cssClass)
        bg.addClass(cssClass);

    function getMarginTop() {
        var mt = ($(window).height() - popupHeight) / 2 - 100;
        return mt < 0 ? 10 : mt;
    }

    var internalDiv = $("<div>").addClass("bwinPopupd").css({ width: popupWidth, minHeight: popupHeight, marginTop: getMarginTop(), maxHeight: $(window).height() - 20, overflow: "auto" });

    $(window).off("resize.popup" + popupN).on("resize.popup" + popupN, function () {

        if (typeof localWidth == "function")
            popupWidth = localWidth();

        if (typeof localHeight == "function")
            popupHeight = localHeight();

        //se sono piÃ¹ grandi della finestra allora la misura della finestra
        popupWidth = popupWidth > wWidth ? wWidth : popupWidth;
        popupHeight = popupHeight > wHeight ? wHeight : popupHeight;


        internalDiv.css({ width: popupWidth, minHeight: popupHeight });

        var w = internalDiv.outerWidth() > $(window).width() - 20 ? $(window).width() - 20 : popupWidth;
        var h = internalDiv.outerHeight() > $(window).height() - 20 ? $(window).height() - 20 : popupHeight;

        internalDiv.css({ marginTop: getMarginTop(), minHeight: h, maxHeight: $(window).height() - 20, minWidth: w });

    });

    bg.append(internalDiv);

    var showBG = function (el, time, callback) {

        if (isInIframe) {
            internalDiv.css({ marginTop: -50 });
            el.show();
            internalDiv.animate({ marginTop: getMarginTop() }, (time / 2), callback);
        } else {
            internalDiv.css({ opacity: 0, top: -50 }).show();
            el.fadeIn(time, function () {
                internalDiv.animate({ top: 0, opacity: 1 }, time / 3, callback);
            });
        }

        return this;
    };

    if (!element)
        $("#twMainContainer").addClass("blur");

    showBG(bg, 300, function () { });
    bg.on("mousedown", function (event) { //mouse down per avere la chiusura solo quando si fa click fuori
        //console.debug("mousedown",event.target)
        if ($(event.target).closest(".bwinPopupd").length <= 0)
            bg.trigger("close");
    });

    var close = $("<span class=\"teamworkIcon close popUpClose\" style='cursor:pointer;position:absolute;'>x</span>");
    internalDiv.append(close);

    close.click(function () {
        bg.trigger("close");
    });

    $("body").css({ overflowY: "hidden" });

    if (!element) {
        $("body").append(bg);
    } else {
        element.after(bg);
    }

    //close call callback
    bg.on("close", function () {
        var callBackdata = $(this).data("callBackdata");
        var ndo = bg;

        if (typeof (enableUploadize) == "function")
            enableUploadize();

        var alertMsg;
        var ifr = bg.find("iframe");

        if (ifr.length > 0) {
            try {
                alertMsg = ifr.get(0).contentWindow.alertOnUnload();
            } catch (e) { }
        } else {
            alertMsg = alertOnUnload(ndo);
        }

        if (alertMsg) {
            if (!confirm(alertMsg))
                return;
        }

        bg.fadeOut(100, function () {

            $("body").css({ overflowY: "auto" });

            $(window).off("resize.popup" + popupN);
            bg.remove();
            __popups.pop();

            if (__popups.length == 0)
                $("#twMainContainer").removeClass("blur");

            if (typeof (onCloseCallBack) == "function")
                onCloseCallBack(callBackdata);

        });

    });

    //destroy do not call callback
    bg.on("destroy", function () {
        bg.remove();
        $("body").css({ overflowY: "auto" });
    });

    //rise resize event in order to show buttons
    $("body").oneTime(1000, "br", function () { $(this).resize(); }); // con meno di 1000 non funziona


    //si deposita l'popupOpener sul bg. Per riprenderlo si usa getBlackPopupOpener()
    bg.data("__opener", popupOpener);

    return internalDiv;
}

function changeModalSize(w, h) {
    var newDim = {};
    if (w)
        newDim.width = w;
    if (h)
        newDim.minHeight = h;

    var isInIframe = isIframe();
    var popUp = isInIframe ? window.parent.$(".bwinPopupd") : $(".bwinPopupd");

    if (popUp.length)
        popUp.delay(300).animate(newDim, 200);
}

function openBlackPopup(url, width, height, onCloseCallBack, iframeId, cssClass) {

    if (!iframeId)
        iframeId = "bwinPopupIframe";

    //add black only if not already in blackpupup
    var color = cssClass ? cssClass + " iframe" : "iframe";

    var ndo = getTop().createModalPopup(width, height, onCloseCallBack, color, null, window);

    //ndo.closest(".modalPopup ").data("__opener",window);  // si deposita il vero opener

    var isInIframe = isIframe();

    ndo.append("<div class='bwinPopupIframe_wrapper'><iframe id='" + iframeId + "' name='" + iframeId + "' frameborder='0'></iframe></div>");
    ndo.find("iframe:first").prop("src", url).css({ width: "100%", height: "100%", backgroundColor: isInIframe ? '#F9F9F9' : '#FFFFFF' });

    //return ndo;
}

function getBlackPopup() {
    var ret = $([]);
    if (__popups.length > 0) {
        var id = __popups[__popups.length - 1];
        ret = $("#" + id);
    }
    if (ret.length == 0 && window != top) {
        ret = window.parent.getBlackPopup();
    }
    return ret;
}


function getBlackPopupOpener() {
    var opener = getBlackPopup().data("__opener");
    return opener || window;
}

function closeBlackPopup(callBackdata) {
    //console.debug("closeBlackPopup ",callBackdata);
    var bp = getBlackPopup();

    if (callBackdata)
        bp.data("callBackdata", callBackdata);
    bp.trigger("close");
}

function openPopUp(el, width, height) {
    var popup = createModalPopup(width, height);
    popup.append(el.clone().show());
}

//returns a jquery object where to write content

function isIframe() {
    var isIframe = false;
    try {
        //try to access the document object
        if (self.location.href != getTop().location.href)
            isIframe = true;
    } catch (e) {
        //We don't have access, it's cross-origin!
        isIframe = true;
    }
    return isIframe;
};


function openBulkAction(bulkDivId) {
    var popup = createModalPopup(500, 300);
    popup.append($("#" + bulkDivId).clone().show());
}


function refreshBulk(el) {
    //console.debug("refreshBulk")

    if (el.is(":checked"))
        el.closest("tr").addClass("selected");
    else
        el.closest("tr").removeClass("selected");

    var table = el.closest(".dataTable");
    if (table.find("tbody .selected :checked").length > 0) {

        $("#bulkOp #bulkRowSel").html(table.find("tbody > tr.selected").length + "/" + table.children("tbody").children("tr").length);

        var bukOpt = $("#bulkOp").clone().addClass("bulkOpClone");
        bukOpt.fadeIn(200, function () {
            $("#bulkPlace").html(bukOpt);
            $.tableHF.refreshTfoot();
        });

    } else {
        $(".bulkOpClone").fadeOut(200, function () {
            $.tableHF.refreshTfoot();
        });
    }
}

function selUnselAll(el) {
    var bulkCheckbox = el.closest(".dataTable").find("[type='checkbox']:enabled:visible");
    if (el.is(":checked")) {
        var bulkCheckbox = el.closest(".dataTable").find("[type='checkbox']:enabled:visible");
        bulkCheckbox.prop("checked", true);
        bulkCheckbox.closest("tr").addClass("selected");
    } else {
        var bulkCheckbox = el.closest(".dataTable").find("[type='checkbox']:enabled");
        bulkCheckbox.prop("checked", false);
        bulkCheckbox.closest("tr").removeClass("selected");
    }

    refreshBulk(el);
}


//**************************************************************************************************  twprojectLayout.js
jQuery.fn.activateTeamworkLinks = function (showImages) {
    //si attivano i link standard solo se il div non Ã¨ di classe TWLinksOnly
    if (!this.is(".TWLinksOnly"))
        this.activateLinks(showImages);

    var allRE = /([IiTtRrBbEeMmFfDd])#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g;

    this.each(function () {
        var el = $(this);
        var html = el.html();
        html = html.replace(allRE, "<a href='#' onclick=\"openTeamworkLink('$1','$2',event);return stopBubble(event);\">$1#$2#</a>", "g");
        el.html(html);
    });
    return this;
};

function openTeamworkLink(type, objCodeId, event) {
    var openNewWindow = event && event.ctrlKey;

    type = type.toUpperCase();
    //Issue
    if (type == "I") {
        openIssueEditorInBlack(objCodeId, 'GUESS');

        //Task
    } else if (type == "T") {
        if (openNewWindow)
            window.open(contextPath + "/app/task/taskOverview??CM=GUESS&OBJID=" + objCodeId);
        else
            getTop().location = contextPath + "/app/task/taskOverview??CM=GUESS&OBJID=" + objCodeId;

        //Resource
    } else if (type == "R") {
        if (openNewWindow)
            window.open(contextPath + "/app/resource/resourceEditor?CM=GUESS&OBJID=" + objCodeId);
        else
            getTop().location = contextPath + "/app/resource/resourceEditor?CM=GUESS&OBJID=" + objCodeId;

        //Event Meeting
    } else if (type == "E" || type == "M") {
        if (openNewWindow)
            window.open(contextPath + "/applications/teamwork/agenda/agendaEditor.jsp?CM=GUESS&OBJID=" + objCodeId);
        else
            getTop().location = contextPath + "/applications/teamwork/agenda/agendaEditor.jsp?CM=GUESS&OBJID=" + objCodeId;

        //Board
    } else if (type == "B") {
        openBoardInBlack(objCodeId, 'GUESS');

        //PersistentFile on issue
    } else if (type == "F") {
        $(".repoFileBox[pf=" + objCodeId + "]").click();

        //Document
    } else if (type == "D") {
        var req = { CM: "GET_DOC_LINK", objCodeId: objCodeId };

        $.getJSON(contextPath + "/applications/teamwork/document/documentAjaxController.jsp", req, function (response) {
            jsonResponseHandling(response);
            if (response.ok && response.editorUrl) {
                openBlackPopup(response.editorUrl, "1000px", "700px");
            }
        });
    }
}


jQuery.fn.activateTeamworkLinks_old = function (showImages) {
    //first activate standard link
    this.activateLinks(showImages);
    var issueRE = /[Ii]#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g;
    var taskRE = /[Tt]#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g;
    var resourceRE = /[Rr]#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g;
    var boardRE = /[Bb]#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g; // boards
    var eventRE = /[EeMm]#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/g; // event or meeting
    var attachmentRE = /[Ff]#([0-9]+)#/g;

    this.each(function () {
        var el = $(this);
        var html = el.html();

        html = html.replace(issueRE, "<a href='#' onclick=\"openIssueEditorInBlack('$1','GUESS');return stopBubble(event);\">I#$1#</a>", "g");
        html = html.replace(taskRE, "<a href='#' onclick=\"getTop().location='" + contextPath + "/app/task/taskOverview??CM=GUESS&OBJID=$1';return stopBubble(event);\">T#$1#</a>", "g");
        html = html.replace(resourceRE, "<a href='#' onclick=\"getTop().location='" + contextPath + "/app/resource/resourceEditor?CM=GUESS&OBJID=$1';return stopBubble(event);\">R#$1#</a>", "g");
        html = html.replace(eventRE, "<a href='#' onclick=\"getTop().location='" + contextPath + "/applications/teamwork/agenda/agendaEditor.jsp?CM=GUESS&OBJID=$1';return stopBubble(event);\">E#$1#</a>", "g");
        html = html.replace(boardRE, "<a href='#'onclick=\"openBoardInBlack('$1','GUESS');return stopBubble(event);\">B#$1#</a>", "g");
        html = html.replace(attachmentRE, "<a href='#' onclick='$(\".repoFileBox[pf=$1]\").click();return stopBubble(event);'>F#$1#</a>", "g");

        el.html(html);

    });
    return this;
};




function changeFastSearchKey(key) {
    var el = $("#search");
    var actualVal = validString = el.val();

    if (actualVal.indexOf(":") == 1) {
        var validString = actualVal.substring(2);
    }

    if (key == "ALL")
        actualVal = validString;
    else
        actualVal = key + ":" + validString;

    el.get(0).actualKey = key;

    el.val(actualVal).focus().setCursorPosition(actualVal.length);

    $(".fSKeys .selected").removeClass("selected");
    $(".fSKeys ." + key).addClass("selected");
};

$("#search").on("keydown", function () {
    $(".fSKeys").hide();
});

function fastSearch(el) {

    if (!el.is(":visible")) {
        var self = el.get(0);
        el.closest(".twHeader").addClass("searchOpen");

        el.fadeIn(300).focus();

        if ($(window).width() < 1450)
            $("#mainNav").animate({ opacity: .1 }, 100);

        $(".fastSearchkeysButton").fadeIn(500, function () {
            var el = $(this);
            setTimeout(function () {
                //el.click();
            }, 100)
        }).css({ display: "inline-block" });
        el.setCursorPosition(el.val().length);
        setTimeout(function () {
            $(document).on("click.hidesearch", function (e) {
                if (!$(e.target).is("#search") && !$(e.target).parents().is(".fSKeys") && !$(e.target).parents().is(".menuSearch")) {
                    $("#mainNav").animate({ opacity: 1 }, 100);

                    el.fadeOut(300, function () {
                    });
                    el.closest(".twHeader").removeClass("searchOpen");

                    $(".fastSearchkeysButton").fadeOut(300);
                    $(document).off("click.hidesearch");
                }
            });
        }, 400);

        var fastSearch = "";
        if (location.href.indexOf("/worklog/") >= 0)
            fastSearch = "W:";
        else if (location.href.indexOf("/task/") >= 0)
            fastSearch = "T:";
        else if (location.href.indexOf("/resource/") >= 0)
            fastSearch = "R:";
        else if (location.href.indexOf("/issue/") >= 0)
            fastSearch = "I:";
        else if (location.href.indexOf("/agenda/") >= 0)
            fastSearch = "A:";
        else if (location.href.indexOf("/board/") >= 0)
            fastSearch = "B:";
        else if (location.href.indexOf("/document/") >= 0)
            fastSearch = "D:";
        else
            fastSearch = "";


        self.actualKey = self.actualKey || fastSearch.replace(":", "");
        $(".fSKeys").removeClass("selected");

        if (self.actualKey.length) {
            $(".fSKeys ." + self.actualKey).addClass("selected");
        } else
            $(".fSKeys .ALL").addClass("selected");

        return;
    }

    var searchText = el.val();

    var url = contextPath;

    //hack for import from Gantt
    if (searchText.toUpperCase().startsWith("GANTT:")) {
        window.location.href = url + "/applications/teamwork/task/taskImportGantt.jsp?TWGANTT_CODE=" + (searchText.substr(6));
        return;
    }

    // shortcut management T#xxx# I#xxx# etc.
    var myregexp = /([IiTtRrBbEeMm])#([\w\u00c0-\uFFFF\u0021-\u002f]+)#/i;
    var match = myregexp.exec(searchText);
    if (match != null) {
        var type = match[1].toUpperCase();
        var val = match[2];


        if ("I" == type) {
            openIssueEditorInBlack(val, 'GUESS');

        } else if ("T" == type) {
            window.location.href = url + "/task/" + encodeURIComponent(val);

        } else if ("R" == type) {
            window.location.href = url + "/resource/" + encodeURIComponent(val);

        } else if ("E" == type || "M" == type) {
            window.location.href = url + "/" + type + "/" + encodeURIComponent(val);

        } else if ("B" == type) {
            openBoardInBlack(val, 'GUESS');
        }

        // T:xxx I:xxx etc. management
    } else {
        var searchEncoded = encodeURIComponent(searchText.substr(2));
        if (searchText.toUpperCase().startsWith("T:")) {
            window.location.href = url + "/app/task/taskList?CM=FN&NAME_DESCRIPTION_NOTE_CODE=" + searchEncoded + "&search=" + searchEncoded;
        } else if (searchText.toUpperCase().startsWith("R:")) {
            window.location.href = url + "/app/resource/resourceList?CM=FN&NAME_SURNAME=" + searchEncoded + "&search=" + searchEncoded;

        } else if (searchText.toUpperCase().startsWith("I:")) {
            window.location.href = url + "/app/issue/issuelist?CM=FN&FLT_ISSUE_DESCRIPTION=" + searchEncoded + "&search=" + searchEncoded;

        } else if (searchText.toUpperCase().startsWith("D:")) {
            window.location.href = url + "/app/document/documentList?CM=FN&NAME_DESCRIPTION=" + searchEncoded + "&search=" + searchEncoded;

        } else if (searchText.toUpperCase().startsWith("B:")) {
            window.location.href = url + "/app/board/boardList.html?CM=FN&SEARCH=" + searchEncoded + "&search=" + searchEncoded;

        } else if (searchText.toUpperCase().startsWith("W:")) {
            window.location.href = url + "/applications/teamwork/task/worklog/worklogList.jsp?CM=FN&WORKLOG_ACTION=" + searchEncoded + "&search=" + searchEncoded;

        } else if (searchText.toUpperCase().startsWith("A:") || searchText.toUpperCase().startsWith("M:")) {
            window.location.href = url + "/applications/teamwork/agenda/agendaList.jsp?CM=FN&OBJECT_DESCRIPTION=" + searchEncoded + "&search=" + searchEncoded;

        } else {
            window.location.href = url + "/applications/teamwork/search/fullTextSearch.jsp?CM=FN&TEXT=" + encodeURIComponent(searchText) + "&search=" + searchText;
        }
    }
}


//------------------------------------------------ MANAGE RIGHT PANEL   --------------------------------------------------------

/*COOKIES
 * -----------------------------------------------------------------*/
$.mbCookie = {
    set: function (name, value, days, domain) {
        if (!days) days = 7;
        domain = domain ? "; domain=" + domain : "";
        var date = new Date(), expires;
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + value + expires + "; path=/" + domain;
    },
    get: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    remove: function (name) {
        $.mbCookie.set(name, "", -1);
    }
};

/*----------------------------------------------------------------- manage right panel */

$.rightPanel = {

    defaults: {
        isPinned: false
    },

    init: function () {

        $.rightPanel.isPinned = eval($.mbCookie.get("rightPanelPinned"));
        $.rightPanel.menu = this;
        $.rightPanel.container = $.rightPanel.menu.closest('.rightColumn');

        if (!this.length) {
            $("body").removeClass("pinned");
            setTimeout(function () {
                $('.rightColumn').fadeIn(700);
            }, 500);

            return;
        }

        $.rightPanel.tools = $(".tools", $.rightPanel.container);
        $.rightPanel.simbol = function () {
            return $.rightPanel.container.is(".expanded") ? "}" : "{"
        };
        $.rightPanel.hamburger = $("<span/>").addClass("teamworkIcon hamburger").html($.rightPanel.simbol());

        $.rightPanel.hamburger.attr({ title: i18n.OPEN_THIS_MENU });

        $.rightPanel.tools.append($.rightPanel.hamburger);

        $.rightPanel.hamburger.on("click", function () {
            if ($.rightPanel.isOpen) {
                $.rightPanel.close();
            } else {
                $.rightPanel.open();
            }
        });

        $.rightPanel.pinnedModeLabel = function () {
            return !$.rightPanel.isPinned ? i18n.PIN_THIS_MENU : i18n.UNPIN_THIS_MENU
        };
        $.rightPanel.pinnedMode = $("<div/>").addClass("pinnedMode button textual");
        $.rightPanel.pinnedModeContent = $("<span/>").html($.rightPanel.pinnedModeLabel());
        $.rightPanel.pinnedMode.append($.rightPanel.pinnedModeContent);
        $.rightPanel.menu.prepend($.rightPanel.pinnedMode);
        $.rightPanel.origHeight = $.rightPanel.container.height();

        if ($.rightPanel.isPinned) {
            $("body").addClass("pinned");
            $.rightPanel.hamburger.hide();
        }

        $.rightPanel.pinnedMode.on("click", function () {
            $.rightPanel.pin();
        });

        $(window).on("resize.rightPanel scroll.rightPanel", function (e) {

            $("body").css({ minHeight: "auto" });

            var minHeight = $(window).height() - $(".twHeader").outerHeight() + $(window).scrollTop();
            var hasVScroll = $("body").outerHeight() > $(window).height();

            if (hasVScroll)
                minHeight = "100%";

            $.rightPanel.container.css({ minHeight: minHeight });

            /*Manage pinned mode under a screen resolution of 1400*/
            if (e.type == "resize")
                if ($(window).width() <= 1400) {

                    if (!$.rightPanel.wasPinned)
                        $.rightPanel.wasPinned = $.rightPanel.isPinned;

                    $.rightPanel.isPinned = false;
                    $("body").removeClass("pinned");
                    $.rightPanel.hamburger.show();
                    $.rightPanel.close();
                    $('.mainColumn').removeClass('narrow');
                    $(".rightColumn .pinnedMode").hide();

                } else if ($.rightPanel.wasPinned) {

                    $("body").addClass("pinned");
                    $.rightPanel.isPinned = true;
                    $.rightPanel.hamburger.hide();
                    $.rightPanel.wasPinned = false;

                }

            if ($(window).width() > 1400) {
                $(".rightColumn .pinnedMode").show();

            }

            $.rightPanel.container.fadeIn(700);

        }).resize();
    },

    open: function () {
        $.rightPanel.isOpen = true;
        $.rightPanel.container.addClass("expanded");
        $.rightPanel.hamburger.html($.rightPanel.simbol());
        $.rightPanel.hamburger.attr({ title: i18n.CLOSE_THIS_MENU });

        setTimeout(function () {
            $(document).on("click.rightPanel", function (e) {
                var t = $(e.target);
                var canClose = (!t.is(".rightColumn") && !t.parents().is(".rightColumn")) && !$.rightPanel.isPinned;
                if (canClose) {
                    $.rightPanel.close();
                }
            })
        }, 200)
    },

    close: function () {
        $.rightPanel.isOpen = false;
        $.rightPanel.container.removeClass("expanded");
        $.rightPanel.hamburger.html($.rightPanel.simbol());
        $.rightPanel.hamburger.attr({ title: i18n.OPEN_THIS_MENU });

        $(document).off("click.rightPanel");
    },

    pin: function () {
        if (!$.rightPanel.isPinned) {
            $("body").addClass("pinned");
            $.rightPanel.isPinned = true;
            $.rightPanel.hamburger.hide();

            $.mbCookie.set("rightPanelPinned", true);
        } else {
            $("body").removeClass("pinned");
            $.rightPanel.hamburger.show();
            $.rightPanel.close();
            $.rightPanel.isPinned = false;
            $('.mainColumn').removeClass('narrow');
            $.mbCookie.remove("rightPanelPinned");
        }

        $(window).resize();

        $.rightPanel.pinnedModeContent.html($.rightPanel.pinnedModeLabel());
    },

    unpin: function (save) {
        $("body").removeClass("pinned");
        $.rightPanel.hamburger.show();
        $.rightPanel.close();
        $.rightPanel.isPinned = false;
        $('.mainColumn').removeClass('narrow');
        if (save)
            $.mbCookie.remove("rightPanelPinned");
    }
};

$.fn.initRightPanel = jQuery.rightPanel.init;


//------------------------------------------------ TEAMWORK SPECIFIC FUNCTIONS   --------------------------------------------------------
function openIssueEditorInBlack(issueId, command, params) {
    if (!command)
        command = "ED";
    //console.log(11);
    var page = "/app/issue/issueEditor.html";
    var width = 960;
    var height = function () {
        return $(window).height() - 50
    };

    if (command == "AD" && params && params.indexOf("ISSUE_TASK") >= 0) {
        page = "/applications/teamwork/issue/issueEditorSimple.jsp";
        width = 600;
        height = 400;
    }

    var editUrl = contextPath + page + "?CM=" + command + "&OBJID=" + issueId + (params ? "&" + params : "");

    openBlackPopup(editUrl, width, height, function () {
        $("#" + issueId).effect("highlight", { color: "#FFFAE4" }, 1500);
    });
}

function openBoardInBlack(boardId, command, params, callback) {
    if (!command)
        command = "ED";
    var editUrl = contextPath + "/applications/teamwork/board/board.jsp?CM=" + command + "&OBJID=" + boardId + "&POP=1";
    if (params)
        editUrl = editUrl + params;
    openBlackPopup(editUrl, function () {
        return $(window).width() - 50
    }, function () {
        return $(window).height()
    }, callback, null, "black");
}

/* Message menu*/
function loadMessageList(el) {
    if (!el.parent().is(".arrowHover")) {
        $("#messageListPlace")[0].canScroll = true;
        $("#messageListPlace").empty().load(contextPath + "/messaging/messageList", function (ret) {
            if (ret.length > 200)
                $(".showAllMessages").show();
            else
                $(".showAllMessages").hide();
            bjs_showMenuDiv("messageListBox", "messageListOpener", false);
        });
    }
}

function loadMessageListMore(el, topMillis, isInpage) {
    var listPlace = el.closest(".messageListPlace");

    if (!listPlace[0].canScroll && !isInpage)
        return;

    listPlace[0].canScroll = false;

    var ce = isInpage ? "&isInPage=true" : "";

    $.get(contextPath + "/messaging/MessageList?topMillis=" + topMillis + ce, function (res) {
        el.parent().remove();
        listPlace.append(res);
        listPlace[0].canScroll = true;
    })
}

$.fn.activateTimeCounter = function (format) {
    if (!format)
        format = '%0h<span class="counterLabel">h</span> %0m<span class="counterLabel">m</span><span class="sec"> %0s<span class="counterLabel">s</span></span>';
    var el = $(this);
    var millis = el.data("time");
    var d = new Date(millis).toString();
    el.tinyTimer({ from: d, format: format });
    return el;
};

$.fn.stopTimeCounter = function () {
    //console.debug("stopTimeCounter");
    var tt = $(this).data("tinyTimer");
    if (tt)
        tt.stop();
    return $(this).removeData("tinyTimer");
};

function displayTaskGallery(taskId) {

}



//**************************************************************************************************  tableLayout.js
/*----------------------------------------------------------------- manage table headers, table sections and table footers*/
$.tableHF = {
    defaults: {
        mainContainer: window
    },
    init: function (opt) {

        $.extend($.tableHF.defaults, opt);
        var wrapper = $.tableHF.defaults.mainContainer;

        setTimeout(function () {
            $.tableHF.refreshThead();
            $.tableHF.refreshTSection();
            $.tableHF.refreshTfoot();
        }, 400);

        $(wrapper).on("scroll.tableHF", function () {
            $.tableHF.manageThead();
            $.tableHF.manageTSection();
            $.tableHF.manageTFoot();
        });

        $(window).on("resize.tableHF", function () {
            $.tableHF.refreshThead();
            $.tableHF.refreshTSection();
            $.tableHF.refreshTfoot();
        });

        $(".scrollingBox").on("scroll.tableHF", function () {
            $.tableHF.manageThead();
        });

    },

    manageThead: function () {

        var counter = 0;
        return $(".fixHead thead").not(".headerHolder").each(function () {
            counter++;
            var thead = this;

            thead.id = "thead_" + counter;

            thead.tbl = $(this).parent("table");
            var tblClass = thead.tbl.attr("class");

            var scrollingBox = thead.tbl.closest(".scrollingBox");
            var wrapper = $.tableHF.defaults.mainContainer;

            if (scrollingBox.length) {
                thead.isOut = scrollingBox.scrollTop() > 0;
            } else {
                if (wrapper == window) {
                    thead.isOut = ($(wrapper).scrollTop() > $(thead).offset().top) && ((thead.tbl.offset().top + thead.tbl.height()) > $(wrapper).scrollTop());
                } else {
                    thead.isOut = ($(thead).position().top <= 0) && (thead.tbl.offset().top < 0 && thead.tbl.offset().top >= -(thead.tbl.height() - 200)); // && (thead.tbl.offset().top + thead.tbl.height() > $(wrapper).scrollTop() + thead.tbl.offset().top)
                }
            }

            if (thead.isOut && !thead.isCloned) {
                $(".tableHeaderCloned").remove();
                thead.isCloned = true;
                thead.headerHolder = $("<table/>").addClass("tableHeaderCloned  clone top " + tblClass).css({
                    width: thead.tbl.outerWidth(),
                    marginTop: 0
                });

                thead.headerHolder.hide();

                var theadClone = $(thead).clone();
                theadClone.addClass("headerHolder");
                thead.headerHolder.css({
                    position: (scrollingBox.size() ? "absolute" : "fixed"),
                    top: 0,
                    left: (scrollingBox.size() ? 0 : $(thead).offset().left)
                });
                thead.headerHolder.append(theadClone);
                var headerHolderTh = thead.headerHolder.find("th");

                $("th", $(thead)).each(function (i) {
                    var orig = $(this);
                    var clone = headerHolderTh.eq(i);
                    clone.data("orig", orig);
                    var w = isMozilla ? orig.width() : orig.outerWidth();
                    clone.width(w);
                    if (!clone.is(".dayTHeader"))
                        clone.css({ background: "transparent" });

                    var span = clone.find("span[onclick]");
                    span.attr("onclick", "").on("click", function (e) {
                        $("html, body").animate({ scrollTop: $(thead).offset().top }, 300, function () {
                            orig.find("span").click()
                        });
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    var check = clone.find("input[type='checkbox']");
                    check.attr("onclick", "").on("click", function () {
                        orig.find("input[type=checkbox]").click();
                    });
                });

                thead.tbl.before(thead.headerHolder);
                //$("body").append(headerHolder);
                thead.headerHolder.show();

            } else if (!thead.isOut && thead.isCloned) {

                thead.isCloned = false;
                thead.headerHolder.remove();
            }

            if (thead.isCloned) {
                if (scrollingBox.size()) {
                    thead.headerHolder.css({ top: scrollingBox.scrollTop() });
                } else {
                    thead.headerHolder.css({ left: $(thead).offset().left - $(wrapper).scrollLeft() });
                }
            }
        })
    },

    refreshThead: function () {

        $(".tableHeaderCloned").remove();
        $(".fixHead thead").not(".headerHolder").each(function () {
            var thead = this;
            thead.isCloned = false;
        });
        $.tableHF.manageThead();
    },

    manageTSection: function () {

        $(".fixHead .tableSection").not(".tableSectionHolder").each(function () {
            var tSection = this;
            tSection.tbl = $(this).parents("table");
            var tblClass = tSection.tbl.attr("class");

            var wrapper = $.tableHF.defaults.mainContainer;
            if (wrapper == window) {
                tSection.isOut = (($(wrapper).scrollTop() > $(tSection).offset().top - $(".headerHolder").height() - ($(".tableSectionCloned:visible").height() / 2))) && ((tSection.tbl.offset().top + tSection.tbl.height()) > $(wrapper).scrollTop());
            } else {
                tSection.isOut = ($(tSection).offset().top - $(".headerHolder").height() - ($(".tableSectionCloned:visible").height() / 3) <= 0) && (tSection.tbl.offset().top <= 0 && tSection.tbl.offset().top >= -(tSection.tbl.height() - 200));
            }

            if (tSection.isOut && !tSection.isCloned) {

                $(".tableSectionCloned").hide();
                tSection.isCloned = true;
                tSection.sectionHolder = $("<table/>").addClass("tableSectionCloned  clone top " + tblClass).css({
                    width: tSection.tbl.outerWidth(),
                    marginTop: 0
                });

                tSection.sectionHolder.data("orig", tSection);
                tSection.sectionHolder.hide();

                var tSectionClone = $(tSection).clone();
                tSectionClone.addClass("tableSectionHolder");

                tSection.sectionHolder.css({
                    position: "fixed",
                    top: $(".headerHolder").height() || 50,
                    left: $(tSection).offset().left - $(wrapper).scrollLeft()
                });
                tSection.sectionHolder.append(tSectionClone);
                var sectionHolderTd = tSection.sectionHolder.find("td");

                //$(tSection).css("opacity", .4);

                $("td", $(tSection)).each(function (i) {
                    var orig = $(this);
                    var clone = sectionHolderTd.eq(i);
                    clone.data("orig", orig);
                    clone.css({ background: "transparent" });
                });

                tSection.tbl.before(tSection.sectionHolder);
                tSection.sectionHolder.show();

            } else if (!tSection.isOut && tSection.isCloned) {
                tSection.isCloned = false;
                tSection.sectionHolder.remove();

                //$(tSection).css("opacity", 1);

                var allTSections = $(".tableSectionCloned");
                var lastTSectionClonedElement = allTSections.eq(allTSections.length - 1);
                var orig = lastTSectionClonedElement.data("orig");

                lastTSectionClonedElement.show();
            } else if (tSection.isCloned) {
                tSection.sectionHolder.css({ left: $(tSection).offset().left - $(wrapper).scrollLeft() });
            }
        })
    },

    refreshTSection: function () {
        $(".tableSectionHolder").remove();

        $(".fixHead .tableSection").not(".tableSectionHolder").each(function () {
            var tSection = this;
            tSection.isCloned = false;
        });

        $.tableHF.manageTSection();
    },

    manageTFoot: function () {
        var wrapper = $.tableHF.defaults.mainContainer;
        return $(".fixFoot tfoot").not(".footerHolder").each(function () {
            var tfoot = this;
            tfoot.tbl = $(this).parent("table");
            var tblClass = tfoot.tbl.attr("class");

            var b = $("#moveBar").length ? $("#moveBar").outerHeight() : 0;
            b = $(".bbCloned:last").length ? $(".bbCloned:last").outerHeight() : b;

            if (wrapper == window) {
                tfoot.isOut = ($(wrapper).scrollTop() + $(wrapper).height() - $(tfoot).height() - b < $(tfoot).offset().top) && (tfoot.tbl.offset().top < $(wrapper).scrollTop() + $(wrapper).height() - b);
            } else {
                //tfoot.isOut = ($(tfoot).position().top > $(wrapper).height() - b ) && (tfoot.tbl.offset().top < $(wrapper).scrollTop() + $(wrapper).height() - b);
                tfoot.isOut = ($(tfoot).position().top > $(wrapper).height() - b) && (tfoot.tbl.offset().top <= tfoot.tbl.height() && tfoot.tbl.offset().top >= -(tfoot.tbl.height() - b));
            }

            if (tfoot.isOut && !tfoot.isCloned) {
                tfoot.isCloned = true;
                tfoot.footerHolder = $("<table/>").addClass("tableFooterCloned clone bottom " + tblClass).css({ width: tfoot.tbl.outerWidth() });

                tfoot.footerHolder.hide();

                var tfootClone = $(tfoot).clone();
                tfootClone.addClass("footerHolder");
                tfoot.footerHolder.css({ position: "fixed", bottom: b, left: $(tfoot).offset().left });
                tfoot.footerHolder.append(tfootClone);
                var footerHolderTD = tfoot.footerHolder.find("td");
                $("td", $(tfoot)).each(function (i) {
                    var orig = $(this);
                    var clone = footerHolderTD.eq(i);
                    var w = isMozilla ? orig.width() : orig.outerWidth();
                    clone.width(w);
                    if (!clone.is(".color"))
                        clone.css({ background: "transparent" });
                });

                tfoot.tbl.after(tfoot.footerHolder);

                $("body").css({ marginBottom: tfoot.footerHolder.height() + 100 });

                if (tfoot.footerHolder.height() > 10)
                    tfoot.footerHolder.show();
                else
                    tfoot.footerHolder.hide();

            } else if (!tfoot.isOut && tfoot.isCloned) {
                tfoot.isCloned = false;
                tfoot.footerHolder.remove();
            }
        });
    },

    refreshTfoot: function (anim) {
        $(".tableFooterCloned").remove();
        $(".fixFoot tfoot").not(".footerHolder").each(function () {
            var tfoot = this;
            tfoot.isCloned = false;
        });
        $.tableHF.manageTFoot(anim);
    }

};

//prepende un elemento per il filtraggio dei dati della tabella a "ndo"
function createTableFilterElement(ndo, rowSelector, cellSelector) {
    var ret = $("<div>").addClass("tableFilterElementBox");
    var input_id = "tableFilterField_" + Math.floor(Math.random() * 10000);
    var input = $("<input id='" + input_id + "' type='text' class='formElements formElementsSmall tableFilterElementBox-input' autocomplete='off'>");
    input.attr("rowSelector", rowSelector).attr("cellSelector", cellSelector).attr("onkeyup", "tableFilter($('#" + input_id + "'))");
    ret.append(input);
    var search = $("<span class='button noprint textual icon tableFilterElementBox-search' data-search><span class='teamworkIcon' >L</span></span>");

    $("body").on("click.tableFilterElementBox", ".tableFilterElementBox-search", function (e) {

        if ($(this).parents().is(".headerHolder")) {
            var th_orig = $(this).parents("th").data("orig");
            openTableFilter($(".tableFilterElementBox-search", th_orig), e);
        } else {
            openTableFilter($(this), e);
        }
    });

    $("body").on("focus", ".tableFilterElementBox-input", function () {
        if ($(".headerHolder").length) {
            $("html, body").css({ scrollTop: $(".fixHead thead").not(".headerHolder").offset().top }, 100, function () {
                setTimeout(function () {
                    $(".tableFilterElementBox-input").focus();
                }, 500);
            });
        }
    });

    $("body").on("scroll", function () {
        $(".tableFilterElementBox-input").blur();
    });

    ret.append(search);
    var close = $("<span class='button noprint textual icon tableFilterElementBox-close' data-close><span class='teamworkIcon' >x</span></span>");

    $("body").on("click.tableFilterElementBox", ".tableFilterElementBox-close", function () {
        $(this).prevAll(':input').val('').keyup();
        $(this).closest('.tableFilterElementBox').removeClass('filterOn');
    });

    ret.append(close);
    ndo.prepend(ret);
    return ret;

}

function openTableFilter(el, event) {

    if ($(".headerHolder").length) {
        $("html, body").animate({ scrollTop: $(".fixHead thead").not(".headerHolder").offset().top }, 300, function () {
            el.prev().focus();
        });
    } else {
        setTimeout(function () {
            el.prev().focus();
        }, 300);
    }
    event.stopPropagation();
    var searchDiv = el.closest(".tableFilterElementBox");
    searchDiv.addClass("filterOn");

    //si blocca la dimensione di tutti i th per evitare sfarfallii. Si calcola in percentuale
    var tableW = searchDiv.closest("table").width();
    var s = [];
    var ths = searchDiv.closest("tr").find("th");
    ths.each(function () {
        var th = $(this);
        s.push(th.outerWidth() / tableW * 100);
    });

    for (var i = 0; i < ths.length; i++) {
        ths.eq(i).css("width", s[i] + "%");
    }

}


function tableFilter(filterTextField) {
    var rowSelector = filterTextField.attr("rowSelector");
    var cellSelector = filterTextField.attr("cellSelector");
    var val = filterTextField.val();
    filterTextField.stopTime("tableFilterTimer");
    if (val.length > 0) {
        filterTextField.oneTime(400, "tableFilterTimer", function () {
            var vals = val.toLowerCase().split(' ');
            $(rowSelector).each(function () {
                var row = $(this);
                var cellTxt = row.find(cellSelector).text();
                row.find(cellSelector).find("input").each(function () {
                    cellTxt += " " + $(this).val();
                });
                cellTxt = cellTxt.toLowerCase();
                var containsAll = true;
                for (var i = 0; i < vals.length; i++) {
                    if (cellTxt.indexOf(vals[i]) < 0) {
                        containsAll = false;
                        break;
                    }
                }
                if (!containsAll)
                    row.addClass("tableFilteredRow");
                else
                    row.removeClass("tableFilteredRow");
            });
        });

    } else {
        $(rowSelector).removeClass("tableFilteredRow");
    }
}


//**************************************************************************************************  jquery/jquery.mb.balloon.js
/*******************************************************************************
 jquery.mb.components
 jQuery.mb.components: jquery.mb.
 balloon.js

 version: 1.5

 Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi); Open lab srl, Firenze - Italy
 site: http://pupunzi.open-lab.com

 Licences: MIT, GPL
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 ******************************************************************************/

(function ($) {

	/* ------------------------------------------------------------------------------------------------------------------------------------------------
	 * Bez @VERSION
	 * http://github.com/rdallasgray/bez
	 *
	 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
	 *
	 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
	 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
	 *
	 * Copyright @YEAR Robert Dallas Gray. All rights reserved.
	 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
	 */

    jQuery.extend({
        bez: function (a, b) {
            if (jQuery.isArray(a) && (b = a, a = "bez_" + b.join("_").replace(/\./g, "p")), "function" != typeof jQuery.easing[a]) {
                var c = function (a, b) {
                    var c = [null, null], d = [null, null], e = [null, null], f = function (f, g) { return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g])) }, g = function (a) { return e[0] + a * (2 * d[0] + 3 * c[0] * a) }, h = function (a) {
                        for (var d, b = a, c = 0; ++c < 14 && (d = f(b, 0) - a, !(Math.abs(d) < .001));)b -= d / g(b);
                        return b
                    };
                    return function (a) { return f(h(a), 1) }
                };
                jQuery.easing[a] = function (a, d, e, f, g) { return f * c([b[0], b[1]], [b[2], b[3]])(d / g) + e }
            }
            return a
        }
    });
	/*
	 * ------------------------------------------------------------------------------------------------------------------------------------------------
	 * */



    jQuery.balloon = {
        name: "jquery.mb.balloon",
        version: "1.5",
        author: "Matteo Bicocchi",
        defaults: {
            addclose: false,
            addoverlay: false,
            target: "self",
            highlight: true,
            justonce: false,
            ease: [.2, .77, .45, .84], //http://cubic-bezier.com
            animTime: 150,
            bgcolor: "#FFFFFF",
            bordercolor: "#B4B4B4",
            textcolor: "#333333",
            oncursor: true,
            forceposition: "auto", // or: up, down, left, right
            timer: 0, // close the balloon after x millis (0 = never)
            //			balloon:           "This is an mb.balloon",
            storeData: true,
            autoHide: true
        },

        balloonTransitions: {
            slide_left: { marginLeft: -80, opacity: 0 },
            slide_right: { marginLeft: 80, opacity: 0 },
            slide_up: { marginTop: -80, opacity: 0 },
            slide_down: { marginTop: 80, opacity: 0 }
        },

        init: function (opt) {
            opt = opt || jQuery.balloon.defaults;

            jQuery("body").on("click focus", "[data-balloon]", function (e) {
                $(this).showBalloon(e, opt, true);
            });

            if (opt.autoHide) {
                jQuery("body").on("blur", "[data-balloon]", function (e) {
                    $(this).hideBalloon();
                });
            }
        },

        show: function (event, opt, anim) {

            if (typeof anim == "undefined")
                anim = true;

            var $self = this;
            var self = $self[0];

            if (self.isOpened)
                return;

            jQuery(document).off("click.mbBalloon");

            if (event && event.type == "mouseover" && !self.isDelaied) {
                self.isDelaied = true;
                self.delay = setTimeout(function () {
                    $self.showBalloon(event, opt, anim);
                }, 300);
                return;
            }

            if (!self.isInit) {
                self.opt = {};
                jQuery.extend(self.opt, jQuery.balloon.defaults, $self.data());

                if (typeof opt == "string") {
                    self.opt.balloon = opt;

                } else if (typeof opt == "object") {
                    jQuery.extend(self.opt, opt);
                }

                self.opt.cloneContent = self.opt.cloneContent || false;

                self.isInit = true;

            } else {
                jQuery.extend(self.opt, $self.data());
            }

            $self.addClass("mbBalloonOpener");


            if (typeof event == "undefined")
                self.opt.oncursor = false;

            if ((self.opt.justonce && self.displayed) || self.isOpened) {
                jQuery(".mbBalloonOpener").not($self).each(function () {
                    if (this.displayed && self.opt.autoHide)
                        jQuery(this).hideBalloon(null, {}, false);
                });
                return;
            }

            self.displayed = true;
            self.isOpened = true;
            self.isAjax = false;

            //self.$balloonContainer = jQuery("<div/>").addClass("mbBalloon").css({opacity: 0, zIndex: 10002});
            self.$balloonContainer = jQuery("<div/>").addClass("mbBalloon").css({ opacity: 0 });

            if (self.opt.bgcolor)
                self.$balloonContainer.css({ backgroundColor: self.opt.bgcolor, borderColor: self.opt.bordercolor });

            if (self.opt.textcolor)
                self.$balloonContainer.css({ color: self.opt.textcolor });

            self.balloonContainer = self.$balloonContainer.get(0);
            self.balloonContainer.opener = self;
            self.balloonContainer.$opener = $self;

            // place the content
            if (typeof self.opt.balloon == "object") {

                // is a DOM element

                var content;
                if (self.opt.cloneContent)
                    content = self.opt.balloon.clone(true);
                else
                    content = self.opt.balloon;

                content.addClass("balloon-visible");
                self.$balloonContainer.append(content);

                if (self.opt.storeData)
                    $self.data("balloon", content);

                self.$balloonContainer.css({ padding: 0 });

            } else if (typeof self.opt.balloon == "string" && self.opt.balloon.indexOf("{ajax}") > -1) {
                self.isAjax = true;

                // is an AJAX URL
                var url = self.opt.balloon.replace("{ajax}", "");
                jQuery.get(url, function (data) {
                    self.$balloonContainer.append(data);
                    $self.data("balloon", data);
                    $self.trigger("ajaxcontentready");
                });

            } else {
                // is a string
                self.$balloonContainer.html(self.opt.balloon);
            }

            if (self.opt.addclose) {
                var close = jQuery("<div/>").addClass("mbBalloonClose");
                self.$balloonContainer.append(close);
                close.on("click", function () {
                    $self.hideBalloon();
                })
            };

            jQuery(".mbBalloonOpener.highlight").removeClass("highlight");

            if (self.opt.highlight) {
                $self.addClass("highlight");
                $self.parents().each(function () {
                    this.dataset["mbBalloonZIndex"] = $(this).css("z-index");
                    $(this).css("z-index", "auto");
                })
                self.$balloonContainer.css({ zIndex: "100" });
            }

            if (self.opt.addoverlay) {
                var opacity = 0;
                if (jQuery(".mbBalloonOverlay").length) {
                    jQuery(".mbBalloonOverlay").remove();
                    opacity = 1;
                }

                //var balloonOverlay = jQuery("<div/>").addClass("mbBalloonOverlay").css({zIndex: 1000, opacity: opacity});
                var balloonOverlay = jQuery("<div/>").addClass("mbBalloonOverlay").css({ opacity: opacity });
                balloonOverlay.get(0).opener = $self;
                jQuery("body").append(balloonOverlay);

                balloonOverlay.append(self.$balloonContainer);

                balloonOverlay.off("click").on("click", function () {
                    if (!self.opt.addclose && self.opt.autoHide)
                        $self.hideBalloon();
                });

                if (self.opt.highlight) {
                    self.position = $self.css("position");

                    if ($self.css("position") == "static")
                        $self.css("position", "relative");
                }

            } else {

                if (self.opt.autoHide) {
                    setTimeout(function () {
                        jQuery(document).off("click.mbBalloon").on("click.mbBalloon", function (e) {

                            if ((!jQuery(e.target).is(".mbBalloon") && !jQuery(e.target).parents().is(".mbBalloon")) && !jQuery(e.target).is($self)) {
                                $self.hideBalloon();
                                jQuery(document).off("click.mbBalloon");
                            }
                        })
                    }, 100)
                }

            }

            var target = self.opt.target != "self" ? jQuery(self.opt.target) : $self;

            var arrow = $("<div>").addClass("arrow");
            var arrowBorder = arrow.clone().addClass("border");
            arrowBorder.css({ borderColor: self.opt.bgcolor });

            self.$balloonContainer.prepend(arrowBorder).prepend(arrow);

            jQuery("body").append(self.$balloonContainer);

			/**
			 * On window resize
			 */
            jQuery(window).off("resize.mbBalloon").on("resize.mbBalloon", function () {

                //self.$balloonContainer.hide();
                if (self.isOpened && self.$balloonContainer.length) {
                    clearTimeout(self.repos);
                    self.repos = setTimeout(function () {
                        //self.$balloonContainer.show();
                        $self.setBalloonPosition(event, target, true);
                    }, 300)
                }
            });

            function displayBalloon() {
                self.pos = $self.setBalloonPosition(event, target);
                if (anim) {
                    if (self.opt.addoverlay) {

                        balloonOverlay.fadeTo(self.opt.animTime, 1, function () {
                            jQuery(".mbBalloonOpener").not($self).each(function () {
                                if (this.displayed && self.opt.autoHide)
                                    jQuery(this).hideBalloon(null, {}, false);
                            });
                            jQuery("body").css({ overflow: "hidden" });
                            self.$balloonContainer.css(jQuery.balloon.balloonTransitions["slide_" + self.pos]);
                            self.$balloonContainer.animate({ marginLeft: 0, marginTop: 0, opacity: 1 }, self.opt.animTime, $.bez(self.opt.ease));
                        });

                    } else {
                        self.$balloonContainer.css(jQuery.balloon.balloonTransitions["slide_" + self.pos]);
                        self.$balloonContainer.animate({ marginLeft: 0, marginTop: 0, opacity: 1 }, self.opt.animTime, $.bez(self.opt.ease));
                        jQuery(".mbBalloonOpener").not($self).each(function () {
                            if (this.displayed && self.opt.autoHide)
                                jQuery(this).hideBalloon(null, {});
                        });
                    }

                } else {
                    self.$balloonContainer.css({ opacity: 1 });
                    jQuery("body").css({ overflow: "hidden" });
                }

                if (self.opt.timer && !self.opt.addclose && self.opt.autoHide)
                    self.timeout = setTimeout(function () {
                        $self.hideBalloon();
                    }, self.opt.timer);
            }

            if (self.isAjax) {
                $self.on("ajaxcontentready", function () {

                    var images = $("img", self.$balloonContainer);
                    if (images.length) {
                        var x = 0;
                        images.each(function () {
                            $(this).on("load", function () {
                                ++x;
                                if (x == images.length)
                                    displayBalloon()
                            });
                        })
                    } else {
                        displayBalloon()
                    }
                });

                self.isAjax = false;
            } else {
                displayBalloon();
            }
            return $self;
        },

        hide: function (anim, callBack) {

            return $(this).each(function () {
                anim = typeof anim == "undefined" ? true : anim;
                var $self = $(this).is(".mbBalloon") ? this.$opener : $(this);
                var self = this;

                var $balloon = self.$balloonContainer;

                if (!$balloon)
                    return;

                self.isDelaied = false;
                self.displayed = false;
                self.isOpened = false;
                clearTimeout(self.timeout);
                clearTimeout(self.delay);

                $balloon.trigger("closeBalloon");

                if ($balloon && $balloon.length) {

                    var overlay = jQuery(".mbBalloonOverlay").get(0);

                    function destroyBalloon($balloon) {
                        $balloon.remove();
                        $self.removeClass("highlight");

                        $self.parents().each(function () {
                            $(this).css("z-index", this.dataset["mbBalloonZIndex"]);
                        })

                        jQuery("body").css("overflow", "visible");

                        if (overlay && overlay.opener.is($self)) {
                            jQuery(overlay).fadeOut(self.opt.animTime, function () {
                                $(this).remove();
                            });
                        }

                        self.$opener = undefined;

                        $self.css("position", self.position);

                        if (self.$containment && !self.$containment.is("body"))
                            self.$containment.css("overflow", self.containment.overflow);

                        if (typeof callBack == "function")
                            callBack($self);

                        $self.removeClass("mbBalloonOpener");

                    }

                    if (anim) {
                        $balloon.animate(jQuery.balloon.balloonTransitions["slide_" + self.pos], self.opt.animTime, $.bez(self.opt.ease), function () { destroyBalloon($(this)) });
                    } else {
                        destroyBalloon($balloon);
                    }
                }
            });
        },

        destroy: function (callBack) {
            return $(this).each(function () {
                $(this).hideBalloon(false, callBack);
                var $self = $(this).is(".mbBalloon") ? this.$opener : $(this);
                var self = this;
                $self.removeClass("mbBalloonOpener");
                self.opt = undefined;
                self.pos = undefined;
                self.$balloonContainer = undefined;
                self.$containment = undefined;
                self.balloonPos = undefined;

                self.isAjax = undefined;
                self.isInit = undefined;
                self.delay = undefined;
                self.isDelaied = undefined;
                self.isOpened = undefined;

            })
        },

        setPos: function (event, opener, refresh) {

            var $self = this;
            var self = $self[0];

            if (!self.$balloonContainer)
                return;

            var arrow = self.$balloonContainer.find(".arrow");

            if (typeof event == "undefined" || refresh)
                self.opt.oncursor = false;

            self.$containment = opener.parents().filter(function () {
                return jQuery(this).is("body") || (!jQuery(this).is("td, tr, table, tbody") && jQuery(this).css("overflow") != "visible");
            }).eq(0);

            self.containment = self.$containment.get(0);
            self.containment.center = { top: (self.$containment.outerHeight() / 2), left: (self.$containment.outerWidth() / 2) };

            if (self.opt.addoverlay) {
                self.containment.overflow = self.$containment.css("overflow");
                self.$containment.css("overflow", "hidden");
            }

            /* get the center of the containment */
            var centerLeft = self.$containment.outerWidth() / 2;
            var centerTop = self.$containment.outerHeight() / 2;

            var targetTop = self.opt.oncursor ? event.pageY || opener.offset().top : opener.offset().top;
            var targetLeft = self.opt.oncursor ? event.pageX || opener.offset().left : opener.offset().left;
            var targetWidth = self.opt.oncursor ? 1 : opener.outerWidth();
            var targetHeight = self.opt.oncursor ? 1 : opener.outerHeight();

            var center = { top: targetTop + (targetHeight), left: targetLeft + (targetWidth / 2) };

            if (Math.abs(center.top - centerTop) > Math.abs(center.left - centerLeft))
                //up or down?
                self.balloonPos = center.top > centerTop ? "up" : "down";
            else
                //left or right
                self.balloonPos = center.left > centerLeft ? "left" : "right";

            if (self.opt.forceposition != "auto")
                self.balloonPos = self.opt.forceposition;

            var balloonTop, balloonLeft;
            var arrowTop, arrowLeft;

            self.$balloonContainer.removeClass("n s e w");
            arrow.removeClass("n s e w");

            switch (self.balloonPos) {

                case "up":
                    balloonTop = targetTop - self.$balloonContainer.outerHeight() - arrow.outerHeight() / 2;
                    balloonLeft = (targetLeft + targetWidth / 2) - (self.$balloonContainer.outerWidth() / 2);
                    arrowTop = self.$balloonContainer.outerHeight() - 1;
                    arrowLeft = (self.$balloonContainer.outerWidth() / 2) - (arrow.outerWidth() / 2);

                    arrow.addClass("s");
                    self.$balloonContainer.addClass("s");
                    break;

                case "down":
                    balloonTop = targetTop + targetHeight + arrow.outerHeight() / 2;
                    balloonLeft = (targetLeft + targetWidth / 2) - (self.$balloonContainer.outerWidth() / 2);
                    arrowTop = -arrow.outerHeight() / 2;
                    arrowLeft = self.$balloonContainer.outerWidth() / 2 - arrow.outerWidth() / 2;

                    arrow.addClass("n");
                    self.$balloonContainer.addClass("n");
                    break;

                case "left":
                    balloonTop = targetTop + (targetHeight / 2) - (self.$balloonContainer.outerHeight() / 2);
                    balloonLeft = targetLeft - self.$balloonContainer.outerWidth() - arrow.outerWidth();
                    arrowTop = (self.$balloonContainer.outerHeight() / 2 - arrow.outerHeight() / 2);
                    arrowLeft = self.$balloonContainer.outerWidth() - 1;

                    arrow.addClass("e");
                    self.$balloonContainer.addClass("e");
                    break;

                case "right":
                    balloonTop = targetTop + (targetHeight / 2) - self.$balloonContainer.outerHeight() / 2;
                    balloonLeft = (targetLeft + targetWidth) + arrow.outerWidth();
                    arrowTop = (self.$balloonContainer.outerHeight() / 2 - arrow.outerHeight() / 2);
                    arrowLeft = -arrow.outerWidth() / 2;

                    arrow.addClass("w");
                    self.$balloonContainer.addClass("w");
                    break;

                default:
                    balloonTop = targetTop - self.$balloonContainer.outerHeight() - arrow.outerHeight() / 2;
                    balloonLeft = (targetLeft + targetWidth / 2) - (self.$balloonContainer.outerWidth() / 2);
                    arrowTop = self.$balloonContainer.outerHeight() - 1;
                    arrowLeft = (self.$balloonContainer.outerWidth() / 2) - (arrow.outerWidth() / 2);

                    arrow.addClass("s");
                    self.$balloonContainer.addClass("s");
                    break;
            }

            if (balloonLeft < (jQuery("body").offset().left + jQuery(window).scrollLeft())) {

                balloonTop = targetTop + (targetHeight / 2) - self.$balloonContainer.outerHeight() / 2;
                balloonLeft = (targetLeft + targetWidth) + arrow.outerWidth();
                arrowTop = (self.$balloonContainer.outerHeight() / 2 - arrow.outerHeight() / 2);
                arrowLeft = -arrow.outerWidth() / 2;

                self.balloonPos = "right";

                self.$balloonContainer.removeClass("n s e w");
                arrow.removeClass("n s e w");
                arrow.addClass("w");
                self.$balloonContainer.addClass("w");
            }

            if (balloonLeft + self.$balloonContainer.outerWidth() - 50 > jQuery(window).width() + jQuery(window).scrollLeft()) {

                balloonTop = targetTop + (targetHeight / 2) - (self.$balloonContainer.outerHeight() / 2);
                balloonLeft = targetLeft - self.$balloonContainer.outerWidth() - arrow.outerWidth();
                arrowTop = (self.$balloonContainer.outerHeight() / 2 - arrow.outerHeight() / 2);
                arrowLeft = self.$balloonContainer.outerWidth() - 1;
                self.$balloonContainer.removeClass("n s e w");
                arrow.removeClass("n s e w");
                arrow.addClass("e");
                self.$balloonContainer.addClass("e");
                self.balloonPos = "left"
            }

            if (balloonTop < (jQuery("body").offset().top + jQuery(window).scrollTop())) {

                if (self.balloonPos == "left" || self.balloonPos == "right") {
                    var diff = self.$containment.offset().top - balloonTop;
                    balloonTop = balloonTop + diff;
                    arrowTop -= diff;

                    arrowTop = arrowTop < 0 ? 20 : arrowTop;
                }

                if (self.balloonPos == "up") {
                    balloonTop = targetTop + targetHeight + arrow.outerHeight() / 2;
                    balloonLeft = (targetLeft + targetWidth / 2) - (self.$balloonContainer.outerWidth() / 2);
                    arrowTop = -arrow.outerHeight();
                    arrowLeft = self.$balloonContainer.outerWidth() / 2 - arrow.outerWidth() / 2;
                    arrow.removeClass("n s e w");
                    arrow.addClass("n");
                    self.$balloonContainer.removeClass("n s e w");
                    self.$balloonContainer.addClass("n");
                    self.balloonPos = "down"
                }
            }

            if (balloonTop + self.$balloonContainer.outerHeight() - 50 > jQuery(window).height() + jQuery(window).scrollTop()) {

                balloonTop = targetTop - self.$balloonContainer.outerHeight() - arrow.outerHeight() / 2;
                balloonLeft = (targetLeft + targetWidth / 2) - (self.$balloonContainer.outerWidth() / 2);
                arrowTop = self.$balloonContainer.outerHeight();
                arrowLeft = (self.$balloonContainer.outerWidth() / 2) - (arrow.outerWidth() / 2);
                arrow.removeClass("n s e w");
                arrow.addClass("s");
                self.$balloonContainer.removeClass("n s e w");
                self.$balloonContainer.addClass("s");
                self.balloonPos = "up"

            }

            if (balloonLeft < 0) {

                arrowLeft += balloonLeft - 10;
                balloonLeft = 10;
            }

            if (balloonTop < 0) {
                balloonTop = 10;
            }

            self.$balloonContainer.css({ top: balloonTop, left: balloonLeft });
            arrow.css({ top: arrowTop, left: arrowLeft });

            return self.balloonPos;
        },

        getBalloon: function () {
            var $self = this;
            var self = $self[0];
            return self.$balloonContainer;
        },

        getOpener: function () {
            var $self = this;
            var self = $self[0];
            return self.$opener;
        }

    };

    /* Public methods */
    jQuery.fn.showBalloon = jQuery.balloon.show;
    jQuery.fn.hideBalloon = jQuery.balloon.hide;
    jQuery.fn.destroyBalloon = jQuery.balloon.destroy;
    jQuery.fn.setBalloonPosition = jQuery.balloon.setPos;
    jQuery.fn.getBalloon = jQuery.balloon.getBalloon;
    jQuery.fn.getOpener = jQuery.balloon.getOpener;

})(jQuery);


//**************************************************************************************************  jquery/tinyTimers/jquery.tinyTimers.js

/* Timers */
$.tinyTimer = function (options) {
    var tick, tt = this, elem = (tt.options = options).element, ref = new Date(options.from || options.to).getTime(), dir = !!options.from || -1, M = Math, doNothing = function () { };
    tt.interval = setInterval(tick = function () {
        if (!tt.paused) {
            var sec = M.max(M.round((Date.now() - ref) * dir / 1e3), 0), val = {
                S: sec,
                s: sec % 60,
                M: M.floor(sec /= 60),
                H: M.floor(sec /= 60),
                D: M.floor(sec /= 24)
            };
            val.m = val.M % 60, val.h = val.H % 24, val.d = val.D, val.text = (options.format || "%-H{:}%0m:%0s").replace(/%(-?)(0?)([dhms])(\s*)(?:\{(.+?)\})?/gi, options.replacer || function (match, omit, zero, part, space, forms) {
                var v = val[part];
                return (forms = (forms || "").split("|"))[2] = forms[2] || (forms[1] = forms[1] || forms[0]),
                    !v && omit ? "" : (v > 9 ? "" : zero) + v + space + forms[+(1 != v) + (1 != v && (2 > v % 10 || v % 10 > 4) || v > 10 && 20 > v)];
            }), elem ? $(elem).html(val.text) : elem = tt, (options.onTick || doNothing).call(elem, tt.val = val),
                0 > dir && !sec && (clearInterval(tt.interval), (options.onEnd || doNothing).call(elem, val));
        }
    }, 1e3), tick(), tt.pause = function () {
        tt.paused = Date.now();
    }, tt.resume = function () {
        ref -= (tt.paused - Date.now()) * dir, tt.paused = 0;
    }, tt.stop = function () {
        ref = new Date().getTime();
        tick();
        clearInterval(tt.interval);

    }, tt.start = function () {
        tt.paused = 0;
    };
}, $.fn.tinyTimer = function (options) {
    return this.each(function () {
        $(this).data("tinyTimer", new $.tinyTimer($.extend(options, {
            element: $(this)
        })));
    });
};


//**************************************************************************************************  jquery/folio/jquery.folio.js
function Folio(element) {

    element.data("folio", this);
    this.element = element;
    var oldPosition = this.element.css("position");
    if (!oldPosition || (oldPosition != "relative" && oldPosition != "absolute" && oldPosition != "fixed"))
        this.element.css("position", "relative");

    // real dimension on screen
    this.pixelWidth = element.width();
    this.pixelHeight = element.height();

    this.folioCanScroll = true;

    // real position on screen
    if (element.position()) {
        this.pixelLeft = element.position().left;
        this.pixelTop = element.position().top;
    }

    //virtual dimensions
    this.width = this.pixelWidth;  // by default as real
    this.height = this.pixelHeight;
    this.top = 0;
    this.left = 0;

    this.scrollBar; //filled if exists

    this.inPercent = false; // settato a true usa in le posizioni in percentuale invece che assolute

    this.addElement = function (domElement, top, left, width, height) {
        domElement.hide();
        domElement.css("position", "absolute");
        domElement.data("paintable", { top: top, left: left, width: width, height: height });
        this.element.append(domElement);
    };

    this.getPixelHeight = function () {
        return this.height / this.pixelHeight;
    };

    this.getPixelHeightPercent = function () {
        return this.height / 100;
    };
    this.getPixelWidth = function () {
        return this.width / this.pixelWidth;
    };
    this.getPixelWidthPercent = function () {
        return this.width / 100;
    };

    this.getScaleHeight = function () {
        return this.pixelHeight / this.height;
    };
    this.getScaleHeightPercent = function () {
        return 100 / this.height;
    };

    this.getScaleWidth = function (forcePixel) {
        return this.pixelWidth / this.width;
    };
    this.getScaleWidthPercent = function () {
        return 100 / this.width;
    };

    this.scrollTop = function (topInVirtualSize) {
        var chiScroll = this.scrollBar ? this.scrollBar : this.element;
        chiScroll.scrollTop((this.pixelHeight / this.height) * topInVirtualSize);
    };
    this.scrollLeft = function (leftInVirtualSize) {
        this.element.get(0).scrollLeft = (this.pixelWidth / this.width) * leftInVirtualSize;
    };

    this.getVirtualLeft = function (leftInPixel) {
        return this.left + leftInPixel * this.getPixelWidth();
    };

    this.getVirtualTop = function (topInPixel) {
        return this.top + topInPixel * this.getPixelHeight();
    };


    this.redraw = function () {

        var scaleFactorW;
        var scaleFactorH;
        var unit = "";

        //refresh size
        this.pixelWidth = element.width();
        this.pixelHeight = element.height();

        if (this.inPercent) {
            unit = "%";
            scaleFactorW = 100 / this.width;
            scaleFactorH = 100 / this.height;

        } else {
            unit = "px";
            // compute scale factors
            scaleFactorW = this.pixelWidth / this.width;
            scaleFactorH = this.pixelHeight / this.height;
        }

        var folio = this;
        this.element.children().each(function () {

            var el = $(this);
            var pasu = el.data("paintable");
            if (pasu) {
                var top = ((pasu.top - folio.top) * scaleFactorH);
                var left = ((pasu.left - folio.left) * scaleFactorW);
                var widht = (pasu.width * scaleFactorW);
                var height = (pasu.height * scaleFactorH);

                el.css({ top: top + unit, left: left + unit, width: widht + unit, height: height + unit });
                el.show();
            }
        });
    };

    this.createScrollbar = function (container) {
        var self = this;
        var scrollBar = $("<div/>").addClass("folio_scrollbar");
        this.scrollBar = scrollBar;

        var scrollContent = $("<div>").css({ height: this.element.get(0).scrollHeight, position: "relative", width: "100%" }).addClass("folio_scrollbar_content");
        scrollBar.append(scrollContent);

        container.append(scrollBar);
        scrollBar.on("scroll", function () {
            var scrolled = $(this).scrollTop();
            self.element.scrollTop(scrolled);
        });

        function setScrollHeight(el) {
            var spanEventContainerH = $("#spanEvents").outerHeight() + 40;
            scrollContent.css({ height: el.element.get(0).scrollHeight + spanEventContainerH })
        }

        self.element.on('mousewheel MozMousePixelScroll', function (event) {
            if (!self.folioCanScroll)
                return;

            setScrollHeight(self);
            event.preventDefault();
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var scrollTo = scrollBar.scrollTop() - (delta / 4);
            scrollBar.scrollTop(scrollTo);
            return false;
        })
    };

    this.resize = function (params) {
        if (params)
            this.element.css(params);
        this.pixelWidth = element.width();
        this.pixelHeight = element.height();

        if (this.scrollBar)
            this.scrollBar.find("div").css({ height: this.element.get(0).scrollHeight });
    }
}


//**************************************************************************************************  ../layout/container/partContainer.js
jQuery.fn.containerBuilder = function () {
    return this.each(function () {
        var container = $(this);

        var id = container.prop("id");
        var sendDataToServer = container.is("[saveStatus]");
        var suffix = container.attr("cmdSuffix");
        var status = container.attr("status");
        var containment = container.attr("containment");

        if (container.hasClass("draggable")) {
            container.bind("mousedown", function () {
                container.bringContainerToFront(".container");
            });

            var params = {
                handle: ".containerTitle",
                stack: ".container.draggable",
                start: function () { $("body").unselectable(); },
                stop: function (event, ui) {
                    $("body").clearUnselectable();
                    if (sendDataToServer) {
                        executeCommand("MOVE" + suffix, "DOM_ID=" + id + "&X=" + parseInt(container.position().left) + "&Y=" + parseInt(container.position().top));
                    }
                    params.originalTop = container.position().top;
                    params.originalLeft = container.position().left;
                },
                originalTop: container.position().top,
                originalLeft: container.position().left
            };

            function kipItVisible() {

                if (typeof containment == "undefined" || typeof containment == "object")
                    return;

                container.css({ left: params.originalLeft, top: params.originalTop });

                if (container.position().left + container.outerWidth() > $(containment).width())
                    container.css({ left: $(window).width() - container.outerWidth() - 20 });


                if (container.position().top + container.outerHeight() > $(containment).height())
                    container.css({ top: $(window).height() - container.outerHeight() - 20 });


                if (container.position().left <= 0)
                    container.css({ left: 0 });


                if (container.position().top <= 0)
                    container.css({ top: 0 });
            };

            kipItVisible();

            $(window).on("resize.container", function () {
                kipItVisible();
            });


            if (!containment) {
                var dH = ($(document).height() - (container.outerHeight() + 10));
                var dW = ($(document).width() - (container.outerWidth() + 10));
                containment = [10, 10, dW, dH]; //[x1, y1, x2, y2]
            }

            params.containment = containment;
            container.draggable(params);
        }

        if (container.hasClass("resizable")) {

            if (!container.is("[status=ICONIZED]")) {
                var newH = container.outerHeight() - container.find(".containerTitle:first").outerHeight() - 5;
                container.css("height", container.outerHeight());
                container.find(".containerBody:first").css("height", newH);
            }

            container.resizable({
                containment: "parent",
                start: function () { $("body").unselectable(); },
                stop: function () {
                    $("body").clearUnselectable();
                    if (sendDataToServer) {
                        executeCommand("RESIZE" + suffix, "DOM_ID=" + id + "&W=" + container.outerWidth() + "&H=" + container.outerHeight());
                    }

                    var containment = container.attr("containment");
                    if (!containment) {
                        var dH = ($(document).height() - (container.outerHeight() + 10));
                        var dW = ($(document).width() - (container.outerWidth() + 10));
                        containment = [10, 10, dW, dH]; //[x1, y1, x2, y2]
                    }
                    container.draggable('option', 'containment', containment);
                },
                resize: function (e, ui) {
                    var container = $(this);

                    var newH = container.outerHeight() - container.find(".containerTitle:first").outerHeight() - 5;
                    container.find(".containerBody:first").css({ height: newH });
                }
            });
        }

        if (container.hasClass("centeredOnScreen")) {
            container.centerOnScreen();
            if (status != "HIDDEN")
                container.show();
        }

        if (container.hasClass("collapsable")) {
            // everything is done by css
        }

        if (container.hasClass("closeable")) {
            container.find(".stsHide").show();
        }

        if (container.hasClass("iconizable")) {
            container.find(".stsIconize").show();

            if (status == "ICONIZED") {
                container.one("click", function () {
                    container.trigger("restore");
                });
            }
        }

        //events on container

        container.bind("iconize", function (e) {
            e.stopPropagation();
            container.attr("status", "ICONIZED");


            executeCommand("ICONIZE" + suffix, "DOM_ID=" + id);

            setTimeout(function () {
                container.one("click", function () {
                    container.trigger("restore");
                });

            }, 10);

        }).bind("hide", function (e) {
            e.stopPropagation();
            container.hide();
            container.trigger("containerHidden");
            container.attr("status", "HIDDEN");
            if (sendDataToServer)
                executeCommand("HIDE" + suffix, "DOM_ID=" + id);

        }).bind("show", function (e) {
            e.stopPropagation();
            container.show();
            container.attr("status", "DEFAULT");
            if (sendDataToServer)
                executeCommand("SHOW" + suffix, "DOM_ID=" + id);

        }).bind("collapse", function (e) {
            e.stopPropagation();
            container.attr("status", "COLLAPSED");
            if (sendDataToServer)
                executeCommand("COLLAPSE" + suffix, "DOM_ID=" + id);

        }).bind("toggleCollapse", function (e) {
            e.stopPropagation();
            if (container.is("[status=COLLAPSED]"))
                container.trigger("restore");
            else
                container.trigger("collapse");

        }).bind("restore", function (e) {
            e.stopPropagation();
            container.attr("status", "DEFAULT");
            if (container.hasClass("resizable")) {
                var newH = container.outerHeight() - container.find(".containerTitle:first").outerHeight() - 5;
                container.css("height", container.outerHeight());
                container.find(".containerBody:first").css("height", newH);
            }

            if (sendDataToServer)
                executeCommand("RESTORE" + suffix, "DOM_ID=" + id);

        }).bind("toggle", function (e) {
            e.stopPropagation();
            if ($(this).attr("status") == "HIDDEN")
                container.trigger("show");
            else
                container.trigger("hide");
        }).bind("toggleAnimate", function (e) {
            e.stopPropagation();
            if ($(this).attr("status") == "HIDDEN")
                container.trigger("slideDown");
            else
                container.trigger("slideUp");
        });

    });
};

$.fn.bringContainerToFront = function (selector) {
    //return $(this);

    return this.each(function () {
        var zi = 10;
        var elements = selector ? $(selector) : $("*");
        elements.each(function () {
            if ($(this).css("position") != "static") {
                var cur = parseInt($(this).css('zIndex'));
                zi = cur > zi ? parseInt($(this).css('zIndex')) : zi;
            }
        });
        $(this).css('z-index', zi += 10);

        if (!$(this).is(".alwaysOnTop"))
            $(".alwaysOnTop").bringContainerToFront();
    })

};



//**************************************************************************************************  ../layout/tabSet/partTabSet.js

function clickTab(tabId) {
    //si toglie il selected a tutti a si rimette a lui
    $(".tabSelected:not(#" + tabId + ")").removeClass("tabSelected");
    var tab = $("#" + tabId);
    tab.addClass("tabSelected");

    //si setta l'hidden value
    $(":input[name=" + tab.attr("tabset") + "]").val(tabId);

    //si nascondono tutti i tabBox tranne e si visualizza lui
    $(".tabBox:not([tabId=" + tabId + "])").hide();
    $(".tabBox[tabId=" + tabId + "]").show();

    $(window).resize();
}

$(document).ready(function () {
    // show tabset with errors
    var errSpan = $("span.errImg");
    if (errSpan.length > 0) {
        var theTabDiv = errSpan.eq(0).closest(".tabBox");
        if (theTabDiv.length > 0)
            clickTab(theTabDiv.attr("tabId"));
    }
});


//**************************************************************************************************  ../layout/hint/partHint.js
function showBaloon(target, type, message) {
    return target.showBalloon(null, {
        balloon: message,
        oncursor: false,
        bgcolor: "#2f97c6",
        bordercolor: "#ffffff",
        textcolor: "#fff",
        addoverlay: true,
        type: type
    });
}

$.fn.hintBaloon = function (message, type, width, height, createSkip) {
    var ret = [];
    return this.each(function () {
        var target = $(this);
        var msg = $("<div/>").html(message).css({ padding: "15px 15px 40px", "max-width": width });

        if (createSkip) {
            var skip = $("<div>").html(i18n.HINT_SKIP).addClass('hintSkip');
            msg.append(skip);
            skip.click(function (ev) {
                ev.stopPropagation();
                skipHint(target, type);
            });
        }
        var hint = showBaloon(target, type, msg);
    });
};


function skipHint(target, type) {
    //console.debug("skipHint")
    var type = type;
    var req = { CM: "SKIPHINT", type: type };
    $.getJSON(contextPath + "/applications/teamwork/resource/resourceAjaxController.jsp", req);
    target.hideBalloon();
}


//**************************************************************************************************  ../layout/loadSaveFilter/partLoadSaveFilter.js
function lsfOpenEditor(el) {
    var ndo = createModalPopup(400, 220);
    var div = $("<div>").addClass("lsfEditBox filterName").attr("lsfId", el.attr("lsfId"));
    div.append("<h1>" + i18n.WANT_TO_SAVE_FILTER + "</h1><br>");
    div.append("<label for='NEW_FILTER_NAME'>" + i18n.NEW_FILTER_NAME + "</label><br>");
    div.append("<input type='text' id='NEW_FILTER_NAME' name='NEW_FILTER_NAME' class='formElements' style='width:100%;margin-bottom:10px'><br>");
    div.append("<span onclick='lsfSave($(this));return false;' class='button first'>" + i18n.SAVE + "</span>");
    ndo.append(div);

    var filterName = "";
    var ft = $(".filterTitle");
    if (ft.size() > 0)
        filterName = ft.text().trim();
    div.find(":text").val(filterName).focus();
}

function lsfClick(el) {
    $("#FLNMSEL").val('yes');
    $("#FLNM").val(el.text());
    $("#" + el.closest(".customSavedFilters").attr("formId")).submit();
}

function lsfSave(el) {
    var lsfEdit = el.closest("[lsfId]");

    var lsf = $("#" + lsfEdit.attr("lsfId"));
    var form = $("#" + lsf.attr("formId"));

    var input = lsfEdit.find(":text:first");

    if (input.val() != "") {
        $("#FLNM").val(input.val());
        var data = {};
        form.find(":input[name]:enabled").each(function () {
            var inp = $(this);
            if (inp.is(":radio")) {
                if (inp.is(":checked"))
                    data[inp.prop("name")] = inp.val();
            } else if (inp.val() && inp.val() != "" && (inp.prop("name").startsWith("OB_") || !inp.prop("name").startsWith("_"))) {
                data[inp.prop("name")] = inp.val();
            }
        });

        data.FLNM = input.val();
        data.CM = "SVFILTER";
        data.cat = lsf.attr("category");

        $.getJSON(contextPath + "/commons/layout/loadSaveFilter/lSFAjaxController.jsp", data, function (response) {
            jsonResponseHandling(response);
            if (response.ok) {

                var persistentSearch = response.persistentSearch;

                //openSideBar to show where filter is
                if ($.rightPanel.hamburger)
                    $.rightPanel.open();

                var message = "";
                if (response.filterUpdated) {

                    setTimeout(function () {
                        lsf.find("[filterName='" + persistentSearch.filterName + "'] .button").effect("highlight", { color: "#F9EFC5" }, 3000);
                    }, 600);

                    message = i18n.FILTER_UPDATED;

                } else {
                    var newFilterBtn = lsfCreateButton(persistentSearch);
                    lsf.prepend(newFilterBtn);

                    setTimeout(function () {
                        newFilterBtn.effect("highlight", { color: "rgba(249, 239, 197, 0.8)" }, 3000);
                    }, 600);
                    message = i18n.FILTER_SAVED;
                }
                input.val("");
                closeBlackPopup();

                showFeedbackMessage("OK", message);
            }
        });
    }

}

function lsfDelete(el) {
    //console.debug("lsfDelete",el);
    var lsf = el.closest(".customSavedFilters");
    var btn = el.closest("[filterName]");

    var data = {
        CM: "RMFILTER",
        cat: lsf.attr("category"),
        FLNM: btn.attr("filterName")
    };

    $.getJSON(contextPath + "/commons/layout/loadSaveFilter/lSFAjaxController.jsp", data, function (response) {
        jsonResponseHandling(response);
        if (response.ok) {
            btn.fadeOut(300, function () {
                btn.remove();
            });
            $("#FLNM").val("");
            $("#FLNMSEL").val("");
        }
    });
}

function lsfCreateButton(data) {
    //console.debug("lsfCreateButton",data)
    var spanExt = $("<span>").addClass("customFilterElement").attr("filterName", data.name);
    var spanBtn = $("<span>").addClass("button textual noprint" + (data.selected ? " focused" : "")).click(function () { lsfClick($(this)) }).append(data.name);
    var spanIco = $("<span>").addClass("teamworkIcon delete noprint" + (data.selected ? " focused" : "")).click(function () {
        $(this).confirm(function () { lsfDelete($(this)) }, i18n.FLD_CONFIRM_DELETE);
        return false;
    }).attr("title", i18n.DELETE).append("d");

    spanExt.append(spanBtn).append(spanIco);
    return spanExt;

}


//**************************************************************************************************  ../layout/designer/partDesignerDetail.js
function addDetailLine(href, tableId, detailName) {
    //console.debug("addDetailLine",href, tableId, detailName);
    var table = $("#" + tableId);
    var id = parseInt(table.attr('maxRow')) + 1;
    table.attr('maxRow', id);
    var newHref = encodeURI(href) + '&detailName=' + encodeURIComponent(detailName) + '&rowLine=' + encodeURIComponent(id);

    $.get(newHref, function (ret) {
        table.append(ret);
    });
}

//**************************************************************************************************  ../scheduler/partScheduleComposer.js
$(function () {
    $(".schedComposer").each(function () {
        var schedComposer = $(this);
        var inp = schedComposer.find(".scMainField");
        if (inp.val()) {
            var json;
            eval("json=" + inp.val());
            fillFromJSON(schedComposer, json);
        } else {
            schedComposer.find("[schedType=period]").click();
        }
        inp.updateOldValue();
    });
});


function changeSchedType(el) {
    var type = el.attr("schedType");
    var schedComp = el.closest(".schedComposer");
    schedComp.find("[schedType]").removeClass("focused");
    el.addClass("focused");
    changePanel(schedComp, type);
    jsonifySchedule(el);
}


function changePanel(schedComp, type) {
    schedComp.attr("currType", type);

    //by default hide all recurrencies and the end date
    schedComp.find("[recurr],#sc_endDate").hide();
    schedComp.find("#sc_fullDay").show();

    //period
    if (type == "period") {
        schedComp.find("#sc_endDate").show();

        //minute
    } else if (type == "minute") {
        schedComp.find("#sc_fullDay").hide();
        schedComp.find("[recurr=minute]").show();

        //daily
    } else if (type == "daily") {
        schedComp.find("[recurr=daily]").show();

        //weekly
    } else if (type == "weekly") {
        schedComp.find("[recurr=weekly]").show();

        //monthly
    } else if (type == "monthly") {
        schedComp.find("[recurr=monthly]").show();

        //yearly
    } else if (type == "yearly") {
        schedComp.find("[recurr=yearly]").show();
    }

}



function jsonifySchedule(el) {
    //console.debug("jsonifySchedule");
    var schedComposer = el.closest(".schedComposer");
    var type = schedComposer.attr("currType");
    var fields = schedComposer.find(".sc_period,[recurr=" + type + "]").getScheduleFields();
    var fieldLeftName = el.prop("name");
    var period = setStartEndDateHourMinute(fieldLeftName, fields);
    var json = {
        type: type,
        startMillis: period.startMillis,
        duration: period.duration,
        endMillis: period.endMillis
    };

    if (type != "period") {

        var freq = parseInt(fields.freq.val());
        freq = freq > 0 ? freq : 1;
        json.freq = freq;
        fields.freq.val(freq);

        var repeat = parseInt(fields.repeat.val());
        repeat = repeat >= 0 ? repeat : 1;
        json.repeat = repeat;
        fields.repeat.val(repeat);

        if (type == "minute") {
            json.onlyWorkingDays = fields.onlyWorkingDays.is(":checked");

        } else if (type == "daily") {
            json.onlyWorkingDays = fields.onlyWorkingDays.is(":checked");

        } else if (type == "weekly") {
            var days = [];
            schedComposer.find(":checkbox[day]:checked").each(function () {
                days.push($(this).attr("day"));
            });
            json.days = days;

        } else if (type == "monthly") {
            if (fields.recurType && fields.recurType.val() == 2) {
                json.weekOfMonth = fields.weekOfMonth.val();
                json.dayOfWeek = fields.dayOfWeek.val();
            }
            schedComposer.find(".monthlyDate").html(new Date(period.startMillis).format("dd"));

        } else if (type == "yearly") {
            if (fields.recurType && fields.recurType.val() == 2) {
                json.weekOfMonth = fields.weekOfMonth.val();
                json.dayOfWeek = fields.dayOfWeek.val();
            }
            schedComposer.find(".yearlyDate1").html(new Date(period.startMillis).format("dd MMMM"));
            schedComposer.find(".yearlyDate2").html(new Date(period.startMillis).format("MMMM"));
        }
        //} else {
        //  json.endMillis=period.endMillis;

    }
    schedComposer.find(".scMainField").val(JSON.stringify(json));
}


function setStartEndDateHourMinute(fieldLeftName, fields) {
    var startDate = fields.startDate.val();
    startDate = Date.parseString(startDate);
    startDate = startDate ? startDate : new Date().clearTime();

    var startTime = fields.startHour.val();
    startTime = millisFromString(startTime);
    startTime = typeof (startTime) == "number" ? startTime : millisFromString(new Date().format("HH:mm"));


    var endDate;
    if (fields.endDate)
        endDate = fields.endDate.val();
    endDate = Date.parseString(endDate);
    endDate = endDate ? endDate : new Date().clearTime();

    var endTime;
    if (fields.endHour)
        endTime = fields.endHour.val();
    endTime = millisFromString(endTime);
    endTime = typeof (endTime) == "number" ? endTime : millisFromString(new Date().format("HH:mm"));

    var dur = fields.duration.val();
    dur = dur ? millisFromString(dur) : 30 * 60000;
    dur = dur <= 60000 ? 60000 : dur;

    var startMillis = startDate.getTime() + startTime;
    var endMillis = endDate.getTime() + endTime;

    if (fieldLeftName) {
        if (fieldLeftName.indexOf("start") > -1) {
            endMillis = startMillis + dur;


        } else if (fieldLeftName.indexOf("end") > -1) {
            dur = endMillis - startMillis;
            if (dur < 60000) {
                dur = 60000;
                startMillis = endMillis - 60000;
            }

        } else if (fieldLeftName.indexOf("duration") > -1) {
            endMillis = startMillis + dur;
        }
    }

    startDate = new Date(startMillis);
    endDate = new Date(endMillis);

    fields.startDate.val(startDate.format());
    fields.startHour.val(startDate.format("HH:mm"));

    fields.duration.val(getMillisInHoursMinutes(dur));

    if (fields.endDate)
        fields.endDate.val(endDate.format());
    if (fields.endHour)
        fields.endHour.val(endDate.format("HH:mm"));

    return { startMillis: startMillis, endMillis: endMillis, duration: dur };
}


function fillFromJSON(schedComposer, json) {
    //console.debug("fillFromJSON",json);
    changePanel(schedComposer, json.type);

    var start = new Date(json.startMillis);
    var end = new Date(json.endMillis);

    var fields = schedComposer.find(".sc_period,[recurr=\"" + json.type + "\"]").getScheduleFields();
    fields.startDate.val(start.format());
    fields.startHour.val(start.format("HH:mm"));
    if (fields.endDate)
        fields.endDate.val(end.format());
    if (fields.endHour)
        fields.endHour.val(end.format("HH:mm"));
    fields.duration.val(getMillisInHoursMinutes(json.duration));
    if (fields.freq && json.freq != undefined)
        fields.freq.val(json.freq);
    if (fields.repeat && json.repeat != undefined)
        fields.repeat.val(json.repeat);
    if (fields.onlyWorkingDays && json.onlyWorkingDays)
        fields.onlyWorkingDays.prop("checked", json.onlyWorkingDays);
    if (json.days) {
        for (var i = 0; i < json.days.length; i++) {
            var day = json.days[i];
            fields["day" + day].prop("checked", true);
        }
    }

    if (json.dayOfWeek) {
        fields.dayOfWeek.val(json.dayOfWeek);
    }

    schedComposer.find("[name=recurType][value=1]:visible").prop("checked", true);
    if (json.weekOfMonth) {
        fields.weekOfMonth.val(json.weekOfMonth);
        schedComposer.find("[name=recurType][value=2]:visible").prop("checked", true);
    }
    schedComposer.find("[schedType=" + json.type + "]").click();


}


$.fn.getScheduleFields = function () {
    var fields = {};
    this.find(":input").each(function () {
        var el = $(this);
        if (el.prop("name")) {
            if (el.is(":radio")) {
                if (el.is(":checked"))
                    fields[el.prop("name")] = el;
            } else
                fields[el.prop("name")] = el;
        }
    });
    return fields;
};




function setFullDay(el) {
    var periodPane = el.closest(".sc_period");
    var fields = periodPane.getScheduleFields();
    fields.startHour.val('00:00');
    fields.endHour.val('23:59');
    jsonifySchedule(fields.endDate);
}


//**************************************************************************************************  ../../applications/teamwork/document/partUrlFileStorage.js
function openFileNav(tfId, docId) {
    //console.debug("openFileNav", tfId, docId, location)
    //remove the error
    $('#' + tfId + 'error').remove();

    var url = contextPath + "/applications/teamwork/document/popUpFileStorage.jsp?POP=yes";
    url += "&OPENER_FIELD_ID=" + tfId;

    var fieldContent = $('#' + tfId).val();
    if (fieldContent) {

        var string = fieldContent.substring(2);
        var valori = string.split(":");
        if (valori != null && valori.length > 0) {
            var fileStorageId = valori[0];
            url += "&OBJID=" + valori[0];
            url += "&PATH=" + valori[1];
        }

    }
    openBlackPopup(url, $(window).width() - 100, $(window).height() - 50);

}


//**************************************************************************************************  ../../applications/teamwork/parts/woklog/partWorklogEditor.js.jsp




/**
 *
 * @param el che scatena l'azione
 * @param request ={
*   wlId:worklog_id_se_in_edit,
*   assId:assignment_id_se_in_add,
*   text_testo_action_precompilato,
*   issueId:issue_Id_se_ce,
*   title:title_da mettere_all_editor,
*   millis:millis data del giorno su cui si inserisce
* }
 * @param callback
 * @returns {*|jQuery|HTMLElement}
 */
function createWorklogEditor(el, request, callback) {
    //console.debug("createWorklogEditor", el, request,callback);

    if (hideWorklogEditorIfYouCan()) {

        var isInIframe = isIframe();
        var wlBox = $("<div id='insertWL' class='offScreen insertWLBox'></div>");

        if (isInIframe)
            wlBox.addClass("inIframe");

        wlBox.data("originElement", el);

        wlBox.load(contextPath + "/applications/teamwork/task/worklog/partWorklogEditor.jsp", request, function (html) {

            bindWorklogEvents(wlBox);

            if (request.date)
                wlBox.find("#WORKLOG_INSERTIONDATE").val(request.date);
            else if (request.millis)
                wlBox.find("#WORKLOG_INSERTIONDATE").val(new Date(request.millis).format()); //attenzione questo millis deve essere nel TZ del server
            else
                wlBox.find("#wlDateInput").show();



            if (request.title)
                wlBox.find("#wlEditorSubTitle").html(request.title);
            else
                wlBox.find("#wlEditorSubTitle").remove();

            if (request.text)
                wlBox.find("#WORKLOG_ACTION").val(request.text);

            //wlBox.css({opacity: 0, marginTop: -500}).show();

            wlBox.find(":input").updateOldValue();

            //si appende sul body
            $("body").append(wlBox);
            if (typeof (callback) == "function")
                callback(wlBox);

        });

        return wlBox;
    }

}


function openWorklogEditorCloseToElement(el, request, callback) {
    //console.debug("openWorklogEditorCloseToElement", el, request, callback)

    createWorklogEditor(el, request, function (box) {

        box.find("#wlEditorSubTitle,#wlEditorTitle").remove();

        el.showBalloon(null, {
            balloon: box.removeClass("offScreen").css({ padding: "10px 15px" }),
            oncursor: false,
            bgcolor: "#FFF",
            bordercolor: "#CCC",
            textcolor: "#000",
            addoverlay: false,
            storeData: false,
            autoHide: false,
            addclose: true
        });

        if (typeof (callback) == "function")
            callback(box);
        else
            $("#WORKLOG_DURATION").focus();

    });
}

function openWorklogEditorPopup(el, request, callback) {

    var wlBox = createWorklogEditor(el, request, function (box) {
        createModalPopup(box.width() + 60, box.height()).append(box).parent().off("close"); // si rumuove l'evento close sul background
        box.removeClass("offScreen");

        if (typeof (callback) == "function")
            callback(box);
        else
            $("#WORKLOG_DURATION").focus();

    });
}

function hideWorklogEditorIfYouCan() {

    if (!$("#insertWL :input[oldValue]").isValueChanged() || confirm("你将失去你的变化！继续吗？")) {
        var box = $("#insertWL");
        if (box.parent().is(".bwinPopupd"))
            getBlackPopup().trigger("destroy");
        else
            $(".mbBalloonOpener").destroyBalloon();

        $(document).off("click.wleditor");
        $("#floatWindow").off("keydown");
        return true;
    } else {
        return false;
    }
}

function _deleteWorklog(el) {
    var wlBox = $("#insertWL");
    if (wlBox.data("originElement")) {
        removeWorklog(wlBox.data("originElement"), el.closestAttr("wlId"), null, true)
    }
    hideWorklogEditorIfYouCan()
}

function _saveWorklog(el) {
    if ($("#insertWL :input").isFullfilled()) {
        el.disableForAWhile(1000); // per evitare doppi click
        var request = {
            CM: "SV",
            wlId: el.closestAttr("wlId"),
            assId: el.closestAttr("assId"),
            issueId: el.closestAttr("issueId")
        };

        var box = $("#insertWL");
        box.fillJsonWithInputValues(request);

        showSavingMessage();
        $.getJSON(contextPath + "/worklog/worklogAjax", request, function (response) {
            jsonResponseHandling(response);
            if (response.ok) {
                var wlBox = $("#insertWL");
                wlBox.fadeOut(200);
                if (wlBox.data("originElement"))
                    wlBox.data("originElement").trigger("worklogSaved", [response]);

                $("#insertWL :input").updateOldValue();
                hideWorklogEditorIfYouCan();

                //svuota i campi per evitare doppi wl
                wlBox.find(":input").val("");

                $("body").trigger("worklogEvent", [
                    { type: "save", response: response }
                ]);
            }
            hideSavingMessage();
        });
    }
}

function bindWorklogEvents(wlBox) {
    //console.debug("bindWorklogEvents");

    wlBox.initFields();

    //bind click per chiudere finestra
    $(document).off("mousedown.wleditor").on("mousedown.wleditor", function (e) {
        if ($(e.target).hasClass("wlDayCell") || $(e.target).closest(".calBox").length > 0)
            return false;
        if ($(e.target).closest("#insertWL").size() <= 0) {
            //console.debug("mousedown.wleditor",e.target)
            hideWorklogEditorIfYouCan();
        }
    });



    wlBox.find(":input").on("keydown", function (e) {
        var inp = $(this);
        var keyCode = e.keyCode || e.which;

        if (keyCode == 13)
            if (!inp.is("#WORKLOG_ACTION") || e.ctrlKey) {
                _saveWorklog($(this));
            }

    });
}





//**************************************************************************************************  ../../applications/teamwork/parts/woklog/financial/expenseEditor.js.jsp


/**
*
* @param request {assId:123,costId:23,date: new Date()}
 */
function openExpenseEditorPopup(el, request, callback) {

    if (!request.assId)
        return;

    var url = contextPath + "/applications/teamwork/task/financial/expenseEditor.jsp?";

    url += "&assId=" + request.assId;


    if (!request.costId && !(request.date && typeof (date) == "object")) {
        request.date = new Date();
    }

    if (request.date)
        url += "&creationDate=" + request.date.format();

    if (request.costId)
        url += "&costId=" + request.costId;


    openBlackPopup(url, 500, 500, callback);
}




//**************************************************************************************************  ON DOCUMENT LOAD DESKTOP
var isOSX = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

$(function () {

    if (isOSX)
        $("body").addClass("isOSX");

    $.balloon.init();

    $(".linkEnabled").activateTeamworkLinks(true).emoticonize();
    $(".rightColumnInner").initRightPanel();

    $("#messageListPlace").on("scroll", function (e) {
        if ($(this).scrollTop() + $(this).height() > this.scrollHeight - 200)
            $(this).find(".loadMore .button").click();
        e.stopPropagation();
    });

    /*  Manage ButtonBar fixed*/
    $.buttonBar.init();
    /*  Manage THEAD and TFOOT fixed*/
    $.tableHF.init();

    if ($(".bottomBar").length) {
        $("body").css({ paddingBottom: $(".bottomBar").outerHeight() });
    }

    //Prevent drop file on pages by default
    $("body").off("dragover").on("dragover", function (e) {
        e.originalEvent.dataTransfer.dropEffect = 'none';
        e.preventDefault();
        return false;
    }).on("drop", function (e) {
        e.preventDefault();
        return false;
    });

    $(window).resize(function () {

        $("body").css({ minHeight: $(window).height() });
        var sb = $(".scrollingBox");

        if (sb.length) {
            //sb.height($(window).outerHeight()-sb.offset().top - 40).width($(window).outerWidth()-($("body").is(".pinned")?240:10)-sb.offset().left);
            sb.height($(window).outerHeight() - sb.offset().top - 40).width(0).width($(".mainColumn").width());
            $("body").css({ overflowY: "hidden" })
        }

        if ($("#board").length)
            $("#board").height($(window).height() - $("#board").position().top - 25);

        if ($(".hScrollingBox").length) {
            $(".overflowActive").remove();
            $(".hScrollingBox").children().eq(0).css({ paddingRight: 0 });
            if ($(".hScrollingBox").children().width() > $(".hScrollingBox").width()) {
                var overflowActive = $("<div/>").addClass("overflowActive");
                overflowActiveWidth = 30;
                $(".hScrollingBox").children().eq(0).css({ paddingRight: overflowActiveWidth });
                overflowActive.css({
                    width: overflowActiveWidth, height: $(".hScrollingBox").outerHeight(), top: $(".hScrollingBox").offset().top,
                    left: $(".hScrollingBox").outerWidth() + $(".hScrollingBox").offset().left - overflowActiveWidth
                });
                $(".hScrollingBox").before(overflowActive);
            }
        }

    }).resize();

});







