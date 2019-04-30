//var x = [1,2,3,4]
//x.reduce(function(a,b) {return a+b} ); will sum elements of x

//var newX = x.map(function(n) { return n* 2; });

//var newX = x.filter(function(n) { return (n % 2 == 0) } );

function read(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

var json = 'data.json';
var obj = JSON.parse(read(json));

var male = function(e){
  var num = obj.filter(function(n){
    return (n.male_per > 50)
  })
  return num.length / obj.length * 100
}
console.log(male())

var asian = function(e){
  var count = obj.reduce(function(a,b) {
    if(b.asian_num == "0"){
      return a
    }
    return a + b.asian_num
  },0)
  return count
}
console.log(asian())

var race = function(e){
  var fit = obj.filter(function(n){
    return n.asian_per > n.white_per || n.hispanic_per > n.white_per || n.black_per > n.white_per
  })
  return fit.length / obj.length * 100
}
console.log(race())

var asianNum = document.getElementById("asian")
asianNum.innerHTML = asian()
var numSchool = document.getElementById("male")
numSchool.innerHTML = male()
var ethnicity = document.getElementById("race")
ethnicity.innerHTML = race()