function changeColor(){
	var canvas = document.getElementById("canvas1");
	var colorChanger_btn1 = document.getElementById("colorChanger_btn1");
	var cur_val = colorChanger_btn1.value;
	var col1 = "#7FFF00";
	var col2 = "#9932CC";
	
	if(cur_val == col1){
		colorChanger_btn1.value= col2;
		canvas.style.backgroundColor = col2; 
	}else{
		colorChanger_btn1.value= col1;
		canvas.style.backgroundColor = col1;
	}
}

function sliderColor() {
	var canvas = document.getElementById("canvas1");
	var favcolor = document.getElementById("favcolor");
	var cur_val = favcolor.value;
	canvas.style.backgroundColor = cur_val; 
}

function drawSquare(){
	var canvas,context,sliderVal;
	canvas = document.getElementById("canvas1");
	context = canvas.getContext("2d"); 
	sliderVal = document.getElementById("range_id1").value;
	context.fillStyle ="silver";
	context.clearRect(0, 0, canvas.width, canvas.height); 
	context.fillRect(10, 10, sliderVal, sliderVal);
	context.fillRect(sliderVal, sliderVal, sliderVal, sliderVal);
	context.fillRect(100, 10, sliderVal, sliderVal);
	context.fillRect(150, sliderVal, sliderVal, sliderVal);
}