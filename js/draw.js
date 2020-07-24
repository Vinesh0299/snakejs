const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const scale = 10;
const rows = canvas1.height / scale;
const columns = canvas1.width / scale;

var snake, food;

function setup() {
    snake = new Snake();
    snake.draw();
    food = new Food();
    food.draw();
}

setup();