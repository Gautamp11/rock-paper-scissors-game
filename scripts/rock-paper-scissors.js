let score = {};
let computerMove = "";
let playerMove = "";
let result = "";

score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(move) {
  playerMove = move;

  computerMove = pickComputerMove();

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You loose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You Loose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You loose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  }
  if (result === "You loose") {
    score.losses += 1;
  }
  if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
}

function updateScore() {
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="assets/${playerMove}-emoji.png"> : <img src="assets/${computerMove}-emoji.png"> comp`;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  document.querySelector(".js-score").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
  document.querySelector(".js-result").innerHTML = "";
}
