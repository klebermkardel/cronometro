let tempo = 0
let cronometro

function formatarTempo(tempo) {
    let horas = Math.floor(tempo / 3600)
    let minutos = Math.floor((tempo - (horas * 3600)) / 60)
    let segundos = tempo - (horas * 3600) - (minutos * 60)
    if (horas < 10) horas = "0" + horas
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos
    return horas + ':' + minutos + ':' + segundos
}