window.onload = start;
function start() {
	ref = setInterval(refrescar, 500); //Vamos a llamar a la funciòn 'refrescar' cada medio segundo
}
//Creamos un prototipo tipo string para convertir de HEX a RGB
String.prototype.convertirARGB = function(){
	if (this.length>6){
		window.alert("Los colores hexadecimales tienen 6 dígitos")
		document.getElementById("hex").value = null;
	}
	var HexARGB = this.match(/.{1,2}/g); //Separamos en 3 el código HEX para poder transformarlo a RGB
	var RGB = [
		parseInt(HexARGB[0], 16), // Transformamos los 2 primeros dígitos multiplicando el primero por 16
		parseInt(HexARGB[1], 16),
		parseInt(HexARGB[2], 16)
	];
	document.getElementById("rgb").value = "rgb"+"("+RGB+")"; //Lo mostramos en el input de RGB
}
//Aquí creamos la función 'refrescar' con la que cambiaremos la página acorde con el color con el que hagamos la conversión
function refrescar() {
	var hex = document.getElementById("hex").value;
	document.getElementById("container").style.background = "#"+hex;
	hex.convertirARGB();
}