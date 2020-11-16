		/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
																																																																																																																																																																																																																																																																																																																																										 jquery.mb.components
																																																																																																																																																																																																																																																																																																																																										 
																																																																																																																																																																																																																																																																																																																																										 file: plugin.js
																																																																																																																																																																																																																																																																																																																																										 last modified: 12/24/18 5:59 PM
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
		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var blockTools = {
				name: "blockTools",
				description: "This plugin let you add delete, copy, cut and paste for each editIt block",
				version: "1.0",
				author: "Pupunzi",

				defaults: {},
				dropdownElements: [],

				activate: function(opt) {

					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);

					/**
					 * Check the localStorage for clipboard data
					 */
					$.get(plugin.path + "/inc/jquery.mb.storage.min.js", function() {
						var clipboard = $.mbStorage.get("editItClipboard");
						if(clipboard)
							$.editIt.clipboard = clipboard;
						else
							$.editIt.clipboard = {};
					});

					$(d).on("editIt-mouseup." + plugin.name, function(e) {});

					$(d).on("keyup." + plugin.name, function(e) {
						/**
						 * Press ESC to clean copy or cut actions
						 */
						if(e.keyCode == 27) {
							plugin.clearAction();
						}
					});

					$(d).off("editIt-mouseenter").on("editIt-mouseenter", function(e) {

						var editor = e.editor;

						editor.blockTools = $.editIt.util.drawButton("Block tools", "editIt-block-tool only-icon", "editIt-icon-cog", function() {

							//$.editIt.ui.toolBar.draw( editor );
							$(editor).focus();
							var elements = ["removeBlock", "-", "copyBlock", "cutBlock", "-", "pasteBlockBefore", "pasteBlockAfter"].concat(plugin.dropdownElements);
							$.editIt.ui.dropDown.draw.apply(this, [editor, elements]);
						});

						if(editor.buttonBar && !$(".editIt-block-tool", editor.buttonBar).length) {

							editor.buttonBar.prepend(editor.blockTools);
							editor.blockTools.on("mouseenter", function() {
								$(editor).focus();

								if(!editor.editorsContainer.opt.toolbarIsOnTop)
									$.editIt.ui.toolBar.clear(editor);
							})
						}
					});
				},

				update: function() {
					var plugin = this;
				},

				destroy: function() {
					var plugin = this;
				},

				commands: {
					removeBlock: {
						label: "Delete",
						icon: "editIt-icon-trash-o",
						action: function(editor) {
							var promptContent = "<h2>" + _("Do you really want to delete this content?") + "</h2>";
							$.editIt.ui.prompt.draw(editor, promptContent, null, function() {
								$(editor).remove();
								setTimeout(function() {
									$.editIt.ui.toolBar.clear(editor);
									editor.buttonBar.hide();
								}, 300)

							}, "Delete", "delete", false);
						}
					},

					copyBlock: {
						label: "Copy",
						icon: "editIt-icon-copy",
						action: function(editor) {

							var element = $(editor).clone();
							var tmp = $("<div/>");
							tmp.append(element);
							var clipboardData = $.editIt.util.getContent(tmp);
							$.editIt.clipboard = {
								content: clipboardData
							};
							$.mbStorage.set("editItClipboard", $.editIt.clipboard);

							$(".editIt-copied").removeClass("editIt-copied");
							$(editor).addClass("editIt-copied");
							//$( editor ).blur();
							editor.buttonBar.hide();
						}
					},

					cutBlock: {
						label: "Cut",
						icon: "editIt-icon-cut",
						action: function(editor) {

							var element = $(editor).clone();
							var tmp = $("<div/>");
							tmp.append(element);
							var clipboardData = $.editIt.util.getContent(tmp);
							$.editIt.clipboard = {
								content: clipboardData
							};
							$.mbStorage.set("editItClipboard", $.editIt.clipboard);

							$(".editIt-cutted").removeClass("editIt-cutted");
							$(editor).addClass("editIt-cutted");
							$(editor).blur();
							editor.buttonBar.hide();
						}
					},

					pasteBlockBefore: {
						label: "Paste before",
						icon: "editIt-icon-clipboard",
						condition: function(editor) {
							return $.editIt.clipboard && !$.isEmptyObject($.editIt.clipboard)
						},
						action: function(editor) {

							var content = $.editIt.clipboard.content;
							var $content = $(content).removeClass("editIt-cutted");

							$.editIt.util.updateTextarea(editor);

							$content.hide();
							$(editor).before($content);
							$content.slideDown();

							$(".editIt-cutted").remove();
							$(".editIt-copied").removeClass("editIt-copied");

							$.editIt.clipboard = {};
							$.mbStorage.set("editItClipboard", $.editIt.clipboard);

							$.editIt.util.setUneditable(editor);
							$(editor.editorsContainer).editIt();
							editor.buttonBar.hide();
						}
					},

					pasteBlockAfter: {
						label: "Paste after",
						icon: "editIt-icon-clipboard",
						condition: function(editor) {
							return $.editIt.clipboard && !$.isEmptyObject($.editIt.clipboard)
						},
						action: function(editor) {
							var content = $.editIt.clipboard.content;
							var $content = $(content).removeClass("editIt-cutted");

							$content.hide();
							$(editor).after($content);
							$content.slideDown();

							$(".editIt-cutted").remove();
							$(".editIt-copied").removeClass("editIt-copied");

							$.editIt.clipboard = {};
							$.mbStorage.set("editItClipboard", $.editIt.clipboard);

							$.editIt.util.setUneditable(editor);
							$(editor.editorsContainer).editIt();
							editor.buttonBar.hide();
						}
					}
				},

				clearAction: function() {
					$(".editIt-cutted").removeClass("editIt-cutted");
					$(".editIt-copied").removeClass("editIt-copied");

					$.editIt.clipboard = null;

				}

			};

			$.editIt.plugins.register(blockTools);

		})(jQuery, document);
