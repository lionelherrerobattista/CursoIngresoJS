/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto= Math.floor(Math.random() *100) +1
	
	console.log(numeroSecreto);

	contadorIntentos=0;

}

function verificar()
{
	var numeroIngresado;
	
	if (contadorIntentos > 10)
	{
		alert("Se acabaron los intentos");
		return;
	}

	numeroIngresado= document.getElementById('numero').value;
	numeroIngresado= parseInt(numeroIngresado);

	contadorIntentos= contadorIntentos + 1;
	
	document.getElementById('intentos').value=contadorIntentos;

	if (numeroIngresado == numeroSecreto && contadorIntentos == 1)
	{
		alert("Siga intentando.");
	}
	else
	{

		if (numeroIngresado == numeroSecreto)
		{
			alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.");
		}
		else
		{
			if (numeroIngresado < numeroSecreto)
			{
				alert("falta...");
			}
			else
			{
				alert("se pasó...");
			}
		}
	}
	
	

	

	
	
}