const prompt = require("prompt-sync")()

const modelo = prompt("Informe o modelo: ").toUpperCase()
const marca = prompt("Informe a marca: ").toUpperCase()
const preco = Number(prompt("Informe o valor: "))

console.log()
console.log(`Modelo: ${modelo}`)
console.log(`Marca: ${marca}`)
console.log(`Preço R$: ${preco.toFixed(2)}`)

if(marca == "FIAT") {
  const desconto = preco*0.10
  console.log(`Desconto R$: ${(desconto).toFixed(2)}`)
  console.log(`Preço à vista R$: ${(preco-desconto).toFixed(2)}`)
} else {
  const desconto = preco*0.20
  console.log(`Desconto R$: ${(desconto).toFixed(2)}`)
  console.log(`Preço à vista R$: ${(preco-desconto).toFixed(2)}`)
}