function cuadrado(numero) {
    const resultado = numero ** 2;
    return resultado;
  }
  
  const numeroIngresado = parseFloat(prompt("Ingrese un número para obtener su cuadrado:"));
  const resultadoCuadrado = cuadrado(numeroIngresado);
  alert(`El cuadrado del número ingresado es: ${resultadoCuadrado}`);
  