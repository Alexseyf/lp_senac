const prompt = require("prompt-sync")()

const cidade = prompt("Informe a cidade: ")
const dias = Number(prompt("Informe o nº de dias em viagem: "))
const horas = Number(prompt("Informe a quantidade de horas em viagem: "))
const horasDia = dias * 24
const totalViagem = horas + horasDia

console.log(`\nCidade: ${cidade}\nNº de dias: ${dias}\nNº de horas: ${horas}\nTotal da viagem para ${cidade}: ${totalViagem} horas`)