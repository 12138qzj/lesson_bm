/** 常量 **/
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';
let snake = [
        { x: 100, y: 100 },
        { x: 90, y: 100 },
        { x: 80, y: 100 },
        { x: 70, y: 100 },
        { x: 60, y: 100 }
    ]
    // 玩家的分数
let score = 0;
// 横向移动速度
let dx = 10;
// 纵向移动速度
let dy = 0;
// 获取 canvas 元素
var gameCanvas = document.getElementById("gameCanvas");
// 返回一个二维绘制上下文
var ctx = gameCanvas.getContext("2d");
//  选择画布的背景颜色
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
//  选择画布的边框颜色
ctx.strokestyle = CANVAS_BORDER_COLOUR;
// 绘制一个“实心的”长方形来覆盖整个画布
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// 绘制画布的“边框”
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
// 开始游戏

// 生成第一个食物位置
createFood();
// 按下任意一个键，都会调用 changeDirection
document.addEventListener("keydown", changeDirection);
document.addEventListener('click', changeclick);
var stopsnake = document.getElementById("stop");
var snakeup = document.getElementById("up");
var snakedwon = document.getElementById("buttom");
var snakeleft = document.getElementById("left");
var snakeright = document.getElementById("right");
var startsnake = document.getElementById("start");
var fail = document.getElementById('fail');
var timeout;
var timejg = 500;
stopsnake.addEventListener('click', stoptime);
startsnake.addEventListener('click', main);

function main() {
    if (didGameEnd()) {
        fail.innerHTML = '挑战失败！'
        return;
    }
    var time = setTimeout(function onTick() {
        clearCanvas(); //重新绘画画布覆盖前一步绘画
        drawFood(); //先绘画食物
        advanceSnake(); //在蛇的数组中加入头部数组 去掉尾部数组
        drawSnake(); //重新绘画蛇
        // Call main again
        main(); //然后重复调用该函数
    }, timejg)
    timeout = time;
}

function stoptime() {
    clearTimeout(timeout)
}

function starttime() {
    clearTimeout(timeout)
}
/**
 * 设置画布的背景色为 CANVAS_BACKGROUND_COLOUR 
 * 并绘制画布的边框
 */
function clearCanvas() {
    //  选择画布的背景颜色
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    //  选择画布的边框颜色
    ctx.strokestyle = CANVAS_BORDER_COLOUR;
    // 绘制一个“实心的”长方形来覆盖整个画布
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    // 绘制画布的“边框”
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}
/**
 * 当蛇撞墙或者蛇头碰到蛇身的时候返回 true
 */
function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (didCollide) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}
/**
 * 在画布上画食物
 */
function drawFood() {
    ctx.fillStyle = FOOD_COLOUR;
    ctx.strokestyle = FOOD_BORDER_COLOUR;
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}
/**
 * 根据蛇的水平移动速度改变蛇的 x 坐标，
 * 根据蛇的垂直移动速度改变蛇的 y 坐标
 */
function advanceSnake() {
    // 绘制新的头部
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }; //根据dx dy来绘画新的头部
    // 将新的头部放到蛇身体的第一个部位
    snake.unshift(head); //向数组添加的第一个元素。
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        // 增加分数
        score += 10;
        // 在屏幕上显示分数
        document.getElementById('score').innerHTML = score;
        // 生成新的食物
        timejg -= 50;
        createFood();
    } else {
        // 移除蛇的最后一个部分
        snake.pop();
    }
}
/**
 * 给定一个最大值和最小值，生成一个 10 的倍数的随机数     
 * @param { number } min —— 随机数的下限
 * @param { number } max —— 随机数的上限
 */
function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10; //0-snakePart.x/y
}
/**     
 * 随机生成食物坐标
 */
function createFood() {
    // 随机生成食物的 x 坐标
    foodX = randomTen(0, gameCanvas.width - 10);
    // 随机生成食物的 y 坐标
    foodY = randomTen(0, gameCanvas.height - 10);
    // 如果新生成的食物与蛇当前位置重叠，重新为食物生成一个位置
    snake.forEach(function isOnSnake(part) {
        if (part.x == foodX && part.y == foodY) createFood();
    });
}


/**
 * 在画布上画蛇
 */
function drawSnake() {
    // 循环遍历蛇的每一部分，并将其绘制到画布上
    snake.forEach(drawSnakePart)
}
/**
 * 在画布上画蛇的一个部分
 * @param { object } snakePart  —— 需要绘制的部位的所在坐标
 */
function drawSnakePart(snakePart) {
    // 设置蛇身体的背景颜色
    ctx.fillStyle = SNAKE_COLOUR;
    // 设置蛇身的边框色
    ctx.strokestyle = SNAKE_BORDER_COLOUR;
    // 在蛇身坐标所在的位置，绘制“实心”的矩形以表示蛇      
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10); //x,y为矩形的左上角的坐标;10,10矩形的大小。
    // 绘制蛇身的边框
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
/**     
 * 根据按下的键，改变蛇的水平移动速度和垂直移动速度
 * 为了避免蛇反转，蛇的移动方向不能直接变成相反的方向，
 * 比如说，当前方向是“向右”，那么下一个方向不能是“向左”
 * @param { object } event —— 键盘事件
 */
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }


}

function changeclick(event) {
    // console.log(event.target)
    // console.log(snakeup)

    // const LEFT_KEY = 37;
    // const RIGHT_KEY = 39;
    // const UP_KEY = 38;
    // const DOWN_KEY = 40;
    // const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (event.target == snakeleft && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (event.target == snakeup && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (event.target == snakeright && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (event.target == snakedwon && !goingUp) {
        dx = 0;
        dy = 10;
    }
}