var bobLength=7;
var g=9.8;
var theta0=(Math.PI/18);
var theta;
var A;
var bobPosX=0;
var t=0;

var xValues = [];
var yValues = [];
generateData("A*Math.cos(theta/2)", t, 10, 0.01);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 0.1,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "bobPos v/s time",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2,step) {
    //x=t, y=bobPosX
  for (let x = i1; x <= i2; x += step) {
    theta=theta0*Math.cos(Math.sqrt(g/bobLength)*x);
    A= bobLength*theta;
    yValues.push(eval(value));
    xValues.push(x);
  }
}
