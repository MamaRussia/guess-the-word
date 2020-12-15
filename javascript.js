const wordChoices = [
  'Handstand',
  'Child Pose',
  'Corpse',
  'Warrior',
  'Happy Baby',
  'Frog',
  'Pigeon',
  'Upward Dog',
  'Crane',
  'Bow',
  'Eagle',
  'Wheel',
  'Boat',
  'Plow',
  'Cow Face',
  'Downward Dog',
  'Bound Angle',
  'Dolphin Plank',
  'Extended Puppy',
  'Feathered Peacock',
  'Mariachi',
];
const wordSpot = document.querySelector('#word-choice');
const startBtn = document.querySelector('#start');
const win = document.querySelector('#wins');
const dash = '_';
const lettersGuessed = [];
const possibleGuesses = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log(wordChoices.length);

function generateWord() {
  const wordSelected =
    wordChoices[Math.floor(Math.random() * wordChoices.length)];
  for (let i = 0; i < wordSelected.length; i++) {
    console.log(wordSelected);

    const underscore = ' ';
    const nextChar = wordSelected.charAt(i) === underscore ? underscore : '_';
    console.log(nextChar);
  }
}

// adds word to display
document.onkeyup = function (e) {
  const userGuess = e.key;
  console.log(e.key);
  console.log(wordSpot);
  const computerGuess =
    wordChoices[Math.floor(Math.random() * wordChoices.length)];
  console.log(computerGuess.length);

  for (let i = 0; i < computerGuess.length; i++) {
    console.log(computerGuess.length);
    const wordLength = computerGuess.length;
    // const wordArray = [];
    console.log(wordLength);
    console.log(typeof wordLength);
    const dash = '_';

    computerGuess.length.textContent = dash;
    console.log(dash.length);
    break;
  }

  wordSpot.textContent = computerGuess;
};
