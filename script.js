
function getComputerChoice(){
let randomNum = Math.floor(Math.random() * 9);

switch(randomNum) {
    case 0:
    case 1:
    case 2:
        return "Rock";
        break;
    case 3:
    case 4:
    case 5:
        return "Paper";
        break;
    case 6:
    case 7:
    case 8:
        return "Scissors";
}
}

function getPlayerChoice() {
    let playerInput = prompt ("Rock, Paper, Scissors . . .", "Shoot!");
    return playerInput;
}

const playerChoice = getPlayerChoice();
const compChoice = getComputerChoice();

function playRound(playerChoice, compChoice) {
    
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

    switch(playerChoice) {
        case "Rock":
            if (compChoice == "Paper") {
                return "You lose!";
            } else if (compChoice == "Rock") {
                return "Tie!";
            } else {
                return "You Win!";
            }
            break;
        case "Paper":
            if (compChoice == "Scissors") {
                return "You lose!";
            } else if (compChoice == "Paper") {
                return "Tie!";
            } else {
                return "You win!";
            }
            break;
        case "Scissors":
            if (compChoice == "Rock") {
                return "You lose!";
            } else if (compChoice == "Scissors") {
                return "Tie!";
            } else {
                return "You win!";
            }
        default:
            return "Uh oh! Something went wrong!";
    }
}

let results = playRound(playerChoice, compChoice);

document.getElementById("demo").innerHTML = results;
document.getElementById("you").innerHTML = "You: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
document.getElementById("comp").innerHTML = "Computer: " + compChoice;


