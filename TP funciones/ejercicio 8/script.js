function imprimirElDobleDelSiguiente(numero) {
    const siguiente = numero + 1;
    const dobleDelSiguiente = siguiente * 2;
  
    alert(`Número ingresado: ${numero}\nSiguiente número: ${siguiente}\nDoble del siguiente: ${dobleDelSiguiente}`);
  }
  const numeroIngresado = parseFloat(prompt("Ingrese un número para imprimir el doble del siguiente:"));
  imprimirElDobleDelSiguiente(numeroIngresado);
  