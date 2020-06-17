let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function convertToLetter(letter) {
	if (letter === 'r')
		return "rock"
	else if (letter === 'p')
		return "paper"
	return "scissors";	
}

function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = `${convertToLetter(user)} beats ${convertToLetter(computer)}. You win! 🏆😁`
    document.getElementById(user).classList.add('green-glow');	
	setTimeout( ()=>document.getElementById(user).classList.remove('green-glow'), 500);
}
function draw(user, computer) {
	result_div.innerHTML = convertToLetter(user)+ " equal " + convertToLetter(computer) + ". it's a draw 🙂"
    document.getElementById(user).classList.add('gray-glow');
	setTimeout( () => document.getElementById(user).classList.remove('gray-glow'), 500);
}
function lose(user, computer) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToLetter(user)+ " loses to " + convertToLetter(computer) + ". You lose 😢😱"
	document.getElementById(user).classList.add('red-glow');
	setTimeout( ()=>document.getElementById(user).classList.remove('red-glow'), 500);
}
function game(userChoice) {
	const computerChoice = getComputerChoice();
		switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
	}
}
rock_div.addEventListener('click', () => game('r'));
paper_div.addEventListener('click', () => game('p'));
scissors_div.addEventListener('click', () => game('s'));