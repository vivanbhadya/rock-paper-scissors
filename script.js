function computerPlay(){
    let rand = Math.floor(Math.random()*3) + 1;
    if(rand === 1){
        return 'Rock';
    }
    if(rand === 2){
        return 'Paper';
    }
    if(rand === 3){
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    resultBox.textContent = 'You played ' + playerSelection.toUpperCase() + ', computer played ' + computerSelection.toUpperCase() + '... ';
    // console.log('Computer played ' + computerSelection + '...');

    let result;

    if((playerSelection === 'Rock' && computerSelection === 'Rock') 
    || (playerSelection === 'Paper' && computerSelection === 'Paper')
    || (playerSelection === 'Scissors' && computerSelection === 'Scissors')){
        result = 2;
        return result;
    }
    if((playerSelection === 'Rock' && computerSelection === 'Scissors')
    || (playerSelection === 'Paper' && computerSelection === 'Rock')
    || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        result = 1;
        return result;
    }
    if((playerSelection === 'Rock' && computerSelection === 'Paper')
    || (playerSelection === 'Paper' && computerSelection === 'Scissors')
    || (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        result = 0;
        return result;
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultBox = document.querySelector('.result');

let playerScore = 0, computerScore = 0, result;

function rockFunc(){
        result = playRound('Rock', computerPlay());
        if(result === 1){
            playerScore++;
            resultBox.textContent += 'YOU WIN!';
            resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
        }
        if(result === 0){
            computerScore++;
            resultBox.textContent += 'COMPUTER WINS!';
            resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
        }
        if(result === 2){
            computerScore++;
            resultBox.textContent += 'TIE!';
            resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
        }
        if(playerScore === 5){
            resultBox.innerHTML += '<br><p>GAME OVER!';
            resultBox.innerHTML += '<b>YOU WIN!</b></p>';
            playerScore = 0;
            computerScore = 0;
        }if(computerScore === 5){
            resultBox.innerHTML += '<br><p>GAME OVER!';
            resultBox.innerHTML += '<b>COMPUTER WINS!</b></p>';
            playerScore = 0;
            computerScore = 0;
        }
}
function paperFunc(){
    result = playRound('Paper', computerPlay());
    if(result === 1){
        playerScore++;
        resultBox.textContent += 'YOU WIN!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(result === 0){
        computerScore++;
        resultBox.textContent += 'COMPUTER WINS!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(result === 2){
        computerScore++;
        resultBox.textContent += 'TIE!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(playerScore === 5){
        resultBox.innerHTML += '<br><p>GAME OVER!';
        resultBox.innerHTML += '<b>YOU WIN!</b></p>';
        playerScore = 0;
        computerScore = 0;
    }if(computerScore === 5){
        resultBox.innerHTML += '<br><p>GAME OVER!';
        resultBox.innerHTML += '<b>COMPUTER WINS!</b></p>';
        playerScore = 0;
        computerScore = 0;
    }
}
function scissorsFunc(){
    result = playRound('Scissors', computerPlay());
    if(result === 1){
        playerScore++;
        resultBox.textContent += 'YOU WIN!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(result === 0){
        computerScore++;
        resultBox.textContent += 'COMPUTER WINS!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(result === 2){
        computerScore++;
        resultBox.textContent += 'TIE!';
        resultBox.innerHTML += '<br><p>Your Score:</p>' + playerScore + '<br><p>Computer Score:</p>' + computerScore;
    }
    if(playerScore === 5){
        resultBox.innerHTML += '<br><p>GAME OVER!';
        resultBox.innerHTML += '<b>YOU WIN!</b></p>';
        playerScore = 0;
        computerScore = 0;
    }if(computerScore === 5){
        resultBox.innerHTML += '<br><p>GAME OVER!';
        resultBox.innerHTML += '<b>COMPUTER WINS!</b></p>';
        playerScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener('click', rockFunc);
paper.addEventListener('click', paperFunc);
scissors.addEventListener('click', scissorsFunc);
