let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  playRound("rock", computerSelection);
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", computerSelection);
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerSelection);
});

const div = document.querySelector("div");
const h3 = document.createElement("h3");
const para1 = document.createElement("p");
const para2 = document.createElement("p");

div.appendChild(h3);
div.appendChild(para1);
div.appendChild(para2);

//generates a random number and assigns it to one of the values in the array
function computerPlay() {
  return ["paper", "scissors", "rock"][Math.floor(Math.random() * 3)];
}

//plays rounds, increments winner's score
function playRound(playerSelection, computerSelection) {
  
    let message = "";
    computerSelection = computerPlay();
  

  //rps logic
  if (playerSelection === computerSelection) {
    message = "It's a tie! Go again";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "You win! Rock beats Scissors";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "You win! Paper beats Rock";
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "You win! Scissors beats Paper";
    playerScore++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message = "You lose! Paper beats Rock";
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message = "You lose! Scissors beats Paper";
    computerScore++;
  }

  h3.textContent = `Your choice: ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}  Computer choice: ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} `;
  para1.textContent = message;

  updateScore();
  checkWin();
}

function checkWin() {
  if (computerScore === 5) {
    para2.textContent = `You lost, buddy. Computer Score: ${computerScore} Your Score: ${playerScore}`;
    computerScore = 0;
    playerScore = 0;
  }
  if (playerScore === 5) {
    para2.textContent = `You won!!!!  Your Score: ${playerScore} Computer Score: ${computerScore}`;
    computerScore = 0;
    playerScore = 0;
  }
}

function updateScore() {
  para2.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
}
