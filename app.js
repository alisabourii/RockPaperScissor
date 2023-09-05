const userPointDispaly = document.getElementById("user-Point");
const CSPointDispaly = document.getElementById("CS-Point");

const userSetPointDispaly = document.getElementById("user-SetPoint");
const CSSetPointDispaly = document.getElementById("CS-SetPoint");

const CSChoiceDisplay = document.getElementById("CS-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("Result")
const possiableChoice = document.querySelectorAll('button');

let userChoice;
let CSChoice;
let result;

let TotalUserPoint = 0;
let TotalCSPoint = 0;

let userLocalPoint = 0;
let CSLocalPoint = 0;

possiableChoice.forEach(possiableChoice => possiableChoice.addEventListener('click', (e) =>{
    userChoice  =e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    if (userChoice == 'Reset'){
        userChoiceDisplay.innerHTML = '';
        CSChoiceDisplay.innerHTML = '';
        resultDisplay.innerHTML = '';
        userPointDispaly.innerHTML = '0';
        CSPointDispaly.innerHTML = '0';
    } 
    else{
        generateComputerChoice();
        getResult();
    }
    
    if(userLocalPoint === 3)
    {
        TotalUserPoint += 1;
        userLocalPoint = 0;
        CSLocalPoint = 0;
    }
    if(CSLocalPoint === 3)
    {
        TotalCSPoint += 1;
        CSLocalPoint = 0;
        userLocalPoint = 0;
        
    }
    userSetPointDispaly.innerHTML = userLocalPoint;
    CSSetPointDispaly.innerHTML = CSLocalPoint;

    userPointDispaly.innerHTML = TotalUserPoint;
    CSPointDispaly.innerHTML = TotalCSPoint;



   
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
        result = "You Lost";
        userLocalPoint += 1;
    }
    if(CSChoice === 'rock' && userChoice === 'scissor'){
        result = "Computer Lost";
        CSLocalPoint += 1;
    }
    
    if(CSChoice === 'paper' && userChoice === 'rock')
    {
        result = "Computer Lost";
        CSLocalPoint += 1;
    }
    if(CSChoice === 'paper' && userChoice === 'scissor')
    {
        result = "You Lost";
        userLocalPoint += 1;
    }
    
    if(CSChoice === 'scissor' && userChoice === 'rock')
    {
        result = "You Lost";
        userLocalPoint += 1;
    }
    if(CSChoice === 'scissor' && userChoice === 'paper')
    {
        result = "Computer Lost";
        CSLocalPoint += 1;
    }


    resultDisplay.innerHTML = result;
} 
