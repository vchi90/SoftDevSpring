var c = document.getElementById("slate");
var ctx = c.getContext("2d");

document.getElementById("Clear").addEventListener('click', function() {
  ctx.clearRect( 0, 0, canvas.width, canvas.height);
})
