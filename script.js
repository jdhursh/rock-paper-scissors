function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 9)

    switch(randomNum) {
        case 0:
        case 1:
        case 2:
            return "rock";
            break;
        case 3:
        case 4:
        case 5:
            return "paper";
            break;
        case 6:
        case 7:
        case 8:
            return "scissors";
            break;
    }
}

function userInput() {
    let input = prompt('rock, paper, scissors').toLowerCase();

    return input;
}

let compChoice;
let userChoice;



function playRound(compChoice, userChoice) {

    if ((userChoice == 'rock' && compChoice == 'scissors') ||
        (userChoice == 'paper' && compChoice == 'rock') ||
        (userChoice == 'scissors' && compChoice == 'paper')){
            return "you win";
        } else if ((userChoice == 'rock' && compChoice == 'paper') ||
        (userChoice == 'paper' && compChoice == 'scissors') ||
        (userChoice == 'scissors' && compChoice == 'rock')){
            return "you lose";
        } else if ((userChoice == 'rock' && compChoice == 'rock') ||
        (userChoice == 'paper' && compChoice == 'paper') ||
        (userChoice == 'scissors' && compChoice == 'scissors')) {
            return "tie";
        } else {
            return "please enter rock, paper, or scissors";
        }
}

let result;

function game(){


    for(i = 0; i < 5; i++) {
        compChoice = getComputerChoice();
        userChoice = userInput();
        result = playRound(compChoice, userChoice);
        console.log("Round", i + 1)
        console.log("User: ", userChoice);
        console.log("Computer: ", compChoice);
        console.log(result);
    }
    
}

game();