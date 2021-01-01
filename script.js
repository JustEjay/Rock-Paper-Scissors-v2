//define player and computer score
let playerScore = 0;
let computerScore = 0; 

// Assign computer and player choices 
let playerSelection;
let computerSelection;

// Select all buttons
const buttons = document.querySelectorAll('.btn');

//select rematch div 
const rematchDiv = document.querySelector('.rematch') 

// make btn for rematch 
const rematchBtn = document.createElement('button');

//create and select winner
const winner = document.querySelector('.winner');
const winnerResults = document.createElement('h3');
// select round-winner
const roundWinner = document.querySelector('.round-winner');

// Select and assign  scores
const player = document.querySelector('#player-score');
player.textContent = `player score : ${playerScore}`;
const computer = document.querySelector('#computer-score');
computer.textContent = `computer score : ${computerScore}`;

//generate computer selection 
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0 :
            return 'rock';
            break;
        case 1 :
            return 'paper';
            break;
        case 2 : 
            return 'scissors';
        }
}


buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if(playerScore === 5){
        winnerR('You win !');
          disable();      
          rematch();
        } else if (computerScore === 5){
            winnerR('Computer Wins');
            disable();
            rematch();
        }       
    })
});

//disable buttons 
function disable() {
    buttons.forEach(button => {
        button.disabled = true;
    })
};

//makes rematch button 
function rematch() {
    rematchDiv.appendChild(rematchBtn);
    rematchBtn.textContent = 'Rematch';
};

// reset game to 0 and remove rematch button
function reset(){
    playerScore = 0;
    computerScore = 0;

    player.textContent = `player score : ${playerScore}`;
    computer.textContent = `computer score : ${computerScore}`;

    buttons.forEach(button => {
        button.disabled = false;
    });

    rematchDiv.removeChild(rematchBtn);
    winner.removeChild(winnerResults);
    rWinner('Winner of round will show here');

};


rematchBtn.addEventListener('click', reset);


// Play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        rWinner(`TIE`);
        return console.log('TIE!!');
    } else if (playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            playerScore ++
            rWinner('You won this round');
            return player.textContent = `player score : ${playerScore}`;
        }else {
            computerScore ++
            rWinner('Computer won this round');
            return computer.textContent = `computer score : ${computerScore}`;
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            playerScore ++
            rWinner('You won this round');
            return player.textContent = `player score : ${playerScore}`;
        } else {
            computerScore ++
            rWinner('Computer won this round');
            return computer.textContent = `computer score : ${computerScore}`;
        }
    }  else if (playerSelection === 'scissors') {
        if (computerSelection === "paper"){
            playerScore++
            rWinner('You won this round');
            return player.textContent = `player score : ${playerScore}`;
        } else {
            computerScore ++ 
            rWinner('Computer won this round');
            return computer.textContent = `computer score : ${computerScore}`;
        }
    } else {
        return console.log('not a valid input');
    }
};

function rWinner(text) {
    roundWinner.textContent = `${text}`;
};

function winnerR(result) {
    winnerResults.textContent = `${result}`
    winnerResults.style.textTransform = 'Uppercase'
    winner.appendChild(winnerResults);
};
