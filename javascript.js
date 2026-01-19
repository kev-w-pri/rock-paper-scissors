function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    let rounds = 1;

    function playRound(humanChoice, computerChoice){

        function getComputerChoice(){

            let randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber <= 33){
                return "rock";
            } else if (33 < randomNumber && randomNumber <= 66){
                return "paper";
            } else if (66 < randomNumber && randomNumber <= 99){
                return "scissors";
            }
        }

        function getHumanChoice(){
            let choice = prompt("Round " + rounds + ":" + " Choose your fighter (Rock, Paper, Scissors):").toLowerCase();
            return choice;
        }

        const humanThrow = getHumanChoice();
        const computerThrow = getComputerChoice();


        console.log(computerThrow);
        console.log(humanThrow);

        if (humanThrow == computerThrow){
            return console.log("It's a draw! " + humanThrow + " and " + computerThrow + " are the same." + " That's " + humanScore + " wins for you and " + computerScore + " wins for the robot.");

        } else if((humanThrow == "rock" && computerThrow == "scissors") || (humanThrow == "scissors" && computerThrow == "paper") || (humanThrow == "paper" && computerThrow == "rock")){
            humanScore++;
            return console.log("You win! " + humanThrow + " beats " + computerThrow + ". That's " + humanScore + " wins.");

        } else{
            computerScore++;
            return console.log("Sorry, loser! " + computerThrow + " beats " + humanThrow + " The robot has " + computerScore + " wins now. Are you proud?");
        }
    }

    while (rounds <= 5) {
        playRound();
        rounds++;
    }


   
}

playGame();