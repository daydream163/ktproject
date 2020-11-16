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
		 * editIt plug-in: repoManager
		 *
		 * This plugin let you manage file repository.
		 *
		 * */

		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var repoManager = {

				name: "repoManager",
				description: "Manage file repository",
				version: "1.0",
				author: "Pupunzi",

				defaults: {
					toolbarPosition: 23,
					maxFileSize: 2500, //in Kb
					acceptFileByExtension: ["zip", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "pps", "ppsx", "pdf", "txt", "jpg"],
					availableIcons: ["txt", "xml", "ppt", "doc", "xls", "jpg", "mov", "pdf", "zip"],
					repositoryPath: "",
					serverPage: "repoManager-controller.php",
					additionalData: {}
				},

				activate: function(opt) {
					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);

					if(plugin.defaults.toolbarPosition >= 0)
						$.editIt.ui.toolBar.addToolbar(plugin.name, ["|", "openFileManager"], "default", plugin.defaults.toolbarPosition);

				},

				update: function() {
					var plugin = this;
				},

				destroy: function() {
					var plugin = this;
				},

				cleanUp: function(table) {},

				commands: {
					openFileManager: {
						label: _("File Manager"),
						icon: "editIt-icon-paperclip",
						type: "plugin",
						action: function(editor) {

							$.get(repoManager.path + "repo-prompt.html?_=" + $.editIt.guid(), function(html) {
								var main_editor = editor.editorsContainer;
								$.editIt.ui.prompt.draw(main_editor, html, repoManager, function(data) {

									var fileUID = guid();

									if(repoManager.defaults.uploadFile) {

										var ajaxdData = {
											repositoryPath: repoManager.defaults.repositoryPath,
											img: data.imageURL,
											imageName: data.imageName,
											uid: fileUID
										};

										if(repoManager.defaults.additionalData)
											$.extend(ajaxdData, repoManager.defaults.additionalData);
									}

									if(["jpg", "jpeg", "png", "gif"].indexOf(repoManager.getFileExtentionFromName(data.fileName)) >= 0) {
										$.editIt.util.pasteHtmlAtCaret("<img src='" + data.fileURL + "' data-fileuid='" + fileUID + "'>" + data.fileName + "</a>");
										$("img[data-fileuid=" + fileUID + "]").removeAttr("style").css("max-width", "100%");
									} else {
										$.editIt.util.pasteHtmlAtCaret("<a href='" + data.fileURL + "' data-fileuid='" + fileUID + "'>" + data.fileName + "</a>");
										$("a[data-fileuid=" + fileUID + "]").removeAttr("style");
									}

								}, "Insert", null, true);

							});

						}
					}
				},

				getFileExtentionFromName: function(name) {
					var ext = name.split(".");
					ext = ext[ext.length - 1];
					return ext;
				},

				getFileIcon: function(fileName) {

					var ext = repoManager.getFileExtentionFromName(fileName);

					switch(ext) {
						case "docx":
							ext = "doc";
							break;

						case "xlsx":
							ext = "xls";
							break;

						case "pptx":
							ext = "ppt";
							break;

						case "mp4":
						case "avi":
						case "m4v":
						case "mpg":
						case "wmv":
						case "webm":
						case "mov":
							ext = "movie";
							break;

						case "aif":
						case "m4a":
						case "mid":
						case "wav":
						case "wma":
						case "mp3":
							ext = "music";
							break;

						default:
							ext = repoManager.defaults.availableIcons.indexOf(ext) > 0 ? ext : "generic";

					}

					return ext;
				}
			};

			$.editIt.plugins.register(repoManager);

			function guid() {
				function s4() {
					return Math.floor((1 + Math.random()) * 0x10000)
						.toString(16)
						.substring(1);
				}
				return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					s4() + '-' + s4() + s4() + s4();
			}

		})(jQuery, document);
