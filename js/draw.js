const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas2.getContext('2d');
const scale = 10;
const rows = canvas1.height / scale;
const columns = canvas1.width / scale;

var start;
var snake, food;
var gameState = {
    lost: false,
    paused: false,
    snakeXSpeed: 0,
    snakeYSpeed: 0
}

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 37 && !gameState.paused) {
        if(snake.xSpeed === 0) snake.xSpeed = -1 * scale;
        snake.ySpeed = 0;
    } else if(e.keyCode === 38 && !gameState.paused) {
        snake.xSpeed = 0;
        if(snake.ySpeed === 0) snake.ySpeed = -1 * scale;
    } else if(e.keyCode === 39 && !gameState.paused) {
        if(snake.xSpeed === 0) snake.xSpeed = scale;
        snake.ySpeed = 0;
    } else if(e.keyCode === 40 && !gameState.paused) {
        snake.xSpeed = 0;
        if(snake.ySpeed === 0) snake.ySpeed = scale;
    } else if(e.keyCode === 32) {
        if(!gameState.paused) {
            gameState.snakeXSpeed = snake.xSpeed;
            gameState.snakeYSpeed = snake.ySpeed;
            snake.xSpeed = 0;
            snake.ySpeed = 0;
            gameState.paused = true;
        } else {
            snake.xSpeed = gameState.snakeXSpeed;
            snake.ySpeed = gameState.snakeYSpeed;
            gameState.snakeXSpeed = 0;
            gameState.snakeYSpeed = 0;
            gameState.paused = false;
        }
        if(gameState.lost) {
            gameState.lost = false;
            gameState.paused = false;
            snake.reset();
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            food.draw();
        }
    }
});

function setup() {
    snake = new Snake();
    snake.draw();
    food = new Food();
    food.draw();
}

const updateSnake = (time) => {
    if(!gameState.paused && !gameState.lost) {
        start = start || time;
        if(time - start > 50) {
            start = time;
            if(snake.body[0].x === food.x && snake.body[0].y === food.y) {
                food.update();
                snake.length += 1;
                snake.body.push({
                    x: snake.body[0].x,
                    y: snake.body[0].y
                });
            } else {
                snake.clear();
            }
            snake.move();
            snake.check();
            snake.draw();
        }
    } else if(gameState.lost) {
        ctx3.font = "30px Arial";
        ctx3.fillText("You Lost", canvas3.width/2 - 50, canvas3.height/2);
    }
    reqAnimation = window.requestAnimationFrame(updateSnake);
}

setup();
updateSnake();