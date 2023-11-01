const snake = document.getElementById('snake');
const food = document.getElementById('food');
const movementDelay = 500;
const boardTimes = 100;
let snake_Dimension = 1;
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
function growSnake(direction){
    snake_Dimension += 1;
    if(direction == "top") {
        snake.style.height += `${snake_Dimension}%`;
    } else {
        snake.style.width += `${snake_Dimension}%`;
    }
    displayfood();
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
    if(dir == "left" ) {
        snake.style.width = `${snake_Dimension}%`;
        snake.style.height = `2%`;
        // snake.style.backgroundColor = "blue"

    } else {
        snake.style.height = `${snake_Dimension}%`;        
        snake.style.width = `2%`;        
        // snake.style.backgroundColor = "red"

    }

    if(isSnakeFed() == true) {
        growSnake(dir, negDir);
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