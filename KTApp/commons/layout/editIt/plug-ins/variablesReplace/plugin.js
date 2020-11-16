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

			var variablesReplace = {

				name: "variablesReplace",
				description: "Replace variables with the corresponding cliententry. ",
				version: "1.0",
				author: "Pupunzi",

				defaults: {
					toolbarPosition: 100
				},

				activate: function(opt) {

					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);

					$.editIt.setVariables = plugin.setVariables;

					if(plugin.defaults.toolbarPosition >= 0)
						$.editIt.ui.toolBar.addToolbar(plugin.name, ["|", "variablesReplace"], "all", plugin.defaults.toolbarPosition);

					//todo: name space doesn't work!!! why??? // .on( "editIt-preview." + plugin.name
					$(d).on("editIt-preview", function(e) {
						var c = plugin.replace(e.content.html(), plugin.variables);
						e.content.html(c);
					});

					//todo: extend ace.js highlight for the variable replace elements

				},

				update: function(e) {
					var plugin = this;
				},

				destroy: function(e) {
					var plugin = this;
				},

				getVariables: function() {
					return variablesReplace.variables;
				},

				setVariables: function(obj) {

					$.extend(variablesReplace.variables, obj);

					for(var v in obj) {

						if($("[name=" + v + "]").length)
							$("[name=" + v + "]").remove();

						var inpt = $("<input/>").attr({
							type: "hidden",
							value: obj[v],
							name: v,
							"data-content-replace": true
						});

						$("body").append(inpt);

					}

				},

				replace: function(txt, vars) {
					var replacer = function(str) {
						//console.debug(str);
						str = str.replace(/%%/g, "");

						var input = $("[name=" + str + "]");
						var val = input.length ? input.val() : vars[str];
						/**
						 * Replace all return carriage with "<br>"
						 */
						val = val.replace(/\n/g, "<br>");
						return val;
					};

					/* var extract = str.match(/%%(.*)%%/).pop(); */
					return txt.replace(/%%([^>%%]+)%%/g, replacer);
				},

				commands: {
					variablesReplace: {
						label: _("Insert Variable"),
						icon: "editIt-icon-crosshairs",
						type: "plugin",
						action: function(editor) {

							$.get(variablesReplace.path + "prompt.html?_=" + $.editIt.guid(), function(html) {
								$.editIt.ui.prompt.draw(editor, html, variablesReplace, function(data) {
									d.execCommand('insertText', false, "%%" + data["variable-name"] + "%%");

								}, null, null, true);
							});
						}
					}
				},

				variables: {}

			};

			$.editIt.plugins.register(variablesReplace);

		})(jQuery, document);
