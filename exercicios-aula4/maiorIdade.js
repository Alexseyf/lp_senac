const prompt = require("prompt-sync")()

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear()
const nome = prompt("Informe o nome do aluno: ")
const ano = Number(prompt("Informe o ano de nascimento: "))
const idade = (anoAtual-ano)

console.log()
console.log(`Nome do aluno: ${nome}`)
console.log(`Ano de Nascimento: ${ano}`)
console.log(`Idade: ${idade}`)

if(idade <= 17){
  console.log(`${nome}, você é menor de idade.`)
} else {
  console.log(`${nome}, você já é maior de idade.`)
}