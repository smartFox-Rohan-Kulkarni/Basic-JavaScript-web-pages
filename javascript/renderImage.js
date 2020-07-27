function upload(){
	alert("ok");
	var canvas = document.getElementById("canvas1");
	var finput = document.getElementById("finput");
	alert("okqq");
	var image = new SimpleImage(finput);

	image.drawTo(canvas);
	alert("okq");
}