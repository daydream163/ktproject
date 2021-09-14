		/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
																																																																																																																																																																																																																																																																																																																																										 jquery.mb.components
																																																																																																																																																																																																																																																																																																																																										 
																																																																																																																																																																																																																																																																																																																																										 file: jquery.mb.storage.js
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

		(function(jQuery) {

			jQuery.mbCookie = {
				set: function(name, valueObj, days, domain) {

					valueObj = JSON.stringify(valueObj);

					if(!days) days = 7;
					domain = domain ? "; domain=" + domain : "";
					var date = new Date(),
						expires;
					date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
					expires = "; expires=" + date.toGMTString();
					document.cookie = name + "=" + valueObj + expires + "; path=/" + domain;
				},
				get: function(name) {
					var nameEQ = name + "=";
					var ca = document.cookie.split(';');
					for(var i = 0; i < ca.length; i++) {
						var c = ca[i];
						while(c.charAt(0) == ' ') c = c.substring(1, c.length);
						if(c.indexOf(nameEQ) == 0) {
							return JSON.parse(c.substring(nameEQ.length, c.length));
						}
					}
					return null;
				},
				remove: function(name) {
					jQuery.mbCookie.set(name, "", -1);
				}
			};

			jQuery.mbStorage = {

				set: function(name, val) {
					val = JSON.stringify(val);
					localStorage.setItem(name, val);
				},

				get: function(name) {
					if(localStorage[name])
						return JSON.parse(localStorage[name]);
					else
						return null;
				},

				remove: function(name) {
					if(name)
						localStorage.removeItem(name);
					else
						localStorage.clear();
				}
			};
		})(jQuery);
