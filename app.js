const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

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

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}))