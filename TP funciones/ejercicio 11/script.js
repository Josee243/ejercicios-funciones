function calcularSuperficieCuadrado(longitudLado) {
    const superficie = longitudLado * longitudLado;
    return superficie;
  }
  const ladoCuadrado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado para calcular su superficie:"));
  const superficieCuadrado = calcularSuperficieCuadrado(ladoCuadrado);
  alert(`La superficie del cuadrado con longitud de lado ${ladoCuadrado} es: ${superficieCuadrado}`);
  