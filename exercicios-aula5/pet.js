const prompt = require("prompt-sync")()

const pesoTotal = Number(prompt("Informe a quantidade total de ração em Kg: "))
const consumoDiario = Number(prompt("Informe o consumo diário: "))
const pesoGramas = pesoTotal*1000
const duracao = Math.trunc(pesoGramas/consumoDiario)
const sobra = pesoGramas-duracao*consumoDiario


console.log(`\nPeso da ração (Kg): ${pesoTotal}`)
console.log(`Consumo diário (gr): ${consumoDiario}`)
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra} gr`)