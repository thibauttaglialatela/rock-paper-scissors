const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3) + 1;
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "it's a draw";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose';
    }

    return resultDisplay.innerHTML = result;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))