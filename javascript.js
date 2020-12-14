const wordChoices = ['handstand', 'child pose', 'corpse', 'warrior', 'happy baby', 'frog', 'pigeon', 'upward dog', 'crane', 'bow', 'eagle', 'wheel', 'boat', 'plow', 'cow face']
let wordSpot = document.querySelector('#word-choice');
const startBtn = document.querySelector('#start');
let win = document.querySelector('#wins');
const dash = '_';


function startGame() {
    console.log('did it work dues');
}


document.onkeyup = function (e) { 
    let userGuess = e.key;
    console.log(e.key);
    console.log(wordSpot);
    let computerGuess =
    wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(computerGuess.length);




    wordSpot.textContent = computerGuess;
 }