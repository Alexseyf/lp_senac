const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

console.log("Informe o nome do aluno ou 'Fim' para sair.");

do {
  const nome = prompt("Nome: ");
  if (nome == "Fim") {
    break;
  }
  const nota = Number(prompt("Nota: "));
  soma = soma + nota
  contador += 1
} while (true);

const media = soma/contador

console.log("-".repeat(40))
console.log(`Mádia das notas da turma: ${media.toFixed(1)}`)