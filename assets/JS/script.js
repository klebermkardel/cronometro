let tempo = 0;
let cronometro;

function formatarTempo(tempo) {
  let horas = Math.floor(tempo / 3600);
  let minutos = Math.floor((tempo - (horas * 3600)) / 60);
  let segundos = tempo - (horas * 3600) - (minutos * 60);
  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  return horas + ':' + minutos + ':' + segundos;
}

function cronometrar() {
  if (cronometro) {
    return; // retorna sem fazer nada se o cronômetro já estiver em execução
  }
  cronometro = setInterval(() => {
    tempo++;
    document.getElementById("cronometro").innerHTML = formatarTempo(tempo);
  }, 1000);
}

function parar() {
  clearInterval(cronometro);
  cronometro = null; // define cronômetro como null para que possa ser reiniciado
}

function zerar() {
  parar();
  tempo = 0;
  document.getElementById("cronometro").innerHTML = formatarTempo(tempo);
}

document.getElementById("botao-iniciar").addEventListener("click", cronometrar);
document.getElementById("botao-parar").addEventListener("click", parar);
document.getElementById("botao-zerar").addEventListener("click", zerar);