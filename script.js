
var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var playerHand;
var aiHand;
var value = 3;

prompt ("Enter R, P, or S", playerHand);

var array = ["R", "P", "S"]

function getRandomInt (value){
    return Math.floor(Math.random() * value);
}

aiHand = getRandomInt (value);

alert(aiHand);

function playGame (playerHand, aiHand) {

/* if (playerHand == aiHand) {
    //Tie
    //Add to Tie
} else if (playerHand < aiHand) {

} */

if(playerHand == "P" || "p") {
    if(aiHand == "S" || "s") {
        lossCount = lossCount + 1;
        alert ("You Lost");
    }else if(aiHand == "R") {
        winCount = winCount + 1;
        alert ("You Win")
    }else {
        tieCount = tieCount + 1;
        alert ("You Tie")
    }
}
else  if(playerHand == "S") {
    if(aiHand == "R") {
        lossCount = lossCount + 1;
    }else if(aiHand == "P") {
        winCount = winCount + 1;
    }else {
        tieCount = tieCount + 1;
    }
}
else(playerHand == "R") 
    if(aiHand == "P") {
        lossCount = lossCount + 1;
    }else if(aiHand == "S") {
        winCount = winCount + 1;
    }else {
        tieCount = tieCount + 1;
    }
}

while (true){

    playGame(playerHand, aiHand)

}
