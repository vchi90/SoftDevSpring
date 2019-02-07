//Team Dango Vincent Chi, Soojin Choi
//SoftDev2 pd7
//K #04 -- What is it saving the screen from?
//2019-02-07 (Due)

var c = document.getElementById('playground');
var ctx = c.getContext('2d');

var dvdButton = document.getElementById("dvd");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');

var requestID = 0;
var radius = 0;
var growing = true;

var clear = function (e) {
    console.log("clearing");
    ctx.clearRect(0, 0, c.width, c.height);
};

function drawDot() {

    window.cancelAnimationFrame(requestID);
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

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
    requestID = 0;
};

var dvdLogoSetup = function() {

    window.cancelAnimationFrame(requestID);
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor(Math.random() * (c.width-rectWidth));
    var rectY = Math.floor(Math.random() * (c.height-rectHeight));

    var xvel = 1;
    var yvel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg"
	  //ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
	  //ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

	var dvdLogo = function() {

		clear();

      ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

      if (rectX + rectWidth == c.width ){
			xvel = xvel * -1;
	    }
	    if (rectX == 0){
			xvel = xvel * -1;
	    }
	    if (rectY + rectHeight == c.height ){
			yvel = yvel * -1;
	    }
	    if (rectY == 0){
			yvel = yvel * -1;
	    }

		rectX += xvel;
		rectY += yvel;

		//ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

		requestID = window.requestAnimationFrame(dvdLogo);
	}
	dvdLogo()

}

dotButton.addEventListener('click', drawDot);
dvdButton.addEventListener('click', dvdLogoSetup);
stopButton.addEventListener('click', stopIt);