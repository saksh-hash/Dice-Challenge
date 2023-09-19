var randomNum1 = Math.random()*6;
randomNum1 = Math.floor(randomNum1)+1;
var newDice = "./images/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src",newDice);


var randomNum2 = Math.random()*6;
randomNum2 = Math.floor(randomNum2)+1;
var newDice2 = "./images/dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src",newDice2);


var head = document.querySelector(".container h1").innerHTML;
if (randomNum1 > randomNum2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNum1 < randomNum2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins!🚩";
}
else {
    document.querySelector(".container h1").innerHTML = "Draw!";
}