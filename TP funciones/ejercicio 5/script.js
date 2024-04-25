function doble(numero) {
    const resultado = numero * 2;
    return resultado;
  }
  
  const numeroIngresado = parseFloat(prompt("Ingrese un número para obtener su doble:"));
  const resultadoDoble = doble(numeroIngresado);
  alert(`El doble del número ingresado es: ${resultadoDoble}`);
  