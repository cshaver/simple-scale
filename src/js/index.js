import '../scss/index.scss';

import Soundfont from 'soundfont-player';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

initialize();

function initialize() {
	const html = document.querySelector('html');

	html.classList.remove('no-js');

	if (!AudioContext) {
		return;
	}

	html.classList.remove('no-web-audio');

	const ac = new AudioContext();

	// create an instrument
	Soundfont.instrument(ac, 'orchestral_harp', {soundfont: 'FluidR3_GM'}).then(
		(harp) => {
			// add the event listener for the note buttons
			const notes = document.getElementById('notes');
			if (notes) {
				notes.addEventListener('click', playNote.bind(harp));
			}
		}
	);

}

function playNote(event) {
	if (event.target.classList.contains('note-button')) {
		let button = event.target;
		let note = button.name;

		this.play(note);
	}
}
