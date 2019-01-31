var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener('click', function(){
  ctx.clearRect( 0, 0, 600, 600);
});

c.addEventListener('click', draw);

var boxOrDot = document.getElementById("draw");

var state = "Rectangle";

boxOrDot.addEventListener('click', function() {
  if (state == "Rectangle") {
	  state = "Dot";
  }
  else {
	  state = "Rectangle";
  }
});

function draw(e) {
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;
  if (state == "Rectangle"){
    ctx.fillRect( x - 25, y - 50, 50, 100);
  }
  else{
    ctx.beginPath();
    ctx.ellipse( x, y, 20, 20, 0, 0, 2 * Math.PI);
    ctx.fill()
  }
};
