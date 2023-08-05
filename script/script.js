'use strict';

let computerSelection = ['rock', 'paper', 'scissors'],
    randomChoice = "",
    playerSelection = "",
    computerScore = 0,
    playerScore = 0,
    draws = 0,
    roundNumber = 0;


function computerPlay() {
    return randomChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)]; //0 = Rock, 1 = paper, 2 = scissors
};

function round(randomChoice, playerSelection) {
    switch (randomChoice + playerSelection) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection} \n You win!`);
            return playerScore += 1;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection} \n You lose!`);
            return computerScore += 1;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            window.alert(`Computer chose: ${randomChoice}\n You chose: ${playerSelection}\n Round Draw`);
            return draws += 1;
        default:
            return;
    };
};

function playerPlay(round){
    do {
        if (round==0){
            playerSelection =
            window.prompt("Welcome to Rock, Paper, Scissors." +
                "\nStrategy will take you far here, choose wisely." +
                "\nbetween: Rock, Paper or Scissors" +
                "\nYou have 5 rounds to play, Good Luck." +
                "\nLet's start" + "\nRound:" + (round + 1) +
                "\nPress cancel to exit the game");
        } else {
            playerSelection =
            window.prompt("Choose again!" + "\nRound:" + (round + 1) + "\nPress cancel to exit the game");
        }
        if (playerSelection===null){
            return roundNumber=4;   
        }
        playerSelection = playerSelection.toLowerCase().trim();
        if(!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")){
            window.alert("You write: " + playerSelection + "\n Please make sure of write only paper, rock or scissor \n Round does not change");
        }
    } while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
}

function EndGame(round){
    if (round == 4 && playerSelection != null) {
        return computerScore > playerScore ? window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: ${draws} \n You lose the game 😞 \n reload the page to play again!`)
            : computerScore == playerScore ? window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: ${draws} \n It seems that the game ended in a tie. Reload the page to play again!`)
                : window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: "${draws} \n You win the game 🥳 pro!. Reload the page to play again!`);
    } else if (round == 4 && playerSelection == null){
        return window.alert("You finished the game, reload to play again"); 
    }
}

function play() {
    for (roundNumber = 0; roundNumber < 5; roundNumber++) {
        randomChoice = computerPlay();
        playerPlay(roundNumber);
        round(randomChoice, playerSelection);
        EndGame(roundNumber);
    };
};

play();