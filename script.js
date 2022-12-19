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


