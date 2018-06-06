
var numOfSq = 6;
var colors = [];
var findColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".squares");
var findColorDisplay = document.querySelector("#findColorId");
var checkMessageDisplay = document.getElementById("checkMessage");
var resetButton = document.querySelector("#resetButtonId");
var modes = document.querySelectorAll(".mode");

init();

function init(){
  for(var i=0; i<modes.length; i++){
    modes[i].addEventListener("click", function(){
      modes[0].classList.remove("selectedButton");
      modes[1].classList.remove("selectedButton");

      this.classList.add("selectedButton");

      this.textContent === "Easy" ? numOfSq =3 : numOfSq=6;
      reset();

    });
  }

  for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click", function(){

      if(this.style.backgroundColor === findColor){
        checkMessageDisplay.textContent = "Correct!";
        changeColors(findColor);
        h1.style.backgroundColor = findColor;
        resetButton.textContent = "Play Again?";
      }else{
        this.style.backgroundColor = "#232323";
        checkMessageDisplay.textContent = "Try Again!";
      }
    });
  }
  reset();
}


function reset(){
  colors = generateRandomColors(numOfSq);
  findColor = pickQuestionColor();
  findColorDisplay.textContent = findColor;
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "Reset";
  checkMessageDisplay.textContent = "";

  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }

  }
}


resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickQuestionColor(){
  var randomNum = Math.floor(Math.random()*colors.length);
  return colors[randomNum];
}

function generateRandomColors(num){
  var arr = [];
  for(var i=0; i<num; i++){
    arr[i] = randomColors();
  }
  return arr;
}


function randomColors(){
  var r = Math.floor(Math.random() *256);
  var b = Math.floor(Math.random() *256);
  var g = Math.floor(Math.random() *256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
