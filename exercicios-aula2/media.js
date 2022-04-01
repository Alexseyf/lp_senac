const prompt = require("prompt-sync")()

const nome = prompt("Informe o nome do aluno: ");
const n1 = Number(prompt("Informe a 1ª nota: "));
const n2 = Number(prompt("Informe a 2ª nota: "));

console.log(`Nome: ${nome}\n1ª nota: ${n1.toFixed(1)}\n2ª nota: ${n2.toFixed(1)}\n${nome}, sua média é: ${((n1+n2)/2).toFixed(1)}`);
