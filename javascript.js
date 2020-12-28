const wordChoices = [
  'handstand',
  'headstand',
  'corpse',
  'warrior',
  'mountain',
  'frog',
  'pigeon',
  'chair',
  'crane',
  'bow',
  'eagle',
  'wheel',
  'boat',
  'plow',
  'triangle',
  'camel',
  'crow',
  'dolphin',
  'bridge',
  'headstand',
  'mariachi',
];

// eslint-disable-next-line
let answer = '';
// eslint-disable-next-line
let maxWrong = 6;
// eslint-disable-next-line
let mistakes = 0;
// eslint-disable-next-line
let lettersGuessed = [];
// eslint-disable-next-line
let wordStatus = null;
const startBtn = document.querySelector('.start');
const innerArea = document.querySelector('.innerArea');
const hangmanImg = document.querySelector('.hangmanImg');
const startImg = document.querySelector('.startImg');
const newGame = document.querySelector('.new');

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
        class="btn btn-lg btn-info m-2"
        id='${letter}'
        onClick="handleGuess('${letter}')"
      >
        ${letter}
      </button>
    `
    )
    .join('');
  console.log(answer);

  document.querySelector('.keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  lettersGuessed.indexOf(chosenLetter) === -1
    ? lettersGuessed.push(chosenLetter)
    : null;

  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfLost();
    updateHangmanImg();
  }
}

function updateHangmanImg() {
  document.querySelector('.hangmanImg').src = `./images/${mistakes}.jpg`;
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
    document.querySelector('.wordSpot').innerHTML = `Oh no. It was: ${answer}`;
    document.querySelector('.keyboard').innerHTML =
      '<h2>The man is dead. Now what?</h2>';
    newGame.removeAttribute('hidden');
  }
}

function guessedWord() {
  // eslint-disable-next-line
  wordStatus = answer.split('').map(letter => (lettersGuessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.querySelector('.wordSpot').innerHTML = wordStatus;
}

function resetGame() {
  mistakes = 0;
  lettersGuessed = [];
  document.querySelector('.hangmanImg').src = './images/0.jpg';
  newGame.setAttribute('hidden', true);

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.querySelector('.maxWrong').innerHTML = maxWrong;

function hideStart() {
  const flow = document.querySelector('.flow');
  startBtn.setAttribute('hidden', true);
  startImg.setAttribute('hidden', true);
  flow.setAttribute('hidden', true);
  hangmanImg.removeAttribute('hidden');
  innerArea.removeAttribute('hidden');
}

startBtn.addEventListener('mousedown', hideStart);
newGame.addEventListener('mousedown', resetGame);

randomWord();
generateButtons();
guessedWord();
