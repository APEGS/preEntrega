let pregunta = prompt("¿Tiene tarjeta SUBE? \n PRESIONA: \n 1 para SI \n 2 para NO");

function infoRequerida(numSube){
  numSube = prompt("Introducir número de SUBE");
  let saldo = 50;

  frase = `Tu SUBE es ${numSube} <br>
           Tu saldo: ${saldo} <br>`;

  document.write(frase);
}

if (pregunta == 1){
  infoRequerida();
} else if (pregunta == 2) {
  alert("lo respetamos, adios");
} else;

cargaConsulta = prompt("¿Desea recargar su SUBE? \n PRESIONA: \n 1 para SI \n 2 para NO");

function realizarCarga(ingreso){
  ingreso = prompt("Ingrese la cantidad deseada");
  let saldo = 50;

  saldoActual = parseInt(saldo) + parseInt(ingreso);

  frase2 = `Tu saldo actual: ${saldoActual}`;

  document.write(frase2);
}

if(cargaConsulta == 1){
  realizarCarga();
}else if (pregunta == 2) {
  alert("lo respetamos, adios");
} else;