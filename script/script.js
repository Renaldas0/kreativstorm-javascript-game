'use strict';

let computerSelection = ['rock', 'paper', 'scissors'],
    randomChoice = "",
    playerSelection = "",
    computerScore = 0,
    playerScore = 0,
    draws = 0;

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
    };
};

function playerPlay(round){
    do {
        playerSelection =
            window.prompt("Welcome to Rock, Paper, Scissors." +
                "\nStrategy will take you far here, choose wisely." +
                "\nbetween: Rock, Paper or Scissors" +
                "\nYou have 5 rounds to play, Good Luck." +
                "\nLet's start" + "\nRound:" + (round + 1) +
                "\n\nNote: If the round doesn't change it means you entered a wrong value, make sure you enter one of the 3 mentioned" +
                "\nPress cancel to exit the game");
        playerSelection = playerSelection.toLowerCase().trim();
    } while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"))
}

function EndGame(round){
    if (round == 4) {
        return computerScore > playerScore ? window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: ${draws} \n You lose the game 😞 \n reload the page to play again!`)
            : computerScore == playerScore ? window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: ${draws} \n It seems that the game ended in a tie. Reload the page to play again!`)
                : window.alert(`Computer score: ${computerScore} \n Player score: ${playerScore} \n Draws: "${draws} \n You win the game 🥳 pro!. Reload the page to play again!`);
    };
}
function play() {
    for (let i = 0; i < 5; i++) {
        randomChoice = computerPlay();
        playerPlay(i);
        round(randomChoice, playerSelection);
        EndGame(i);
    };
};

play();