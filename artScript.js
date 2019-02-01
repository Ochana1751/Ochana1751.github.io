function drawShapes()
{
    drawSquares();
    drawCircles();
    drawLines();
    moveSun();
    a = requestAnimationFrame(drawShapes);
    sunMove();
    moveRectangleUp();
}

function drawLines()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");



}

function drawCircles()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.lineWidth = 0.00001;
    ctx.beginPath();
    ctx.arc(275,125,60,0,2*Math.PI);
    ctx.fillStyle = "#0bff00";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 0.00001;
    ctx.beginPath();
    ctx.arc(425,75,45,0,2*Math.PI);
    ctx.fillStyle = "#0bff00";
    ctx.fill();
    ctx.stroke();
}

var Blue = "#88e7ff";

function drawSquares()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = Blue;
    ctx.fill();

    ctx.beginPath();
    ctx.rect(200, 350, 300, 100);
    ctx.fillStyle = "#571e06";
    ctx.fill();


    ctx.beginPath();
    ctx.rect(0, 400, 500, 100);
    ctx.fillStyle = "#0909ff";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(200, 250, 300, 100);
    ctx.fillStyle = "#0bff00";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(400, 100, 50, 150);
    ctx.fillStyle = "#571e06";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(250, 150, 50, 100);
    ctx.fillStyle = "#571e06";
    ctx.fill();

    if (circleY < 325 && circleY > 125)
    {
        Blue = "#ffa45f";
    }
    else if (circleY > 325 && circleY < 450)
    {
        Blue = "#05004b";
    }
    else if (circleY > 0 && circleY < 124)
    {
        Blue = "#88e7ff";
    }
}
var a;
var moveAmountY = -0.25;
var circleY = 0;
var Moon = "#fffe00";
function moveSun()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    circleY = circleY + moveAmountY;
    ctx.lineWidth = 0.00001;
    ctx.beginPath();
    ctx.arc(0,circleY,120,0,2*Math.PI);
    ctx.fillStyle = Moon;
    ctx.fill();
    ctx.stroke();
    circleY = circleY + moveAmountY;
    if (circleY === 450)
    {
        Moon = "#ffffff";
    }
    else if (circleY === 250)
    {
    Moon = "#fffe00"
    }
}

function sunMove()
{

    if  (circleY < 0)
    {
        moveAmountY = moveAmountY*(-1);
    }

    if  (circleY > 450)
    {
        moveAmountY = moveAmountY*(-1);
    }
}
function moveRectangleUp()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    circleY = circleY + moveAmountY;


}
function startAnimate()
{
    drawShapes();
}