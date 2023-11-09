const choices = ['ROCK','PAPER','SCISSORS'];
const draw = 'Its a DRAW!'
const playerWin = 'Player WINS!'
const computerWin = 'Computer WINS!'
const playerText = 'Player Chose: '
const computerText = 'Computer Chose: '

let playerPrompt = () => prompt('Rock, Paper, or Scissors?');


//Take in player choice and computer choice
function winCondition(player, computer){
	if (player == computer){
		return draw;
	} else if (player == 'ROCK' && computer == 'SCISSORS'){
			return playerWin;
	} else if (player == 'PAPER' && computer == 'ROCK'){
			return playerWin;
	} else if (player == 'SCISSORS' && computer == 'PAPER'){
			return playerWin;
	} else {
			return computerWin;
	}
};

function roundPlay(rounds){
	let score = [0,0];
	for (i=0; i <= rounds; i++){
		//Convert strings to uppercase and choosing computer choice
		let playerChoice = playerPrompt().toString().toUpperCase()
		let computerChoice = choices[Math.floor(Math.random()*choices.length)];
		let choiceText = playerText + playerChoice + ', '+ computerText + computerChoice + ", ";
		
		if (score[0] == 3){
		console.log('PLAYER WINS!!!!');
		} else if (score[1] == 3){
			console.log('COMPUTER WINS!!!!');
		} else if (score[0] < 3 || score[1] < 3){

				if (winCondition(playerChoice,computerChoice) == playerWin){
				score[0] +=1;
				console.log(choiceText+ winCondition(playerChoice, computerChoice));
				console.log(score)

			} else if (winCondition(playerChoice,computerChoice) == draw){
				console.log(choiceText+ winCondition(playerChoice, computerChoice));
				console.log(score)
			} else {
				score[1] +=1
				console.log(choiceText+ winCondition(playerChoice, computerChoice))
				console.log(score)
			}
		
		}
	}	
}


// //Decoration and Outputting Results
// let choiceText = playerText + playerChoice + ', '+ computerText + computerChoice + ", ";
// console.log(choiceText+ winCondition(playerChoice, computerChoice))