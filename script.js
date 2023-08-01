'use strict';

let playerScore = 0;
let computerScore = 0;
let round = 0;
let computer;
let playerSelection;

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
    console.log(`computer picked ${computer}`);
    return computer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose between Rock, Paper or Scissors').toLowerCase();
    computerSelection = computer;

    if (playerSelection == computerSelection) {
        console.log(`Computer also picked ${computerSelection} round draw, go again!`);
        playerSelection = prompt(`Computer also picked ${computerSelection} round draw, go again!`);
    } else {
        console.log('test failed');
    }
};

computerPlay();
playRound();
