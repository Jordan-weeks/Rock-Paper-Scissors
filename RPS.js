/* // computer choses rock/paper/scissors
function computerPlay (){
    let computerChoices = ["rock","paper","scissors"];
    let computer= computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return(computer);
}

// user choses rock/paper/scissors
function userPlay(){
   {
var choice = prompt("Rock, Paper, or Scissors");
var choice = choice.toLowerCase();
}}

// determine winner
function playRound(computer, user, ){
 

if(user == "rock" & computer == "scissors"){ console.log("You win!") + userScore ++
}
else if(user == "paper" & computer == "rock"){ console.log("You win!") + userScore ++
}
else if(user == "scissors" & computer == "paper"){ console.log("You win!") + userScore ++
}
else if(user === computer){console.log("Draw") }
else{ console.log("you lose!") + computerScore ++}
console.log (`The score in now computer:${computerScore} user:${userScore}`)
}

function playGame(){
while (computerScore < 5 && userScore <5){
    let computerSelection = computerPlay();
    let userSelection = userPlay();
console.log(`Computer choses ${computerSelection}`)
playRound(computerSelection, userSelection)

}
}
 */

// reset button


const scoreboard = document.querySelector("#score");
const results = document.querySelector("#outcome");
let outcome = (outcome) => results.innerHTML = (outcome);
let updateScore = (score) => scoreboard.innerHTML = (score);

// declare score
let computerScore = 0;
let userScore = 0;


// max score


// user selects option
const rock = document.getElementById("rock");
rock.addEventListener("click", () => playRound("rock"));

 const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper"));

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => playRound("scissors"));

// Computer selects option.

function computerPlay (){
    let computerChoices = ["rock", "paper", "scissors"];
    let computer= computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return computer;
}
// play round
 function playRound (user){
 let computer = computerPlay()

    if(user == "rock" & computer == "scissors"){ outcome(`The computer chose ${computer}. You win!`) + userScore ++
    }
    else if(user == "paper" & computer == "rock"){ outcome(`The computer chose ${computer}. You win!`) + userScore ++
    }
    else if(user == "scissors" & computer == "paper"){ outcome(`The computer chose ${computer}. You win!`) + userScore ++
    }
    else if(user === computer){outcome(`The computer chose ${computer}. It's a draw`) }
    else{ outcome(`The computer chose ${computer}. You lose!`) + computerScore ++}

    updateScore (`The score in now Computer:${computerScore} User:${userScore}`) 

    if (computerScore >= 5){
        updateScore ("The computer has won this time...")
        scissors.removeEventListener("click", () => playRound("scissors"));
        
    }
    else if (userScore >=5){
        updateScore ("well done! You have won!")
        scissors.removeEventListener("click", () => playRound("scissors"));
   }}

// reset button
let originalOutcome = "Rock, Paper, Scissors"
let originalScore = "Good luck..."
const reset = document.querySelector(".reset")
reset.addEventListener("click", () =>{ 
outcome(originalOutcome),
updateScore(originalScore),
computerScore = 0,
userScore = 0});