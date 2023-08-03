'use strict';

let computerSelection=['rock','paper','scissors'],
randomChoice="",
playerSelection="", 
computerScore=0,
playerScore=0,
draws=0;

function computerPlay(){
    return randomChoice=computerSelection[Math.floor(Math.random()*computerSelection.length)]; //0 = Rock, 1 = paper, 2 = scissors
}

function round(randomChoice, playerSelection){
    switch (randomChoice+playerSelection){
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            window.alert("Computer: " + randomChoice + "\n You: " + playerSelection + "\n, You win!");
            return playerScore=playerScore+1; 
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            window.alert("Computer: " + randomChoice + "\n You: " + playerSelection + "\n, You lose!");
            return computerScore=computerScore+1;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            window.alert("Computer: " + randomChoice + "\n You: " + playerSelection + "\n, Draw");
            return draws=draws+1;
    }       
}

function play(){
    for (let i=0; i<5; i++){
        randomChoice = computerPlay();
        do{
            playerSelection = window.prompt("Choose rock, paper or scissors, round: " + (i+1) 
                              + " \n\n Note: If the round doesn't change it means you entered a wrong value, make sure you enter one of the 3 mentioned");
            playerSelection = playerSelection.toLowerCase();
        } while (!(playerSelection=="rock" || playerSelection=="paper" || playerSelection=="scissors"))
        round(randomChoice, playerSelection);
        if (i==4){
            return computerScore>playerScore ? window.alert("Computer score: " + computerScore + "\nPlayer score: " + playerScore 
                                                           + "\nDraws: " + draws + "\nYou lose the game :(, reload the page to try again!")
                   : computerScore==playerScore ? window.alert("Computer score: " + computerScore + "\nPlayer score: " + playerScore 
                                                           + "\nDraws: " + draws + "\nIt seems that the game ended in a tie. Reload the page to try again!")
                   : window.alert("Computer score: " + computerScore + "\nPlayer score: " + playerScore 
                                                           + "\nDraws: " + draws + "\nYou win the game :), pro!. Reload the page to try again!")
        }
    }
}

play();