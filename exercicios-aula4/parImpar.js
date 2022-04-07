const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um número: "))

console.log()
console.log(`Número: ${numero}`)
if(numero%2 == 0){
  console.log(`${numero} é par.`)
} else {
  console.log(`${numero} é impar.`)
}