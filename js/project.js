var C = 0;
var F = 0;
var K = 0;

// WHY DOESNT THIS WORK????
// document.getElementById("Fahrenheit").onkeyup = convert("f");
// document.getElementById("Celsius").onkeyup = convert("c");
// document.getElementById("Kelvin").onkeyup = convert("k");


function convert(degree) {
	if (degree == "f") {
		F = document.getElementById("Fahrenheit").value

		C = (document.getElementById("Fahrenheit").value - 32) * 5 / 9;
		document.getElementById("Celsius").value = Math.round(C);

		K = +document.getElementById("Celsius").value + 273.15;
		document.getElementById("Kelvin").value = Math.round(K);
	
		updatethermos();

		updateheaderbgc();
	}

	else if (degree == "c") {
		C = +document.getElementById("Celsius").value

		F = document.getElementById("Celsius").value * 9 / 5 + 32;
		document.getElementById("Fahrenheit").value = Math.round(F);
	
		K = +document.getElementById("Celsius").value + 273.15;
		document.getElementById("Kelvin").value = Math.round(K);

		updatethermos();

		updateheaderbgc();
	}

	else if (degree == "k") {
		K = +document.getElementById("Kelvin").value

		C = document.getElementById("Kelvin").value - 273.15;
		document.getElementById("Celsius").value = Math.round(C);

		F = document.getElementById("Celsius").value * 9 / 5 + 32;
		document.getElementById("Fahrenheit").value = Math.round(F);

		updatethermos();

		updateheaderbgc();
	}
}

function updatethermos() {
	if (F >= 0 && F <= 130) {
		document.getElementById("fmiddle").style.height = +Math.round(F)*2.85+"px";	
	}
	else if (F >= 130) {
		document.getElementById("fmiddle").style.height = +140*2.85+"px";	
	}
	else {
		document.getElementById("fmiddle").style.height = +0+"px";
	}	

	if (C >= 0 && C <= 130) {
		document.getElementById("cmiddle").style.height = +Math.round(C)*2.85+"px";	
	}
	else if (C >= 130) {
		document.getElementById("cmiddle").style.height = +140*2.85+"px";	
	}
	else {
		document.getElementById("cmiddle").style.height = +0+"px";
	}

	if (K >= 0 && K <= 130) {
		document.getElementById("kmiddle").style.height = +Math.round(K)*2.85+"px";
	}
	else if (K >= 130) {
		document.getElementById("kmiddle").style.height = +140*2.85+"px";	
	}
	else {
		document.getElementById("kmiddle").style.height = +0+"px";
	}
}

function updateheaderbgc() {
	if (F <= 35) {
		document.getElementById("header").style.backgroundColor = "lightblue";	
	}
	else if (F >= 35 && F <= 70) {
		document.getElementById("header").style.backgroundColor = "green";	
	}
	else if (F > 70 && F <= 95) {
		document.getElementById("header").style.backgroundColor = "gold";	
	}
	else {
		document.getElementById("header").style.backgroundColor = "red";
	}	
}