var C = 0;
var F = 0;
var K = 0;


function convert(degree) {
	if (degree == "f") {
		C = (document.getElementById("Farenheit").value - 32) * 5 / 9;
		document.getElementById("Celsius").value = Math.round(C);
	
		K = document.getElementById("Celsius").value + 273.15;
		document.getElementById("Kelvin").value = Math.round(K);
	}

	else if (degree == "c") {
		F = document.getElementById("Celsius").value * 9 / 5 + 32;
		document.getElementById("Farenheit").value = Math.round(F);
	
		K = document.getElementById("Celsius").value + 273.15;
		document.getElementById("Kelvin").value = Math.round(K);
	}

	else if (degree == "k") {
		F = document.getElementById("Celsius").value * 9 / 5 + 32;
		document.getElementById("Farenheit").value = Math.round(F);

		C = (document.getElementById("Farenheit").value - 32) * 5 / 9;
		document.getElementById("Celsius").value = Math.round(C);
	}
}