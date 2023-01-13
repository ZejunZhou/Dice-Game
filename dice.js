function generateRandomDice(){
    var randomDice = Math.floor(Math.random() * 6) + 1;
    return randomDice;
}

function diceComparison(dice1, dice2){
    var winner = null;
    if (dice1 > dice2){
        winner = "dice1"
    }

    if (dice1 < dice2){
        winner = "dice2"
    }

    if(dice1 == dice2){
        winner = "tie"
    }

    return winner;
}

var dice1 = generateRandomDice();
var dice2 = generateRandomDice();

var dice1Path = "images/dice" + dice1 + ".png";
var dice2Path = "images/dice" + dice2 + ".png";

var result = diceComparison(dice1, dice2);

document.querySelector(".img1").setAttribute("src", dice1Path);
document.querySelector(".img2").setAttribute("src", dice2Path);

if (result == "dice1"){
    document.querySelector("h1").textContent = "Player1 win!";
}else if (result == "dice2"){
    document.querySelector("h1").textContent = "Player2 win!";
}else{
    document.querySelector("h1").textContent = "Draw";
}

