// let computerPick = choices[Math.floor(Math.random()*choices.length)];
const playerImg = document.createElement('img');
const computerImg = document.createElement('img');
const playerChoice = document.querySelector('#playerimage');
const computerChoice = document.querySelector('#computerimage');
const scoreBoard = document.querySelector('#score');
const computerScore = document.querySelector('#computerscore')
const playerScore = document.querySelector('#playerscore')


const currentScore = [0,0];
// Add event listener to all choices in choice container
const choiceContainer = document.querySelectorAll('.choice-container');
choiceContainer.forEach(choice => choice.addEventListener('click', (e)=> {
	playerPicked(e);
	}));


// Update Image in playfield with choice from choice container
function playerPicked(e) {
    if (e.target.id !== 'container'){ // Make sure click event is within container
		playerClicked(e);
		appendPlayerChoice();
		play(playerClicked(e),computerPicked())
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
	computerImg.src = `./images/${choice}.png`;
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

// Check win conditions
function winCondition(player, computer){
	if (player == computer){
		return 'draw';
	} else if (player == 'rock' && computer == 'scissors'){
			return 'playerWin';
	} else if (player == 'paper' && computer == 'rock'){
			return 'playerWin';
	} else if (player == 'scissors' && computer == 'paper'){
			return 'playerWin';
	} else {
			return 'computerWin';
	}
};

// Play the Game!
function play(player,computer){
	computerImageUpdate(computer);
	appendComputerChoice(computer);
	let result = winCondition(player,computer);
		if (result == 'draw'){
			return result;
		} else if (result == 'playerWin') {
			currentScore[1] += 1;
		} else if (result == 'computerWin') {
			currentScore[0] += 1;
		}
	return result;
}

