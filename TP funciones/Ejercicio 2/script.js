function calcularMaximo(num1, num2) {
    let maximo = (num1 > num2) ? num1 : num2;
    return maximo;
  }
  
  let numeroMayor = calcularMaximo(50, 30);
  console.log("El número mayor es:", numeroMayor); 
  