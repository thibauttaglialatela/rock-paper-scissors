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
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "it's a draw";
    }
    if (computerChoice === 'Rock' && userChoice === 'paper') {
        result = 'You win';
    }
    if (computerChoice === 'Rock' && userChoice === 'scissors') {
        result = 'You lose';
    }
    if (computerChoice === 'Paper' && userChoice === 'scissors') {
        result = 'You win';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lose';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You win';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You lose';
    }

    return result;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))