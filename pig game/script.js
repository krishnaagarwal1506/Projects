'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');
const score1 = document.getElementById('score--1');
const score0 = document.getElementById('score--0');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, playing;
function start() {
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  activePlayer = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;

  dice.classList.add('hidden');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
start();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', start);
