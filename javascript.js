/* eslint-disable */
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
const startBtn = document.querySelector('.start');
let mistakes = 0;
const lettersGuessed = [];
const word = '';
let answer = '';
const wordArea = '';
const maxWrong = 6;
const wordStatus = null;

function randomWord() {
   answer = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

// function addWord(v) {
//   wordArea = `${v}${wordArea}`;
//   console.log(wordArea);
// }

// function addDash() {
//   for (let i = 0; i < word.length; i++) {
//     console.log(word);
//     // arrayWord.push('_ ');
//   }

//   arrayWord.forEach(addWord);
//   document.querySelector('.word-choice').innerHTML = wordArea;
//   console.log(typeof wordArea);
// }

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function checkIfWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Namaste';
  }
}

function checkIfLost() {
  if (mistakes === maxWrong) {
    document.getElementById(
      'wordSpotlight'
    ).innerHTML = `The answer was: ${answer}`;
    document.getElementById('keyboard').innerHTML =
      'The man is dead. Now what?';
  }
}

function guessedWord() {
  const wordStatus = answer
    .split('')
    .map((letter) =>
      lettersGuessed.indexOf(letter) >= 0 ? lettersGuessed : ' _ '
    )
    .join('');

  document.querySelector('.wordSpot').innerHTML = wordStatus;
}

function hideStart() {
  startBtn.style.display = 'none';
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
        onClick="handleGuess('${letter}')"
      >
        ${letter}
      </button>
    `
    )
    .join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter) {
  lettersGuessed.indexOf(chosenLetter) === -1
    ? lettersGuessed.push(chosenLetter)
    : null;
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

// // track key user presses
// function keyPressed() {
//   document.onkeyup = function (e) {
//     const guess = e.key;
//     randomWord();
//     generateButtons();
//     guessedWord();
//   };
// }

// // function splitWord() {
// //   word = randomWord().split('');
// //   addDash();
// //   hideStart();
// //   keyPressed();
// //   // console.log(word[0]);
// //   // console.log(typeof word);
// //   // console.log(arrayWord);
// //   // console.log(guess);
// // }

// startBtn.addEventListener('mousedown', keyPressed);
