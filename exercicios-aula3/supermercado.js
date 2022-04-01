const prompt = require("prompt-sync")()

const produto = prompt("Informe o produto: ")
const valorUnitario = Number(prompt("Informe o valor: "))
const valorDesconto = valorUnitario - (valorUnitario*0.5)
const totalCompra = (valorUnitario*2)+valorDesconto
const totalDesconto = valorUnitario - valorDesconto

console.log(`\nProduto: ${produto}\nPreço R$: ${valorUnitario.toFixed(2)}\nPromoção ${produto}\n----------------------------------\nLeve 03 por apenas R$: ${totalCompra.toFixed(2)}\nO 3º custa só R$: ${totalDesconto.toFixed(2)}`)