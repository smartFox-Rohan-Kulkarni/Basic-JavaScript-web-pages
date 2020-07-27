function doMidnightBlue(){
	var domElement1;
	var domElement;
	domElement1 = document.getElementById('doMidnightBlue');
	value=domElement1.value;
	if(value == "t"){ 
		domElement1.value= "f";
		domElement = document.getElementById('canvas1');
		domElement.style.backgroundColor = "midnightblue";
		
		context = domElement.getContext("2d");
		context.fillStyle ="silver";
		context.font ="20px Ariel";
		context.fillText("Smile", 20, 40);
	}else{
		domElement1.value = "t";
		domElement = document.getElementById('canvas1');
		context = domElement.getContext("2d");
		context.clearRect(0, 0, domElement.width, domElement.height); 
		domElement.style.backgroundColor = "aliceblue";
		
		 
	}
}

function drawRectangle() {
	var canvas,context;
	canvas = document.getElementById("canvas2");
	context = canvas.getContext("2d"); 

	context.fillStyle= "mediumspringgreen";
	context.fillRect(10,10,100,100);

	context.fillStyle ="darkviolet" ;
	context.font ="20px Ariel";
	context.fillText("Hey There!!!!!!!!!!!!", 20, 40);
	var domElement1 = document.getElementById('p1').innerHTML = "click again to make darker!!"; 
}
