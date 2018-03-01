(function(window){
	var $accordion = document.querySelector('.accordion');
	
	function keypress(event) {
		var currentHeading = event.target;
		var keyCode = event.keyCode;
		console.log('Typed',event);

		if(keyCode === 40 || keyCode === 39) { //Seta baixo
			//move para baixo e no último volta para oprimeiro.
			moveDown(currentHeading);
		}

		if(keyCode === 37 || keyCode === 38 ) { //seta cima
			moveUp(currentHeading);
		}

		if(keyCode === 13 || keyCode === 32 ) {
			toggleButton(currentHeading);
		}
	}

	function moveUp(element) {
		var previousHeading;

		if(element.previousElementSibling) {
			previousHeading = element.previousElementSibling.previousElementSibling;
		}
		else {
			previousHeading = $accordion.lastElementChild.previousElementSibling;
		}

		previousHeading.focus();
	}

	function moveDown(element) {
		var nextHeading;

		if(element.nextElementSibling.nextElementSibling) {
			nextHeading = element.nextElementSibling.nextElementSibling;
		}
		else {
			nextHeading = $accordion.firstElementChild;
		}

		nextHeading.focus();
	}


	function toggleButton(heading) {
		var panel = heading.nextElementSibling;
		var expanded = panel.getAttribute('aria-expanded') == "false" ? "true" : "false";
		var hidden = panel.getAttribute('aria-hidden') == "false" ? "true" : "false";

		panel.setAttribute('aria-expanded', expanded);
		panel.setAttribute('aria-hidden', hidden);

		var selected = heading.getAttribute('aria-selected') == "false" ? "true" : "false";
		heading.setAttribute('aria-selected', selected);	

	}

	$accordion.addEventListener('keyup', keypress);
	$accordion.addEventListener('click', function(event){
		console.log(event);
		toggleButton(event.target);
	});
})(window);