'use strict';

let computerSelection = ['rock', 'paper', 'scissors'],
    randomChoice = "",
    playerSelection = "",
    computerScore = 0,
    playerScore = 0,
    draws = 0,
    roundNumber = 0;

const reloadMessage = "Reload the page to play again!";

function computerPlay() {
    return randomChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)]; //0 = Rock, 1 = paper, 2 = scissors
};

function round(randomChoice, playerSelection) {
    switch (randomChoice + playerSelection) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection} \n You won this round!🥳`);
            return playerScore += 1;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection} \n You lost this round!🙃`);
            return computerScore += 1;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection}\n Round was a Draw`);
            return draws += 1;
        default:
            return;
    };
};

function playerPlay(round) {
    do {
        if (round == 0) {
            playerSelection =
                window.prompt("Welcome to Rock, Paper, Scissors." +
                    "\nStrategy will take you far here, so choose wisely." +
                    "\n\nYou have 5 rounds to play, Good Luck." +
                    "\nYou're on round " + (round + 1) +
                    "\n\nChoose between: Rock, Paper or Scissors" +
                    "\nOr press cancel to exit the game");
        } else {
            playerSelection =
                window.prompt(`Choose again!
                \nRound: ${round + 1}
                \nOr press cancel to exit the game`);
        }
        if (playerSelection === null) {
            return roundNumber = 4;
        }
        playerSelection = playerSelection.toLowerCase().trim();
        if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
            window.alert(`You wrote: ${playerSelection}.
            \nPlease make sure to choose between: rock, paper or scissors.
            \nRound did not change, press ok to try again!`);
        }
    } while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"));
};

function EndGame(round) {
    if (round == 4 && playerSelection != null) {
        return computerScore > playerScore ? window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: ${draws} \n You lost the game 😭.
        \n${reloadMessage}`) : computerScore == playerScore ? window.alert(`Computer score: ${computerScore} \nPlayer score: ${playerScore}
            \nDraws: ${draws}
            \nIt seems that the game ended in a tie 🤝.
            \n${reloadMessage}`) : window.alert(`Computer score: ${computerScore}
                \nPlayer score: ${playerScore}
                \nDraws: "${draws}
                \nYou won the game 🥳 pro!
                \n${reloadMessage}`);
    } else if (round == 4 && playerSelection == null) {
        return window.alert(`You cancelled the game. ${reloadMessage}`);
    };
};

function play() {
    for (roundNumber = 0; roundNumber < 5; roundNumber++) {
        randomChoice = computerPlay();
        playerPlay(roundNumber);
        round(randomChoice, playerSelection);
        EndGame(roundNumber);
    };
};

play();