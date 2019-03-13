//Vincent Chi
//SoftDev pd7
//K #09: Connect the Dots
//03-12-2019

var pic = document.getElementById("vimage");
var x1, y1

pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    if(x1){
      path.setAttribute("d",`M ${x1} ${y1} L ${x} ${y} Z`)
    }
    
    circ.setAttribute("cx",x);
    circ.setAttribute("cy",y);
    circ.setAttribute("r",10);
    circ.setAttribute("fill","red");
    circ.setAttribute("stroke","black");
    
    pic.appendChild(circ);
    pic.appendChild(path);

    x1 = x;
    y1 = y;
    path.setAttribute("stroke","black")
})

var clear = document.getElementById("but_clear")
clear.addEventListener("click", function(e){
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
    x1 = null
    y1 = null
})