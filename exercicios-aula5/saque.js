const prompt = require("prompt-sync")()

const valorSaque = Number(prompt("Valor do Saque: "))
const quantNotas = valorSaque / 10

if(valorSaque % 10 !== 0) {
  console.log(`“Não é possível pagar ${valorSaque} com notas de R$ 10”`)
} else {
  console.log(`O pagamento será feito com ${quantNotas} de R$ 10`)
}