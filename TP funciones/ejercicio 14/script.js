function calcularDiasMes(numeroMes) {
    if (numeroMes < 1 || numeroMes > 12) {
      return "Mes inválido. Debe ser un número entre 1 y 12.";
    }
  
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dias = diasPorMes[numeroMes - 1];
    return dias;
  }
  const numeroMes = parseInt(prompt("Ingrese un número de mes (1 para enero, 2 para febrero, etc.) para calcular la cantidad de días:"));
  const cantidadDias = calcularDiasMes(numeroMes);
  if (typeof cantidadDias === 'number') {
    alert(`El mes ${numeroMes} tiene ${cantidadDias} días.`);
  } else {
    alert(cantidadDias);
  }
  