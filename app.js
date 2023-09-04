const CSChoiceDisplay = document.getElementById("CS-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("Result")

const possiableChoice = document.querySelectorAll('button');
let userChoice;
var CSChoice;
let result;


possiableChoice.forEach(possiableChoice => possiableChoice.addEventListener('click', (e) =>{
    userChoice  =e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    if (userChoice == 'Reset'){
        userChoiceDisplay.innerHTML = '';
        CSChoiceDisplay.innerHTML = '';
        resultDisplay.innerHTML = '';
    } 
    else{
        generateComputerChoice();
        getResult();
    }

   
}))

function generateComputerChoice(){
    const rnd = Math.floor(Math.random() * possiableChoice.length)+1;
    
    if(rnd === 1)
    {
        CSChoice =  'rock';
    }
    if(rnd === 2)
    {
        CSChoice = 'paper';
    }

    if(rnd === 3)
    {
        CSChoice =  'scissor';
    }
    
    CSChoiceDisplay.innerHTML = CSChoice;
}

function getResult(){
    if(CSChoice === userChoice){
        result = "Equal"
    }
    
    
    if(CSChoice === 'rock' && userChoice === 'paper'){
        result = "You Lost"}
    if(CSChoice === 'rock' && userChoice === 'scissor'){
        result = "Computer Lost"}
    
    if(CSChoice === 'paper' && userChoice === 'rock'){
            result = "Computer Lost"}
    if(CSChoice === 'paper' && userChoice === 'scissor'){
        result = "You Lost"}
    
    if(CSChoice === 'scissor' && userChoice === 'rock'){
            result = "You Lost"}
    if(CSChoice === 'scissor' && userChoice === 'paper'){
        result = "Computer Lost"}


    resultDisplay.innerHTML = result;
}