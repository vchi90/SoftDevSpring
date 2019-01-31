var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener('click', function(){
  ctx.clearRect( 0, 0, 600, 600);
});

c.addEventListener('click', draw);

var boxOrDot = document.getElementById("draw");

boxOrDot.addEventListener('click', function() {
  if (boxOrDot.innerHTML == "Rectangle") {
	  boxOrDot.innerHTML = "Dot";
  }
  else {
	  boxOrDot.innerHTML = "Rectangle";
  }
});

function draw(e) {
  var x = e.clientX;
  var y = e.clientY;
  x = x - c.offsetLeft;
  y = y - c.offsetTop;
  if (boxOrDot.innerHTML == "Rectangle"){
    ctx.fillRect( x, y, 50, 100);
  }
  else{
    ctx.beginPath();
    ctx.ellipse( x, y, 1, 1, 0, 0, 2 * Math.PI);
    ctx.fill()
  }
};