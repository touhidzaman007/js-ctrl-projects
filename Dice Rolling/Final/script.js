'use strict';

const player0EL = document.querySelector('.player--0'),
  player1EL = document.querySelector('.player--1'),
  score0El = document.getElementById('score__0'),
  score1El = document.getElementById('score__1'),
  current0El = document.getElementById('current__0'),
  current1El = document.getElementById('current__1'),
  btnNew = document.querySelector('.btn--new'),
  btnRoll = document.querySelector('.btn--roll'),
  btnHold = document.querySelector('.btn--hold'),
  diceRoll = document.querySelector('.dice');

let activePLayer, score, currentScore, playing;
const init = function () {
  activePLayer = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceRoll.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  btnRoll.classList.remove('inactive');
  btnHold.classList.remove('inactive');
};

init();

const switchPlayer = function () {
  document.getElementById(`current__${activePLayer}`).textContent = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceRoll.classList.remove('hidden');
    diceRoll.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current__${activePLayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePLayer] += currentScore;
    document.getElementById(`score__${activePLayer}`).textContent =
      score[activePLayer];
    if (score[activePLayer] >= 100) {
      playing = false;
      btnRoll.classList.add('inactive');
      btnHold.classList.add('inactive');
      diceRoll.classList.add('hidden');
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
