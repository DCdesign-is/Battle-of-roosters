var jUno = Math.random();
var jDos = Math.random();

var jugadores = document.getElementById("jugadores");
var jugadorUno = document.getElementById("one");
var jugadorDos = document.getElementById("two");
var botones = document.getElementById("buttonsPlayer");
var btnUno = document.getElementById("jugar");


document.getElementById("jugar").addEventListener("click", winner);

function winner(){

	// asignar animacion //
	function agClase(){
		jugadorUno.className += " active";
		jugadorDos.className += " activeDos"
	};

	agClase();

	var activar = setTimeout(activo, 7000);
	function activo(){

		// mostrar el jugador ganador
		if (jUno > jDos){
			jugadores.removeChild(two);
			document.getElementById("demo").innerHTML = "Gana Jugador Uno";
		}else{
			jugadores.removeChild(one);
			document.getElementById("demo").innerHTML = "Gana Jugador Dos";
		};
	};	

	function other(){
			document.getElementById("jugarDos").innerHTML = "Volver a Jugar";
			botones.removeChild(btnUno);
	};
	other();
};


// volver a jugar 
document.getElementById("jugarDos").addEventListener("click", deNuevo);

function deNuevo(){
	location.reload();
};
