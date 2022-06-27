const humanScore = document.querySelector(".score_human");
const computerScore = document.querySelector(".score_computer");
const score_title = document.querySelector(".score_title h3");

function computerPlay() {
  const arr = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function playRound(computerSelection, playerSelection) {
  if (computerSelection === "rock" && playerSelection === "scissor") {
    return "computer";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "human";
  } else if (computerSelection === "paper" && playerSelection === "scissor") {
    return "human";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "computer";
  } else if (computerSelection === "scissor" && playerSelection === "rock") {
    return "human";
  } else if (computerSelection === "scissor" && playerSelection === "paper") {
    return "computer";
  } else {
    return "draw";
  }
}

let playerScores = 0;
let computerScores = 0;
let draw = 0;

function game(playerSelection) {
  const computerSelection = getComputerSelection();
  let result = getScore(computerSelection, playerSelection);
  switch (result) {
    case "human":
      playerScores++;
      if (playerScores === 5) {
        score_title.innerText = `You Won!!`;
        playerScores = 0;
        computerScores = 0;
        draw = 0;
        break;
      }
      score_title.innerText = `${playerSelection} beats ${computerSelection}!`;
      break;
    case "computer":
      computerScores++;
      if (computerScores === 5) {
        score_title.innerText = `Computer Wins!!`;
        playerScores = 0;
        computerScores = 0;
        draw = 0;
        break;
      }
      score_title.innerText = `${computerSelection} beats ${playerSelection}!`;
      break;

    case "draw":
      draw++;
      score_title.innerText = "It's a draw!!";
      break;
  }
  humanScore.innerText = playerScores;
  computerScore.innerText = computerScores;
}

const moves = document.querySelectorAll(".move");

moves.forEach((move) =>
  move.addEventListener("click", (e) => {
    const selection = e.currentTarget.dataset.selection;
    playGame(selection);
  })
);
