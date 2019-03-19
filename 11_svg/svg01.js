//Vincent Chi
//SoftDev pd7
//K #11: Ask Circles [Change || Die] …While On The Go
//03-17-2019 Special thanks to Kenny Li for code help, as my original code was impossible.

var pic = document.getElementById("vimage");
var clearButton = document.getElementById("but_clear");
var moveButton = document.getElementById("but_move");
var backwardsButton = document.getElementById("but_?");
var requestID;

pic.addEventListener("click", function (e) {
    var currX = e.offsetX;
    var currY = e.offsetY;
	
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
    c.setAttribute("cx", currX);
    c.setAttribute("cy", currY);
    c.setAttribute("r", "20");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xVel", 1);
    c.setAttribute("yVel", 1);
	
    pic.appendChild(c);
    change(c)
});

function change(child) {
    child.addEventListener("click", function (e) {
        e.stopPropagation();
        if (this.getAttribute('fill') == "blue") {
            child.setAttribute("fill", "green");
        } else {
            child.setAttribute("fill", "blue");
            child.setAttribute("cx", Math.random() * 500);
            child.setAttribute("cy", Math.random() * 500);
        }
    });
}

var move = function () {
    window.cancelAnimationFrame(requestID);
    for (i = 0; i < pic.children.length; i++) {
        child = pic.children[i];
        var radius = 20;

        var xVel = parseInt(child.getAttribute("xVel"));
        var yVel = parseInt(child.getAttribute("yVel"));

        var currX = parseInt(child.getAttribute("cx")) + xVel;
        var currY = parseInt(child.getAttribute("cy")) + yVel;

        if (currX >= (500 - radius) || currX <= 0) {
            child.setAttribute("xVel", xVel * -1);
        }
        if (currY >= (500 - radius) || currY <= 0) {
            child.setAttribute("yVel", yVel * -1);
        }

        child.setAttribute("cx", currX);
        child.setAttribute("cy", currY);
    }
    requestID = window.requestAnimationFrame(move);
}
moveButton.addEventListener("click", move);

var clear = function () {
    window.cancelAnimationFrame(requestID);
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
}
clearButton.addEventListener("click", clear);

var backwards = function () {
    window.cancelAnimationFrame(requestID);
    for (i = 0; i < pic.children.length; i++) {
        child = pic.children[i];
        var radius = 20;

        var xVel = parseInt(child.getAttribute("xVel"));
        var yVel = parseInt(child.getAttribute("yVel"));

        var currX = parseInt(child.getAttribute("cx")) - xVel;
        var currY = parseInt(child.getAttribute("cy")) - yVel;

        if (currX >= (500 - radius) || currX <= 0) {
            child.setAttribute("xVel", xVel * -1);
        }
        if (currY >= (500 - radius) || currY <= 0) {
            child.setAttribute("yVel", yVel * -1);
        }

        child.setAttribute("cx", currX);
        child.setAttribute("cy", currY);
    }
    requestID = window.requestAnimationFrame(backwards);
}
backwardsButton.addEventListener("click", backwards);
