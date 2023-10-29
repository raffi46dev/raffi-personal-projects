const snake = document.getElementById('snake');
const food = document.getElementById('food');
const movementDelay = 200;
const boardTimes = 100;
let snake_Width = 1;
let direction = {top:0, left:0};
let foodArea = {};
let intervalId;

function startGame() {
    moveSnake();
    displayfood();
}

function isSnakeFed(){
    if ( foodArea.top == direction.top && foodArea.left == direction.left ) {
        return true;
    }
    return false;
}
function growSnake(){
    snake_Width += snake_Width;
    snake.style.height += `${snake_Width}%`;
    displayfood()
}

function moveSnake(dir, negDir) {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => move(dir,negDir), movementDelay);
   
}

function move(dir = 'left', negDir = false) {
    if(negDir){
        direction[dir] -= 1;        
    } else {
        direction[dir] += 1;
    }
    snake.style[dir] = `${direction[dir]}%`; 


    if(isSnakeFed() == true) {
        growSnake();
    }
}
function displayfood() {
    const Xdirection = Math.floor(Math.random() * 100+1);
    const Ydirection = Math.floor(Math.random() * 100+1);
    food.style.top = `${Ydirection}%`; 
    food.style.left = `${Xdirection}%`;
    foodArea['top'] = Ydirection;
    foodArea['left'] = Xdirection;
    food.style.display = 'block';
}