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

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    for (let index = 0; index < 5; index++) {
      let result = playRound(
        computerPlay(),
        prompt("Enter your choice: rock, paper or scissor!")
      );
      if (result === "draw") draw++;
      else playerScore += result;
    }
    computerScore = Math.abs(5 - playerScore - draw);
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
    console.log("Draw: " + draw);
  }

  game();

const moves = document.querySelectorAll(".move");

moves.forEach((move) =>
  move.addEventListener("click", (e) => {
    const selection = e.currentTarget.dataset.selection;
    playGame(selection);
  })
);