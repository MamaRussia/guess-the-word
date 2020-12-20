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
const lettersGuessed = [];
let word = [];
let wordl = 0;
const obfWord = [];

function randomWord() {
  return wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function showLetter(data) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === data) {
      obfWord[i] = word[i];
      wordl--;
    }
  }
}

function initGame() {
  word = randomWord().split('');
  console.log(word);

  wordl = word.length;

  for (let i = 0; i < word.length; i++) {
    obfWord.push('_');
  }

  showLetter(word[0]);
  console.log(word);
  showLetter(word[word.length - 1]);
  // lettersGuessed.push(word[0]);
  // lettersGuessed.push(word[word.length - 1]);
}

// adds word to display
startBtn.addEventListener('click', function () {
  wordSpot.textContent = initGame();
});
