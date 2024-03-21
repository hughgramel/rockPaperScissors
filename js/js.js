/**
 * Step 1: gather all dom elements
 */

const infButton = document.querySelector("#inf")
const cavButton = document.querySelector("#cav")
const artButton = document.querySelector("#art")
const yourWins = document.querySelector("#your-wins")
const oppWins = document.querySelector("#opp-wins")
const viewResult = document.querySelector("#view")
const allButtons = document.querySelectorAll(".choose")
let roundsPlayed = 0
/**
 * This function plays 5 rounds of rock paper scissors
 */
// shouldn't be needed probable
// function playGame() {
//     let computerChoice;
//     let playerChoice;
//     for (let i = 0; i < 5; i++) {
//         computerChoice = getComputerChoice();
//         console.log("computer choice is: " + computerChoice);
//         playerChoice = getPlayerChoice();
//         console.log("player choice is: " + playerChoice);
//         playRound(computerChoice, playerChoice);
//     }
// }

/**
 * This method plays a round of rock paper scissors, and returns /
 * prints the winner 
 */
function playRound(targetId) {
    if (Number(yourWins.textContent) == 5) {
        viewResult.textContent = "The battles over, you won!"
    } else if (Number(oppWins.textContent) == 5) {
        viewResult.textContent = "The battles over. Our forces were defeated."
    } else {
        let computerChoice = getComputerChoice()

        if (computerChoice == targetId) {
            console.log("It's a tie!");
            viewResult.textContent = "Our offensive led to a stalemate."
        } else if (computerChoice == "inf") {
            // here we know players can't be rock
            // players is paper or scissors
            if (targetId == "art") {
                console.log("You win!");
                viewResult.textContent = "Our shells devastated an enemy division!"
                yourWins.textContent = Number(yourWins.textContent) + 1
            } else {
                console.log("You lose!");
                viewResult.textContent = "We were forced to fall back."
                oppWins.textContent = Number(oppWins.textContent) + 1

            }
        } else if (computerChoice == "art") {
            if (targetId == "cav") {
                console.log("You win!");
                viewResult.textContent = "A cavalry charge broke through their lines!"
                yourWins.textContent = Number(yourWins.textContent) + 1
            } else {
                console.log("You lose!");
                viewResult.textContent = "The enemy forced us to retreat after heavy losses."
                oppWins.textContent = Number(oppWins.textContent) + 1

            }
        } else { // choice is cavalry
            if (targetId == "inf") {
                console.log("You win!");
                viewResult.textContent = "The guards advance shattered parts of their line!"
                yourWins.textContent = Number(yourWins.textContent) + 1

            } else {
                console.log("You lose!");
                viewResult.textContent = "We couldn't take their fortified position."
                oppWins.textContent = Number(oppWins.textContent) + 1

            }
        }

        if (Number(yourWins.textContent) == 5) {
            viewResult.textContent = "The battles over, you won!"
        } else if (Number(oppWins.textContent) == 5) {
            viewResult.textContent = "The battles over. Our forces were defeated."
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
        return "inf";
    } else if (randomNumber >= (1 / 3) && randomNumber <= (2 / 3)) {
        return "art";
    } else {
        return "cav";
    }
}

/**
 * This function gets the player choice in a rock, paper scissors game and 
 * returns the choice once its valid
 * @returns A string of a valid player choice retrieved from the console
 */

// shouldn't need this as I can just take the id of the event

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice of rock, paper, or scissors: ").toLowerCase();
    console.log(playerChoice);
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Incorrect input. Please enter your choice of rock, paper, or scissors: ").toLowerCase();
    }
    console.log("final choice: " + playerChoice);
    return playerChoice;
}

allButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        playRound(e.target.getAttribute('id'));
    })
});