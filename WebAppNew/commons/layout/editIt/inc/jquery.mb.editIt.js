/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        jquery.mb.components

        file: jquery.mb.editIt.src.js
        last modified: 12/26/18 10:51 PM
        Version:  0.1.28
        Build:  4009

        Open Lab s.r.l., Florence - Italy
        email:  matbicoc@gmail.com
        blog: 	http://pupunzi.open-lab.com
        site: 	http://pupunzi.com
        http://open-lab.com

        Licences: MIT, GPL
        http://www.opensource.org/licenses/mit-license.php
        http://www.gnu.org/licenses/gpl.html

        Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

/**
 * @fileOverview
 *
 * <h2>editIt</h2>
 *  <br>
 * A simple WYSIWYG editor for HTML contenteditable elements.<br>
 * <br>
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands<br>
 * <br>
 * built in commands:<br>
 * blockquote, bold, createLink, h1, h2, h3, h4, indent, insertOrderedList, insertUnorderedList, italic, justifyCenter, justifyFull, justifyLeft, justifyRight, outdent, p, paragraph, redo, removeFormat, strikeThrough, underline, undo, unlink *
 * <br>
 * Available events:<br>
 * editIt-apply, editIt-mouseup, editIt-mouseover, editIt-focus, editIt-blur, editIt-keyup, editIt-create-mainButtonBar, editIt-preview, editIt-remove *
 * <br>
 * <br>
 * @version 0.1.28
 */

