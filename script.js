const playerImg = document.createElement('img');
const computerImg = document.createElement('img');

const playerChoice = document.querySelector('#playerimage');
const computerChoice = document.querySelector('#computerimage');
const scoreBoard = document.querySelector('#score');
const computerScore = document.querySelector('#computerscore')
const playerScore = document.querySelector('#playerscore')
const resulttext = document.querySelector('#result-text')
const currentScore = [0,0];
let currentRound = 0;

//Reset Button
const reset = document.querySelector('#reset');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Game'
resetBtn.classList.add('reset')
reset.appendChild(resetBtn);

resetBtn.addEventListener('click', resetGame)

function resetGame() {
	currentScore[0] = 0;
	currentScore[1] = 0;
	currentRound = 0;
	displayScore();
	displayResult();
	computerChoice.removeChild(computerChoice.firstChild)	;
	playerChoice.removeChild(playerChoice.firstChild);
}


// Add event listener to all choices in choice container
const choiceContainer = document.querySelectorAll('.choice-container');
choiceContainer.forEach(choice => choice.addEventListener('click', (e)=> {
	if (currentRound < 5){
		playerPicked(e);
		playerImg.classList.remove('animationPlayer');
		computerImg.classList.remove('animationComputer')
	}}));


// Update Image in playfield with choice from choice container
function playerPicked(e) {
    if (e.target.id !== 'container'){ // Make sure click event is within container
		playerClicked(e);
		appendPlayerChoice();
		play(playerClicked(e),computerPicked());
		setTimeout(function () {
			playerImg.classList.add('animationPlayer');
			computerImg.classList.add('animationComputer');
		}, 100);
		currentRound += 1
		if (currentRound == 5){
			finalResult()
		}

	} else return;
}


// Grab what button was clicked
function playerClicked(node){
	const parentNodeId = node.target.parentNode.id;
	const clickedNodeId = node.target.id;
	if (node.target.nodeName == "IMG" || node.target.nodeName =="SPAN"){
		playerImg.src = `./images/${parentNodeId}.png`;
		return parentNodeId;
	} else {
		playerImg.src = `./images/${clickedNodeId}.png`;
		return clickedNodeId
	}

}
// Computer Image Updater
function computerImageUpdate(choice){
	computerImg.src = `./images/${choice}_mirrored.png`;
}

// Append Choices with Images
function appendPlayerChoice() {
	if (playerChoice.firstChild) { //Update if Already Present
		playerChoice.removeChild(playerChoice.firstChild)	
		playerChoice.appendChild(playerImg)
	} else {
		playerChoice.appendChild(playerImg)
	} 
}
function appendComputerChoice(){
	if (computerChoice.firstChild) { //Update if Already Present
		computerChoice.removeChild(computerChoice.firstChild)	
		computerChoice.appendChild(computerImg)
	} else {
		computerChoice.appendChild(computerImg)
	}
	
}

// Computer's Decision
function computerPicked() {
	const choices = ['rock','paper','scissors'];
	return choices[Math.floor(Math.random()*choices.length)];
}


// Display the Scoreboard
function displayScore(){
	computerScore.textContent = currentScore[0];
	playerScore.textContent = currentScore[1];
}

//display result
function displayResult(text){
	resulttext.textContent = text;
}

// Check win conditions
function winCondition(player, computer){
	if (player == computer){
		return 'draw';
	} else if (player == 'rock' && computer == 'scissors'){
			return 'player Win';
	} else if (player == 'paper' && computer == 'rock'){
			return 'player Win';
	} else if (player == 'scissors' && computer == 'paper'){
			return 'player Win';
	} else {
			return 'computer Win';
	}
};

// Play the Game!
function play(player,computer){
	computerImageUpdate(computer);
	appendComputerChoice(computer);
	let result = winCondition(player,computer);
		if (result == 'draw'){
			console.log(result);
			// return result;
		} else if (result == 'player Win') {
			currentScore[1] += 1;
		} else if (result == 'computer Win') {
			currentScore[0] += 1;
		}
	displayScore();
	console.log(result);	
}

function finalResult(){
	if (currentScore[0] == currentScore[1]){
		displayResult("IT'S A DRAW!");
	} else if (currentScore[0] < currentScore[1]) {
		displayResult("PLAYER WINS!");
	} else {
		displayResult("COMPUTER WINS!")
	}
}
