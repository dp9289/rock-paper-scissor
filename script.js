const humanScore = document.querySelector(".score_human");
const computerScore = document.querySelector(".score_computer");
const score_title = document.querySelector(".score_title h3");

function computerPlay() {
  const arr = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function playRound(computerSelection, playerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  console.log(`Computer Chooses: ${computerSelection}`);
  console.log(`Player Chooses: ${playerChoice}`);
  if (computerSelection === "rock" && playerChoice === "scissor") {
    console.log("You Lose! Rock beats scissor\n");
    return 0;
  } else if (computerSelection === "rock" && playerChoice === "paper") {
    console.log("You win! paper beats rock\n");
    return 1;
  } else if (computerSelection === "paper" && playerChoice === "scissor") {
    console.log("You win! scissor beats paper\n");
    return 1;
  } else if (computerSelection === "paper" && playerChoice === "rock") {
    console.log("You Lose! paper beats rock\n");
    return 0;
  } else if (computerSelection === "scissor" && playerChoice === "rock") {
    console.log("You win! rock beats scissor\n");
    return 1;
  } else if (computerSelection === "scissor" && playerChoice === "paper") {
    console.log("You Lose! scissor beats paper\n");
    return 0;
  } else {
    console.log("it's a draw!\n");
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
