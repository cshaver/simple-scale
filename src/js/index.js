import '../scss/index.scss';

import Soundfont from 'soundfont-player';

const notes = document.getElementById('notes');

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const ac = new AudioContext();

var instrument;
window.instrument = instrument;

// The first step is always create an instrument:
Soundfont.instrument(ac, 'orchestral_harp', {soundfont: 'FluidR3_GM'}).then(
	(harp) => {
		instrument = harp;
	}
);

initialize();

function initialize() {
	notes.addEventListener('click', event => {
		if (event.target.classList.contains('note-button')) {
			let button = event.target;
			let note = button.name;

			console.log(button, note);

			instrument.play(note);
		}
	});
}
