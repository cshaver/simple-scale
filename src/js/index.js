const Soundfont = require('soundfont-player');

// const aNote = document.getElementById('a');
// const bNote = document.getElementById('b');
// const cNote = document.getElementById('c');
// const dNote = document.getElementById('d');
// const eNote = document.getElementById('e');
// const fNote = document.getElementById('f');
// const gNote = document.getElementById('g');

const ac = new AudioContext();

// The first step is always create an instrument:
Soundfont.instrument(ac, 'orchestral_harp', { soundfont: 'FluidR3_GM' }).then(function(clavinet) {
  // Then you can play a note using names or midi numbers:
  clavinet.play('C4');
	clavinet.play('B4');

  // you can stop all playing notes
  clavinet.stop();
  // or stop only one
  clavinet.play('B4').stop(ac.currentTime + 0.5);
  // or pass a duration argument to `play`
  clavinet.play('A4', ac.currentTime, {duration: 0.5});
});
