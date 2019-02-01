//Team Brobdingnagian Jiayang Chen, Vincent Chi
//SoftDev2 pd7
//K01 -- ...and I want to Paint It Better
//2019-02-01 (Due)

var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d');

document.getElementById('clear').addEventListener('click', function() {
    //Clears the canvas from x,y with a rectangle with width,height
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


var state = 0;

document.getElementById('switch').addEventListener('click', function() {
    //Toggle the states 0 -> 1; 1 -> 0
    state = (state + 1) % 2;
});

canvas.addEventListener('click', function(e) {
    e.preventDefault();
    //OffsetX and y are the x and y coords of the cursor with respect to canvas
    var x = e.offsetX;
    var y = e.offsetY;
    if (state == 1) {
	//Draws a square with side length 50
        ctx.fillRect(x-25,y-25,50,50);
    } else {
        //Begin a path defined by the ellipse and FILLED later
        ctx.beginPath();
	//Draws a circle with radius 10
	//x,y,major,minor,rotation,startAngle, endAngle
        ctx.ellipse(x,y,10,10,0,0,Math.PI * 2);
        ctx.fill();
    }

});