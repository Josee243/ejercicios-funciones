function calcularAreaCirculo(radio) {
    const area = Math.PI * radio * radio;
    return area;
  }
  const radioCirculo = parseFloat(prompt("Ingrese el radio de un círculo para calcular su área:"));
  const areaCirculo = calcularAreaCirculo(radioCirculo);
  alert(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo.toFixed(2)}`);
  