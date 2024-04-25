function calcularPromedioDeNotas() {
  let sumaNotas = 0;
  let cantidadNotas = 0;

  while (true) {
    let nota = parseFloat(prompt("Ingrese una nota (-1 para terminar):"));

    if (nota === -1) {
      break;
    }

    sumaNotas += nota;
    cantidadNotas++;
  }

  if (cantidadNotas === 0) {
    alert("No se ingresaron notas.");
  } else {
    const promedio = sumaNotas / cantidadNotas;
    alert(`El promedio de las notas es: ${promedio.toFixed(2)}`);
  }
}

calcularPromedioDeNotas();
