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
let wordArea = '';
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

function splitWord() {
  word = randomWord().split('');

  for (let i = 0; i < word.length; i++) {
    obfWord.push('_');
  }

  console.log(word);
  const spaceWord = word.values();
  console.log(spaceWord);

  word.forEach(addWord);
  document.querySelector('#word-choice').innerHTML = wordArea;

  // word.forEach((e) => console.log(typeof e));
  // word.forEach((e) => (wordSpot.innerHTML = e));
}
function addWord(v) {
  wordArea = `${wordArea}${v}`;
}

function logKey(e) {
  console.log(` ${e.code}`);
  log.textContent += ` ${splitWord()}`;
}

document.addEventListener('keydown', logKey);
// adds word to display
// startBtn.addEventListener('mousedown', function () {
//   wordSpot.textContent = splitWord();
//   // console.log(wordSpot);
//   // console.dir(word);
//   // const onPage = JSON.stringify(word);
//   // console.log(onPage);
//   // console.dir(onPage);
// });

startBtn.addEventListener('mousedown', splitWord);

function hideshow() {
  document.getElementById('hidden-div').style.display = 'block';
  this.style.display = 'none';
}
