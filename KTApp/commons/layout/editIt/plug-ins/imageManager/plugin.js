		/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
																																																																																																																																																																																																																																																																																																																																										 jquery.mb.components
																																																																																																																																																																																																																																																																																																																																										 
																																																																																																																																																																																																																																																																																																																																										 file: plugin.js
																																																																																																																																																																																																																																																																																																																																										 last modified: 12/24/18 10:55 PM
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
		 * editIt plug-in: imageManager
		 *
		 * This plugin let you manage TABLE elements inside the editor.
		 *
		 * */

		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var imageManager = {

				name: "imageManager",
				description: "Manipulate images inside a content editable",
				version: "1.0",
				author: "Pupunzi",

				defaults: {
					toolbarPosition: 100,
					resultWidth: 1024,
					resultHeight: 1024,
					uploadFile: "",
					repositoryPath: "",
					sendImageAsBlob: false, //or as base64 depends on your server side solution
					additionalData: {}
				},

				activate: function(opt) {
					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);
					$.get(plugin.path + "/inc/cropper/cropper.min.js");
					if(plugin.defaults.toolbarPosition >= 0) {
						//$.editIt.ui.toolBar.addToolbar( plugin.name, [ "|", "addImage" ], "default", plugin.defaults.toolbarPosition );
						$.editIt.ui.toolBar.extend('default', '|', plugin.defaults.toolbarPosition - 1);
						$.editIt.ui.toolBar.extend('default', 'addImage', plugin.defaults.toolbarPosition);
					}

					$(d).on("editIt-mousedown", function(e) {

						if(!$(e.target).is(".editIt-resizer") && !$(e.target).parents().is(".editIt-resizer"))
							$(".editIt-resizer").remove();

						var editor = e.editor;
						var targetIsImage = $(editor.actualTag).is("img");
						if(targetIsImage) {
							plugin.img = editor.actualTag;
							var $img = $(plugin.img);

							var resizer = $("<div/>").addClass("editIt-resizer");

							resizer.unselectable();
							$("*", resizer).unselectable();

							resizer.css({
								position: "absolute",
								width: $img.outerWidth(),
								height: $img.outerHeight(),
								top: $img.position().top,
								left: $img.position().left
							});

							var anchor = $("<div/>").addClass("editIt-resizer-anchor editIt-icon-resize");
							anchor.css({
								position: "absolute",
								width: 20,
								height: 20,
								bottom: 10,
								right: 10,
								cursor: "nwse-resize"
							}).unselectable();

							var editico = $("<div/>").addClass("editIt-edit-image editIt-icon-pencil");
							editico.css({
								position: "absolute",
								width: 20,
								height: 20,
								top: 10,
								right: 10,
								cursor: "pointer"
							}).unselectable();

							resizer.append(anchor);
							resizer.append(editico);

							var info = $("<div/>").addClass("editIt-resizer-info");
							resizer.append(info);
							info.unselectable();

							resizer.one("blur", function() {
								$(".editIt-resizer").remove();
							});

							plugin.img.origWidth = plugin.img.origWidth || plugin.img.naturalWidth;
							plugin.img.origHeight = plugin.img.origHeight || plugin.img.naturalHeight;
							plugin.img.aspectRatio = plugin.img.origHeight / plugin.img.origWidth;

							info.html("w: " + $img.width() + " h: " + $img.height());

							editico.on("click", function() {

								if(plugin.isInEdit)
									return;

								plugin.isInEdit = true;

								$.get(imageManager.path + "edit-image-prompt.html?_=" + $.editIt.guid(), function(html) {
									var main_editor = editor.editorsContainer;
									plugin.selectedImage = plugin.img;
									$.editIt.ui.prompt.draw(main_editor, html, imageManager, function(data) {

										plugin.isInEdit = false;

										var margin = data["image-align"] != "none" ? 10 : 0;

										var css = {
											width: data["image-width"],
											float: data["image-align"],
											padding: 0
										};

										if(data["image-align"] == "left")
											css.paddingRight = margin;
										else if(data["image-align"] == "right")
											css.paddingLeft = margin;

										$(plugin.img).css(css);

										var isAlreadyLinked = $(plugin.img).parent().is("a");

										if(data["image-link"]) {

											var prop = {
												href: data["image-link"],
												target: data["image-link-target"] || "self"
											};

											if(isAlreadyLinked) {
												$(plugin.img).parent().attr(prop);
											} else {
												var link = $("<a/>").attr(prop);
												$(plugin.img).wrap(link)
											}

										} else if(isAlreadyLinked) {
											var parent = $(plugin.img).parent();
											parent.after(plugin.img);
											parent.remove();
										}

										$.editIt.util.updateTextarea(editor);

									}, "Edit", null, true);

								});

							});

							anchor.on("mousedown", function(e) {

								plugin.img.initialMouseX = getMousePosition(e).x;
								plugin.img.initialMouseY = getMousePosition(e).y;
								plugin.img.initialWidth = $img.outerWidth();
								plugin.img.initialHeight = $img.outerHeight();

								$(d).on("mousemove", function(e) {

										$(this).css("cursor", "nwse-resize");

										plugin.img.diffX = plugin.img.initialMouseX - getMousePosition(e).x;
										plugin.img.diffY = plugin.img.initialMouseY - getMousePosition(e).y;

										var w = plugin.img.initialWidth - plugin.img.diffX;

										var alertMsg = w > plugin.img.origWidth ? _("You can't resize the image more than its original size") : "";

										w = w > plugin.img.origWidth ? plugin.img.origWidth : w;

										$img.css({
											width: w
										});

										info.html("w: " + $img.width() + " h: " + $img.height() + "   " + alertMsg);

										resizer.css({
											top: $img.position().top,
											left: $img.position().left,
											width: $img.outerWidth(),
											height: $img.outerHeight()
										});

										e.preventDefault();
										e.stopPropagation();

										$.editIt.util.updateTextarea(editor);

										return false;

									})
									.one("mouseup", function(e) {
										$(d).off("mousemove").off("selectstart");
									})
									.on("selectstart", false);
							});

							$(d).on("editIt-blur", function() {
								$(".editIt-resizer").remove();
								plugin.isInEdit = false;
							});

							$img.after(resizer);

							function getMousePosition(e) {
								var scrollLeft = $(window).scrollLeft();
								var scrollTop = $(window).scrollTop();

								var x = e.clientX + scrollLeft;
								var y = e.clientY + scrollTop;

								return {
									x: x,
									y: y
								};
							}
						}

					});
					$(d).on("drop", function(e) {

						if($("#add-image-prompt").length)
							return;

						e = e.originalEvent;
						e.preventDefault();

						if(!$.editIt.focusedEditor)
							return;

						var file = e.dataTransfer.files[0];
						plugin.commands.addImage.action($.editIt.focusedEditor);

						setTimeout(function() {
							upload(file);
						}, 100);
					});

					$(d).on("keydown", function(e) {
						var resizer = $(".editIt-resizer");
						var targetIsImage = $(plugin.img).is("img");

						if((e.keyCode == 8 || e.keyCode == 46) && resizer.is(":visible")) {
							if(targetIsImage) {
								$.editIt.ui.prompt.draw($.editIt.focusedEditor.editorsContainer, _("<h2>Are you sure you want to delete this image?</h2>"), imageManager, function(data) {
									var img = plugin.img;
									var $img = $(img);
									resizer.remove();
									$img.remove();
									plugin.img = null;
								}, 'Delete', null, false);
							}
							e.preventDefault();
							return false;
						}
					});

					$(d).on("dragover", function(e) {

						if($("#add-image-prompt").length)
							return;
						e = e.originalEvent;
						e.preventDefault();
					});

				},

				update: function() {
					var plugin = this;
				},

				destroy: function() {
					var plugin = this;
				},

				cleanUp: function() {},

				commands: {
					addImage: {
						label: "Image",
						icon: "editIt-icon-image",
						type: "plugin",
						action: function(editor) {

							$.get(imageManager.path + "add-image-prompt.html?_=" + $.editIt.guid(), function(html) {
								var main_editor = editor.editorsContainer;
								$.editIt.ui.prompt.draw(main_editor, html, imageManager, function(data) {

									// $( ".cropBtn" ).click();

									var imageUID = $.editIt.guid();

									if(imageManager.defaults.uploadFile) {
										var formData;

										if(imageManager.defaults.sendImageAsBlob) {
											var blobBin = atob(data.imageURL.split(',')[1]);
											var array = [];
											for(var i = 0; i < blobBin.length; i++) {
												array.push(blobBin.charCodeAt(i));
											}
											var imgFile = new Blob([new Uint8Array(array)], {
												type: 'image/png'
											});

											formData = new FormData();
											formData.append("file", imgFile, imageUID + ".png");

											if(imageManager.defaults.additionalData) {
												for(var v in imageManager.defaults.additionalData) {
													formData.append(v, imageManager.defaults.additionalData[v]);
												}
											}
										} else {
											formData = {
												repositoryPath: imageManager.defaults.repositoryPath,
												img: data.imageURL,
												imageName: data.imageName,
												uid: imageUID
											};

											if(imageManager.defaults.additionalData)
												$.extend(formData, imageManager.defaults.additionalData);
										}

										$.ajax({
											url: imageManager.defaults.uploadFile,
											type: "POST",
											data: formData,
											dataType: "json",
											processData: false,
											contentType: false,
											error: function(response) {
												console.error(response);
											},
											success: function(response) {
												//console.debug(response)
												var image = $("img[data-uid='" + imageUID + "']", editor);
												if(response.result) {
													image.attr("src", response.result);
													$.editIt.util.updateTextarea(editor);
												} else
													console.error("FAILD:: ", response)
											}
										});

										/*
										var ajaxdData = {
										  repositoryPath: imageManager.defaults.repositoryPath,
										  img: data.imageURL,
										  imageName: data.imageName,
										  uid: imageUID
										};

										if( imageManager.defaults.additionalData )
										  $.extend( ajaxdData, imageManager.defaults.additionalData );

										$.ajax( {
										  type: 'POST',
										  data: ajaxdData,
										  url: imageManager.defaults.uploadFile,
										  dataType: 'json',

										  error: function( response ) {
										    console.error( response );
										  },
										  success: function( response ) {
										    var image = $( "img[data-uid='" + imageUID + "']", docIt.editor );
										    if( response.result )
										      image.attr( "src", response.result );
										    else
										      console.error( "FAILD:: ", response )
										  }
										} );*/
									}
									$.editIt.util.pasteHtmlAtCaret("<img src='" + data.imageURL + "' data-uid='" + imageUID + "'/>");

									$.editIt.util.updateTextarea(editor);

								}, "Insert", null, true);

							});

						}
					}
				}
			};

			if($.editIt)
				$.editIt.plugins.register(imageManager);

		})(jQuery, document);
