"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displaymessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "It is not number";
  }
  // when guess high than secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess > secretNumber ? "It is high" : "It is low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("It not number");
    }
  }
  //when guess is low than secretNumber

  //when guess and secretNumber equlis
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You are Winner..";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  }

  if (score > highscore) {
    document.querySelector(".highscore").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".highscore").textContent = "0";
  document.querySelector(".number").style.width = "15rem";
});
