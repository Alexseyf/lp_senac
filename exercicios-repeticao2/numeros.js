const prompt = require("prompt-sync")();

while (true) {
  console.log("Informe um número ou 0 para sair");
  const num = Number(prompt("Número: "));
  if (num == 0) {
    const confirma = prompt("Deseja realmente sair (S/N)? ");
    if (confirma == "S" || confirma == "s") {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 == 0) {
    console.log(`O dobro do número par é ${num * 2}`);
  } else {
    console.log(`O triplo do número ímpar é ${num * 3}`);
  }
}
