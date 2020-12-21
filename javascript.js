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
let wordArea = '';
const arrayWord = [];

function randomWord() {
  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function addWord(v) {
  console.log(word);
  wordArea = `${wordArea}${v}`;
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

startBtn.addEventListener('mousedown', splitWord);
