//Team Brobdingnagian Jiayang Chen, Vincent Chi
//SoftDev2 pd7
//K #02 -- Connecting the Dots
//2019-02-01 (Due)

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');

document.getElementById('clear').addEventListener('click', function() {
    //Clears the canvas from x,y with a rectangle with width,height
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

var lastXcoor = 0;
var lastYcoor = 0;

canvas.addEventListener('click', function(e) {
    //e.preventDefault();
    ctx.beginPath();
    //OffsetX and y are the x and y coords of the cursor with respect to canvas
    var x = e.offsetX;
    var y = e.offsetY;
	//Draws a circle with radius 10
	//x,y,major,minor,rotation,startAngle, endAngle
        ctx.lineTo(x,y)
        ctx.ellipse(x,y,30,30,0,0,Math.PI * 2);
        ctx.fill();
        ctx.stroke();

});