(function($, d) {

	/**
	 * @namespace
	 *
	 *
	 */
	$.editIt = {

		author: "Matteo Bicocchi (Pupunzi)",
		version: "0.1.28",
		build: "4009",

		/**
		 * @namespace
		 * Defaults options:
		 *
		 * @attribute: textareaName
		 * this is the name of the textarea where the editor code is stored.
		 *
		 * @attribute: pasteAs
		 * When you paste content from other sources you can choose between three behavior:
		 *
		 *        1. cleanHTML: editIt will cleanup the source code preserving the HTML tags;
		 *        2. text: editIt will paste the source code as simple text;
		 *        3. HTML: editIt will paste all the sourcecode as it is.
		 *
		 * @attribute: blockImagesOnPaste
		 * If this parameter is set to true all the images coming fom a paste action are removed.
		 * default: true
		 *
		 * @attribute: enablePreview
		 * This will add a button on the top of the editors container to open the preview.
		 *
		 * @attribute: enableSourceMode
		 * This will add a button on the top of the editors container to open the source window.
		 *
		 * @attribute: toolBar
		 * define the default toolbar to be used on the editors.
		 *
		 * @attribute: styleWithCSS
		 * define if the elements should be rendered using CSS style or HTML tags.
		 *
		 * @attribute: spellCheck
		 * define if the browser spellCheck should be enabled.
		 *
		 * @attribute: toolbarIsOnTop
		 * define if the main toolbar should be on the top or should compare only on selected text proximity.
		 *
		 * @attribute: toolbarIsAlwaysVisible
		 * define if the main toolbar should be always visible (only if toolbarIsOnTop).
		 *
		 * @attribute: activateOnClick
		 * define if the editIt is activated when the editor is clicked.
		 *
		 * @attribute: lang
		 * This is the forced language used by the editor.
		 *
		 * @attribute: placeHolderText
		 * This is the text placeholder if the editor is empty.
		 *
		 * @attribute: required
		 * in order to block submit if empty.
		 *
		 * @attribute: toolbarAnimationTime
		 * animation time for the tool bar.
		 *
		 * @attribute: preserveOldValue
		 * in order to alert when leaving.
		 *
		 */

		debug: false,

		defaults: {
			textareaName: null,
			pasteAs: "cleanHTML", // "cleanHTML", "text", "HTML", "none"
			blockImagesOnPaste: true,
			styleWithCSS: false,
			spellCheck: false,

			toolBar: "default",
			toolBarIcon: true,
			toolbarIsOnTop: true,
			toolbarIsAlwaysVisible: false,
			toolbarAnimationTime: 250,

			activateOnClick: false,
			required: false,
      preserveOldValue: false,
			lang: null, //null //"it-IT" //fr-FR
			placeHolderText: "Write some text here" // <span>Hello <strong>words</strong>!</span>
		},

		focusedEditor: null,

		/**
		 * Initialize editIt plugin.
		 *
		 * @method init
		 * @param opt (object) The options to be overwritten
		 * @return CallExpression
		 */
		init: function(opt) {
			$(window).off("blur.editIt").on("blur.editIt", function() {
				if($.editIt.actualEditorContainer) {
					$($.editIt.actualEditorContainer).blur();
				}
			});

			return this.each(function() {

				var self = this;
				var $self = $(self);
				self.id = self.id || "EditIt_" + new Date().getTime();

				$.editIt.util.setUneditable($self);

				self.opt = {};
				self.cmnds = {};
				self.editorsContainer = self;
				$.extend(self.opt, $.editIt.defaults, opt);
				self.opt.toolbarIsAlwaysVisible = self.opt.toolbarIsAlwaysVisible && self.opt.toolbarIsOnTop;

				//console.time('init_' + self.id);

				if($(this).is("textarea")) {
					var textAreaName = this.name;
					var content = this.value || "";
					var editorContainer = $("<div/>").attr({
						"data-textarea-name": textAreaName,
						"class": this.className
					}).html(content);
					$(this).hide().after(editorContainer);

					self = editorContainer[0];
					$self = editorContainer;
				}

				if(!$.editIt.i18n.loaded) {
					$(d).one("i18nReady", function() {
						$.editIt.i18n.loaded = true;
						$.editIt.util.setUneditable(self);
						$self.editIt(opt);
					});
					return;
				}

				//console.info("Initializing editIt for :: ", $self);

				$.editIt.actualEditorContainer = self;

				$self.off();
				self.opt = {};
				self.cmnds = {};
				self.editorsContainer = self;

				$.extend(self.opt, $.editIt.defaults, opt);
				$.editIt.i18n.lang = self.opt.lang;

				if(!self.editItIdx) {
					self.editItIdx = self.id || "editIt_" + $.editIt.guid();
					$.editIt.editors = $.editIt.editors || {};
					$.editIt.editors[self.editItIdx] = {};
					$.editIt.editors[self.editItIdx].opt = self.opt;
				}

				if(!$.editIt.plugins.loaded)
					$.editIt.plugins.loadDefaults();

				if(!opt)
					$.extend(self.opt, $.editIt.editors[self.editItIdx].opt);

				/**
				 * Private method to add text placeholder to an empty editor
				 * @method setPlaceHolderText
				 * @param {object} editor
				 */
				var setPlaceHolderText = function(editor) {

					var $editor = $(editor);
					$(".editIt-placeHolderText", editor).remove();
					var content = $editor.html().replace(/&nbsp;/g, "").replace(/<br>/g, "");
					$editor.find("p").remove();
					$editor.html(content);
					var placeHolderText = $("<div/>").addClass("editIt-placeHolderText").html($editor.data("placeholder-text") || self.opt.placeHolderText);
					$editor.prepend(placeHolderText)
				};

				if(!$.trim($self.html())) {
					var $content = $("<div/>");
					$self.append($content);
					$content.attr({
						"data-editable": true,
						"data-toolbar": $self.data("toolbar"),
						"data-enablesourcemode": $self.data("enablesourcemode"),
						"data-placeholder-text": $self.data("placeholder-text")
					});
				}

				if(self.opt.activateOnClick && !self.isInEditMode) {
					self.isInEditMode = true;

					$.editIt.util.setUneditable(self);
					$self.off("click.editIt").on("click.editIt", function(e) {

						if(!$self.is(".inEditMode") && !$("body").is(".sourceMode")) {
							$self.editIt();
							setTimeout(function() {
								$("[data-editable]:first", $self).focus();
								$(d).off("click.editIt").on("click.editIt", function(e) {
									if(!$(e.target).is($self) && !$(e.target).parents().is($self) && !$(e.target).parents().is(".editIt-toolbar")) {
										$.editIt.util.setUneditable(self);
										self.isInEditMode = false;
										$self.editIt();
									}
								});

							}, 500);
						}
					});

					return;

				}

				if(self.opt.toolbarIsOnTop) {

					self.toolbarPlaceholder = $("<div/>").addClass("editIt-toolbar-placeholder");
					$self.prepend(self.toolbarPlaceholder);

					$self.addClass("fixed-tool");

					$(window).on("scroll", function(e) {

						if(!$.editIt.focusedEditor)
							return;

						var focusedEditorsContainer = $.editIt.focusedEditor.editorsContainer;
						if(!focusedEditorsContainer || !focusedEditorsContainer.toolBarElement)
							return;

						clearTimeout($.editIt.scrollAnimation);

						if(focusedEditorsContainer.toolBarElement && !focusedEditorsContainer || $(focusedEditorsContainer).outerHeight() < $(window).height()) {
							focusedEditorsContainer.toolBarElement.css({
								top: 0
							});
							return;
						}

						focusedEditorsContainer.toolBarElement.css({
							top: 0
						});

						$.editIt.scrollAnimation = setTimeout(function() {

							if(!$.editIt.focusedEditor || !focusedEditorsContainer.toolBarElement)
								return;

							var scrollTop = $(window).scrollTop();
							var focusedEditorIsInwindow = focusedEditorsContainer && ($($.editIt.focusedEditor).offset().top + ($($.editIt.focusedEditor).outerHeight()) - 50 > scrollTop);

							if($.editIt.focusedEditor && !focusedEditorIsInwindow)
								return;

							focusedEditorsContainer.toolBarElement.stop();

							if(scrollTop > $(focusedEditorsContainer).offset().top - focusedEditorsContainer.toolbarPlaceholder.outerHeight()) {
								focusedEditorsContainer.toolBarElement.animate({
									top: scrollTop - $(focusedEditorsContainer).offset().top + focusedEditorsContainer.toolbarPlaceholder.outerHeight(),
								}, focusedEditorsContainer.opt.toolbarAnimationTime);
							} else {
								focusedEditorsContainer.toolBarElement.animate({
									top: 0,
								}, focusedEditorsContainer.opt.toolbarAnimationTime);
							}

							var editorButtonBar = focusedEditorsContainer ? $.editIt.focusedEditor.buttonBar : null;
							if(editorButtonBar) {
								if(scrollTop > $($.editIt.focusedEditor).offset().top) {
									var editorButtonBarTop = scrollTop - $($.editIt.focusedEditor).offset().top + 50;
									editorButtonBar.animate({
										marginTop: editorButtonBarTop,
									}, focusedEditorsContainer.opt.toolbarAnimationTime);
								} else {
									editorButtonBar.animate({
										marginTop: 0,
									}, focusedEditorsContainer.opt.toolbarAnimationTime);
								}
							}

						}, 100);

					});
				}

				//$.editIt.ui.mainButtonBar.draw(self);

				if($self.css("position") == "static")
					$self.css("position", "relative");

				self.opt.textareaName = $self.data("textarea-name") || self.opt.textareaName;

				if(self.opt.textareaName) {
					if(!$("textarea[name=" + self.opt.textareaName + "]").length) {
						var taAttributes = {
							name: self.opt.textareaName,
							id: self.opt.textareaName,
							witheditit: true
						};
						if(self.opt.required)
							taAttributes.required = true;

						if(self.opt.preserveOldValue)
							taAttributes.oldValue = 1;

						var textarea = $("<textarea/>").attr(taAttributes).hide();

						$self.after(textarea);
					}
					self.textarea = $("#" + self.opt.textareaName);
					self.textarea.hide();
				}

				$(self).addClass("editIt-wrapper inEditMode");

				if($self.css("position") == "static")
					$self.css("position", "relative");

				if(self.opt.styleWithCSS)
					d.execCommand("styleWithCSS", false, null);

				var editors = $self.is("[data-editable]") ? $(this) : $("[data-editable]", $self);
				editors.each(function() {

					var editor = this;
					var $editor = $(editor);

					// Clear all binded events
					$editor.off();

					if($editor.css("position") == "static")
						$editor.css("position", "relative");

					editor.buttonBar = $("<div/>").addClass("editIt-buttonBar");
					$editor.before(editor.buttonBar);
					editor.canHideButtonBar = true;

					editor.buttonBar.on("mouseenter", function() {
						editor.canHideButtonBar = false;
					}).on("mouseleave", function() {
						editor.canHideButtonBar = true;
					});

					if($editor.parents().is("[data-editable]"))
						return;

					if($editor.data("enablesourcemode"))
						$.editIt.util.enableSourceMode.apply(editor);

					if(!editor.id)
						editor.id = "editIt_" + $.editIt.guid();

					editor.editorsContainer = self.editorsContainer;

					$editor.addClass("editIt");
					$editor.attr("contenteditable", true);
					$editor.attr("spellCheck", self.opt.spellCheck);

					if($.editIt.util.isEmpty(editor)) {
						setPlaceHolderText(editor);
					}

					if(editor.editorsContainer.opt.toolbarIsAlwaysVisible) {
						$.editIt.ui.toolBar.draw(editor);
					}

					/**
					 * PASTE event
					 */
					$editor.on("paste", function(e) {
						$.editIt.util.handlePaste(e, editor);
					})

					/**
					 * MOUSE down event
					 */
					.on("mousedown.editIt", function(e) {
						editor.actualTag = e.target;
						$(d).one("mouseup", function() {
							if($.editIt.util.getSelectedText().length) {
								$editor.trigger("mouseup");
							}
						});
						var mousedownEv = $.Event("editIt-mousedown");
						mousedownEv.editor = editor;
						mousedownEv.target = e.target;
						$editor.trigger(mousedownEv);
					})

					/**
					 * MOUSE UP event
					 */
					.on("mouseup.editIt, keyup.editIt", function(e) {

						$(".editIt-placeHolderText", $editor).remove();

						editor.actualTag = e.target;

						// check if the editor is empty
						if($.editIt.util.isEmpty(editor)) {

							editor.buttonBar.hide();
							var content = $editor.html().replace(/&nbsp;/g, "").replace(/<br\/>/g, "");
							$editor.html(content);
							$editor.append("&nbsp;");
							editor.isCleaned = true;

							setTimeout(function() {
								$editor.focus();
							}, 400);

						} else if(!$(".editIt-buttonBar", $editor).length) {
							editor.buttonBar.show();
						}

						if(e.type == "keyup" && editor.editorsContainer.opt.toolbarIsOnTop ||
							(!editor.editorsContainer.opt.toolbarIsOnTop && $.editIt.ui.toolBar.forceDisplay)) {
							$.editIt.ui.toolBar.forceDisplay = false;
							$.editIt.ui.toolBar.draw(editor);
							return;
						}

						clearTimeout(editor.mouseupTimer);

						$.editIt.actualEditorContainer = editor.editorsContainer;

						editor.mouseupTimer = setTimeout(function() {

							if(editor.editorsContainer.opt.toolbarIsOnTop) {

								clearTimeout($.editIt.hidetimer);
								if(!$(".editIt-dropdown").is(":visible"))
									$.editIt.ui.toolBar.draw(editor);

							} else if($.editIt.util.getSelectedText().length === 0) {
								$.editIt.ui.toolBar.clear(editor);
							} else {

								clearTimeout($.editIt.hidetimer);

								if(!$(".editIt-dropdown").is(":visible") && $.editIt.util.getSelectionCoords().left > 0)
									$.editIt.ui.toolBar.draw(editor);

							}
							$(".editIt-tooltip").remove();

							editor.actualSelection = $.editIt.util.saveSelection();
							var anchor = editor.actualTag.tagName.toUpperCase() == "A";
							if(anchor) {
								var anchorLink = editor.actualTag.href;
								var anchorLinkDesc = anchorLink;

								if(anchorLink.length > 50)
									anchorLinkDesc = anchorLink.substring(0, 50) + "...";

								var editLink = "<button class='editIt-button small' onmousedown='$(\".editIt-createLink\", $.editIt.actualEditorContainer).mousedown()'>" + _("edit") + "</button>";

								if($.editIt.util.getSelectedText().length === 0)
									$.editIt.ui.tooltip.draw.apply(editor.actualTag, [editor, _("Go to link:") + " " + "<a href='" + anchorLink + "' target='_blank'>&nbsp;&nbsp;&nbsp;" + anchorLinkDesc + "</a>" + editLink, true]);
							}

							var mouseupEv = $.Event("editIt-mouseup");
							mouseupEv.editor = editor;
							$editor.trigger(mouseupEv);

						}, e.type == "mouseup" ? 50 : 500);

					})

					/**
					 * MOUSE ENTER event
					 */
					.on("mouseenter", function() {

						var mouseenterEv = $.Event("editIt-mouseenter");
						mouseenterEv.editor = editor;
						$editor.trigger(mouseenterEv);

					})

					/**
					 * MOUSE LEAVE event
					 */
					.on("mouseleave", function() {

						var mouseleaveEv = $.Event("editIt-mouseleave");
						mouseleaveEv.editor = editor;
						$editor.trigger(mouseleaveEv);

					})

					/**
					 * FOCUS event
					 */
					.on("focus", function() {

						if($.editIt.ui.toolBar && $.editIt.ui.toolBar.dropDownOpened) {
							return;
						}

						if($.editIt.old_focusedEditor) {
							$.editIt.focusedEditor = $.editIt.old_focusedEditor;
							if($.editIt.focusedEditor.editorsContainer != editor.editorsContainer) {
								$.editIt.focusedEditor.editorsContainer.toolBarElement.css({
									top: 0
								});
							}
						}

						$.editIt.focusedEditor = this;
						$.editIt.ui.toolBar.draw(this);
						//	$(window).scroll();

						editor.buttonBar.hide();
						if(editor.buttonBar && !$.editIt.util.isEmpty(editor)) {
							editor.buttonBar.css({
								top: $editor.position().top + parseFloat($editor.css("margin-top"))
							});
							editor.buttonBar.show();
						}

						if(editor.editorsContainer.toolBarElement && editor.editorsContainer.toolBarElement.is(":visible"))
							clearTimeout($.editIt.hidetimer);

						$(".focusedEditor").removeClass("focusedEditor");
						$(this).addClass("focusedEditor");

						var focusEv = $.Event("editIt-focus");
						focusEv.editor = editor;
						$editor.trigger(focusEv);

					})

					/**
					 * BLUR event
					 */
					.on("blur", function(e) {

						if($.editIt.focusedEditor) {
							$.editIt.ui.toolBar.disable($.editIt.focusedEditor);
						}

						$.editIt.old_focusedEditor = $.editIt.focusedEditor;
						$.editIt.focusedEditor = null;
						//$editor.scroll();

						if(editor.buttonBar && editor.canHideButtonBar) {
							editor.buttonBar.hide();
						}

						$.editIt.util.clearEmptyTags(editor);
						if($.editIt.util.isEmpty(editor) && !$(".editIt-prompt").length) {
							setPlaceHolderText(editor);
						}

						$.editIt.hidetimer = setTimeout(function() {

							//console.debug( "BLURRRRR" )

							if(!editor.editorsContainer.opt.toolbarIsAlwaysVisible) {
								$.editIt.ui.toolBar.clear(editor);
							} else {
								$.editIt.ui.toolBar.disable(editor);
							}

							$(".focusedEditor").removeClass("focusedEditor");

							setTimeout(function() {
								$(".editIt-tooltip").remove();
							}, 30);

							var blurEv = $.Event("editIt-blur");
							blurEv.editor = editor;
							blurEv.target = e.target;
							$editor.trigger(blurEv);

							editor.isCleaned = false;

							editor.editorsContainer.toolBarElement.css({
								top: 0
							});

						}, 150);

					})

					/**
					 * KEYDOWN event
					 */
					.on("keydown", function(e) {

						var k = e.keyCode;

						switch(k) {

							case 8: // back space
								if(!editor.editorsContainer.opt.toolbarIsOnTop)
									$.editIt.ui.toolBar.clear(editor);
								break;

							case 13: // return

								var selection = window.getSelection(),
									range = selection.getRangeAt(0),
									el = d.createElement("br"),
									textNode = d.createTextNode("\u00a0");

								var useDefault = $.editIt.util.isSelectionInsideElement("OL, UL, LI, H1, H2, H3, H4, H5, H6, CODE") && !e.shiftKey;

								if(useDefault)
									return;

								e.preventDefault();

								range.collapse(false);
								range.insertNode(textNode);
								range.insertNode(el);
								range.selectNodeContents(textNode);
								selection.removeAllRanges();
								selection.addRange(range);
								d.execCommand("forwardDelete", false, null);

								if(!e.shiftKey)
									d.execCommand("formatBlock", false, "p");
								break;

							case 65: //A
								if(e.ctrlKey || e.metaKey)
									setTimeout(function() {
										$.editIt.ui.toolBar.draw(editor);
									}, 50);
								break;

							case 66: //B
								if(e.ctrlKey || e.metaKey) {
									d.execCommand("bold", false, null);
									e.preventDefault();
								}
								break;

							case 73: //I
								if(e.ctrlKey || e.metaKey) {
									d.execCommand("italic", false, null);
									e.preventDefault();
								}
								break;

							case 85: //U
								if(e.ctrlKey || e.metaKey) {
									d.execCommand("underline", false, null);
									e.preventDefault();
								}
								break;

							case 32: // ctrl SPACE
								if(e.ctrlKey || e.metaKey) {
									if(!editor.editorsContainer.opt.toolbarIsOnTop && !$(".editIt-dropdown").is(":visible") && $.editIt.util.getSelectionCoords().left > 0) {
										$.editIt.ui.toolBar.draw(editor, true);
										$.editIt.ui.toolBar.forceDisplay = true;
										e.preventDefault();
									}
								}
								break;

							default:
								if(!editor.editorsContainer.opt.toolbarIsOnTop)
									$.editIt.ui.toolBar.clear(editor);
								break;
						}

						editor.actualSelection = $.editIt.util.saveSelection();

						var keydownEv = $.Event("editIt-keydown");
						keydownEv.editor = editor;
						keydownEv.key = k;
						$editor.trigger(keydownEv);

					})

					/**
					 * KEYUP event
					 */
					.on("keyup", function(e) {

						var k = e.keyCode;

						if(self.editorsContainer.opt.textareaName)
							$.editIt.util.updateTextarea(self);

						var keyupEv = $.Event("editIt-keyup");
						keyupEv.editor = editor;
						keyupEv.key = k;
						$editor.trigger(keyupEv);

					})

					/**
					 * MOUSEOVER event
					 */
					.on("mouseover", function(e) {

						editor.actualTag = e.target;
						var $hoverElement = $(editor.actualTag);

						if(!$hoverElement.parents(".focusedEditor").length)
							return;

						editor.hoverTag = editor.actualTag.tagName.toUpperCase();

						switch(editor.hoverTag) {

							case "IMG":
								break;

							case "TD":
								break;

							case "A":
								break;
						}

						var mouseoverEv = $.Event("editIt-mouseover");
						mouseoverEv.editor = editor;
						mouseoverEv.hoverElement = editor.actualTag;
						$editor.trigger(mouseoverEv);

					});

				});

				var initEv = $.Event("editIt-apply");
				initEv.editor = self;
				$(d).trigger(initEv);


        $.editIt.util.updateTextarea(self);

        if(self.opt.preserveOldValue) {
          self.textarea.updateOldValue();
          //console.debug("editIt updateOldValue",textarea.val())
        }


				d.execCommand("enableInlineTableEditing", false, false);
				d.execCommand("enableObjectResizing", false, false);

				//console.timeEnd('init_' + this.id);
			});
		},

		/** @interface */
		commands: {
			/**
			 * $.editIt.commands.extend();
			 * This method is used to extend the commands of editIt.
			 * Adds a new command Object to be used in the toolbar element
			 * @method extend
			 * @param name
			 * @param command (Object)
			 *
			 */
			extend: function(name, command) {

				if(typeof name == "object") {
					//console.debug(name, name.length);
					for(var n in name) {
						if(name.hasOwnProperty(n))
							$.editIt.commands[n] = name[n];
					}

				} else
					$.editIt.commands[name] = command;
			},

			/**
			 * Each command should have:
			 * ************
			 * label: (string) the label of the command
			 * icon: (string) the reference to the fontIcon in the css
			 * isEnabled: (function) to define when the action is enabled
			 * action: (function) to define the action of the command
			 * ************
			 */

			/** @namespace */
			redo: {
				label: "Redo",
				icon: "editIt-icon-mail-forward",
				/**
				 * Redo action
				 * @method action
				 */
				action: function() {
					if(d.queryCommandEnabled("redo"))
						d.execCommand('redo', false, null);
				}
			},

			/** @namespace */
			undo: {
				label: "Undo",
				icon: "editIt-icon-mail-reply",
				/**
				 * Undo action
				 * @method action
				 */
				action: function() {
					if(d.queryCommandEnabled("undo"))
						d.execCommand('undo', false, null);
				}
			},

			/** @namespace */
			bold: {
				label: "Bold",
				icon: "editIt-icon-bold",
				/**
				 * Set bold
				 * @method action
				 */
				action: function() {
					d.execCommand('bold', false, null);
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			italic: {
				label: "Italic",
				icon: "editIt-icon-italic",
				/**
				 * Set italic
				 * @method action
				 */
				action: function() {
					d.execCommand('italic', false, null);
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			underline: {
				label: "Underline",
				icon: "editIt-icon-underline",
				/**
				 * Set underlined
				 * @method action
				 */
				action: function() {
					d.execCommand('underline', false, null);
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			strikeThrough: {
				label: "Stroke",
				icon: "editIt-icon-strikethrough",
				/**
				 * Set strike through
				 * @method action
				 */
				action: function() {
					d.execCommand('strikeThrough', false, null);
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			removeFormat: {
				label: "Clear",
				icon: "editIt-icon-eraser",
				/**
				 * remove format
				 * @method action
				 */
				action: function() {
					d.execCommand('removeFormat', false, null);
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			createLink: {
				label: "Link",
				icon: "editIt-icon-chain",

				isEnabled: function(editor) {
					return d.queryCommandEnabled('removeFormat') || $.editIt.util.isSelectionInsideElement("A")
				},

				/**
				 * Create a link
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {

					var text = d.getSelection().toString();
					var pageUrl = self.location.href;

					var isImg = $("<div>" + $.editIt.util.getSelectionHtml() + "</div>").find("img").length > 0;

					if($.editIt.util.getSelectedText() == "" && !isImg) {

						if(!$.editIt.util.isSelectionInsideElement("A")) {
							$.editIt.ui.alert.draw(editor, _("You should select something first"));
							return;
						}
					}
					var AEl = $.editIt.util.isSelectionInsideElement("A");
					if($.editIt.util.isSelectionInsideElement("A"))
						$.editIt.util.selectElementContents($.editIt.util.isSelectionInsideElement("A"));

					text = d.getSelection().toString();
					if(isImg) {
						var imgURL = $($.editIt.util.getSelectionHtml()).attr("src").split("/");
						text = imgURL[imgURL.length - 1];
					}
					if(text.length > 15)
						text = text.substring(0, 15) + "...";
					var url = AEl ? AEl.href.replace(d.URL, "").replace(d.location.origin, "") : '';
					var title = AEl ? AEl.title : '';
					var targ = AEl && AEl.target ? "checked" : '';
					var promptContent =
						"<h2><span class='editIt-icon-chain'></span> " + _("Write here the URL for:") + " <span style='opacity:.6'>" + text + "</span></h2> \n" +
						"<input type='text' data-required='true' id='editItlink' name='link' placeholder='http://' value='" + url + "'>" +
						"<br><br>" +
						"<input type='text' id='editItlinkTitle' name='title' placeholder='" + _("Add a title") + "' value='" + title + "'>" +
						"<br><br>" +
						"<input type='checkbox' id='editItlinkTarget' name='target' value='_blank' " + targ + "> <label for='editItlinkTarget'>" + _("Open the link in a new window") + "</label>";

					$.editIt.ui.prompt.draw(editor, promptContent, null, function(data) {

						if(data.link && data.link != "http://") {

							var url = data.link.replace(pageUrl, "");
							d.execCommand('createLink', false, url);
							if(data.target)
								d.getSelection().anchorNode.parentNode.target = data.target;

							if(data.title)
								d.getSelection().anchorNode.parentNode.title = data.title;

						} else {
							d.execCommand('unlink', false, "");
						}
						$.editIt.util.expandSelection();
						$.editIt.util.updateTextarea(editor);
					}, null, null, true);
				}
			},

			/** @namespace */
			unlink: {
				label: "Unlink",
				icon: "editIt-icon-chain-broken",
				/**
				 * Unlink
				 * @method action
				 */
				action: function(editor) {
					d.execCommand('unlink', false, "");
					$.editIt.util.expandSelection(editor);
				}
			},

			/** @namespace */
			fontsize: {
				label: "fontsize",
				icon: "editIt-icon-font-size",
				type: "dropdown",
				isEnabled: function(editor) {
					return d.queryCommandEnabled('removeFormat')
				},
				elements: ["small", "normal", "medium", "large"],
				/**
				 * fontsize drop down
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {
					$.editIt.ui.dropDown.draw.apply(this, [editor]);
				}
			},
			/** @namespace */
			small: {
				label: "Small",
				icon: "editIt-icon-text-small",
				/**
				 * fontsize small
				 * @method action
				 */
				action: function() {
					$.editIt.util.changeFontSize(70, "%");
					return false;
				}
			},
			/**
			 * fontsize normal
			 @namespace */
			normal: {
				label: "Normal",
				icon: "editIt-icon-text-normal",
				/**
				 * @method action
				 */
				action: function() {
					$.editIt.util.changeFontSize(100, "%");
					return false;
				}
			},
			/**
			 * fontsize medium
			 * @namespace */
			medium: {
				label: "Medium",
				icon: "editIt-icon-text-medium",
				/**
				 * @method action
				 */
				action: function() {
					$.editIt.util.changeFontSize(120, "%");
					return false;
				}
			},
			/**
			 * fontsize large
			 * @namespace */
			large: {
				label: "Large",
				icon: "editIt-icon-text-large",
				/**
				 * @method action
				 */
				action: function() {
					$.editIt.util.changeFontSize(150, "%");
					return false;
				}
			},

			/**
			 * Justify
			 *  @namespace */
			justify: {
				label: "Justify",
				icon: "editIt-icon-align-left",
				type: "dropdown",
				elements: ["justifyLeft", "justifyRight", "justifyCenter", "justifyFull"],
				/**
				 * Justify drop down
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {
					$.editIt.ui.dropDown.draw.apply(this, [editor]);
				}
			},
			/** @namespace */
			justifyLeft: {
				label: "Left",
				icon: "editIt-icon-align-left",
				/**
				 * Justify left
				 * @method action
				 */
				action: function() {
					d.execCommand('justifyLeft', false, "");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			justifyRight: {
				label: "Right",
				icon: "editIt-icon-align-right",
				/**
				 * Justify right
				 * @method action
				 */
				action: function() {
					d.execCommand('justifyRight', false, "");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			justifyCenter: {
				label: "Center",
				icon: "editIt-icon-align-center",
				/**
				 * Justify center
				 * @method action
				 */
				action: function() {
					d.execCommand('justifyCenter', false, "");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			justifyFull: {
				label: "Justify",
				icon: "editIt-icon-align-justify",
				/**
				 * Justify full
				 * @method action
				 */
				action: function() {
					d.execCommand('justifyFull', false, "");
					$.editIt.util.expandSelection();
				}
			},

			/** @namespace */
			paragraph: {
				label: "Paragraph",
				icon: "editIt-icon-paragraph",
				type: "dropdown",
				elements: ["h1", "h2", "h3", "h4", "h5", "h6", "-", "p", "blockquote"],
				/**
				 * Paragraph formatting dropdown
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {
					$.editIt.ui.dropDown.draw.apply(this, [editor]);
				}
			},
			/** @namespace */
			h1: {
				label: "Title H1",
				icon: "editIt-icon-H1",
				/**
				 * Set H1
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H1>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			h2: {
				label: "Title H2",
				icon: "editIt-icon-H2",
				/**
				 * Set H2
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H2>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			h3: {
				label: "Title H3",
				icon: "editIt-icon-H3",
				/**
				 * Set H3
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H3>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			h4: {
				label: "Title H4",
				icon: "editIt-icon-H4",
				/**
				 * Set H4
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H4>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			h5: {
				label: "Title H5",
				icon: "editIt-icon-H5",
				/**
				 * Set H5
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H5>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			h6: {
				label: "Title H6",
				icon: "editIt-icon-H6",
				/**
				 * Set H6
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<H6>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			p: {
				label: "Paragraph P",
				icon: "editIt-icon-paragraph",
				/**
				 * Set P
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<P>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			blockquote: {
				label: "Blockquote",
				icon: "editIt-icon-quote-left",
				/**
				 * Set blockquote
				 * @method action
				 */
				action: function() {
					d.execCommand('formatBlock', false, "<BLOCKQUOTE>");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			insertOrderedList: {
				label: "Ordered list",
				icon: "editIt-icon-list-ol",
				/**
				 * Insert an ordered list
				 * @method action
				 */
				action: function() {
					d.execCommand('insertOrderedList', false, null);
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			orderedListType: {
				label: "",
				icon: null,
				type: "dropdown",
				elements: ["oLDefault", "oLAlphabeticallyLc", "oLAlphabeticallyUc", "oLRomanLc", "oLRomanUc"],
				/**
				 * Ordered list type dropdown
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {
					$.editIt.ui.dropDown.draw.apply(this, [editor]);
				}
			},
			/** @namespace */
			oLDefault: {
				label: "Default",
				icon: "editIt-icon-list-ol",
				/**
				 * Set the default OL number type (1)
				 * @method action
				 */
				action: function() {
					var oL = $.editIt.util.isSelectionInsideElement("OL");
					if($(oL).length)
						$(oL).attr("type", "1");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			oLAlphabeticallyLc: {
				label: "Alphabetically lowercase",
				icon: "editIt-icon-list-ol",
				/**
				 * Set the alphabetical OL type (a)
				 * @method action
				 */
				action: function() {
					var oL = $.editIt.util.isSelectionInsideElement("OL");
					if($(oL).length)
						$(oL).attr("type", "a");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			oLAlphabeticallyUc: {
				label: "Alphabetically uppercase",
				icon: "editIt-icon-list-ol",
				/**
				 * Set the alphabetical OL type (A)
				 * @method action
				 */
				action: function() {
					var oL = $.editIt.util.isSelectionInsideElement("OL");
					if($(oL).length)
						$(oL).attr("type", "A");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			oLRomanLc: {
				label: "Roman number lowercase",
				icon: "editIt-icon-list-ol",
				/**
				 * Set the romanic OL type (i)
				 * @method action
				 */
				action: function() {
					var oL = $.editIt.util.isSelectionInsideElement("OL");
					if($(oL).length)
						$(oL).attr("type", "i");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			oLRomanUc: {
				label: "Roman number uppercase",
				icon: "editIt-icon-list-ol",
				/**
				 * Set the romanic OL type (I)
				 * @method action
				 */
				action: function() {
					var oL = $.editIt.util.isSelectionInsideElement("OL");
					if($(oL).length)
						$(oL).attr("type", "I");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			insertUnorderedList: {
				label: "Unordered list",
				icon: "editIt-icon-list-ul",
				/**
				 * Insert an unordered list
				 * @method action
				 */
				action: function() {
					d.execCommand('insertUnorderedList', false, null);
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			unorderedListType: {
				label: "",
				icon: null,
				type: "dropdown",
				elements: ["uLDefault", "uLCircle", "uLSquare"],
				/**
				 * Unordered list type dropdown
				 * @method action
				 * @param {object} editor
				 */
				action: function(editor) {
					$.editIt.ui.dropDown.draw.apply(this, [editor]);
				}
			},
			/** @namespace */
			uLDefault: {
				label: "Default",
				icon: "editIt-icon-list-ul",
				/**
				 * Set the default UL disc type
				 * @method action
				 */
				action: function() {
					var uL = $.editIt.util.isSelectionInsideElement("UL");
					if($(uL).length)
						$(uL).attr("type", "disc");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			uLCircle: {
				label: "circle",
				icon: "editIt-icon-list-ul",
				/**
				 * Set the UL circle type
				 * @method action
				 */
				action: function() {
					var uL = $.editIt.util.isSelectionInsideElement("UL");
					if($(uL).length)
						$(uL).attr("type", "circle");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			uLSquare: {
				label: "square",
				icon: "editIt-icon-list-ul",
				/**
				 * Set the UL square type
				 * @method action
				 */
				action: function() {
					var uL = $.editIt.util.isSelectionInsideElement("UL");
					if($(uL).length)
						$(uL).attr("type", "square");
					$.editIt.util.expandSelection();
				}
			},
			/** @namespace */
			indent: {
				label: "Indent",
				icon: "editIt-icon-indent",
				/**
				 * Indent the selected text
				 * @method action
				 */
				action: function() {

					var li = $($.editIt.util.isSelectionInsideElement("LI"));
					if(li.length) {
						var parent = li.parent();
						var prevLi = li.prev("li:first");
						if(prevLi.length) {
							var tag = parent.is("ol") ? "ol" : "ul";
							if($(tag, prevLi).length) {
								$(tag, prevLi).append(li);
							} else {
								var newParent = parent.is("ol") ? $("<ol/>") : $("<ul/>");
								prevLi.append(newParent);
								newParent.append(li);
							}

						} else {
							d.execCommand('indent', true, null);
						}

					} else
						d.execCommand('indent', true, null);

					$.editIt.util.expandSelection();

				}
			},
			/** @namespace */
			outdent: {
				label: "Outdent",
				icon: "editIt-icon-dedent",
				/**
				 * Outdent the selected text
				 * @method action
				 */
				action: function() {
					var li = $($.editIt.util.isSelectionInsideElement("LI"));
					if(li.length) {
						var root = $($.editIt.util.isSelectionInsideElement("UL, OL"))
						var prevLi = li.parents("li:first");
						if(!prevLi.length)
							return;
						else
							prevLi.after(li);

						$("*", root).each(function() {
							if($.editIt.util.isEmpty(this))
								$(this).remove();
						})

					} else
						d.execCommand('outdent', false, null);

					$.editIt.util.expandSelection();
				}
			}
		},
		/** @interface */
		plugins: {

			/** @namespace */
			defaults: "[{name: 'tableManager', options:{} }, {name: 'variablesReplace', options:{} }, {name: 'blockTools', options:{} }, {name: 'modulesManager', options:{} }, {name: 'imageManager', options:{} }, {name: 'editorView'}]",

			/**
			 * Load the default plugins
			 * @method loadDefaults
			 */
			loadDefaults: function() {
				var plugins;
				if(typeof $.editIt.plugins.defaults == "string")
					plugins = eval($.editIt.plugins.defaults);
				else
					plugins = $.editIt.plugins.defaults;
				for(var i = 0; i < plugins.length; i++) {
					var plugin = plugins[i];
					$.editIt.plugins.load(plugin.name, plugin.useMin != "undefined" ? plugin.useMin : false, plugin.options);
				}
				$.editIt.plugins.loaded = true;
			},

			/**
			 * Load a specific plugin
			 * @method load
			 *
			 * @param {string} name
			 * the name of the plugin
			 *
			 * @param {boolean} useMinified
			 * use the minified script
			 *
			 * @param {object} opt
			 * plugin options
			 *
			 */
			load: function(name, useMinified, opt) {

				$(d).one("registered", function(e) {
					e.plugin.UID = name.asId();
					e.plugin.path = $.editIt.plugins.path + name + "/";
					$.editIt.i18n.loadfile(e.plugin);

					$('<link/>', {
						rel: 'stylesheet',
						href: e.plugin.path + "style" +(useMinified ? ".min" : "") +".css?_=4009",
						id: "style_" + e.plugin.name
					}).appendTo('head');

					if(e.plugin.commands) {
						$.editIt.commands.extend(e.plugin.commands);
					}

					if($.editIt.plugins.extend[e.plugin.name]) {
						$.extend($.editIt.plugins[e.plugin.name].defaults, $.editIt.plugins.extend[e.plugin.name]);
					}

					$.editIt.plugins[e.plugin.name].activate.apply(e.plugin, [opt]);

				});

				$.ajax({
					async: false,
					type: 'GET',
					url: $.editIt.plugins.path + name + "/plugin" + (useMinified ? ".min" : "") + ".js?_={{ build }}",
					data: null,
					dataType: 'script',
					/**
					 * Error
					 * @method error
					 */
					error: function() {
						$.editIt.ui.alert.draw(null, _("There's been an error loading the plugin:<br> %%", [name]));
					}
				});
			},

			/**
			 * Register the new plugin
			 * @method register
			 * @param {object} plugin
			 */
			register: function(plugin) {

				$.editIt.plugins[plugin.name] = plugin;

				var registered = $.Event("registered");
				registered.plugin = $.editIt.plugins[plugin.name];
				$(d).trigger(registered);

				$(d).off("editIt-apply").on("editIt-apply", function(e) {
					if(typeof plugin.update == "function")
						plugin.update.apply(plugin, [e]);
				});

				$(d).on("editIt-remove", function() {
					if(typeof plugin.destroy == "function")
						plugin.destroy.apply(plugin);
					$(d).off("." + plugin.name);
				});
			},

			/**
			 *
			 */
			extend: {}

		},

		/** @interface UI */
		ui: {

			/**
			 *
			 * Toolbar Manager
			 */
			toolBar: {
				none: {
					elements: []
				},
				default: {
					elements: ["bold", "italic", "underline", "strikeThrough", "|", "removeFormat", "|", "paragraph", "|", "fontsize", "|", "createLink", "|", "justify", "|", "insertOrderedList", "insertUnorderedList", "|", "outdent", "indent", "|", "undo", "redo"],
					position: 0,
					attachTo: null
				},
				small: {
					elements: ["bold", "italic", "underline", "strikeThrough", "removeFormat", "|", "undo", "redo"],
					position: 0,
					attachTo: null
				},

				/**
				 * $.editIt.ui.toolBar.draw()
				 * Draws the toolbar
				 * @param editor
				 * @param fade
				 */
				draw: function(editor, fade) {

					if($.editIt.ui.toolBar.dropDownOpened)
						return;

					if(!editor.editorsContainer || (!editor.editorsContainer.opt.toolbarIsOnTop && (!$(editor).is("[contenteditable]") || !editor.editorsContainer)))
						return;

					$.extend(editor.editorsContainer.cmnds, $.editIt.commands);
					$.extend(editor.editorsContainer.opt.toolBar, $.editIt.defaults.toolBar);

					$.editIt.ui.toolBar.clear(editor);

					var tbe = $.editIt.ui.toolBar.getElements(editor);

					editor.editorsContainer.toolBarElement = $("<div/>").addClass("editIt-toolbar").attr({
						id: "editIt-toolbar_" + editor.editorsContainer.id
					});

					/**
					 * Loops the chosen toolBar elements and create the buttons
					 */
					for(var x in tbe) {

						if(!tbe.hasOwnProperty(x))
							continue;

						var btn = tbe[x].trim();

						if(btn == "|") {
							var separator = $("<span/>").addClass("toolbar_separator").html("&nbsp;");
							editor.editorsContainer.toolBarElement.append(separator);
							continue;
						}

						var cmnd = editor.editorsContainer.cmnds[btn];

						//	console.debug("cmnd", cmnd.label, cmnd);

						if(!cmnd || (cmnd.condition && !cmnd.condition(editor))) {
							continue;
						}

						var toolBarIcon = editor.editorsContainer.opt.toolBarIcon && cmnd.icon;
						var label = toolBarIcon ? "" : cmnd.label;

						var command = $("<span/>").html(_(label)).addClass((toolBarIcon ? "icon " : "textual ") + "editIt-" + btn);

						if(cmnd.className)
							command.addClass(cmnd.className);

						cmnd.toolbarElement = command;
						command.data("cmnd", cmnd).data("action", btn);

						if(!cmnd.type)
							cmnd.type = "default";

						var canCheck = typeof d.queryCommandState != "undefined";

						switch(cmnd.type) {

							case "dropdown":

								try {
									var isEnabled = typeof cmnd.isEnabled == "function" ? cmnd.isEnabled(editor) : true;
									if(!isEnabled) {
										command.addClass("disabled");
									}
								} catch(e) {
									console.warn(err);
								}

								if(!cmnd.originalIcon)
									cmnd.originalIcon = cmnd.icon;

								var arrow = $("<i/>").addClass("editIt-icon-sort-desc").css({
									paddingLeft: 10
								});
								command[0].isDropDown = true;
								command.append(arrow);

								if(cmnd.elements)
									for(var b in cmnd.elements) {

										if(!cmnd.elements.hasOwnProperty(b))
											continue;

										try {

											if(canCheck && d.queryCommandState(cmnd.elements[b])) {
												command.addClass("sel");
												if(cmnd.originalIcon)
													cmnd.icon = $.editIt.commands[cmnd.elements[b]].icon;
												break;

											} else if($.editIt.util.isSelectionInsideElement(cmnd.elements[b].toUpperCase())) {
												command.addClass("sel");
												if(cmnd.originalIcon)
													cmnd.icon = $.editIt.commands[cmnd.elements[b]].icon;
												break;

											} else {
												cmnd.icon = cmnd.originalIcon;
											}

										} catch(err) {
											console.warn(err);
										}

									}

								if(cmnd.label.trim() == "") {
									command.addClass("onlyArrow");
								}

								break;

							case "plugin":
								try {
									if(canCheck && d.queryCommandState(btn))
										command.addClass("sel");
									if((typeof cmnd.isEnabled == "function" && cmnd.isEnabled(editor) == "always")) {
										cmnd.className = "alwaysEnabled";
										command.addClass("alwaysEnabled");
									}

								} catch(err) {
									console.warn(err);
								}
								break;

							default:
								try {

									if(typeof cmnd.isEnabled == "function" && cmnd.isEnabled(editor) == "always") {
										cmnd.className = "alwaysEnabled";
										command.addClass("alwaysEnabled");
									}

									var isEnabled = typeof cmnd.isEnabled == "function" ? cmnd.isEnabled(editor) : canCheck && d.queryCommandEnabled(btn);
									if(!isEnabled && cmnd.className != "alwaysEnabled") {
										command.addClass("disabled");
									}

									if(canCheck && (btn == "createLink") && $.editIt.util.isSelectionInsideElement("A") || (btn != "removeFormat" && d.queryCommandState(btn)))
										command.addClass("sel");
								} catch(err) {
									console.warn(err);
								}
								break;
						}

						if(toolBarIcon) {
							command.addClass(cmnd.icon);
							command.attr({
								title: _(cmnd.label)
							});
						}

						command.on("mousedown", function(e) {

							e.stopPropagation();
							e.preventDefault();

							if(editor.actualSelection && !$(this).is(".alwaysEnabled"))
								$.editIt.util.restoreSelection(editor.actualSelection);

							var el = this;
							var $el = $(el);

							clearTimeout($.editIt.hidetimer);

							if(!editor.editorsContainer.cmnds[$el.data("action")])
								return;

							setTimeout(function() {
								var args = [editor, $el.data("cmnd")];

								//console.debug(editor.editorsContainer.cmnds, $el, $el.data("action"))
								editor.editorsContainer.cmnds[$el.data("action")].action.apply(el, args);
								$.editIt.util.expandSelection(editor);

								if(el.isDropDown) {
									$.editIt.ui.toolBar.dropDownOpened = true;
									//return;
								} else {
									$.editIt.ui.toolBar.draw(editor);
									$.editIt.util.updateTextarea(editor);
								}

								$(editor).focus();
								$.editIt.ui.toolBar.dropDownOpened = false;
								$.editIt.util.expandSelection();
							}, 150);

						});

						editor.editorsContainer.toolBarElement.append(command);
					}

					if(fade)
						editor.editorsContainer.toolBarElement.fadeIn(200);
					else
						editor.editorsContainer.toolBarElement.show();

					editor.editorsContainer.toolBarElement.unselectable();

					var scrollLeft = $(window).scrollLeft();
					var scrollTop = $(window).scrollTop();

					if(!editor.editorsContainer.opt.toolbarIsOnTop) {

						var pos = $.editIt.util.getSelectionCoords();

						$("body").after(editor.editorsContainer.toolBarElement);
						var arrow = $("<div/>").addClass("arrow_box");
						editor.editorsContainer.toolBarElement.append(arrow);

						pos.left = pos.left - (editor.editorsContainer.toolBarElement.outerWidth() / 2);
						pos.top = pos.top - 20;

						var toolBarLeftIsInWin = (pos.left - scrollLeft) + editor.editorsContainer.toolBarElement.width() < $(window).width();
						var toolBarTopIsInWin = (pos.top - scrollTop) + editor.editorsContainer.toolBarElement.height() < $(window).height();

						pos.left = toolBarLeftIsInWin ? pos.left : pos.left - ((pos.left - scrollLeft) + editor.editorsContainer.toolBarElement.width() - $(window).width()) - 10;
						pos.left = pos.left > 10 ? pos.left : 10;

						pos.top = toolBarTopIsInWin ? pos.top : pos.top - ((pos.top - scrollTop) + editor.editorsContainer.toolBarElement.height() - $(window).height()) - 10;
						pos.top = pos.top <= scrollTop + editor.editorsContainer.toolBarElement.height() ? pos.top + editor.editorsContainer.toolBarElement.outerHeight() + 20 : pos.top;

						editor.editorsContainer.toolBarElement.css({
							left: pos.left,
							top: pos.top
						});

						arrow.css({
							left: $.editIt.util.getSelectionCoords().left - pos.left + (pos.width / 2) - 5,
							top: pos.top - editor.editorsContainer.toolBarElement.position().top + editor.editorsContainer.toolBarElement.outerHeight() - 10
						});

					} else {

						editor.editorsContainer.toolbarPlaceholder.append(editor.editorsContainer.toolBarElement);
						editor.editorsContainer.toolBarElement.addClass("editIt-always-visible");

						editor.editorsContainer.toolbarPlaceholder.css({
							height: editor.editorsContainer.toolBarElement.outerHeight()
						});

						if($.editIt.focusedEditor && scrollTop > $(editor.editorsContainer).offset().top - editor.editorsContainer.toolbarPlaceholder.outerHeight()) {
							editor.editorsContainer.toolBarElement.css({
								top: scrollTop - $(editor.editorsContainer).offset().top + editor.editorsContainer.toolbarPlaceholder.outerHeight()
							});
						}
					}

					$(".editIt-tooltip").remove();

					if(!$.editIt.focusedEditor)
						$.editIt.ui.toolBar.disable(editor);

				},

				/**
				 * Remove the toolbar
				 * @method clear
				 * @param {object} editor
				 */
				clear: function(editor) {

					$.editIt.ui.toolBar.forceDisplay = false;

					if(!editor || !editor.editorsContainer || !editor.editorsContainer.toolBarElement)
						return;

					editor.editorsContainer.toolBarElement.remove();

					if(editor.editorsContainer.toolbarPlaceholder)
						editor.editorsContainer.toolbarPlaceholder.css({
							height: 0
						});
				},

				/**
				 *
				 * @param editor
				 */
				disable: function(editor) {
					$("[class*=editIt-]", editor.editorsContainer.toolBarElement).not(".alwaysEnabled").addClass("disabled");
				},

				/**
				 * Get all the commands for the toolbar
				 * @method getElements
				 * @param {object} editor
				 * @return toolBarElements
				 */
				getElements: function(editor) {

					var toolbarName = ($(editor).data("toolbar") || editor.editorsContainer.opt.toolBar);
					var toolBarElements = $.editIt.ui.toolBar[toolbarName].elements.slice(0);

					//	console.debug(toolBarElements.length)

					/**
					 * Add plugins toolbars
					 */
					for(var tb in $.editIt.ui.toolBar) {

						if(!$.editIt.ui.toolBar.hasOwnProperty(tb))
							continue;

						var toolBar = $.editIt.ui.toolBar[tb];

						if(typeof toolBar == "function" || typeof toolBar == "string")
							continue;

						var attachToIsActiveToolbar = false;

						if(typeof toolBar.attachTo == "array")
							attachToIsActiveToolbar = toolBar.attachTo.indexOf(toolbarName) != -1;

						if(toolBar.attachTo == toolbarName || toolBar.attachTo == "all" || attachToIsActiveToolbar || (toolBar.attachTo == "default" && toolbarName == editor.editorsContainer.opt.toolBar)) {

							toolBarElements = toolBarElements.concat(toolBar.elements);
							//toolBarElements.splice.apply( toolBarElements, [ toolBar.position, 0 ].concat( toolBar.elements ) );
							//console.debug( toolBar.attachTo, $.editIt.ui.toolBar.activeToolbar, toolBar.elements, toolBarElements );
						}
					}

					/**
					 *
					 * Manage exceptions in toolBar elements
					 */
					var isA = $.editIt.util.isSelectionInsideElement("A");
					if(isA && toolBarElements.indexOf("createLink") > 0) {
						toolBarElements.splice(toolBarElements.indexOf("createLink") + 1, 0, "unlink");
					}

					var isOl = $.editIt.util.isSelectionInsideElement("OL");
					if(isOl && toolBarElements.indexOf("insertOrderedList") > 0) {
						toolBarElements.splice.apply(toolBarElements, [toolBarElements.indexOf("insertOrderedList") + 1, 0].concat(["orderedListType", "|"]));
					}

					var isUl = $.editIt.util.isSelectionInsideElement("UL");
					if(isUl && toolBarElements.indexOf("insertUnorderedList") > 0) {
						toolBarElements.splice.apply(toolBarElements, [toolBarElements.indexOf("insertUnorderedList") + 1, 0].concat(["unorderedListType", "|"]));
					}

					return toolBarElements;
				},

				/**
				 * $.editIt.ui.toolBar.addToolbar()
				 * Add a new toolbar
				 * The name of the new toolbar
				 * Array of commands name
				 * The toolbar to be extended
				 * The position in the extended toolbar
				 * @method addToolbar
				 * @param toolbarName
				 * @param CommandArray
				 * @param attachTo
				 * @param position
				 */
				addToolbar: function(toolbarName, CommandArray, attachTo, position, alwaysEnabled) {
					$.editIt.ui.toolBar[toolbarName] = {};
					$.editIt.ui.toolBar[toolbarName].elements = CommandArray;
					$.editIt.ui.toolBar[toolbarName].alwaysEnabled = alwaysEnabled;
					$.editIt.ui.toolBar[toolbarName].attachTo = attachTo;

					//position is not used anymore
					$.editIt.ui.toolBar[toolbarName].position = position;
				},

				/**
				 * $.editIt.ui.toolBar.extend()
				 * Extends a defined toolbar with a new command.
				 * A corresponding command should be defined first.
				 * @method extend
				 * @param toolbarName
				 * @param commandName
				 * @param position
				 */
				extend: function(toolbarName, commandName, position) {
					var toolBar = $.editIt.ui.toolBar[toolbarName];
					if(commandName == "|" || toolBar.elements.indexOf(commandName) < 0)
						toolBar.elements.splice(position, 0, commandName);
				}
			},

			/**
			 *
			 * Editor container buttonbar
			 * @namespace
			 */
			/*
                    mainButtonBar: {

                      /!**
                       * Draw the main button bar of the editors container
                       * @method draw
                       * @param {object} editor
                       *!/
                      draw: function(editor) {

                        $(".editIt-main-buttonBar", editor.editorsContainer).remove();

                        editor._buttonBar = editor._buttonBar || {};

                        editor.mainButtonBar = $("<div/>").addClass("editIt-main-buttonBar");

                        $(editor).prepend(editor.mainButtonBar);

                        var mainBBCreateEv = $.Event("editIt-create-mainButtonBar");
                        mainBBCreateEv.editor = editor;
                        $(editor).trigger(mainBBCreateEv);

                      },

                      /!**
                       * Remove the main button bar of the editors container
                       * @method clear
                       * @param {} editor
                       *!/
                      clear: function(editor) {
                        if(editor.mainButtonBar)
                          editor.mainButtonBar.remove();
                      },

                      /!**
                       * Add a buton to the main button bar
                       * @method addButton
                       * @param {} editor
                       * @param {} opt
                       *!/
                      addButton: function(editor, opt) {
                        var options = {
                          label: "button",
                          icon: false,
                          className: "main-color ",
                          /!**
                           * The default options for the button bar button
                           * @method action
                           *!/
                          action: function() {}
                        };
                        $.extend(options, opt);
                        var $newBtn = $.editIt.util.drawButton(options.label, options.className || "", options.icon, function(e) {
                          e.preventDefault();
                          options.action.apply(editor, [editor, $newBtn]);
                        });
                        editor.mainButtonBar.append($newBtn);
                        editor._buttonBar[options.label] = $newBtn;
                      }
                    },
          */

			/**
			 *
			 * Alert window
			 * @namespace
			 */
			alert: {

				/**
				 * Draw the alert box
				 * @method draw
				 * @param {object} editor
				 * @param {string} content
				 */
				draw: function(editor, content) {

					if(!editor)
						editor = $.editIt.actualEditorContainer;

					editor.actualSelection = $.editIt.util.saveSelection();
					$(editor).blur();
					editor.alert = $("<div/>").addClass("editIt-alert").hide();
					var alertBox = $("<div/>").addClass("editIt-alert-box");

					var alertButtonsBar = $("<div/>").addClass("editIt-alert-buttonBar");
					var alertApply = $.editIt.util.drawButton("Ok", "apply", "editIt-icon-check big", function() {

						editor.alert.remove();
						$("body").removeClass("blur");

						setTimeout(function() {
							$.editIt.util.restoreSelection(editor.actualSelection);
							$.editIt.ui.toolBar.draw(editor);
							if(!$.editIt.util.isEmpty(editor))
								$(editor).focus();
						}, 50);

						$(d).off("keydown.alert");

					});

					alertButtonsBar.append(alertApply);

					alertBox.append(content);

					editor.alert.append(alertBox);
					alertBox.append(alertButtonsBar);

					$("body").after(editor.alert);
					$("body").addClass("blur");

					editor.alert.fadeIn(100);

					$(d).on("keydown.alert", function(e) {
						var k = e.keyCode;
						switch(k) {
							case 13:
								e.preventDefault();
								alertApply.mouseup();
								break;
						}

					});
				}

			},

			/**
			 *
			 * Prompt window
			 * @namespace
			 */
			prompt: {

				/**
				 * Draw the prompt window
				 * @method draw
				 * @param editor
				 * @param content
				 * @param plugin
				 * @param applyAction
				 * @param applyButtonName
				 * @param className
				 * @param mustReturnData
				 */
				draw: function(editor, content, plugin, applyAction, applyButtonName, className, mustReturnData, orderFactor) {

					var toolbarWasVisible = $(".editIt-toolbar").is(":visible");

					editor.actualSelection = $.editIt.util.saveSelection();

					//$.editIt.ui.toolBar.clear(editor);

					editor.prompt = $("<div/>").addClass("editIt-prompt").hide();
					var promptBox = $("<div/>").addClass("editIt-prompt-box");

					if(orderFactor)
						editor.prompt.css({
							zIndex: orderFactor
						})

					var promptCancel = $.editIt.util.drawButton("Cancel", "text-modality", null, null);
					var promptApply = $.editIt.util.drawButton((applyButtonName || "Apply"), (className || "apply") + " big", null, null);

					var promptButtonsBar = $("<div/>").addClass("editIt-prompt-buttonBar");
					promptButtonsBar.append(promptCancel).append(promptApply);

					promptBox.append(content);

					promptApply.on("click", function() {

						/* ON LOAD */
						if(typeof $.editIt.ui.prompt.onApply == "function") {
							$.editIt.ui.prompt.onApply(editor, plugin);
							$.editIt.ui.prompt.onApply = null;
						}

						var data = {};
						$("input, textarea", editor.prompt).each(function() {

							switch(this.type) {

								case "checkbox":
									if($(this).is(":checked"))
										data[this.name] = $(this).val();
									break;

								case "radio":
									if($(this).is(":checked"))
										data[this.name] = $(this).val();
									break;

								default:
									if(this.value.length && !(this.type == "file"))
										data[this.name] = $(this).val();
							}

							/**
							 * data-required
							 */
							if($(this).is("[data-required]") && !this.value.length) {
								data = "empty-required";
								$(this).addClass("required");
								return false;
							}
						});
						/**
						 *
						 * if no choices (isEmptyObject) then return
						 */
						if($.isEmptyObject(data) && mustReturnData) {
							$.editIt.ui.prompt.highlight(editor, _("Make your choice first..."));
							return;
						}
						/**
						 * data-required
						 */
						if(data == "empty-required") {
							$.editIt.ui.prompt.highlight(editor, _("A required field is empty"));
							$(".required", editor.prompt).one("focus", function() {
								$(this).removeClass("required");
							});
							return;
						}

						setTimeout(function() {

							$.editIt.util.restoreSelection(editor.actualSelection);

							if(toolbarWasVisible)
								$.editIt.ui.toolBar.draw(editor);

							applyAction(data);

							editor.prompt.remove();

							if(!$(".editIt-prompt").length)
								$("body").removeClass("blur");

							$(editor).focus();

						}, 50);

						$(d).off("keydown.prompt");

					});

					promptCancel.on("click", function() {
						editor.prompt.remove();

						if(!$(".editIt-prompt").length)
							$("body").removeClass("blur");

						$.editIt.util.restoreSelection(editor.actualSelection);

						if(toolbarWasVisible)
							$.editIt.ui.toolBar.draw(editor, true);

						$(editor).focus();

						$(d).off("keydown.prompt");
					});

					editor.prompt.append(promptBox);
					promptBox.append(promptButtonsBar);

					$("body").after(editor.prompt);
					$("body").addClass("blur");

					/* ON LOAD */
					if(typeof $.editIt.ui.prompt.onLoad == "function") {
						$.editIt.ui.prompt.onLoad(editor, plugin);
						$.editIt.ui.prompt.onLoad = null;
					}

					editor.prompt.fadeIn(200, function() {
						promptBox.find("input, textarea").eq(0).focus().select();
						$(editor).blur();
					});

					$(d).on("keydown.prompt", function(e) {

						var k = e.keyCode;

						switch(k) {

							case 13:
								e.preventDefault();
								promptApply.click();
								break;

							case 27:
								e.preventDefault();
								promptCancel.click();
								break;
						}

					});

				},

				/**
				 * Highlight the errors in the prompt window
				 * @method highlight
				 * @param {object} editor
				 * @param {string} message
				 */
				highlight: function(editor, message) {

					editor.prompt.addClass("highlight");
					var msg = $("<div/>").addClass("editIt-prompt-message").html(message);
					$(".editIt-prompt-buttonBar").before(msg);

					setTimeout(
						function() {
							editor.prompt.removeClass("highlight");
							msg.remove();
						}, 3000
					);

				},

				/**
				 * method fired on prompt loaded
				 * @method onLoad
				 * @param {object} editor
				 * @param {function} action
				 */
				onLoad: function(editor, action) {},
				onApply: function(editor, action) {}

			},

			/**
			 *
			 * Tooltip
			 * @namespace
			 */
			tooltip: {

				/**
				 * Draw the tooltip
				 * @param editor
				 * @param content
				 * @param tryToCenter
				 * @param e
				 */
				draw: function(editor, content, tryToCenter, e) {

					$(".editIt-tooltip").remove();
					editor.tooltip = $("<div/>").addClass("editIt-tooltip").hide();
					editor.tooltip.append(content);

					$("body").append(editor.tooltip);

					var pos = e ? $.editIt.util.getMouseCoords(e) : $.editIt.util.getSelectionCoords();

					if(tryToCenter)
						pos.left -= editor.tooltip.outerWidth() / 2;

					editor.tooltip.css({
						left: pos.left,
						top: pos.top - 10
					});

					editor.tooltip.slideDown(300);

				}
			},

			/**
			 *
			 * Dropdown menu
			 * @namespace
			 */
			dropDown: {

				/**
				 * Draw the dropdown
				 * @method draw
				 * @param editor
				 * @param elements
				 */
				draw: function(editor, elements) {
					var cmnd = $(this).data("cmnd");
					elements = elements || cmnd.elements;
					var buttonOpener = this;
					$(buttonOpener).addClass("editIt-dropdown-opener");

					var isToolbarButton = $(buttonOpener).parents(".editIt-toolbar").length;
					if(isToolbarButton)
						clearTimeout($.editIt.hidetimer);

					var dropDown = $(".editIt-dropdown");

					if(dropDown.is(":visible")) {
						var opener = dropDown[0].opener;

						$.editIt.ui.dropDown.hide(editor);

						if(opener == buttonOpener)
							return;
					}

					editor.dropDown = $("<div/>").addClass("editIt-dropdown");
					editor.dropDown[0].opener = buttonOpener;

					editor.dropDown.css({
						position: "absolute",
						left: $(buttonOpener).position().left,
						marginTop: 0
					});
					editor.dropDown.hide();

					for(var x in elements) {
						if(!elements.hasOwnProperty(x))
							continue;

						if(elements[x] == "-") {
							var separator = $("<div/>").addClass("row_separator");
							editor.dropDown.append(separator);
							continue;
						}

						var cmnd = editor.editorsContainer.cmnds[elements[x]];

						if(!cmnd || (cmnd.condition && !cmnd.condition(editor)))
							continue;

						var icon = cmnd.icon ? "<i class='" + cmnd.icon + "'></i>" : "";
						var row = $("<div/>").addClass("row" + elements[x]).html(_(cmnd.label) + " " + icon);
						row.data("action", elements[x]);

						editor.dropDown.append(row);

						row.on("mousedown", function() {
							var el = $(this);

							var args = [editor];
							editor.editorsContainer.cmnds[el.data("action")].action.apply(el[0], args);
							//$(editor).blur();
							setTimeout(function() {
								$.editIt.ui.dropDown.hide(editor);
								//$.editIt.ui.toolBar.draw(editor);
								//$.editIt.util.expandSelection();
								$(editor).focus();
								$.editIt.util.restoreSelection(editor.actualSelection);
								$.editIt.util.updateTextarea(editor);
							}, 100);
						});

					}

					$(buttonOpener).after(editor.dropDown);
					editor.dropDown.slideDown(200);
					var isOutOfWindow = (editor.dropDown.offset().left + editor.dropDown.outerWidth()) > ($(window).width() + $(window).scrollLeft());

					if(isOutOfWindow)
						editor.dropDown.css({
							left: ($(window).width() + $(window).scrollLeft()) - (editor.dropDown.offset().left + editor.dropDown.outerWidth()) - 10
						});

					$(d).one("blur, mousedown", editor, function(e) {
						if(!$(e.target).is(editor.dropDown[0].opener) && !$(e.target).parents().is(editor.dropDown))
							$.editIt.ui.dropDown.hide(editor);
					});

				},

				/**
				 * Hide the dropdown
				 * @method hide
				 * @param {object} editor
				 */
				hide: function(editor) {
					editor.dropDown.slideUp(200, function() {
						$(this).remove();
						$.editIt.ui.toolBar.dropDownOpened = false;
					});
				}

			}

		},

		/** @namespace */
		i18n: {

			/**
			 * Load the i18n json file
			 * @method loadfile
			 *
			 * @param {object} obj
			 * The object that contains the i18n definition
			 *
			 * @param {boolean} trigger
			 * if the event should be triggered
			 *
			 */
			loadfile: function(obj, trigger) {

				if(obj.i18n) {

					for(var lang in obj.i18n) {

						if(!obj.i18n.hasOwnProperty(lang))
							continue;

						$.editIt.i18n[lang] = $.editIt.i18n[lang] || {};
						$.extend($.editIt.i18n[lang], obj[lang]);
					}

				} else {

					var path = obj ? obj.path : "";
					$.getJSON(path + "i18n.json?_={{ build }}", function(i18n) {
						for(var lang in i18n) {
							if(!i18n.hasOwnProperty(lang))
								continue;
							$.editIt.i18n[lang] = $.editIt.i18n[lang] || {};
							$.extend($.editIt.i18n[lang], i18n[lang]);
						}

						$.editIt.i18n.loaded = true;

						if(trigger)
							$(d).trigger("i18nReady");
						// console.info( "editIt:: ", ( obj.name || "editIt" ) + " - i18n.json file loaded" );
					}).fail(function(err) {
						console.warn("editIt:: i18n for " + obj.name + " - i18n.json?_={{ build }}" + " faild to load ", err.statusText);
					});

				}

			},

			/**
			 * translate the labels in the correct language
			 * @method setLabel
			 * @param {string} label
			 * @param {array} variables
			 */
			setLabel: function(label, variables) {
				var i18n = $.editIt.i18n;
				var lang = i18n.lang || (navigator.language || navigator.userLanguage);
				var trans = label;

				if(i18n[lang] && i18n[lang][label]) {
					trans = i18n[lang][label];
				}

				if(variables) {

					if(typeof variables === 'string')
						variables = [variables];

					for(var x = 0; x < variables.length; x++) {
						trans = trans.replace("%%", variables[x]);
					}
				}

				return trans;
			},

			translate: function(DOMElement) {
				var replacer = function(str) {
					str = str.replace("[[", "").replace("]]", "");
					return _(str, null);
				};
				var text = DOMElement.html();
				if(text)
					DOMElement.html(text.replace(/\[\[([^>\]\]]+)\]\]/g, replacer));
			}
		},

		/**
		 *
		 * Utilities
		 * @namespace
		 */
		util: {

			/**
			 * Check if the passed element is empty
			 * @method isEmpty
			 * @param {object} element
			 * @return boolean
			 */
			isEmpty: function(element) {

				var clearContent = $.editIt.util.getClearContent(element);
				clearContent = clearContent.replace(/<br\/>/g, "").replace(/&nbsp;/g, "");

				return $.trim(clearContent).length == 0 && $(element).html().toUpperCase().indexOf("IMG") < 0;
			},

			clearEmptyTags: function(editor) {
				var selfClosingTags = ["AREA", "BASE", "BASEFONT", "BR", "COL", "FRAME", "HR", "IMG", "INPUT", "LINK", "META", "PARAM", "TD", "TH", "TR", "TABLE", "TBODY", "THEAD", "TFOOT"];
				$("*", editor).filter(function() {
					return $(this).children().length == 0 && $(this).text().trim().length == 0 && selfClosingTags.indexOf(this.tagName.toUpperCase()) < 0 && !$(this).is("[data-editable]")
				}).remove();
			},

			/**
			 *
			 * @param element
			 * @returns {*}
			 */
			getContent: function(element) {

				if(!element)
					return;

				var tmp = $(element).clone();

				$.editIt.util.clearEmptyTags(tmp);

				var source = tmp.html();
				if(source.length) {
					source = source.replace(/<!--([\s\S]*?)-->/g, "");
					source = source.replace(/<br>/g, "<br/>");
					source = source.replace(/\n/g, "");
				}
				return source;
			},

			/**
			 * Clean up the HTML content for the passed element
			 * @method getClearContent
			 * @param {object} element
			 * @return source
			 */
			getClearContent: function(element) {

				if(!element || $(element).length == 0)
					return;

				var tmp = $(element).clone();

				$(".editIt-placeHolderText", tmp).remove();
				$("[id*=editIt_]", tmp).removeAttr("id");
				$(".editIt-main-buttonBar", tmp).remove();
				$("[data-editable]", tmp).removeClass("editIt").removeAttr("contenteditable data-editable data-toolbar data-enablesourcemode spellCheck style");
				$(".editIt-wrapper", tmp).removeClass("inEditMode");
				$(".focusedEditor", tmp).removeClass("focusedEditor");
				$("[class*=-toolbar]", tmp).remove();
				$("[class*=-buttonBar]", tmp).remove();
				$("script", tmp).remove();
				$(".editIt-resizer", tmp).remove();
				$("meta", tmp).remove();

				//$("[class]", tmp).removeAttr("class");

				$("img", tmp).removeAttr("width").removeAttr("height").css({
					maxWidth: "100%"
				});

				$.editIt.util.clearEmptyTags(tmp);

				var source = tmp.html();
				if(source.length) {
					source = source.replace(/<!--([\s\S]*?)-->/g, "");
					source = source.replace(/<br>/g, "<br/>");
					source = source.replace(/\n/g, "");
				}
				return source;
			},

			/**
			 * Update the editor referring textarea
			 * @method updateTextarea
			 * @param {object} editor
			 */
			updateTextarea: function(editor, clearContent) {

				if(clearContent == undefined)
					clearContent = true;

				var $editor = $(editor);

				if(!$editor.length)
					return;

				editor = $editor.get(0);

				var editableElement = $editor;
				if(!$.editIt.plugins.modulesManager) { // If the modulesManager plugin is not active then initialize as single module
					editableElement = $(editor.editorsContainer).find("[data-editable]").first();
				}

				var c = clearContent ? $.editIt.util.getClearContent(editableElement) : $.editIt.util.getContent(editableElement);
				editor.editorsContainer.textarea.val(c);
			},

			/**
			 * Destroy the editIt instance of the editor
			 * @method setUneditable
			 * @param {object} editor
			 */
			setUneditable: function(editor) {

				var removeEv = $.Event("editIt-remove");
				removeEv.editor = editor;
				$(editor).trigger(removeEv);

				$.editIt.ui.toolBar.clear(editor);

				$("[id*=editIt_]", editor).removeAttr("id");
				$("[data-editable]", editor).removeClass("editIt").removeAttr("contenteditable").off();
				$(".editIt-wrapper", editor).removeClass("inEditMode fixed-tool editIt-wrapper");
				$(editor).removeClass("inEditMode fixed-tool editIt-wrapper");

				$("[class*=-toolbar]", editor).remove();
				$("[class*=-buttonBar]", editor).remove();

				//$.editIt.ui.mainButtonBar.clear(editor);
				//$.editIt.util.updateTextarea( editor );
				$(editor).blur();
			},

			/**
			 * Paste content at carret position
			 * @param html
			 */
			pasteHtmlAtCaret: function(html) {
				var sel, range;
				if(window.getSelection) {
					// IE9 and non-IE
					sel = window.getSelection();
					if(sel.getRangeAt && sel.rangeCount) {
						range = sel.getRangeAt(0);
						range.deleteContents();

						// Range.createContextualFragment() would be useful here but is
						// non-standard and not supported in all browsers (IE9, for one)
						var el = d.createElement("div");
						el.innerHTML = html;
						var frag = d.createDocumentFragment(),
							node, lastNode;
						while((node = el.firstChild)) {
							lastNode = frag.appendChild(node);
						}
						range.insertNode(frag);

						// Preserve the selection
						if(lastNode) {
							range = range.cloneRange();
							range.setStartAfter(lastNode);
							range.collapse(true);
							sel.removeAllRanges();
							sel.addRange(range);
						}
					}
				} else if(d.selection && d.selection.type != "Control") {
					// IE < 9
					d.selection.createRange().pasteHTML(html);
				}
			},

			/**
			 * Overwrite the default paste action
			 * @method handlePaste
			 * @param {event} e
			 * @param {object} editor
			 */
			handlePaste: function(e, editor) {
				e = (e.originalEvent || e);
				var text = "";
				editor.actualSelection = $.editIt.util.saveSelection();

				/**
				 * Apply the paste filters to clean up the HTML
				 * @method processPaste
				 * @param {string} text
				 * @return string
				 */
				function processPaste(text) {
					//Remove images if blockImagesOnPaste
					if(editor.editorsContainer.opt.blockImagesOnPaste) {
						var tmp = $("<div/>").html(text);
						var images = tmp.find("img");
						if(images.length) {
							$.editIt.ui.alert.draw(editor, _("<b>Attention!</b><br><br> Images insertion has been disabled in this editor.<br><br> <b>%%</b> images have been removed from the pasted source.", [images.length]));
							images.remove();
							text = tmp.html();
							tmp.remove();
						}
					}
					// get text representation of clipboard
					if(editor.editorsContainer.opt.pasteAs == "text" || e.shiftKey) {
						text = $(text).text();
					} else if(editor.editorsContainer.opt.pasteAs == "cleanHTML") {
						text = $.htmlClean(text);
					}
					return text;
				}

				if(window.clipboardData) {
					text = window.clipboardData.getData("Text");
				} else if(e && e.clipboardData && e.clipboardData.getData) { // Webkit - get data from clipboard, put into editdiv, cleanup, then cancel event

					if(/text\/html/.test(e.clipboardData.types)) {
						text = e.clipboardData.getData('text/html');
					} else {
						window.pasteTarget = $(e.target).parents(".editIt");
						window.selection = window.getSelection();
						window.range = window.selection.getRangeAt(0);

						/**
						 * Get the content of the pasted text
						 * @method getPasteContent
						 * @return CallExpression
						 */
						$.fn.getPasteContent = function() {
							var sanitizeDiv = this;

							return setTimeout(function() {
								var lastNode, node, range, selection;
								selection = window.selection;
								range = window.range;

								$(window.target).focus();
								selection.removeAllRanges();
								selection.addRange(range);
								range.deleteContents();
								var sanitizedHtml = d.createDocumentFragment();
								while(node = sanitizeDiv.firstChild) {
									lastNode = sanitizedHtml.appendChild(node);
								}
								range.insertNode(sanitizedHtml);
								if(lastNode) {
									range = range.cloneRange();
									range.setStartAfter(lastNode);
									range.collapse(false);
									selection.removeAllRanges();
									selection.addRange(range);

									range.select();
								}

								$(".editIt-placeHolderText", editor).remove();
								setTimeout(function() {
									$.editIt.util.updateTextarea(editor);
								}, 100);

								$.editIt.util.pasteHtmlAtCaret(processPaste(sanitizeDiv.html()));
								sanitizeDiv.remove();

								$(editor).focus();

							}, 100);
						};

						var tmp = $("<div/>").attr({
							id: "pasteTmp",
							contenteditable: true
						}).css({
							position: "fixed",
							top: "40%",
							bottom: "40%",
							left: "40%",
							right: "40%",
							background: "red",
							opacity: 0
						});

						$("body").append(tmp);

						tmp.on("focus", function() {
							$(this).getPasteContent();
						});

						tmp.html('').focus();
						return;

					}
				}

				if(!editor.editorsContainer.opt.pasteAs)
					return;

				e.stopPropagation();
				e.preventDefault();

				if(editor.editorsContainer.opt.pasteAs == "none") {
					return;
				}

				// insert text manually
				//d.execCommand( "insertHTML", false, processPaste( text ) );
				$.editIt.util.pasteHtmlAtCaret(processPaste(text));
				$(editor).focus();

			},

			/**
			 * Add the source button
			 * @method enableSourceMode
			 */
			enableSourceMode: function() {

				var editor = this;
				var $editor = $(editor);

				if($(editor.editorsContainer).is(editor)) {

					$.editIt.ui.mainButtonBar.addButton(editor, {
						label: _("Edit source"),
						icon: "editIt-icon-code",
						className: "only-icon small text-modality-black",
						/**
						 * Apply the source code action
						 * @method action
						 */
						action: function() {
							$.editIt.util.openSourceMode(editor);
						}
					});

				} else {
					editor.sourceModeBtn = $.editIt.util.drawButton("Edit source", "only-icon", "editIt-icon-code", function() {
						$.editIt.util.openSourceMode(editor)
					});
					editor.buttonBar.append(editor.sourceModeBtn);
				}
			},

			openSourceMode: function(editor) {

				var $editor = $(editor);
				$.editIt.util.setUneditable(editor.editorsContainer);

				if(editor.mainButtonBar)
					editor.mainButtonBar.remove();

				$editor.addClass("inSourceMode");
				$("body").addClass("sourceMode");

				editor.isInSourceMode = true;
				var source = $.editIt.util.getContent(editor);
				source = vkbeautify.xml(source, 2);

				if(editor.editorsContainer.buttonBar)
					editor.editorsContainer.buttonBar.remove();

				if(editor.sourceModeBtn)
					editor.sourceModeBtn.remove();

				$("#HTML_" + editor.id).remove();

				var overlay = $("<div/>").addClass("editIt-source-overlay").css({
					position: "fixed",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					margin: "auto"
				});

				var sourceContainer = $("<div/>").addClass("editIt-source").attr({
					id: "HTML_" + editor.id
				});

				var closeSwitcher = $.editIt.util.drawButton("Close", "white align-right only-icon", "editIt-icon-close", function() {
					editor.isInSourceMode = false;

					var opt = editor.editorsContainer.opt;
					$(editor.editorsContainer).editIt(opt);

					$editor.removeClass("inSourceMode");
					$("body").removeClass("sourceMode");

					sourceContainer.removeClass("in");
					overlay.delay(10).removeClass("in");

					setTimeout(function() {
						sourceContainer.remove();
						overlay.remove();
					}, 1000);

				});

				var textArea = typeof ace == "object" ? $("<pre/>") : $("<textarea/>");
				textArea.attr({
					id: "sourcemodeEditor"
				});

				textArea.css({
					position: "absolute",
					left: 0,
					top: 0,
					bottom: 0,
					right: 0,
					padding: 20
				});

				sourceContainer.append(textArea);
				sourceContainer.data("owner", editor);
				$("body").append(overlay).append(sourceContainer);
				sourceContainer.prepend(closeSwitcher);

				setTimeout(function() {
					sourceContainer.addClass("in");
					overlay.addClass("in");
					textArea.focus();

					$.editIt.ui.toolBar.clear(editor);

					if(typeof ace == "object") {
						setTimeout(function() {

							ace.config.set("basePath", $.editIt.editIt_root + "/inc/ace");
							ace.require("ace/ext/language_tools");
							var aceEditor = ace.edit("sourcemodeEditor");
							aceEditor.$blockScrolling = Infinity;

							aceEditor.setTheme("ace/theme/twilight");
							aceEditor.session.setMode("ace/mode/html");
							aceEditor.getSession().setUseWrapMode(true);
							aceEditor.setShowInvisibles(false);
							aceEditor.setOptions({
								autoScrollEditorIntoView: true,
								enableBasicAutocompletion: true,
								enableSnippets: true,
								enableLiveAutocompletion: false,
								fontSize: "16px"
							});

							aceEditor.getSession().setValue(source);
							aceEditor.getSession().on('change', function() {

								aceEditor.find('script', {
									wholeWord: true
								});

								aceEditor.replace('noscript');

								var c = aceEditor.getSession().getValue();
								$editor.html(c);
							});
						}, 800);

					} else {
						textArea.html(source);
						textArea.on('change', function() {
							$editor.html(textArea.val());
						});
					}
				}, 100);

			},
			/**
			 * Draw buttons
			 * @method drawButton
			 * @param {string} label
			 * @param {string} className
			 * @param {string} icon
			 * @param {function} action
			 * @param {object} data
			 * @param {boolean} onlyIcon
			 *
			 * @return button
			 */
			drawButton: function(label, className, icon, action, data, onlyIcon) {

				className = className ? " " + className : "";
				icon = icon ? " " + icon : "";
				var button = $("<span/>").attr({
					label: onlyIcon ? "" : _(label),
					title: onlyIcon ? _(label) : "",
					idx: ""
				}).addClass("editIt-button" + className + icon + (onlyIcon ? " only-icon" : ""));

				button.unselectable();

				if(action)
					button.on("click", function(e) {
						action.apply(this, [e]);
						e.preventDefault();
						return false;
					});

				if(data)
					button.data(data.key, data.value);

				return button;

			},

			/**
			 * Get the selected text coordinates
			 * @method getSelectionCoords
			 * @return ObjectExpression
			 */
			getSelectionCoords: function() {
				var sel = d.selection,
					range, rect;
				var x = 0,
					y = 0,
					w = 0;

				if(sel) {

					if(sel.type != "Control") {
						range = sel.createRange();
						range.collapse(false);
						x = range.boundingLeft;
						y = range.boundingTop;
						w = range.right - range.left;
					}
				} else if(window.getSelection) {
					sel = window.getSelection();
					if(sel.rangeCount) {
						range = sel.getRangeAt(0);
						if(range.getClientRects) {
							if(range.getClientRects().length > 0) {
								var r = range.getClientRects();
								x = r.length == 1 ? r[0].left : r[1].left;
								y = r.length == 1 ? r[0].top : r[1].top;
								w = r.length == 1 ? r[0].width : r[1].width;
								var parentWidth = $(sel.anchorNode.parentNode).outerWidth();
								if(w > parentWidth)
									w = parentWidth;
							}
						}
					}
				}

				var scrollLeft = $(window).scrollLeft();
				var scrollTop = $(window).scrollTop();

				return {
					left: x + scrollLeft,
					top: y + scrollTop,
					width: w
				};

			},

			getMouseCoords: function(e) {

				var x = e.clientX;
				var y = e.clientY;

				var scrollLeft = $(window).scrollLeft();
				var scrollTop = $(window).scrollTop();

				return {
					left: x + scrollLeft,
					top: y + scrollTop
				};

			},

			/**
			 * Get the selected text
			 * @method getSelectedText
			 * @return string
			 */
			getSelectedText: function() {
				if(window.getSelection) {
					return window.getSelection().toString();
				} else if(d.selection) {
					return d.selection.createRange().text;
				}
				return '';
			},

			/**
			 * Get the HTML of the selection
			 * @method getSelectionHtml
			 * @return string
			 */
			getSelectionHtml: function() {
				var html = "";
				if(typeof window.getSelection != "undefined") {
					var sel = window.getSelection();
					if(sel.rangeCount) {
						var container = d.createElement("div");
						for(var i = 0, len = sel.rangeCount; i < len; ++i) {
							container.appendChild(sel.getRangeAt(i).cloneContents());
						}
						html = container.innerHTML;
					}
				} else if(typeof d.selection != "undefined") {
					if(d.selection.type == "Text") {
						html = d.selection.createRange().htmlText;
					}
				}
				return html;
			},

			expandSelection: function(editor) {

				if(!editor)
					editor = $.editIt.focusedEditor;

				var selection = document.getSelection(); // get selection
				var node = selection.anchorNode; // get containing node
				//while (node && node.nodeName !== 'A'){ // find closest link - might be self

				if(!node)
					return;

				node = node.parentNode;
				// }

				if(node) { // if link found
					var range = document.createRange(); //create a new range
					range.selectNodeContents(node); // set range to content of link
					range.collapse(false);
					selection.addRange(range); // change the selection to the link
					//document.execCommand('unlink'); // unlink it
					if(editor)
						editor.actualSelection = $.editIt.util.saveSelection();

				}
			},

			/**
			 * Get the selection element
			 * @method getSelectedElement
			 * @return object
			 */
			getSelectedElement: function() {

				var sel, containerNode;

				sel = window.getSelection();

				if(sel.focusNode) {
					containerNode = sel.focusNode.children ? sel.focusNode.children[0] : sel.focusNode.actualTag || sel.focusNode.parentNode;
				}

				if(sel.rangeCount > 0)
					containerNode = sel.getRangeAt(0).commonAncestorContainer;

				while(containerNode) {

					if(containerNode.nodeType == 1) {
						return containerNode;
					}

					containerNode = containerNode.parentNode;
				}
				return false;

			},

			/**
			 * Check if the selection is inside a specific DOM element and return the element
			 * @method isSelectionInsideElement
			 * @param tagNames
			 * @return object
			 */
			isSelectionInsideElement: function(tagNames, justOneLevelUp) {

				if(typeof justOneLevelUp == "undefined")
					justOneLevelUp = false;

				var sel, containerNode;
				tagNames = tagNames.toUpperCase();
				/**
				 *  trim each element in the array
				 */
				tagNames = tagNames.split(",").map(function(e) {
					return e.trim();
				});

				sel = window.getSelection();

				if(sel.rangeCount > 0) {
					containerNode = sel.getRangeAt(0).commonAncestorContainer;
				}

				if(sel.focusNode) {
					containerNode = sel.focusNode.actualTag ? sel.focusNode.actualTag : sel.focusNode.children ? sel.focusNode.children[0] : sel.focusNode.parentNode;
				}

				var c = 0;
				while(containerNode) {

					if(containerNode && containerNode.nodeType == 1 && tagNames.indexOf(containerNode.tagName.toUpperCase()) > -1) {
						return containerNode;
					}
					if(!(justOneLevelUp && c == 1)) {
						containerNode = containerNode.parentNode;
					} else {
						return false;
					}
					c++;
				}

				return false;
			},

			isOrContains: function(node, container) {
				while(node) {
					if(node === container) {
						return true;
					}
					node = node.parentNode;
				}
				return false;
			},

			elementContainsSelection: function(el) {
				var sel;
				if(window.getSelection) {
					sel = window.getSelection();
					if(sel.rangeCount > 0) {
						for(var i = 0; i < sel.rangeCount; ++i) {
							if(!$.editIt.util.isOrContains(sel.getRangeAt(i).commonAncestorContainer, el)) {
								return false;
							}
						}
						return true;
					}
				} else if((sel = document.selection) && sel.type != "Control") {
					return isOrContains(sel.createRange().parentElement(), el);
				}
				return false;
			},

			/**
			 * setCursorAfterElement
			 * doesn't work on images
			 *
			 * @param ele
			 */
			setCursorAfterElement: function(ele) {
				return;
				if(!ele.nextElementSibling) {
					var dummyElement = document.createElement('a')
					dummyElement.appendChild(document.createTextNode('\u00A0'))
					ele.parentNode.appendChild(dummyElement)
				}
				var nextElement = ele.nextElementSibling
				nextElement.tabIndex = 0
				nextElement.focus()
				var r = document.createRange();
				r.setStart(nextElement.childNodes[0], 1);
				r.setEnd(nextElement.childNodes[0], 1);

				var s = window.getSelection();
				s.removeAllRanges();
				s.addRange(r);
				//document.execCommand("delete", false, null);
			},

			/**
			 * persist the current selection
			 * @method saveSelection
			 * @return object
			 */
			saveSelection: function() {
				var sel;

				if(window.getSelection) {
					sel = window.getSelection();
					if(sel.getRangeAt && sel.rangeCount) {
						return sel.getRangeAt(0);
					}
				} else if(d.selection && d.selection.createRange) {
					return d.selection.createRange();
				}
				return null;
			},

			/**
			 * Restore the saved selection
			 * @method restoreSelection
			 * @param range
			 */
			restoreSelection: function(range) {
				var sel;

				if(range) {
					if(window.getSelection) {
						sel = window.getSelection();
						sel.removeAllRanges();
						sel.addRange(range);
					} else if(d.selection && range.select) {
						range.select();
					}
				}
			},

			/**
			 * Select a specific element content
			 * @method selectElementContents
			 * @param element
			 */
			selectElementContents: function(element) {
				var range = d.createRange();
				range.selectNodeContents(element);
				var sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				return sel;
			},
			/**
			 * change Font Size
			 * @param size
			 * @param unit
			 *
			 * todo: On Safari doesn't keep selection
			 */
			changeFontSize: function(size, unit) {
				var selection = window.getSelection();
				var range = selection.getRangeAt(0);
				newNode = document.createElement("span");
				newNode.style.fontSize = size + unit;
				newNode.appendChild(document.createTextNode(document.getSelection()));
				range.deleteContents();
				range.insertNode(newNode);
				$.editIt.util.selectElementContents(newNode);
				//$.editIt.util.expandSelection();
			}
		},

		/**
		 * Get the path to the plugin
		 * @method getRootPath
		 * @return string
		 */
		getRootPath: function() {
			var scripts = d.querySelectorAll('script[src]');
			var currentScript = scripts[scripts.length - 1].src;
			var currentScriptChunks = currentScript.split('/');
			var currentScriptFile = currentScriptChunks[currentScriptChunks.length - 1];
			var rootPath = currentScript.replace(currentScriptFile, '').replace(/inc\/$/i, "");

			return rootPath;
		},

		guid: function() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}

			var guid = s4() + '-' + s4() + '-' + s4() + '-' + s4();
			return guid;
		}

	};

	$.fn.editIt = $.editIt.init;

	/**
	 * Set the HTML element unselectable
	 * @method unselectable
	 * @return CallExpression
	 */
	$.fn.unselectable = function() {
		return this.each(function() {
			$(this).css({
				"-moz-user-select": "none",
				"-webkit-user-select": "none",
				"user-select": "none"
			}).attr("unselectable", "on");
		});
	};

	/**
	 * restore the element selectable
	 * @method selectable
	 * @return CallExpression
	 */
	$.fn.selectable = function() {
		return this.each(function() {
			$(this).css({
				"-moz-user-select": "text",
				"-webkit-user-select": "text",
				"user-select": "text"
			}).removeAttr("unselectable");
		});
	};

	/**
	 * Create a UID from a string
	 * @method asId
	 * @return CallExpression
	 */
	String.prototype.asId = function() {
		return this.replace(/ /g, "-").replace(/[^a-zA-Z0-9_-]+/g, '');
	};

	/************************************************************************************* Prepare plugin ****/

	$.editIt.editIt_root = $.editIt.getRootPath();
	$.editIt.defaults.lic = $.editIt.editIt_root + "editIt.license";
	$.editIt.defaults.path = $.editIt.editIt_root + "inc/";
	$.editIt.plugins.path = $.editIt.editIt_root + "plug-ins/";

	$('<link/>', {
		rel: 'stylesheet',
		href: $.editIt.editIt_root + "css/editIt.css",
		id: "editIt-style"
	}).prependTo('head');

	/**
	 * Load Ace.js
	 * for the view source feature
	 */
	$.when($.get($.editIt.editIt_root + "/inc/ace/ace.js")).done(function() {
		$.get($.editIt.editIt_root + "/inc/ace/ext-language_tools.js");
	});
	$.get($.editIt.editIt_root + "/inc/ace/vkbeautify.js");

	/**
	 * Load i18n json file
	 */
	$.editIt.i18n.loadfile($.editIt.defaults, true);

})(jQuery, document);

/**
 * @method _
 * @param {string} label
 * @param {string} variables
 * @return CallExpression
 */
function _(label, variables) {
	return $.editIt.i18n.setLabel(label, variables);
}
;

!function(a){function b(a,b,c,d){if(a.tag.format&&c.length>0){c.push("\n");for(var e=0;d>e;e++)c.push("	")}}function c(d,e){var f=[],g=0==d.attributes.length,h=0;if(d.tag.isComment)e.allowComments&&(f.push("<!--"),f.push(d.tag.rawAttributes),f.push(">"),e.format&&b(d,e,f,h-1));else{var i=d.tag.render&&(0==e.allowedTags.length||a.inArray(d.tag.name,e.allowedTags)>-1)&&(0==e.removeTags.length||-1==a.inArray(d.tag.name,e.removeTags));if(!d.isRoot&&i&&(f.push("<"),f.push(d.tag.name),a.each(d.attributes,function(){if(-1==a.inArray(this.name,e.removeAttrs)){var b=RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value),c=b[2],g=b[1]||"'";"class"==this.name&&e.allowedClasses.length>0&&(c=a.grep(c.split(" "),function(b){return a.grep(e.allowedClasses,function(c){return c==b||c[0]==b&&(1==c.length||a.inArray(d.tag.name,c[1])>-1)}).length>0}).join(" ")),null!=c&&(c.length>0||a.inArray(this.name,d.tag.requiredAttributes)>-1)&&(f.push(" "),f.push(this.name),f.push("="),f.push(g),f.push(c),f.push(g))}})),d.tag.isSelfClosing)i&&f.push(" />"),g=!1;else if(d.tag.isNonClosing)g=!1;else{if(!d.isRoot&&i&&f.push(">"),h=e.formatIndent++,d.tag.toProtect)n=a.htmlClean.trim(d.children.join("")).replace(/<br>/gi,"\n"),f.push(n),g=0==n.length;else{for(var n=[],p=0;p<d.children.length;p++){var q=d.children[p],r=a.htmlClean.trim(o(l(q)?q:q.childrenToString()));m(q)&&p>0&&r.length>0&&(j(q)||k(d.children[p-1]))&&n.push(" "),l(q)?r.length>0&&n.push(r):(p!=d.children.length-1||"br"!=q.tag.name)&&(e.format&&b(q,e,n,h),n=n.concat(c(q,e)))}e.formatIndent--,n.length>0&&(e.format&&"\n"!=n[0]&&b(d,e,f,h),f=f.concat(n),g=!1)}!d.isRoot&&i&&(e.format&&b(d,e,f,h-1),f.push("</"),f.push(d.tag.name),f.push(">"))}if(!d.tag.allowEmpty&&g)return[]}return f}function d(b,c){return f(b,function(b){return a.inArray(b.tag.nameOriginal,c)>-1})}function e(a){return f(a,function(a){return a.isRoot||!a.tag.isInline})}function f(a,b,c){c=c||1;var d=a[a.length-c];return b(d)?!0:a.length-c>0&&f(a,b,c+1)?(a.pop(),!0):!1}function g(a){return a?(this.tag=a,this.isRoot=!1):(this.tag=new i("root"),this.isRoot=!0),this.attributes=[],this.children=[],this.hasAttribute=function(a){for(var b=0;b<this.attributes.length;b++)if(this.attributes[b].name==a)return!0;return!1},this.childrenToString=function(){return this.children.join("")},this}function h(a,b){return this.name=a,this.value=b,this}function i(b,c,d,e){return this.name=b.toLowerCase(),this.nameOriginal=this.name,this.render=!0,this.init=function(){if("--"==this.name?(this.isComment=!0,this.isSelfClosing=!0,this.format=!0):(this.isComment=!1,this.isSelfClosing=a.inArray(this.name,v)>-1,this.isNonClosing=a.inArray(this.name,w)>-1,this.isClosing=void 0!=c&&c.length>0,this.isInline=a.inArray(this.name,p)>-1,this.disallowNest=a.inArray(this.name,r)>-1,this.requiredParent=t[a.inArray(this.name,t)+1],this.allowEmpty=e&&a.inArray(this.name,e.allowEmpty)>-1,this.toProtect=a.inArray(this.name,u)>-1,this.format=a.inArray(this.name,q)>-1||!this.isInline),this.rawAttributes=d,this.requiredAttributes=y[a.inArray(this.name,y)+1],e){if(e.tagAttributesCache||(e.tagAttributesCache=[]),-1==a.inArray(this.name,e.tagAttributesCache)){for(var b=x[a.inArray(this.name,x)+1].slice(0),f=0;f<e.allowedAttributes.length;f++){var g=e.allowedAttributes[f][0];(1==e.allowedAttributes[f].length||a.inArray(this.name,e.allowedAttributes[f][1])>-1)&&-1==a.inArray(g,b)&&b.push(g)}e.tagAttributesCache.push(this.name),e.tagAttributesCache.push(b)}this.allowedAttributes=e.tagAttributesCache[a.inArray(this.name,e.tagAttributesCache)+1]}},this.init(),this.rename=function(a){this.name=a,this.init()},this}function j(b){for(;n(b)&&b.children.length>0;)b=b.children[0];if(!l(b))return!1;var c=o(b);return c.length>0&&a.htmlClean.isWhitespace(c.charAt(0))}function k(b){for(;n(b)&&b.children.length>0;)b=b.children[b.children.length-1];if(!l(b))return!1;var c=o(b);return c.length>0&&a.htmlClean.isWhitespace(c.charAt(c.length-1))}function l(a){return a.constructor==String}function m(a){return l(a)||a.tag.isInline}function n(a){return a.constructor==g}function o(a){return a.replace(/&nbsp;|\n/g," ").replace(/\s\s+/g," ")}a.fn.htmlClean=function(b){return this.each(function(){this.value?this.value=a.htmlClean(this.value,b):this.innerHTML=a.htmlClean(this.innerHTML,b)})},a.htmlClean=function(b,f){f=a.extend({},a.htmlClean.defaults,f),f.allowEmpty=s.concat(f.allowEmpty);var j,k=/(<(\/)?(\w+:)?([\w]+)([^>]*)>)|<!--(.*?--)>/gi,m=/([\w\-]+)\s*=\s*(".*?"|'.*?'|[^\s>\/]*)/gi,n=new g,o=[n],p=n;f.bodyOnly&&(j=/<body[^>]*>((\n|.)*)<\/body>/i.exec(b))&&(b=j[1]),b=b.concat("<xxx>");for(var q;j=k.exec(b);){var r=j[6]?new i("--",null,j[6],f):new i(j[4],j[2],j[5],f),t=b.substring(q,j.index);if(t.length>0){var u=p.children[p.children.length-1];p.children.length>0&&l(u=p.children[p.children.length-1])?p.children[p.children.length-1]=u.concat(t):p.children.push(t)}if(q=k.lastIndex,r.isClosing)d(o,[r.name])&&(o.pop(),p=o[o.length-1]);else{for(var v,w=new g(r);v=m.exec(r.rawAttributes);){if("style"==v[1].toLowerCase()&&f.replaceStyles)for(var x=!r.isInline,y=0;y<f.replaceStyles.length;y++)f.replaceStyles[y][0].test(v[2])&&(x||(r.render=!1,x=!0),p.children.push(w),o.push(w),p=w,r=new i(f.replaceStyles[y][1],"","",f),w=new g(r));null!=r.allowedAttributes&&(0==r.allowedAttributes.length||a.inArray(v[1],r.allowedAttributes)>-1)&&w.attributes.push(new h(v[1],v[2]))}a.each(r.requiredAttributes,function(){var a=this.toString();w.hasAttribute(a)||w.attributes.push(new h(a,""))});for(var z=0;z<f.replace.length;z++)for(var A=0;A<f.replace[z][0].length;A++){var B="string"==typeof f.replace[z][0][A];if(B&&f.replace[z][0][A]==r.name||!B&&f.replace[z][0][A].test(j)){r.rename(f.replace[z][1]),z=f.replace.length;break}}var C=!0;if(p.isRoot||(p.tag.isInline&&!r.isInline?(C=e(o))&&(p=o[o.length-1]):p.tag.disallowNest&&r.disallowNest&&!r.requiredParent?C=!1:r.requiredParent&&(C=d(o,r.requiredParent))&&(p=o[o.length-1])),C)if(p.children.push(w),r.toProtect)for(var D;D=k.exec(b);){var E=new i(D[4],D[1],D[5],f);if(E.isClosing&&E.name==r.name){w.children.push(RegExp.leftContext.substring(q)),q=k.lastIndex;break}}else r.isSelfClosing||r.isNonClosing||(o.push(w),p=w)}}return a.htmlClean.trim(c(n,f).join(""))},a.htmlClean.defaults={bodyOnly:!0,allowedTags:[],removeTags:["basefont","center","dir","font","frame","frameset","iframe","isindex","menu","noframes","s","strike","u"],allowedAttributes:[],removeAttrs:["width","height","style"],allowedClasses:[],format:!1,formatIndent:0,replace:[[["b","big"],"strong"],[["i"],"em"]],replaceStyles:[[/font-weight:\s*bold/i,"strong"],[/font-style:\s*italic/i,"em"],[/vertical-align:\s*super/i,"sup"],[/vertical-align:\s*sub/i,"sub"]],allowComments:!1,allowEmpty:[]},a.htmlClean.trim=function(b){return a.htmlClean.trimStart(a.htmlClean.trimEnd(b))},a.htmlClean.trimStart=function(b){return b.substring(a.htmlClean.trimStartIndex(b))},a.htmlClean.trimStartIndex=function(b){for(var c=0;c<b.length-1&&a.htmlClean.isWhitespace(b.charAt(c));c++);return c},a.htmlClean.trimEnd=function(b){return b.substring(0,a.htmlClean.trimEndIndex(b))},a.htmlClean.trimEndIndex=function(b){for(var c=b.length-1;c>=0&&a.htmlClean.isWhitespace(b.charAt(c));c--);return c+1},a.htmlClean.isWhitespace=function(b){return-1!=a.inArray(b,z)};var p=["a","abbr","acronym","address","b","big","br","button","caption","cite","code","del","em","font","hr","i","input","img","ins","label","legend","map","q","s","samp","select","option","param","small","span","strike","strong","sub","sup","tt","u","var"],q=["address","button","caption","code","input","label","legend","select","option","param"],r=["h1","h2","h3","h4","h5","h6","p","th","td","object"],s=["th","td"],t=[null,"li",["ul","ol"],"dt",["dl"],"dd",["dl"],"td",["tr"],"th",["tr"],"tr",["table","thead","tbody","tfoot"],"thead",["table"],"tbody",["table"],"tfoot",["table"],"param",["object"]],u=[],v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],w=["!doctype","?xml"],x=["?xml",[],"!doctype",[],"a",["accesskey","class","href","name","title","rel","rev","type","tabindex"],"abbr",["class","title"],"acronym",["class","title"],"blockquote",["cite","class"],"button",["class","disabled","name","type","value"],"del",["cite","class","datetime"],"form",["accept","action","class","enctype","method","name"],"iframe",["class","height","name","sandbox","seamless","src","srcdoc","width"],"input",["accept","accesskey","alt","checked","class","disabled","ismap","maxlength","name","size","readonly","src","tabindex","type","usemap","value","multiple"],"img",["alt","class","height","src","width"],"ins",["cite","class","datetime"],"label",["accesskey","class","for"],"legend",["accesskey","class"],"link",["href","rel","type"],"meta",["content","http-equiv","name","scheme","charset"],"map",["name"],"optgroup",["class","disabled","label"],"option",["class","disabled","label","selected","value"],"q",["class","cite"],"script",["src","type"],"select",["class","disabled","multiple","name","size","tabindex"],"table",["class","summary"],"th",["class","colspan","rowspan"],"td",["class","colspan","rowspan"],"textarea",["accesskey","class","cols","disabled","name","readonly","rows","tabindex"],"param",["name","value"],"embed",["height","src","type","width"]],y=[[],"img",["alt"]],z=[" "," ","	","\n","\r","\f"]}(jQuery);;

/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 24/05/17 19.56                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matbicoc@gmail.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.androidStock=!1;jQuery.browser.msie=!1;jQuery.browser.edge=!1;jQuery.browser.ua=nAgt;function isTouchSupported(){var a=nAgt.msMaxTouchPoints,e="ontouchstart"in document.createElement("div");return a||e?!0:!1}
var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows");-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac");-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux");/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5));/Windows/.test(nAgt)&&(a.version="Unknown.Unknown");/Windows NT 5.1/.test(nAgt)&&
(a.version="5.1");/Windows NT 6.0/.test(nAgt)&&(a.version="6.0");/Windows NT 6.1/.test(nAgt)&&(a.version="6.1");/Windows NT 6.2/.test(nAgt)&&(a.version="6.2");/Windows NT 10.0/.test(nAgt)&&(a.version="10.0");/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown");a.name=a.name.toLowerCase();a.major_version="Unknown";a.minor_version="Unknown";"Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1]));return a};
jQuery.browser.os=getOS();jQuery.browser.hasTouch=isTouchSupported();jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",
		jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=
		!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name=
		"Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=
		!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));
-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));
jQuery.browser.version=jQuery.browser.majorVersion;jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt);jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;jQuery.isMobile=jQuery.browser.mobile;jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width();jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);jQuery.mbBrowser=jQuery.browser;
jQuery.browser.versionCompare=function(a,e){if("stringstring"!=typeof a+typeof e)return!1;for(var c=a.split("."),d=e.split("."),b=0,f=Math.max(c.length,d.length);b<f;b++){if(c[b]&&!d[b]&&0<parseInt(c[b])||parseInt(c[b])>parseInt(d[b]))return 1;if(d[b]&&!c[b]&&0<parseInt(d[b])||parseInt(c[b])<parseInt(d[b]))return-1}return 0};
