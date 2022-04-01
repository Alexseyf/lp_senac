const prompt = require("prompt-sync")()

const valorKg = Number(prompt("Informe o valor do Kg: "))
const peso = Number(prompt("Informe o peso: "))
const valorTotal = (valorKg/1000)*peso

console.log(`Valor do Kg R$.....: ${valorKg.toFixed(2)}\nCliente serviu (gr): ${peso}\nValor a Pagar R$...: ${valorTotal.toFixed(2)}`)