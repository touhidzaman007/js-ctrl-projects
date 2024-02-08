'use strict';

const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const scoreResult = document.querySelector('.score');
const highScoreResult = document.querySelector('.highscore');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const guessNumberFunc = function () {
  const guessNumber = Number(guess.value);
  if (!guessNumber) {
    message.textContent = '🛑 No Number';
  } else if (guessNumber === secretNumber) {
    message.textContent = '✅ Correct Answer';
    if (score > highscore) {
      highscore = score;
      highScoreResult.textContent = highscore;
    }
    body.style.backgroundColor = '#60b347';
    number.textContent = guessNumber;
    number.style.width = '30rem';
  } else {
    if (score > 1) {
      message.textContent =
        guessNumber > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      scoreResult.textContent = score;
    } else {
      body.style.backgroundColor = '#ff0e0e';
      message.textContent = '💥 You Lost!';
      scoreResult.textContent = 0;
    }
  }
};

const againBtnClick = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '';
  number.textContent = '?';
  number.style.width = '15rem';
  guess.value = '';
  scoreResult.textContent = 20;
  score = 20;
};

check.addEventListener('click', guessNumberFunc);
again.addEventListener('click', againBtnClick);

toggle.addEventListener('click', function () {
  body.classList.toggle('light');
  toggle.textContent =
    toggle.textContent == '🌛'
      ? (toggle.textContent = '🌞')
      : (toggle.textContent = '🌛');
});
