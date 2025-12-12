



function getComputerChoice() {
    let x = Math.random();

    if (x < 1 / 3) {
        return "rock";
    } else if (x > 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {

    let x = prompt("Choose rock, paper, or scissors")

    return x.toLowerCase();

}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return console.log("Tie");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            return console.log("You win, Rock beats Scissors!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            return console.log("You win, Paper beats Rock!");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            return console.log("You win, Scissors beats Paper!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            return console.log("You lose, Paper beats Rock!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            return console.log("You lose, Scissors beats Paper!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            return console.log("You lose, Rock beats Scissors!");
        }
    }

    for (let index = 1; index < 6; index++) {

        let x = getHumanChoice();
        let y = getComputerChoice();

        playRound(x, y);

        if (x === y) {
            index--;
        }

        console.log("Your score: " + humanScore + ", Computer score: " + computerScore)

        if (humanScore == 3) {
            console.log("You won the game!");
            break;
        }

        if (computerScore == 3) {
            console.log("Computer won the game")
            break;
        }
    }



}

playGame();



