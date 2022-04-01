const prompt = require("prompt-sync")()

const conta = Number(prompt("Informe o total: "))
const clientes = Number(prompt("Informe o nº de clientes: "))
console.log(`Conta: R$ ${conta.toFixed(2)}\nNúmero de Clientes: ${clientes}\nTotal por cliente: R$ ${(conta/clientes).toFixed(2)}`)