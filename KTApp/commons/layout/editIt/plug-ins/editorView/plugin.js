		/**
		 *
		 * editIt plug-in: variablesReplace
		 *
		 * This plugin let you insert placeholders that will be replaced with specific client-entries
		 *
		 * You can define variables either
		 * as form fields adding the "data-content-replace" attribute to the TAG
		 * or defining them in the variablesReplace.variables object.
		 * */

		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var editorView = {
				name: "editorView",
				description: "View source, Enter full screen and Preview. ",
				version: "1.0",
				author: "Pupunzi",

				/**
				 * Enable or disable viewSource, fullScreen, preview
				 */
				defaults: {
					viewSource: true,
					fullScreen: true,
					preview: true
				},

				activate: function(opt) {

					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);

					$.editIt.editorView = plugin;

					var tbe = [];

					if(plugin.defaults.fullScreen)
						tbe = tbe.concat(["fullScreen"]);

					if(plugin.defaults.viewSource)
						tbe = tbe.concat(["viewSource"]);

					if(plugin.defaults.preview)
						tbe = tbe.concat(["showPreview"]);

					$.editIt.ui.toolBar.addToolbar(plugin.name, tbe, "all", 100, true);
				},

				update: function(e) {
					var plugin = this;
				},

				destroy: function(e) {
					var plugin = this;
				},

				commands: {
					fullScreen: {
						label: _("Go full screen"),
						icon: "editIt-icon-expand",
						type: "plugin",
						isEnabled: function(editor) {
							return 'always'
						},
						action: function(editor, cmnd) {
							if(editor.editorsContainer.isFullscreen) {
								$.editIt.plugins.editorView.enterFullScreen(editor);
								cmnd.icon = "editIt-icon-expand";
							} else {
								$.editIt.plugins.editorView.exitFullScreen(editor);
								cmnd.icon = "editIt-icon-compress";
							}
							//$.editIt.ui.toolBar.draw(editor, false);
						}
					},
					viewSource: {
						label: _("Edit source"),
						icon: "editIt-icon-code",
						type: "plugin",
						isEnabled: function(editor) {
							return 'always'
						},
						action: function(editor) {
							$.editIt.util.openSourceMode(editor.editorsContainer);
						}
					},
					showPreview: {
						label: _("Preview"),
						icon: "editIt-icon-eye",
						type: "plugin",
						isEnabled: function(editor) {
							return 'always'
						},
						action: function(editor) {
							$.editIt.plugins.editorView.openPreview(editor);
						}
					}
				},

				openPreview: function(editor) {
					editor.editorsContainer.previewMode = true;
					//$.editIt.util.setUneditable(editor.editorsContainer);
					var preview = $("<div/>").addClass("editIt-preview").hide();
					var tmp = $("<div/>").html($.editIt.util.getClearContent(editor.editorsContainer)).addClass("preview-content");
					preview.append(tmp);

					var previewEv = $.Event("editIt-preview");
					previewEv.content = preview;
					$(editor).trigger(previewEv);

					var closePreview = $.editIt.util.drawButton("Close", "previewMode-close main-color only-icon", "editIt-icon-close", function() {
						preview.slideUp(400, function() {
							$(this).remove();
							$("body").removeClass("blur");
						});
						//$(editor.editorsContainer).editIt();
					});

					preview.append(closePreview);

					$("body").after(preview);
					$("body").addClass("blur");

					preview.slideDown(400, function() {});
				},

				enterFullScreen: function(editor) {
					editor.editorsContainer.isFullscreen = false;
					$(editor.editorsContainer).removeClass("full-screen");
					$(editor.editorsContainer).animate({
						marginTop: editor.editorsContainer.marginTop
					}, editor.editorsContainer.opt.toolbarAnimationTime);
				},
				exitFullScreen: function(editor) {
					editor.editorsContainer.isFullscreen = true;
					$(editor.editorsContainer).addClass("full-screen");
					editor.editorsContainer.marginTop = $(editor.editorsContainer).css("margin-top");
					var marginTop = -($(editor.editorsContainer).offset().top - (editor.editorsContainer.opt.toolbarIsOnTop ? 100 : 0));
					$(editor.editorsContainer).animate({
						marginTop: marginTop
					}, editor.editorsContainer.opt.toolbarAnimationTime * 3);
				},

			};

			$.editIt.plugins.register(editorView);

		})(jQuery, document);
