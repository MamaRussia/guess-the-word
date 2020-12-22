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

// eslint-disable-next-line
let answer = '';
// eslint-disable-next-line

const maxWrong = 6;
// eslint-disable-next-line

let mistakes = 0;
const lettersGuessed = [];
const wordStatus = null;

function randomWord() {
  answer = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function generateButtons() {
  const buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='${letter}'
        onClick='handleGuess("${letter}")'
      >
        ${letter}
      </button>
    `
    )
    .join('');

  document.querySelector('.keyboard').innerHTML = buttonsHTML;
  document.querySelector('.maxWrong').innerHTML = maxWrong;

  console.log(answer);
}

function updateMistakes() {
  document.querySelector('.mistakes').innerHTML = mistakes;
}

function checkIfWon() {
  if (wordStatus === answer) {
    document.querySelector('.keyboard').innerHTML = 'Namaste';
  }
}

function checkIfLost() {
  if (mistakes === maxWrong) {
    document.querySelector('.wordSpot').innerHTML = `The answer was: ${answer}`;
    document.querySelector('.keyboard').innerHTML =
      'The man is dead. Now what?';
  }
}

function guessedWord() {
  // eslint-disable-next-line
  let wordStatus = answer
    .split('')
    .map((letter) =>
      lettersGuessed.indexOf(letter) >= 0 ? lettersGuessed : ' _ '
    )
    .join('');

  document.querySelector('.wordSpot').innerHTML = wordStatus;
}

function handleGuess(chosenLetter) {
  // lettersGuessed.indexOf(chosenLetter) === -1
  //   ? lettersGuessed.push(chosenLetter)
  //   : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (lettersGuessed.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfWon();
  } else if (lettersGuessed.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfLost();
    // updateHangmanPicture();
  }
}

randomWord();
generateButtons();
guessedWord();
