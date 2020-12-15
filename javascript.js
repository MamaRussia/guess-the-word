const wordChoices = [
  'handstand',
  'child pose',
  'corpse',
  'warrior',
  'happy baby',
  'frog',
  'pigeon',
  'upward dog',
  'crane',
  'bow',
  'eagle',
  'wheel',
  'boat',
  'plow',
  'cow face',
];
const wordSpot = document.querySelector('#word-choice');
const startBtn = document.querySelector('#start');
const win = document.querySelector('#wins');
const dash = '_';

function startGame() {
  console.log('did it work dues');
}

console.log(wordChoices[4]);

function replaceAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0) + chr + str.substr(index + 1);
}

console.log(wordChoices[0].replace(dash, wordChoices));

document.onkeyup = function (e) {
  const userGuess = e.key;
  console.log(e.key);
  console.log(wordSpot);
  const computerGuess =
    wordChoices[Math.floor(Math.random() * wordChoices.length)];
  console.log(computerGuess.length);

  wordSpot.textContent = computerGuess;
};
