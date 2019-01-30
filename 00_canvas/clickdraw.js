var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clear_button = document.getElementById("Clear");

clear_button.addEventListener('click', function() {
  ctx.clearRect( 0, 0, 600, canvas.600);
})
