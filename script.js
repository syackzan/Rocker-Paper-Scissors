
var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var playerHand;
var aiHand;
var value = 3;


function computerGen () {
    
    var array = ["R", "P", "S"]

    function getRandomInt (value){
        return array[Math.floor(Math.random() * value)];
    }

    aiHand = getRandomInt (value);

    alert(aiHand);
}

function playGame () {

var playerHand = prompt ("Enter R, P, or S");
console.log (playerHand);

computerGen();
console.log (aiHand);

if(playerHand == "P" || playerHand == "p") {
    if(aiHand == "S" || playerHand == "s") {
        lossCount = lossCount + 1;
        alert ("You Lost");
    }else if(aiHand == "R") {
        winCount = winCount + 1;
        alert ("You Win");
    }else {
        tieCount = tieCount + 1;
        alert ("You Tie");
    }
} else  if(playerHand == "S") {
    if(aiHand == "R") {
        lossCount = lossCount + 1;
        alert("You Lose");
    }else if(aiHand == "P") {
        winCount = winCount + 1;
        alert("You Win");
    }else {
        tieCount = tieCount + 1;
        alert("You Tie");
    }
} else {
    if(aiHand == "P") {
        lossCount = lossCount + 1;
        alert("You Lose");
    }else if(aiHand == "S") {
        winCount = winCount + 1;
        alert("You Win");
    }else {
        tieCount = tieCount + 1;
        alert("You Tie");
    }   
} 

alert ("Win Count: " + winCount + 
    " Lose Count: " + lossCount + 
    " Tie Count: " + tieCount);

    var playagain = confirm("Do you want to play again?");

    if (playagain === true){
        playGame();
    } else {

    }
    
} 


while(true){
    playGame()
    break;
}



