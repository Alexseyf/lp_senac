const prompt = require("prompt-sync")()

const nome = prompt("Informe o nome: ")
const sexo = prompt("Informe o sexo: ").toUpperCase()
const altura = Number(prompt("Informe a altura: "))
let imc = 0

if(sexo == "M") {
  imc = (72.7*altura)-58
} else {
  imc = (62.1*altura)-44.7
}

console.log(`\nNome: ${nome}`)
console.log(`Sexo: ${sexo}`)
console.log(`Altura: ${altura.toFixed(2)}`)
console.log(`Peso ideal: ${imc.toFixed(2)} Kg`)


/* var nome
var sexo
var altura
var pesoIdeal = 0

function coletarDados() {
  nome = prompt("Informe o nome: ")
  altura = Number(prompt("Informe a altura: "))
  sexo = prompt("Informe o sexo: ")
}

function calcularImc() {
  if (sexo != 'M' || sexo != 'F' || sexo != 'm' || sexo != 'f') {
    console.log("Por favor, insira M ou F\n")
    return(coletarDados())
  }
  if(sexo == "M"){
    pesoIdeal = (72.7*altura)-58
  } else if (sexo == "F") {
      pesoIdeal = (62.1*altura)-44.7
  } 
}

coletarDados()
calcularImc()

console.log(`\nNome: ${nome}`)
console.log(`Sexo: ${sexo}`)
console.log(`Altura: ${altura}`)
console.log(`Peso ideal: ${pesoIdeal.toFixed(2)}`) */