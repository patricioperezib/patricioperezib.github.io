let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10);
  }
  
  function compareGuesses(human,comp,target){
    let difhuman = Math.abs(human - target);
    let difcomp = Math.abs(comp - target);
    if (difhuman <= difcomp){
      return true;
    }
    else {
      return false;
    }
  }
  
  function updateScore(winner){
    if (winner === 'human'){
      humanScore = humanScore + 1;
    }
    else {
       computerScore = computerScore + 1;
    }
  }
  
  function advanceRound(){
    currentRoundNumber = currentRoundNumber + 1  ;
  }
  