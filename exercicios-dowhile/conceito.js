const prompt = require("prompt-sync")();

console.log("Informe o nome do aluno ou 'Fim' para sair.");

let aprovado = 0;
let reprovado = 0;

do {
  const nome = prompt("Nome do aluno: ");
  if (nome == "Fim") {
    console.log("Programa finalizado")
    break;
  }
  const conceito = prompt("Informe o conceito: ").toUpperCase();
  if (conceito == "A" || conceito == "B" || conceito == "C") {
    aprovado = aprovado++;
  } else if (conceito == "D") {
    reprovado = reprovado++;
  }
} while (true);

console.log("-".repeat(40));
console.log(`Tivemos ${aprovado} alunos aprovado(s) e ${reprovado} reprovado(s).`);
