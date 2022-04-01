const prompt = require("prompt-sync")()

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear()

const modelo = prompt("Informe o modelo do veículo: ")
const valor = Number(prompt("Informe o valor de avaliação do veículo: "))
const ano = Number(prompt("Informe o ano do veículo: "))
const valorSeguro = valor * 0.04
const desconto = (anoAtual - ano) * 50
const valorTotal = valorSeguro - desconto

console.log(`\nVeículo: ${modelo}\nAvaliação: ${valor.toFixed(2)}\nAno de fabricação: ${ano}\n----------------------------\nProposta de Seguro ${modelo}\n----------------------------\nValor do seguro: ${valorSeguro.toFixed(2)}\nDesconto: ${desconto.toFixed(2)}\nValor a pagar: ${valorTotal.toFixed(2)}`)