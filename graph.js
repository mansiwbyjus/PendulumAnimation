var bobLength=7;
var g=9.8;
var theta0=(Math.PI/18);
var theta;
var A;
var bobPosX=0;
var t=0;

var xValues = [];
var yValues = [];


var sliderL = document.getElementById("bobLength");
sliderL.oninput = function () {
    bobLength = sliderL.value;
    console.log(bobLength);
    document.getElementById("bobLengthVal").innerHTML = bobLength;
}

var sliderM = document.getElementById("bobMass");
sliderM.oninput = function () {
    bobRadius = sliderM.value;
    console.log(bobRadius);
    document.getElementById("bobMassValue").innerHTML = bobRadius;
}


var sliderT = document.getElementById("theta");
sliderT.oninput = function () {
    angle = sliderT.value;
    console.log(angle);
    document.getElementById("thetaValue").innerHTML = angle;
    theta0= degrees_to_radians(angle);
}

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}


generateData("A*Math.cos(theta/2)", t, 10, 0.01);
animation();

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
