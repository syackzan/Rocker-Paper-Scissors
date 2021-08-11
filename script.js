
var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var playerHand;
var aiHand;
var value = 3;

//Generate Computer Selection //
function computerGen () {
    
    var array = ["R", "P", "S"]

    function getRandomInt (value){
        return array[Math.floor(Math.random() * value)];
    }

    aiHand = getRandomInt (value);

    alert(aiHand);
}

// Play Game Function //
function playGame () {

// Prompt Player Hands //
var playerHand = prompt ("Enter R, P, or S");
console.log (playerHand);

//Confirming AI's Hand //
computerGen();
console.log (aiHand);

// Did you win or lose if statement //
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

// Alert //
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



