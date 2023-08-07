console.log("Hello, World!");


function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return "rock";

        case 2:
            return "paper";

        case 3:
            return "scissors";

    }
}

function playRound(playerSelection, computerSelection){
    let lowerCasePlayerSelection = playerSelection.toLowerCase();

    if (lowerCasePlayerSelection === computerSelection)
    {
        return 'tie';
    }
    else if (lowerCasePlayerSelection === "paper")
    {
        if (computerSelection === "scissors")
        {
            return 'lose';
        }
        else
        return 'win';
    }
    else if (lowerCasePlayerSelection === "rock")
    {
        if (computerSelection === "scissors")
        {
            return 'win';
        }
        else
        return 'lose';
    }
    else if (lowerCasePlayerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            return 'lose';
        }
        else
        return 'win';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++)
    {   
        const playerSelection = prompt("Choose your move: rock/paper/scissors");
        const computerSelection = getComputerChoice();
        
        switch (playRound(playerSelection, computerSelection)){
            case 'tie':
                console.log(`It's a tie! You both chose ${computerSelection}`);
                break;
            case 'win':
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            case 'lose':
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
        }
    }
    if (playerScore > computerScore)
    {
        console.log("You win the game! Congratulations :)");
    }
    else if (playerScore < computerScore){
        console.log("You lose the game! Better luck next time :(");
    }
    else{
        console.log("The game has been drawn!");
    }
}

game();
