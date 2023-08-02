'use strict';

let result;
let computer;

function computerPlay() {
    const randChoice = Math.floor(Math.random() * 3) + 1;

    switch (randChoice) {
        case 1:
            computer = 'rock';
            break;
        case 2:
            computer = 'paper';
            break;
        case 3:
            computer = 'scissors';
            break;
    }
    return computer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "Invalid choice! Please choose between 'rock', 'paper', or 'scissors'!";
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! computer selected ${computerSelection} and ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === computerSelection) {
        return `It's a round draw! computer also chose ${computerSelection}`;
    } else {
        return `You lost this round! computer picked ${computerSelection} and ${computerSelection} beats ${playerSelection} :(`;
    };

}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round: ${round}, Choose between rock, paper or scissors.`);
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lost')) {
            computerScore++;
        }
        console.log(result);
    };
};

game();