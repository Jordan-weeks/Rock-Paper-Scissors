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

// declare score
let computerScore = 0
let userScore = 0





let outcome = (outcome) => results.innerHTML = (outcome);
let updateScore = (winner) => scoreboard.innerHTML = (winner);
const scoreboard = document.querySelector("#score");
const results = document.querySelector("#outcome");

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
    console.log(user)
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
    }

// update score