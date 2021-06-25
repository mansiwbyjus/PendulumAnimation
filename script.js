var canvas1 = document.getElementById("Canvas1");
canvas1.width= window.innerHeight*(16/9)*0.99;
canvas1.height= window.innerHeight*0.99;
   //setting graph's ranges
   var xMin=-10;
   var xMax=10 ;
   var yMin=-10;
   var yMax=0.5;
   
   //setting scales and origin
   xUnitsPerPixel=(xMax-xMin)/canvas1.width;
   yUnitsPerPixel=(yMax-yMin)/canvas1.height;
   var originX=(-xMin)/xUnitsPerPixel;
   var originY=(yMax)/yUnitsPerPixel;
   
    //xtransformation
    function transX(x){
    return originX+(x/xUnitsPerPixel)
}
    //ytransformation
    function transY(y){
    return originY-(y/yUnitsPerPixel)
}

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
    var ctx1= canvas1.getContext("2d");
    ctx1.lineWidth=2;
    ctx1.strokeStyle= "black";
    // let totalWidth = canvas1.width;
    // let oneThird = canvas1.width / 3;
    // let twoThird= canvas1.width*2/3 ;
    // let middleX = canvas1.width/2;
    // let oneThirdY = canvas1.height*2/3;
  

    // Initial Horizontal Line
    ctx1.beginPath();
    ctx1.moveTo(transX(-2),transY(0));
    ctx1.lineTo(transX(2),transY(0));
    ctx1.stroke();

    //Initial Bob String
    ctx1.beginPath();
    ctx1.moveTo(transX(0),transY(0));
    ctx1.lineTo(transX(0),transY(-7));
    ctx1.stroke();

    //Initial Bob
    ctx1.fillStyle = "#3370d4";
    ctx1.beginPath();  
    ctx1.arc(transX(0),transY(-7),10,0,2*Math.PI);  
    ctx1.stroke();
    ctx1.fill();

  



       

    
    var bobLength = 7;
    var bobRadius=10;
    var g=9.8;
    var T =(2* Math.PI)*Math.sqrt(bobLength/g);
    var t=0;
    var theta0 = (Math.PI/18);
    var theta;
    var f= 1/T;
    var A;
    var bobPosX=0;
    var bobPosY= -7;


    var sliderL =document.getElementById("bobLength");
    sliderL.oninput=function(){
        bobLength =sliderL.value;
        console.log(bobLength);
        document.getElementById("bobLengthVal").innerHTML= bobLength;
    }

    var sliderM =document.getElementById("bobMass");
    sliderM.oninput=function(){
        bobRadius =sliderM.value;
        console.log(bobRadius);
        document.getElementById("bobMassValue").innerHTML= bobRadius;
    }
    

    async function animation(){
        while(true){
            await sleep(10);
            t=t+0.01;
            theta=Math.exp(-0.1*t)*theta0*Math.cos(Math.sqrt(g/bobLength)*t);
            A= bobLength*theta;
            bobPosX= A*Math.cos(theta/2);
            bobPosY= -(bobLength- A*Math.sin(theta/2));
            ctx1.clearRect(0,0,canvas1.width,canvas1.height);
           
            //Horizontal Line
            ctx1.beginPath();
            ctx1.moveTo(transX(-2),transY(0));
            ctx1.lineTo(transX(2),transY(0));
            ctx1.stroke();

            ctx1.beginPath();
            ctx1.moveTo(transX(0),transY(0));
            ctx1.lineTo(transX(bobPosX),transY(bobPosY));
            //bob position update
            ctx1.stroke();
            ctx1.beginPath();  
             ctx1.arc(transX(bobPosX),transY(bobPosY),bobRadius,0,2*Math.PI);  
            ctx1.stroke();
            ctx1.fill();

            }
    
    }



     animation();