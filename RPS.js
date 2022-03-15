// computer choses rock/paper/scissors
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

// declare score
let computerScore = 0
let userScore = 0
/* playGame() */

function hi(){
    (console.log("hi"))
}
const rock = document.getElementById("rock");
rock.addEventListener("click", hi);

