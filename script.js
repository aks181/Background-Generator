var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('gradient');
var h5=document.querySelector("h5");
var random=document.getElementById("random");

function setGradient(){
	//.style.background changes the property of css
	body.style.background= "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	h5.textContent=body.style.background+";";
}

function setRandomGradient(){
	body.style.background= "linear-gradient(to right, "+getRandomColor()+", "+getRandomColor()+")";
	h5.textContent=body.style.background+";";
}

function getRandomColor(){
	var letters="0123456789ABCDEF";
	var randomColor = "#";
	for(var i=0; i<6;  i++){
		randomColor+= letters[Math.floor(Math.random()*16)];
	}
	return randomColor;
}
//or we can do in above function
//return('000000'+ Math.floor(Math.random()*16777215).toString(16)).slice(-6);

function initialValue(){

	h5.textContent=body.style.background; //=";"
}
body.onload= initialValue();
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

random.addEventListener("click",setRandomGradient);
// color1.setAttribute("value",);
// color2.setAttribute("value",yellow);


