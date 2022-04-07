const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço: "))

console.log()
console.log(`Produto: ${produto}`)
console.log(`Preço R$: ${preco.toFixed(2)}`)

if(preco >= 100.00) {
  console.log(`Pode ser pago em até 3x de R$: ${(preco/3).toFixed(2)}`)
} else {
  console.log("Pagamento somente à vista")
}