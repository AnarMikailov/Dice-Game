"use strict";

const rollDice = document.querySelector(".rollDice");
const newGame = document.querySelector(".newGame");
const hold = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const scoreP1 = document.querySelector(".p1-score");
const scoreP2 = document.querySelector(".p2-score");
const Player0 = document.querySelector(".Player-1");
const Player1 = document.querySelector(".Player-2");
let currentScore0 = document.querySelector(".current-score-0");
let currentScore1 = document.querySelector(".current-score-1");
let count = 0;
let activePlayer = 0;
let a = Number(scoreP1.textContent);
let b = Number(scoreP2.textContent);
rollDice.addEventListener("click", function () {
  let score1 = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove("hidden");
  dice.src = ` dice-${score1}.png`;
  if (score1 !== 1) {
    count += score1;

    document.querySelector(`.current-score-${activePlayer}`).textContent =
      count;
  } else {
    count = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    Player0.classList.toggle("active-player");
    Player1.classList.toggle("active-player");
  }
});

hold.addEventListener("click", function () {
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player0.classList.toggle("active-player");
  Player1.classList.toggle("active-player");

  if (activePlayer === 1) {
    a += count;
    scoreP1.textContent = a;

    count = 0;

    currentScore0.textContent = 0;
  } else {
    b += count;
    scoreP2.textContent = b;

    count = 0;
    currentScore1.textContent = 0;
  }
  if (a >= 100 || b >= 100) {
    document.querySelector(".winner").style.fontSize = "4rem";
    document.querySelector(".winner").style.color = "#fff";

    document.querySelector(".winner").style.paddingTop = "5rem";
    document.querySelector(".winner").textContent = `Player ${
      activePlayer === 1 ? "1" : "2"
    } wins`;
    document.querySelector(".winner").classList.remove("hidden");

    hold.classList.add("hidden");
    rollDice.classList.add("hidden");
  }
});
document.querySelector(".newGame").addEventListener("click", function () {
  activePlayer = 0;

  document.querySelector(".winner").classList.add("hidden");
  Player0.classList.add("active-player");
  Player1.classList.remove("active-player");
  dice.classList.add("hidden");

  count = 0;
  a = 0;
  b = 0;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  hold.classList.remove("hidden");
  rollDice.classList.remove("hidden");
});
