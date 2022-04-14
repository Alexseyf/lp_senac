const prompt = require("prompt-sync")()

const valorHora = Number(prompt("Valor de hora R$: "))
const tempoUso = Number(prompt("Tempo Usado (min): "))
const tempoHora = Math.ceil(tempoUso / 60)
const total = tempoHora * valorHora

console.log(`Pagar R$: ${total.toFixed(2)}`)