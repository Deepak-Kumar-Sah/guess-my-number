"use script";
let mysteryNumber = randomNumber();
let score = 20; //Score initialization
let highScore = 0; //HighScore initialization

//function for generating random number between 1 to 20
function randomNumber() {
  let x = Math.floor(Math.random() * 20 + 1); // Math.floor round of the number to the nearest integer
  return x;
}

//onCheck function check the user input and update UI
function onCheck() {
  console.log("r");
  let userInput = document.getElementById("userInput").value;
  if (userInput == mysteryNumber) {
    //Highest Score
    if (highScore <= score) {
      highScore = score;
      document.getElementById("hScore").innerHTML = highScore;
    }
    document.getElementById("ans").innerHTML = mysteryNumber;
    document.body.style.backgroundColor = "green";
    document.getElementById("userInput").style.backgroundColor = "green";
    document.getElementById("ans").style.backgroundColor = "green";
  } else if (score == 0) {
    alert("Game Over!");
    restore();
  } else {
    score -= 1;
    document.getElementById("score").innerHTML = score;
  }
}

//restore function restore the game for replay
function restore() {
  score = 20;
  mysteryNumber = randomNumber();
  document.getElementById("score").innerHTML = 20;
  document.getElementById("ans").innerHTML = "?";
  document.getElementById("userInput").value = "";
  document.body.style.backgroundColor = "black";
  document.getElementById("userInput").style.backgroundColor = "black";
  document.getElementById("ans").style.backgroundColor = "black";
}
