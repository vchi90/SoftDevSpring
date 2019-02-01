//Team Brobdingnagian Jiayang Chen, Vincent Chi
//SoftDev2 pd7
//K #02 -- Connecting the Dots
//2019-02-01 (Due)

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');

document.getElementById('clear').addEventListener('click', function() {
    //Clears the canvas from x,y with a rectangle with width,height
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Resets the path
    ctx.beginPath();
});


canvas.addEventListener('click', function(e) {
    //OffsetX and y are the x and y coords of the cursor with respect to canvas
    var x = e.offsetX;
    var y = e.offsetY;


    //Draws a line to the new cursor location
    ctx.lineTo(x,y);
    ctx.stroke();

    //Draws a "dot" with radius 30
    //x,y,major,minor,rotation,startAngle, endAngle
    ctx.beginPath();
    ctx.ellipse(x,y,30,30,0,0,Math.PI * 2);
    ctx.fill();

    //Marks where the last click was, for future clicks
    ctx.beginPath();
    ctx.moveTo(x,y);

});
