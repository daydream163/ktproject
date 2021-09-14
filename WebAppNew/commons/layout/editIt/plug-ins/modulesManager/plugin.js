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

		/**
		 *
		 * editIt plug-in: modulesManager
		 *
		 * This plugin let you insert predefined HTML block contents inside the editor
		 *
		 * */

		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var modulesManager = {

				name: "modulesManager",
				description: "Add the capability to place snippets of code into the editor context",
				version: "1.0",
				author: "Pupunzi",
				dependencies: ["blockTools"],

				defaults: {
					pathToJSON: $.editIt.plugins.path + "modulesManager/modules/modules.json?_=" + $.editIt.guid(),
					pathToModules: $.editIt.plugins.path + "modulesManager/modules/"
				},

				activate: function(opt) {

					var plugin = this;

					if(opt)
						$.extend(plugin.defaults, opt);

					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					/**
					 * Load module list from the json
					 */
					$.getJSON(plugin.defaults.pathToJSON, function(data) {
						plugin.modules = data;
					});

					/**
					 * If exist "blockTools" plugin then add commands line to its drop-down
					 */
					if($.editIt.plugins["blockTools"]) {
						$.editIt.plugins["blockTools"].dropdownElements.push("-", "addBlock");
					} else {
						$(d).on("editIt-mouseenter", function(e) {
							var editor = e.editor;
							plugin.addBlock = $.editIt.util.drawButton(plugin.commands.addBlock.label, "align-right main-color editIt-delete-block only-icon", "editIt-icon-plug", plugin.commands.addBlock.action);
							if(editor.buttonBar && !$(".editIt-delete-block", editor.buttonBar).length) {
								editor.buttonBar.append(plugin.addBlock);
							}
						});
					}

				},

				update: function() {

					var plugin = this;

				},

				destroy: function() {
					$(".modulesManager-buttonBar").remove();
				},

				insert: function(moduleObj, where) {

					var plugin = this;
					var editor = $(where).parents(".editIt-wrapper").eq(0);

					var module = plugin.modules[moduleObj["module-name"]];

					var moduleURL = module.path;
					var modulePos = moduleObj["position"];
					var moduleContent = module.content;

					if(moduleURL) {
						$.get(plugin.defaults.pathToModules + moduleURL + "?_=" + $.editIt.guid()).done(function(html) {

							$(where)[modulePos](html);

							$.editIt.util.setUneditable(editor);
							var opt = editor.opt;
							editor.editIt(opt);

						}).fail(function(error) {
							$.editIt.ui.alert.draw(editor, _("There's been an error loading the module:<br> %%", [module.name]))
						});

					} else if(moduleContent) {

						$(where)[modulePos](moduleContent);

						$.editIt.util.setUneditable(editor);
						var opt = editor.opt;
						editor.editIt(opt);

					} else {

						$.editIt.ui.alert.draw(editor, _("There's been an error loading the module:<br> %%", [module.name]))

					}

				},
				commands: {
					addBlock: {
						label: _("Add a module"),
						icon: "editIt-icon-plug",
						action: function(block) {
							$.get(modulesManager.path + "modules-prompt.html?_=" + $.editIt.guid(), function(html) {
								var main_editor = $(block).parents(".editIt-wrapper").eq(0);
								$.editIt.ui.prompt.draw(main_editor, html, modulesManager, function(data) {
									var where = $(block).parent().is("[data-module]") ? $(block).parent()[0] : block;
									//console.debug(where);
									modulesManager.insert.apply(modulesManager, [data, where])
								});
							});

						}
					}
				}
			};

			$.editIt.plugins.register(modulesManager);

		})(jQuery, document);
