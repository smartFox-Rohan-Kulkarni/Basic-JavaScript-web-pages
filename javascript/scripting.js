function sayHi(val){
	alert("hello, "+val);
}
function confirmTest(){
/**
1. Create a variable, choice, that gets the result of user input using the confirm method.

2. Add a condition:

If the user chooses ‘OK,’ create a variable, message, that gets the string "You pressed OK!". Hint: If the user chose ‘OK’, this means that the output of the confirm method is equal to a Boolean value of true.
Otherwise, create a variable, message, that gets the string "Are you sure you want to cancel?"
3. Create an alert box that displays message.
**/

	var choice;
	choice = confirm('hey say yes to comfirm!');
	if(choice){
		alert("You pressed OK!");
	}
	else{
		alert("Are you sure you want to cancel?");
	}

}

function changeText(){
	var domElement;
	domElement = document.getElementById("p1");
	domElement.innerHTML="smile";
	domElement = document.getElementById("p2").innerHTML="Always";
}

function toggleColor(){
	var domE =document.getElementById("btoggle");
	var flag = domE.value;
	var domElement;


	if(flag == "t"){
		domElement = document.getElementById("body");
		domElement.style.backgroundColor = "purple";
		
		domElement = document.getElementById("myDiv1");
		domElement.className = "ColorDeepOrange";
		domElement = document.getElementById("myDiv2");
		domElement.className = "ColorDeepOrange"; 
		domE.value = "f";
	}
	else{
		domE.value = "t";
		domElement = document.getElementById("body");
		domElement.style.backgroundColor = "orange";
		domElement = document.getElementById("myDiv1");
		domElement.className = "ColorDeepPurple";
		domElement = document.getElementById("myDiv2");
		domElement.className = "ColorDeepPurple";
	}
}

