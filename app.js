let numOfSquares = 6
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('.game-color');
colorDisplay.textContent = pickedColor;
let guess = document.querySelector('.message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
let hardBtn = document.querySelector('#hardBtn');
let easyBtn = document.querySelector('#easyBtn');


resetBtn.addEventListener('click', function () {
    document.location.reload();
});

easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    h1.style.color = 'white';
    guess.textContent = '';
    resetBtn.textContent = 'New colors'

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

})

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');

    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    h1.style.color = 'white';
    guess.textContent = '';
    resetBtn.textContent = 'New colors';


    for (let i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

    }

})



for (let i = 0; i < squares.length; i++) {
    // add square colors
    squares[i].style.backgroundColor = colors[i];

    // add square event listener(click event);
    squares[i].addEventListener('click', function () {
        let squareColor = this.style.backgroundColor;
        // alert(pickedColor);
        // alert(squareColor);
        if (squareColor === pickedColor) {
            guess.textContent = 'Correct!'
            h1.style.backgroundColor = pickedColor;
            h1.style.color = 'white';
            changeColor(pickedColor);
            resetBtn.textContent = 'Play Again?';
        } else {
            this.style.opacity = 0;
            guess.textContent = 'Wrong Guess!'
        }

    })
}

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

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}