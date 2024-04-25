function calcularPerimetroCuadrado(longitudLado) {
    const perimetro = 4 * longitudLado;
    return perimetro;
  }
  const ladoCuadrado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado para calcular su perímetro:"));
  const perimetroCuadrado = calcularPerimetroCuadrado(ladoCuadrado);
  alert(`El perímetro del cuadrado con longitud de lado ${ladoCuadrado} es: ${perimetroCuadrado}`);
  