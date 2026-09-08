function DiaDelProgramador(fecha = new Date()) {
    // Obtenemos el primer día del año (enero 1).
    const inicioDelAno = new Date(fecha.getFullYear(), 0, 1);
  
    // Calculamos la diferencia en milisegundos entre la fecha dada y el primer día del año.
    const diferencia = fecha - inicioDelAno;
  
    // Convertimos la diferencia de milisegundos a días.
    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    const diaDelAno = Math.floor(diferencia / unDiaEnMilisegundos) + 1;

    // Comparamos el día actual del año con el número 256.
    if (diaDelAno == 256) {
        // De ser 256 es el día del programador.
        return "¡Feliz día del programador!";
    }
    else {
        // De lo contrario devuelve el día actual del año.
        return diaDelAno.toString();
    }
  }
  
console.log(DiaDelProgramador)

function MostrarValor () {
    const valor = document.getElementById("valor");
    valor.textContent = DiaDelProgramador();
}

MostrarValor()
