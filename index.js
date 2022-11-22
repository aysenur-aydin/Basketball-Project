const playerOne = document.getElementById("p1score");
let p1score = 0; 
playerOne.textContent = p1score;

function p1AddOne(){
    p1score += 1
    playerOne.textContent = p1score
}
function p1AddTwo(){
    p1score += 2
    playerOne.textContent = p1score
}
function p1AddThree(){
    p1score += 3
    playerOne.textContent = p1score
}

const playerTwo = document.getElementById("p2score");
let p2score = 0;
playerTwo.textContent = p2score;

function p2AddOne(){
    p2score += 1
    playerTwo.textContent = p2score
}
function p2AddTwo(){
    p2score += 2
    playerTwo.textContent = p2score
}
function p2AddThree(){
    p2score += 3
    playerTwo.textContent = p2score
}
const newGameBtn = document.getElementById("newGameBtn");
function newGame(){
    p1score = 0;
    p2score = 0;
    playerOne.textContent = p1score;
    playerTwo.textContent = p2score;
}