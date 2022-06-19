const prompt = require("prompt-sync")();

/* 4. Elaborar um programa que leia um número. Informe se ele é ou não é um Número Primo.
Número: 25
25 Não é Primo */

const num = Number(prompt("Informe um número: "));
let contador = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    contador++;
  }
}

if (contador == 2) {
  console.log(`${num} é primo`);
} else {
  console.log(`${num} não é primo`);
}