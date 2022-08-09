const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  
  }
  else{
    console.log('Error!');
  }
}


const getComputerChoice = randomNumber =>{
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
    if (computerChoice === 'scissors' || computerChoice === 'paper' || computerChoice === 'rock')
    {
      return 'You WIN!'
    }
    }
  if (userChoice === computerChoice){
    return 'Tie!'
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper')
    {
      return 'Computer wins!'
    }
    else{
      return 'You WIN!'
    }
  }
    if (userChoice === 'paper'){
    if (computerChoice === 'scissors')
    {
      return 'Computer wins!'
    }
    else{
      return 'You WIN!'
    }
  }
    if (userChoice === 'scissors'){
    if (computerChoice === 'rock')
    {
      return 'Computer wins!'
    }
    else{
      return 'You WIN!'
    }
  }

   
}

const playGame = () => {
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();
