function calcularCircunferencia(radio) {
    const circunferencia = 2 * Math.PI * radio;
    return circunferencia;
  }
  const radioCirculo = parseFloat(prompt("Ingrese el radio de un círculo para calcular su circunferencia:"));
  const circunferenciaCirculo = calcularCircunferencia(radioCirculo);
  alert(`La circunferencia del círculo con radio ${radioCirculo} es: ${circunferenciaCirculo.toFixed(2)}`);
  