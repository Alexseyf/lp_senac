/* 
1. Elaborar um programa que leia nome e nota de ‘n’ alunos (até ser digitado ‘Fim’ no nome). Após, liste os alunos em 2 grupos: Aprovados (nota >= 7) e Reprovados (nota < 7) 
*/

const prompt = require("prompt-sync")();

const alunos = [];
const notas = [];

do {
  const x = prompt("Nome: ");
  const y = Number(prompt("Nota: "));

  alunos.push(x);
  notas.push(y);

  const continua = prompt("Continuar (S/N): ");
  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

let aprovados = "";
let reprovados = "";

console.log("\nLista de Alunos");
console.log("_".repeat(40));

for (let i = 0; i < alunos.length; i++) {
  if (notas[i] < 7) {
    reprovados += alunos[i] + " - Nota " + notas[i] + "\n";
  } else {
    aprovados += alunos[i] + " - Nota " + notas[i] + "\n";
  }
}

console.log("\nAprovados");
console.log("_".repeat(40));
console.log(aprovados);
console.log("\nReprovados");
console.log("_".repeat(40));
console.log(reprovados);
