function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  
  function calcularDiasMes(dia, mes, anio) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const esBisiesto = esBisiesto(anio);
  
    if (mes < 1 || mes > 12) {
      return "Mes inválido. Debe ser un número entre 1 y 12.";
    }
  
    const diasEnMes = diasPorMes[mes - 1];
    if (mes === 2 && esBisiesto) {
      return diasEnMes + 1;
    }
    
    return diasEnMes;
  }
  
  const diaIngresado = parseInt(prompt("Ingrese el día:"));
  const mesIngresado = parseInt(prompt("Ingrese el mes (1 para enero, 2 para febrero, etc.):"));
  const anioIngresado = parseInt(prompt("Ingrese el año:"));
  
  const cantidadDias = calcularDiasMes(diaIngresado, mesIngresado, anioIngresado);
  if (typeof cantidadDias === 'number') {
    alert(`El mes ${mesIngresado} del año ${anioIngresado} tiene ${cantidadDias} días.`);
  } else {
    alert(cantidadDias);
  }
  