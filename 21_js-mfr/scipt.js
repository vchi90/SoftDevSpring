var json = 'data.json';
obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);

var x = [1,2,3,4]
x.reduce(function(a,b) {return a+b} ); will sum elements of x

var newX = x.map(function(n) { return n* 2; });

var newX = x.filter(function(n) { return (n % 2 == 0) } );
