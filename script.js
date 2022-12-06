
function getComputerChoice(){
let randomNum = Math.floor(Math.random() * 10);

switch(randomNum) {
    case 0:
    case 1:
    case 2:
    case 3:
        return "Rock";
        break;
    case 4:
    case 5:
    case 6:
        return "Paper";
        break;
    case 7:
    case 8:
    case 9:
        return "Scissors";
}
}

let compChoice = getComputerChoice();

console.log(compChoice);