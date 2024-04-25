function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  
  function obtenerDiaAnterior(dia, mes, anio) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const esBisiesto = esBisiesto(anio);
  
    if (dia < 1 || mes < 1 || mes > 12) {
      return "Fecha inválida.";
    }
  
    if (dia > 1) {
      return dia - 1;
    }

    if (mes === 1) {
      return 31;
    }
  
    const diasMesAnterior = diasPorMes[mes - 2]; 
    if (mes === 2 && esBisiesto) {
      return diasMesAnterior + 1; 
    }
  
    return diasMesAnterior;
  }
  
  const diaIngresado = parseInt(prompt("Ingrese el día:"));
  const mesIngresado = parseInt(prompt("Ingrese el mes (1 para enero, 2 para febrero, etc.):"));
  const anioIngresado = parseInt(prompt)