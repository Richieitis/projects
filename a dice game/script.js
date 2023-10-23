"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
let scores, activePlayer, playing, currentScore;
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");

const newgame = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
newgame();
const switching = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

dice.classList.add("hidden");
currentScore = 0;
btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceN = Math.floor(Math.random() * 6) + 1;
    console.log(diceN);
    dice.classList.remove("hidden");

    dice.src = `dice-${diceN}.png`;
    if (diceN !== 1) {
      currentScore = currentScore + diceN;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switching();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
    } else {
      switching();
    }
  }
});

btnNew.addEventListener("click", newgame);
