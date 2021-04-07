'use strict';

const input = document.querySelector('input');
const letters = Array.from(document.querySelectorAll('[data-letters]'));
const specials = Array.from(document.querySelectorAll('[data-special]'));


init();

function init() {
	input.addEventListener('keydown', keydownHandler);
	input.addEventListener('keyup', keyupHandler);
}


function keydownHandler(event) {

	event.preventDefault();

	const letter = letters.find(x => x.dataset.letters.includes(event.key));

	console.log(event.key);

	if (letter) {
		letter.classList.add('pressed');
		return;
	}

	const key = event.key.toLowerCase();
	const special = specials.filter((x) => x.dataset.special === key);

	if (special.length) {
		special.forEach((spec) => spec.classList.add('pressed-special'));
		return;
	}

}

function keyupHandler(event) {
	//console.log('keyupHandler', event);
}




// function keydownHandler(event) {
// 	event.preventDefault();

// 	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

// 	if (letter) {
// 		letter.classList.add("pressed");
// 		return;
// 	}

// 	let key = event.key.toLowerCase();

// 	if (key === " ") {
// 		key = "space";
// 	}

// 	const ownSpecs = specs.filter((x) => x.dataset.ownSpecs === key);

// 	if (ownSpecs.length) {
// 		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
// 		return;
// 	}
// }

