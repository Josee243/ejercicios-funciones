function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    const siguiente = numero + 1;
    const dobleDelSiguiente = siguiente * 2;
    const dobleDelSiguienteAlCuadrado = dobleDelSiguiente ** 2;
  
    alert(`Número ingresado: ${numero}\nSiguiente número: ${siguiente}\nDoble del siguiente al cuadrado: ${dobleDelSiguienteAlCuadrado}`);
  }
  const numeroIngresado = parseFloat(prompt("Ingrese un número para imprimir el doble del siguiente al cuadrado:"));
  imprimirElDobleDelSiguienteAlCuadrado(numeroIngresado);
  