		/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
																																																																																																																																																																																																																																																																																																																																										 jquery.mb.components
																																																																																																																																																																																																																																																																																																																																										 
																																																																																																																																																																																																																																																																																																																																										 file: demo.js
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

		if(!('boxShadow' in document.body.style)) {
			document.body.setAttribute('class', 'noBoxShadow');
		}

		document.body.addEventListener("click", function(e) {
			var target = e.target;
			if(target.tagName === "INPUT" &&
				target.getAttribute('class').indexOf('liga') === -1) {
				target.select();
			}
		});

		(function() {
			var fontSize = document.getElementById('fontSize'),
				testDrive = document.getElementById('testDrive'),
				testText = document.getElementById('testText');

			function updateTest() {
				testDrive.innerHTML = testText.value || String.fromCharCode(160);
				if(window.icomoonLiga) {
					window.icomoonLiga(testDrive);
				}
			}

			function updateSize() {
				testDrive.style.fontSize = fontSize.value + 'px';
			}
			fontSize.addEventListener('change', updateSize, false);
			testText.addEventListener('input', updateTest, false);
			testText.addEventListener('change', updateTest, false);
			updateSize();
		}());
