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
const win = document.querySelector('#wins');
const lettersGuessed = [];
let word = [];
const secretWord = '';
let wordArea = '';
const arrayWord = [];

function randomWord() {
  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function addWord(v) {
  console.log(word);
  wordArea = `${v}${wordArea}`;
  const guessesLeft = word.length;
  console.log(guessesLeft);
}

function addDash() {
  for (let i = 0; i < word.length; i++) {
    arrayWord.push('_ ');
  }
  console.log(arrayWord);

  arrayWord.forEach(addWord);
  document.querySelector('.word-choice').innerHTML = wordArea;
}

function hideStart() {
  startBtn.style.display = 'none';
}

function splitWord() {
  word = randomWord().split('');
  addDash();
  hideStart();
}

function askLetter(letter) {
  letter = letter.toUpperCase();
  let guessesLeft = word.length;
  console.log(guessesLeft);

  if (lettersGuessed.indexOf(letter) > -1) {
    return;
  }

  lettersGuessed.push(letter);
  const correct = secretWord.indexOf(letter) > -1;

  if (!correct) {
    guessesLeft -= 1;
  }

  return correct;
}

startBtn.addEventListener('mousedown', splitWord);
