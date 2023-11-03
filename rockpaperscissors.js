const choices = ['ROCK','PAPER','SCISSORS'];
const draw = 'Its a DRAW!'
const playerWin = 'Player WINS!'
const ComputerWin = 'Computer WINS!'
const playerText = 'Player Chose: '
const computerText = 'Computer Chose: '

let getComputerChoice = function(){
	return choices[Math.floor(Math.random()*choices.length)];
};


let playRound = function(player, computer){
	let playerChoice = player.toString().toUpperCase()
	let choiceText = playerText + playerChoice + ', '+ computerText + computer + ", "
	if (playerChoice == computer){
		return console.log(choiceText + draw);
	} else if (playerChoice == 'ROCK' && computer == 'SCISSORS'){
			return console.log(choiceText + playerWin);
	} else if (playerChoice == 'PAPER' && computer == 'ROCK'){
			return console.log(choiceText + playerWin);
	} else if (playerChoice == 'SCISSORS' && computer == 'PAPER'){
			return console.log(choiceText + playerWin);
	} else {
			return console.log(choiceText + ComputerWin);
	}
	return winner
};
