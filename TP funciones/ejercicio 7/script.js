function imprimirValores(numero) {
    const siguiente = numero + 1;
    const doble = numero * 2;
    const cuadrado = numero ** 2;
  
    alert(`Número ingresado: ${numero}\nSiguiente número: ${siguiente}\nDoble: ${doble}\nCuadrado: ${cuadrado}`);
  }
  
  const numeroIngresado = parseFloat(prompt("Ingrese un número para imprimir sus valores relacionados:"));
  imprimirValores(numeroIngresado);
  