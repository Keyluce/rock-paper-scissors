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

function playRound(){
    
    let playerSelection = this.getAttribute('id');
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let lowerCaseComputerSelection = computerSelection.toLowerCase();

    playerSelection = makeFirstLetterUCase(lowerCasePlayerSelection);
    computerSelection = makeFirstLetterUCase(lowerCaseComputerSelection);



    if (lowerCasePlayerSelection === lowerCaseComputerSelection)
    {
        result.textContent = `It's a tie! You both chose ${computerSelection}`;
    }
    else if (lowerCasePlayerSelection === "paper")
    {
        if (lowerCaseComputerSelection === "scissors")
        {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
        else{
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        }
        
    }
    else if (lowerCasePlayerSelection === "rock")
    {
        if (lowerCaseComputerSelection === "scissors")
        {
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
        else{
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        }
    }
    else if (lowerCasePlayerSelection === "scissors")
    {
        if (lowerCaseComputerSelection === "rock")
        {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
        else{
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        }

    }
    

    if (playerScore == 5)
    {
        result.textContent = "Congratulations! You've won :)";
        buttons.forEach(button => button.removeEventListener('click', playRound));
        
    }
    else if (computerScore == 5)
    {
        result.textContent = "You lose! Better luck next time :(";
        buttons.forEach(button => button.removeEventListener('click', playRound));
    }
    score.textContent = `You : ${playerScore} :: Computer: ${computerScore}`;
}

function makeFirstLetterUCase(a){
    let b = a.replace(a.charAt(0),a.charAt(0).toUpperCase());
    return b;
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const div = document.createElement('div');
div.classList.add('output-div');
document.body.appendChild(div);
const result = document.createElement('p');

div.appendChild(result);
const score = document.createElement('p');
div.appendChild(score);
score.textContent = `You : ${playerScore} :: Computer: ${computerScore}`;











