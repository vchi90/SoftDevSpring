//Vincent Chi
//SoftDev pd7
//K #10: Connect the Dots
//03-13-2019

var pic = document.getElementById("vimage");
var click = false;

pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
	
	if(!clicked()){
        var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        circ.setAttribute("cx",x);
        circ.setAttribute("cy",y);
        circ.setAttribute("r",20);
        circ.setAttribute("fill","blue");
        circ.setAttribute("stroke","black");

        pic.appendChild(circ);
        changeColour();
    }
    else{
      click = false;
    }
})

function changeColour(){

  child = pic.lastChild;
  child.addEventListener('click',function(e){
    if(this.getAttribute('fill') == "blue"){
      this.setAttribute('fill','green')
    }
    else{
      this.setAttribute('fill','blue')
      this.setAttribute('cx', Math.random() * 500)
      this.setAttribute('cy', Math.random() * 500)
    }
    click = true;
	
  })
}

function clicked(){
  if(pic.children.length == 0){
    return false;
  }
  return click
}


var clear = document.getElementById("but_clear")
clear.addEventListener("click", function(e){
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
})
