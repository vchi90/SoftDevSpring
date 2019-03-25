//Team Swaggasaurus Vincent Chi & Ray Onishi
//K13 -- Diving Deeper Into D3
//SoftDev2 pd7
//2019-03-19

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var xValue = function(d) { return d.Calories;},
    xScale = d3.scaleLinear().range([0, width]),
    xMap = function(d) { return xScale(xValue(d));},
    xAxis = d3.axisBottom(xScale);

var yValue = function(d) { return d["Fat"];},
    yScale = d3.scaleLinear().range([height, 0]),
    yMap = function(d) { return yScale(yValue(d));},
    yAxis = d3.axisLeft(yScale);


var c_value = function(d) { return d.Manufacturer;},
    color = d3.scaleOrdinal(d3.schemeCategory10);


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv("cereal.csv").then(function(data) {
  data.forEach(function(d) {
    d.Calories = +d.Calories;
    d["Fat"] = +d["Fat"];
  });

  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);
  
  // x
  svg.append("g")
      .attr("class", "x axis")
      .style("fill","black")
      .attr("transform", "translate(30," + height + ")")
      .call(xAxis)
  svg.append("text")
      .attr("class", "x label")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .attr("font-size","16px")
      .style("text-anchor", "middle")
      .text("Calories");

  // y
  svg.append("g")
      .attr("class", "y axis")
      .style("fill","black")
      .attr("transform", "translate(30,0)")
      .call(yAxis)
  svg.append("text")
      .attr("class", "x label")
      .attr("transform","rotate(-90)")
      .attr("x", -height/2)
      .attr("y", -15)
      .attr("font-size","16px")
      .style("text-anchor", "middle")
      .text("Fat");

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));})
});
