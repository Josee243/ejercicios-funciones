function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  
  function ultimoDiaDelMes(mes, anio) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const esBisiesto = esBisiesto(anio);
  
    if (mes < 1 || mes > 12) {
      return "Mes inválido. Debe ser un número entre 1 y 12.";
    }
  
    if (mes === 2 && esBisiesto) {
      return 29;
    }
    
    return diasPorMes[mes - 1]; 
  }
  
  const mesIngresado = parseInt(prompt("Ingrese el mes (1 para enero, 2 para febrero, etc.) para obtener el último día del mes:"));
  const anioIngresado = parseInt(prompt("Ingrese el año:"));
  
  const ultimoDia = ultimoDiaDelMes(mesIngresado, anioIngresado);
  if (typeof ultimoDia === 'number') {
    alert(`El último día del mes ${mesIngresado}/${anioIngresado} es ${ultimoDia}.`);
  } else {
    alert(ultimoDia);
  }
  