let humanScore = 0; 
let computerScore = 0;
playGame();

function playGame() {
    
    for (i = 0; i < 5; i++) {
        let computerChoice = getComputerChoise();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

function getComputerChoise() {
    let randomChoise = Math.floor((Math.random() * 3)+ 1); 
    switch(randomChoise) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    
    let sign = prompt("What's your sign? (Rock, Paper or Scissors)");

    while (sign.toLowerCase() !== "rock" && sign.toLowerCase() !== "paper" && sign.toLowerCase() !== "scissors") {
        sign = prompt("Try again");
    } 

    return sign;
}
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both got " + humanChoice);
        return;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    }
}
