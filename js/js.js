console.log('hello, console!');
console.log('Welcome to a Javascript Rock, Paper, Scissors game');
playGame();

/**
 * This function plays 5 rounds of rock paper scissors
 */
function playGame() {
    let computerChoice;
    let playerChoice;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        console.log("computer choice is: " + computerChoice);
        playerChoice = getPlayerChoice();
        console.log("player choice is: " + playerChoice);
        playRound(computerChoice, playerChoice);
    }
}

/**
 * This method plays a round of rock paper scissors, and returns /
 * prints the winner 
 * @param {*} computerChoice - A string of a random computer choice retrieved from the console
 * @param {*} playerChoice - A string of a valid player choice retrieved from the console
 */
function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        console.log("It's a tie!");
    } else if (computerChoice == "rock") {
        // here we know players can't be rock
        // players is paper or scissors
        if (playerChoice == "paper") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    } else if (computerChoice == "paper") {
        if (playerChoice == "scissors") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    } else { // choice is scissors
        if (playerChoice == "rock") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
}

/**
 * This function generates a random computer choice between the 3 options
 * of rock, paper, and scissors and returns the one randomly generated
 * @returns string of randomly generated choice
 */

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber <= (1 / 3)) {
        return "rock";
    } else if (randomNumber >= (1 / 3) && randomNumber <= (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

/**
 * This function gets the player choice in a rock, paper scissors game and 
 * returns the choice once its valid
 * @returns A string of a valid player choice retrieved from the console
 */

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice of rock, paper, or scissors: ").toLowerCase();
    console.log(playerChoice);
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Incorrect input. Please enter your choice of rock, paper, or scissors: ").toLowerCase();
    }
    console.log("final choice: " + playerChoice);
    return playerChoice;
}