// eslint-disable-next-line
let answer = '', index, maxWrong = 6, mistakes = 0, lettersGuessed = [], wordStatus = null;

const startBtn = document.querySelector('.start');
const innerArea = document.querySelector('.innerArea');
const hangmanImg = document.querySelector('.hangmanImg');
const startImg = document.querySelector('.startImg');
const newGame = document.querySelector('.new');
const winBtn = document.querySelector('.winbtn');
const guess = document.querySelector('.guesses');
const sound = document.querySelector('.sound');
const lose = document.querySelector('.lose');
const win = document.querySelector('.win');
const hintBtn = document.querySelector('.hint');
const hintText = document.querySelector('.hintText');
const winMusic = document.querySelector('.winningsound');
const yell = document.querySelector('.yell');
const words = [
  { word: 'handstand', hint: 'Gymnasts do these' },
  { word: 'headstand', hint: 'Use your head' },
  { word: 'corpse', hint: 'Found in a morgue' },
  { word: 'warrior', hint: 'Proud soldier' },
  { word: 'mountain', hint: 'People climb them' },
  { word: 'frog', hint: 'Kiss to get warts' },
  { word: 'pigeon', hint: 'Flying rats' },
  { word: 'chair', hint: 'Great for butts' },
  { word: 'crane', hint: 'Reach high places' },
  { word: 'bow', hint: 'Used with arrows' },
  { word: 'eagle', hint: 'Symbol of America' },
  { word: 'wheel', hint: 'Goes round and round' },
  { word: 'boat', hint: 'Titanic' },
  { word: 'plow', hint: 'My ox does this' },
  { word: 'triangle', hint: 'Half of a square' },
  { word: 'camel', hint: 'Known for humps' },
  { word: 'crow', hint: 'Black bird' },
  { word: 'dolphin', hint: 'Smarter than humans' },
  { word: 'bridge', hint: 'Trolls live under here' },
  { word: 'mariachi', hint: 'Style of Mexican music' },
  { word: 'firefly', hint: 'Glowing bug' },
  { word: 'peacock', hint: 'Extra fancy bird' },
  { word: 'scale', hint: 'Weigh stuff' },
  { word: 'plank', hint: 'Core strength' },
  {
    word: 'locust',
    hint: "God's plague",
  },
  { word: 'noose', hint: 'Used for hanging' },
  { word: 'child', hint: 'Cannot strike them' },
  { word: 'cobra', hint: 'Dojo name' },
  { word: 'cow', hint: 'Tip them for fun' },
  { word: 'fish', hint: 'Teach a man to' },
  { word: 'sphinx', hint: 'Solve his riddle' },
];

function randomWord() {
  index = words[Math.floor(Math.random() * words.length)];
}

function playMusic() {
  sound.play();
}

function playWin() {
  sound.pause();
  win.play();
  setTimeout(function () {
    winMusic.play();
  }, 2000);
}

function stopMusic() {
  sound.pause();
}

function stopLoserMusic() {
  lose.pause();
  winMusic.pause();
}

function loseMusic() {
  lose.play();
}

function loseScream() {
  yell.play();
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
  console.log(index.word);
  console.log(index.hint);
  document.querySelector('.keyboard').innerHTML = buttonsHTML;
  document.querySelector('.maxWrong').innerHTML = maxWrong;
}

function handleGuess(chosenLetter) {
  lettersGuessed.indexOf(chosenLetter) === -1
    ? lettersGuessed.push(chosenLetter)
    : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  if (index.word.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfWon();
  } else if (index.word.indexOf(chosenLetter) === -1) {
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
  if (wordStatus === index.word) {
    playWin();
    document.querySelector(
      '.wordSpot'
    ).innerHTML = `Way to go. It was ${index.word}.`;
    document.querySelector('.keyboard').innerHTML = '<h2>Namaste</h2>';
    guess.setAttribute('hidden', true);
    hintBtn.setAttribute('hidden', true);
    winBtn.removeAttribute('hidden');
  }
}

function checkIfLost() {
  if (mistakes === maxWrong) {
    loseScream();
    loseMusic();
    stopMusic();
    document.querySelector(
      '.wordSpot'
    ).innerHTML = `Oh no.<br>The correct answer was ${index.word}`;
    document.querySelector('.keyboard').innerHTML =
      '<h2>A man is dead. Now what?</h2>';
    newGame.removeAttribute('hidden');
    guess.setAttribute('hidden', true);
    hintBtn.setAttribute('hidden', true);
  }
}

function showHint() {
  const { hint } = index;
  document.querySelector('.hint').textContent = hint;
  mistakes++;
  document.querySelector('.mistakes').innerHTML = mistakes;
  setTimeout(function () {
    hideHint();
  }, 3000);
}

function hideHint() {
  document.querySelector('.hint').innerHTML = 'Hint';
}

function guessedWord() {
  // eslint-disable-next-line
  wordStatus = index.word.split('').map(letter => (lettersGuessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.querySelector('.wordSpot').innerHTML = wordStatus;
}

function resetGame() {
  mistakes = 0;
  lettersGuessed = [];
  document.querySelector('.hangmanImg').src = './images/0.jpg';
  guess.removeAttribute('hidden');
  hintBtn.removeAttribute('hidden');
  newGame.setAttribute('hidden', true);
  winBtn.setAttribute('hidden', true);
  winMusic.pause();
  stopLoserMusic();
  playMusic();
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  hideHint();
}

function hideStart() {
  const flow = document.querySelector('.flow');
  startBtn.setAttribute('hidden', true);
  hintText.setAttribute('hidden', true);
  startImg.setAttribute('hidden', true);
  flow.setAttribute('hidden', true);
  hangmanImg.removeAttribute('hidden');
  innerArea.removeAttribute('hidden');
  playMusic();
}

randomWord();
generateButtons();
guessedWord();
