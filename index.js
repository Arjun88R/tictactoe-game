
var x = 0;
var storedValues = ['a','b','c','d','e','f','h','i','j'];
var clickedCells = [];
var rowCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
var colCells = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
var diaCells = [
    [0, 4, 8],
    [2, 4, 6]
];
var buttons = document.getElementsByClassName("box");
const result = document.getElementById("result");
const resetButton = document.getElementsByClassName("reset-btn");
var game_mode = document.getElementsByClassName("mode-button");
var isClicked = true;
var playerOne = document.querySelector(".p1-score");
var playerTwo = document.querySelector(".p2-score");
var opponent = document.querySelector(".player-two");
var playerOneScore = 0;
var playerTwoScore = 0;

function displayResult(winner) {
    result.textContent = winner + " WINS";
    if (winner=="X"){
        playerOneScore+=1;
        playerOne.textContent = playerOneScore;
    }
    else{
        playerTwoScore+=1;
        playerTwo.textContent = playerTwoScore;
    }
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
    }
}

function displayDraw() {
    result.textContent = "DRAW";
}

function demo(button, num) {
    if (x <= 8) {
        if (x % 2 == 0) {
            button.innerHTML = "X";
            buttons[num].disabled = true;
            storedValues[num] = "X";
        } else if (x % 2 != 0) {
            button.innerHTML = "O";
            buttons[num].disabled = true;
            storedValues[num] = "O";
        }

        if (x > 2) {
            for (i = 0; i < 3; i++) {
                if (storedValues[rowCells[i][0]] == storedValues[rowCells[i][1]] && storedValues[rowCells[i][1]] == storedValues[rowCells[i][2]]) {
                    displayResult(storedValues[rowCells[i][0]]);
                } else if (storedValues[colCells[i][0]] == storedValues[colCells[i][1]] && storedValues[colCells[i][1]] == storedValues[colCells[i][2]]) {
                    displayResult(storedValues[colCells[i][0]]);
                }
            }
            for (i = 0; i < 2; i++) {
                if (storedValues[diaCells[i][0]] == storedValues[diaCells[i][1]] && storedValues[diaCells[i][1]] == storedValues[diaCells[i][2]]) {
                    displayResult(storedValues[diaCells[i][0]]);
                }
            }
        }
        x += 1;
        if (x > 9) {
            displayDraw();
        }
    }
}

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("hidden");
}

function resetGame() {
    x = 0;
    storedValues = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j'];
    result.textContent = "";
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].innerHTML = "";
        buttons[j].disabled = false;
        clickedCells = [];
    }
}

function gameMode(button) {
    isClicked = !isClicked;
    console.log(isClicked);
    if (isClicked == true) {
        button.textContent = "2P";
        opponent.textContent = "P2";
        // Call a function that insert an O into the table
        // mini o, max x 
        // ai o , player x 
        // 

    } else {
        button.innerHTML = '<i class="fa-solid fa-robot"></i>';
        opponent.textContent='AI';
        resetGame();
        
    }
}

function newGame() {
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
}

