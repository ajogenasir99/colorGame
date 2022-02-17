let numOfSquares = 6;
let guessCount = 0;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.game-color');
let guess = document.querySelector('.message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
let levelBtns = document.querySelectorAll('.level');


game();

function game() {
    gameStart();
}

function gameStart() {

    gameLogic()

    levelButtonSetUp()

    gameRestart()
}


resetBtn.addEventListener('click', function () {
    numOfSquares = 6;
    gameRestart();
});

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        // change square colors to winning color
        squares[i].style.backgroundColor = color;
        if (squares[i].style.opacity == '0') {
            squares[i].style.opacity = 1;
        }
    }
}

function pickColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function randomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

function gameLogic() {
    for (let i = 0; i < squares.length; i++) {
        // add square event listener(click event);
        squares[i].addEventListener('click', function () {
            let squareColor = this.style.backgroundColor;

            if (squareColor === pickedColor) {
                guess.textContent = 'Correct!';
                h1.style.backgroundColor = pickedColor;
                h1.style.color = 'white';
                changeColor(pickedColor);
                resetBtn.textContent = 'Play Again?';
            } else {
                this.style.opacity = 0;
                guess.textContent = 'Wrong Guess!';
            }
        })
    }
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}

function gameRestart() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    h1.style.color = 'white';
    guess.textContent = '';
    resetBtn.textContent = 'New colors';

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function levelButtonSetUp() {
    for (let i = 0; i < levelBtns.length; i++) {
        levelBtns[i].addEventListener('click', function () {
            levelBtns[0].classList.remove('selected');
            levelBtns[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            gameRestart()
        });
    }
}

// function RestartColorHard() {

//     if (numOfSquares === 6) {
//         for (let i = 0; i < squares.length; i++) {

//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";

//         }
//     } else if (numOfSquares === 3) {
//         for (let i = 0; i < squares.length; i++) {
//             if (colors[i]) {
//                 squares[i].style.backgroundColor = colors[i];
//             } else {
//                 squares[i].style.display = "none";
//             }

//         }
//     }

// }