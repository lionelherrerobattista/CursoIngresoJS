function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	/* switch (mesDelAño)
	{
		case "Enero":
					alert("Falta para el invierno");
					break;

		case "Febrero":
					alert("Falta para el invierno");
					break;

		case "Marzo":
					alert("Falta para el invierno");
					break;

		case "Abril":
					alert("Falta para el invierno");
					break;

		case "Mayo":
					alert("Falta para el invierno");
					break;

		case "Junio":
					alert("Falta para el invierno");
					break;

		case "Julio":
					alert("Abrigate que hace frio.");
					break;

		case "Agosto":
					alert("Abrigate que hace frio.");
					break;

		default:
				alert("Ya pasamos el frio, ahora calor!!!.");
				break;

	}
	*/

	switch (mes)
	{
		case "Julio":
		case "Agosto":
					alert("Abrigate que hace frio.");
					break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
					alert("Falta para el invierno");
					break;
		default:
				alert("Ya pasamos el frio, ahora calor!!!.");
				break;

	}




}//FIN DE LA FUNCIÓN