const prompt = require("prompt-sync")();

do {
  const nome = prompt("Aluno: ");
  const nota = Number(prompt("Nota: "));

  if (nota >= 7) {
    console.log(`${nome}, você foi aprovado!`);
  } else {
    console.log(`${nome}, você foi reprovado!`);
  }

  let continua = prompt("Concinuar (S / N): ");

  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

console.log("Finalizado!")