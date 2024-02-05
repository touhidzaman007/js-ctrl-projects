'use strict';

const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const scoreResult = document.querySelector('.score');
const highscoreResult = document.querySelector('.highscore');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Event for checking number
check.addEventListener('click', function () {
  const guessedNumber = Number(guess.value);
  if (!guessedNumber) {
    message.textContent = '🛑 No Number';
  } else if (guessedNumber === secretNumber) {
    message.textContent = '✅ Correct Answer';
    if (score > highscore) {
      highscore = score;
      highscoreResult.textContent = highscore;
    }
    body.style.backgroundColor = '#60b347';
    number.textContent = guessedNumber;
    number.style.width = '30rem';
  } else {
    if (score > 1) {
      message.textContent =
        guessedNumber > secretNumber ? '📈 Too High!' : '📉 Too Low';
      score--;
      scoreResult.textContent = score;
    } else {
      body.style.backgroundColor = '#ff0e0e';
      message.textContent = '💥 You Lost!';
      scoreResult.textContent = 0;
    }
  }
});

// Event for resetting the whole w/out reloading
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '';
  number.textContent = '?';
  number.style.width = '15rem';
  guess.value = '';
  scoreResult.textContent = 20;
  score = 20;
});

// Event for dark and light mode
toggle.addEventListener('click', function () {
  body.classList.toggle('light');
  if (toggle.textContent == '🌛') {
    toggle.textContent = '🌞';
  } else {
    toggle.textContent = '🌛';
  }
});
