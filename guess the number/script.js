"use strict";
console.log(document.querySelector(".message").textContent);
let secretNumber = Math.floor(Math.random(".number") * 20) + 1;

let tscore = 20;
let highscore = 0;
const display = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    display("no number");
  } else if (guess === secretNumber) {
    display("congrats you have won");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (tscore > highscore) {
      highscore = tscore;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (tscore > 0) {
      display(guess > secretNumber ? "too high" : "too low");
      tscore--;
      l;
      document.querySelector(".score").textContent = tscore;
    } else {
      display("you have lost hahaha");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  tscore = 20;
  secretNumber = Math.floor(Math.random(".number") * 20) + 1;
  document.querySelector(".score").textContent = tscore;
  display("start guessing...");
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
