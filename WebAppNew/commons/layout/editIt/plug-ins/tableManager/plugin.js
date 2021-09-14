		/**
		 *
		 * editIt plug-in: tableManager
		 *
		 * This plugin let you manage TABLE elements inside the editor.
		 *
		 * */

		(function($, d) {
			if(typeof $.editIt != "object") {
				throw new Error("EditIt Editor is not loaded on this page.");
			}

			var tableManager = {

				name: "tableManager",
				description: "Manipulate tables inside a content editable",
				version: "1.0",
				author: "Pupunzi",

				defaults: {
					toolbarPosition: 22,
					tableClass: "table"
				},

				activate: function(opt) {
					var plugin = this;
					//console.info("editIt :: activate plugin:: " + plugin.name, plugin);

					if(opt)
						$.extend(plugin.defaults, opt);

					if(plugin.defaults.toolbarPosition >= 0)
						$.editIt.ui.toolBar.addToolbar(plugin.name, ["|", "table"], "default", plugin.defaults.toolbarPosition);

					// var editor = $.editIt.focusedEditor;
					var editor = $(plugin.actualTag).parents("[data-editable]");

					setTimeout(function() {
						$(d).on("editIt-mousedown", function(e) {
							editor = e.editor;
							plugin.actualTag = e.editor.actualTag || plugin.hoverElement;

							if(plugin.actualTag && "TD, TH".indexOf(plugin.actualTag.tagName.toUpperCase()) >= 0) {
								plugin.actualTable = $(plugin.actualTag).parents("table").eq(0);

								plugin.actualTable.find("td, th").addClass("unselectable");
								$(plugin.actualTag).removeClass("unselectable");

							} else if(plugin.actualTable)
								plugin.cleanUp(plugin.actualTable);

						}).on("editIt-blur", function(e) {
							if("TD, TH".indexOf(e.editor.actualTag.tagName.toUpperCase()))
								return;
						}).on("editIt-mouseover", function(e) {
							plugin.hoverElement = e.hoverElement;
						});
					}, 300);

					function moveToTD(x) {

						var editor = $(plugin.actualTag).parents("[data-editable]");
						var el = plugin.actualTable.find("td, th");

						if(x < 0)
							return;

						if(!el.eq(x).length) {
							plugin.commands.addRowBelow.action(editor);
							el = plugin.actualTable.find("td, th")
						}

						plugin.actualTable.find("td").selectable();

						var range = d.createRange();
						var sel = window.getSelection();
						var refNode = el.eq(x).get(0);
						range.setStart(refNode, 0);
						range.collapse(true);
						range.selectNodeContents(refNode);
						sel.removeAllRanges();
						sel.addRange(range);

						el.eq(x).focus();

						plugin.actualTag = refNode;

						plugin.actualTable.find("td, th").addClass("unselectable");
						$(plugin.actualTag).removeClass("unselectable");

					}

					$(d).on("keydown", function(e) {
						var k = e.keyCode;
						if($(plugin.actualTag).is("tr") || $(plugin.actualTag).parent().is("tr")) {
							switch(k) {

								case 9:
									e.preventDefault();

									var td = $(plugin.actualTag).is("td, th") ? $(plugin.actualTag) : $(plugin.actualTag).closest("td, th");

									var idx = plugin.actualTable.find("td, th").index(td);
									var x = e.shiftKey ? idx - 1 : idx + 1;
									moveToTD(x);
									break;
							};

							var editor = $(plugin.actualTag).parents("[data-editable]");
							plugin.makeTableResponsive(editor);

						}
					});

					tableManager.makeTableResponsive(editor);

				},

				update: function(e) {

					var plugin = this;

				},

				makeTableResponsive: function(editor) {

					var tables = $("table", editor);

					tables.each(function() {

						var table = $(this);
						var headers = $("thead th", table);
						var tbody = $("tbody", table);

						var row = $("tr", tbody);
						var cells = $("td", row);

						cells.each(function() {
							$(this).attr("data-title", headers.eq($(this).index()).html());
						});
					})

				},

				destroy: function() {
					var plugin = this;
				},

				cleanUp: function(table) {
					table.find("td").removeClass("unselectable").removeAttr("unselectable");
				},

				commands: {
					table: {
						label: "Table",
						icon: "editIt-icon-table",
						type: "dropdown",
						elements: ["addTable", "deleteTable", "-", "addRowAbove", "addRowBelow", "removeRow", "-", "addColBefore", "addColAfter", "removeCol"],
						action: function(editor) {
							$.editIt.ui.dropDown.draw.apply(this, [editor]);
						}
					},

					addRowAbove: {
						label: _("Add row︎"),
						icon: "editIt-icon-sort-asc",
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						action: function(editor) {
							var tr = $(tableManager.actualTag).parents("tr").eq(0);
							var newRow = tr.clone();
							newRow.find("td").empty().html("&nbsp;");
							tr.before(newRow);
							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					addRowBelow: {
						label: _("Add row︎"),
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						icon: "editIt-icon-sort-desc",
						action: function(editor) {
							var tr = $(tableManager.actualTag).parents("tr").eq(0);
							var newRow = tr.clone();
							newRow.find("td").empty().html("&nbsp;");
							tr.after(newRow);
							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					removeRow: {
						label: _("Remove row︎"),
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						icon: "editIt-icon-trash-o",
						action: function(editor) {
							var tr = $(tableManager.actualTag).parents("tr").eq(0);
							tr.remove();
							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					addColBefore: {
						label: _("Add column"),
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						icon: "editIt-icon-caret-left",
						action: function(editor) {
							var table = $(tableManager.actualTag).parents("table").eq(0);
							var idx = $(tableManager.actualTag).index();

							table.find("tr").each(function() {

								if($(this).parents().is("thead")) {
									var th = $(this).find("th").eq(idx).clone().html("&nbsp;");
									$(this).find("th").eq(idx).before(th);

								} else {
									var td = $(this).find("td").eq(idx).clone().html("&nbsp;");
									$(this).find("td").eq(idx).before(td);
								}

							});

							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					addColAfter: {
						label: _("Add column"),
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						icon: "editIt-icon-caret-right",
						action: function(editor) {
							var table = $(tableManager.actualTag).parents("table").eq(0);
							var idx = $(tableManager.actualTag).index();

							table.find("tr, th, tf").each(function() {
								if($(this).parents().is("thead")) {
									var th = $(this).find("th").eq(idx).clone().html("&nbsp;");
									$(this).find("th").eq(idx).after(th);

								} else {
									var td = $(this).find("td").eq(idx).clone().html("&nbsp;");
									$(this).find("td").eq(idx).after(td);
								}
							});

							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					removeCol: {
						label: _("remove column"),
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						icon: "editIt-icon-trash-o",
						action: function(editor) {
							var table = $(tableManager.actualTag).parents("table").eq(0);
							var idx = $(tableManager.actualTag).index();

							table.find("tr").each(function() {
								if($(this).parents().is("thead")) {
									$(this).find("th").eq(idx).remove();

								} else {
									$(this).find("td").eq(idx).remove();

								}
							});

							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					},

					addTable: {
						label: _("Add table"),
						icon: "editIt-icon-plus",
						action: function(editor) {

							editor.actualSelection = $.editIt.util.saveSelection();
							$.editIt.util.expandSelection();
							$.get(tableManager.path + "add-table-prompt.html?_=" + $.editIt.guid(), function(html) {
								var main_editor = editor.editorsContainer;
								$.editIt.ui.prompt.draw(main_editor, html, tableManager, function(data) {

									var rows = data.rows;
									var columns = data.columns;
									var hasHeader = data.header;

									var tmp = $("<div/>");

									var tableClass = tableManager.defaults.tableClass;

									var table = $("<table/>");
									if(tableClass)
										table.addClass(tableClass);

									tmp.append(table);

									if(hasHeader) {

										var header = $("<thead/>");
										table.append(header);
										var trH = $("<tr/>");

										header.append(trH);

										for(var c = 0; c < columns; c++) {
											var tdH = $("<th/>").html("&nbsp;").addClass("th-td-" + c).css({
												width: 100 / columns + "%"
											});
											trH.append(tdH);
										}

									}

									for(var a = 0; a < rows; a++) {

										var tr = $("<tr/>");
										table.append(tr);

										for(var b = 0; b < columns; b++) {
											var td = $("<td/>").html("&nbsp;").addClass("td-" + b);
											tr.append(td);

										}

									}

									tmp.append("<br>");

									var html = tmp.html();

									$.editIt.util.restoreSelection(editor.actualSelection);
									$(".editIt-placeHolderText", editor).remove();
									//							//d.execCommand( "insertHTML", false, text );
									$.editIt.util.pasteHtmlAtCaret(html);

									tableManager.makeTableResponsive(editor);
									$.editIt.util.updateTextarea(editor);

								});
							});

						}
					},

					deleteTable: {
						label: _("Delete table"),
						icon: "editIt-icon-trash-o",
						condition: function(editor) {
							return("TD, TH".indexOf(editor.actualTag.tagName.toUpperCase()) > -1 || $.editIt.util.isSelectionInsideElement("TD", true) || $.editIt.util.isSelectionInsideElement("TH", true));
						},
						action: function(editor) {
							var main_editor = editor.editorsContainer;
							$.editIt.ui.prompt.draw(main_editor, _("<h2>Are you sure you want to delete this table?</h2>"), tableManager, function(data) {

								var table = $(tableManager.actualTag).parents("table").eq(0);
								table.remove();
							});

							$.editIt.util.restoreSelection(editor.actualSelection);
						}
					}
				}
			};

			$.editIt.plugins.register(tableManager);

		})(jQuery, document);
