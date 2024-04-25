function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  
  const anioIngresado = parseInt(prompt("Ingrese un año para verificar si es bisiesto:"));
  if (esBisiesto(anioIngresado)) {
    alert(`${anioIngresado} es un año bisiesto.`);
  } else {
    alert(`${anioIngresado} no es un año bisiesto.`);
  }
  