
var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var playerHand;
var aiHand;

function playGame (playerHand) {

if(playerHand == P) {
    if(aiHand == S) {
        lossCount = lossCount + 1;
    }else if(aiHand == R) {
        winCount = winCount + 1;
    }else {
        tieCount = tieCount + 1;
    }
}
else  if(playerHand == S) {
    if(aiHand == R) {
        lossCount = lossCount + 1;
    }else if(aiHand == P) {
        winCount = winCount + 1;
    }else {
        tieCount = tieCount + 1;
    }
}
else(playerHand == R) 
    if(aiHand == P) {
        lossCount = lossCount + 1;
    }else if(aiHand == S) {
        winCount = winCount + 1;
    }else {
        tieCount = tieCount + 1;
    }
}
