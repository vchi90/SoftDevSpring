//Team Dango Vincent Chi, Soojin Choi
//SoftDev2 pd7
//K #03 -- Animaniac
//2019-02-06 (Due)

var c = document.getElementById('playground');
var ctx = c.getContext('2d');

var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');

var requestID = 0;
var radius = 0;
var growing = true;

//.addEventListener('click', draw)


function drawDot() {
    //ctx.scale(10, 3);
    clear();

    if (radius == c.width / 2){
        growing = false;
    }
    if (radius == 0){
        growing = true;
    }


    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2,
           radius, 0, 2 *Math.PI);
    clear();
    ctx.stroke();
    ctx.fill();

    if (growing){
        radius = radius + 1;
    }
    else{
        radius = radius - 1;
    }

    requestID = window.requestAnimationFrame(drawDot);
}

var clear = function (e) {
    console.log("clearing");
    ctx.clearRect(0, 0, c.width, c.height);
};

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
    requestID = 0;
};

dotButton.addEventListener('click', function(e){

  if (requestID == 0){
    drawDot();
  }
  else{
    e.preventDefault();
  }

});
stopButton.addEventListener('click', stopIt);

// window.requestAnimationFrame() moves to next frame
// syntax: requestAnimationFrame(callback)
// window.cancelAnimationFrame() stops animation
// syntax: cancelAnimationFrame(id)

// var requestID; var radius = ...; var growing = ...;
// var clear = function (e) { ... };
// var drawDot = function() {
// ... //draw the dot
// ctx.beginPath();
// ctx.arc(c.width / 2, c.height / 2
//         radius, 0, 2 *Math.PI);
// ctx.stroke(0); ctx.fill(); ... };
// var stopIt = function() {....};
// dotButton.addEventListener('click', drawDot);
// stopButton.addEventListener('click', stopDot);

// you only need one of these:
// requestAnimationFrame();

// var stopIt = function(0 {
// console.log(requestID);
// ... };