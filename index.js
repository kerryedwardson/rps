
//global variables to use in multiple functions
let playerScore = 0
let computerScore = 0

//generates a random number and assigns it to one of the values in the array
function computerPlay() { 
    return (['paper','scissors','rock'])[Math.floor(Math.random() * 3)]
}

//plays rounds, increments winner's score
function playRound(playerSelection, computerSelection) {
    //prompts user for input choice
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
    //makes computer choice random from function  above
    computerSelection = computerPlay();
    let message = ''
    //rps logic
    if (playerSelection === computerSelection) {
        message = 'It\'s a tie! Go again'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        message = 'You win! Rock beats Scissors'
        playerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        message = 'You win! Paper beats Rock'
        playerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        message = 'You win! Scissors beats Paper'
        playerScore++
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        message = 'You lose! Rock beats Scissors'
        computerScore++
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        message = 'You lose! Paper beats Rock'
        computerScore++
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        message = 'You lose! Scissors beats Paper'
        computerScore++
    }
    //logging so you know what's going on
    console.log(`The computer chose: ${computerSelection}`)
    console.log(`You chose: ${playerSelection}`)
    return message
}

// console.log(playRound(playerSelection, computerSelection))


//looping 5 times and deciding the winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }

    if (playerScore < computerScore) {
        console.log(`You lost, buddy. Computer Score: ${computerScore} Your Score: ${playerScore}`)
    } else if (computerScore < playerScore) {
        console.log(`You won!!!!  Your Score: ${playerScore} Computer Score: ${computerScore}`)
    } else {
        console.log(`It's a tie.`)
    }
}

console.log(game())