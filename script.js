'use strict';

let player;
let computer;
let result;

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
}

computerPlay()

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose between Rock, Paper or Scissors').toLowerCase();
    computerSelection = computerPlay;

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(`You picked ${playerSelection} and computer picked ${computerSelection}. This round was a draw.`);
    }
}

playRound();