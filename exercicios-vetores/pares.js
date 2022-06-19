/*
2. Elaborar um programa que leia ‘n’ números (até ser digitado 0). Após liste apenas os números pares. Informe também, quantos pares foram digitados.
*/

const prompt = require("prompt-sync")();

const numeros = [];
let contador = 0;

while (true) {
  let numero = Number(prompt("Número: "));
  if (numero == 0) {
    break;
  }
  if (numero % 2 == 0) {
    numeros.push(numero);
    contador++;
  }
}

console.log("\nPares da lista");
console.log("-".repeat(15));

for (i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("-".repeat(15));
console.log(`${contador} Pares`);
