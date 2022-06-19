const prompt = require("prompt-sync")();

/* 2. Elaborar um programa que leia ‘n’ números, até ser digitado 0. Ao final, exiba quantos números
foram digitados, a soma dos números e qual o maior número digitado.
Informe números ou 0 para sair
Número: 12
Número: 39
Número: 13
Número: 26
Número: 0
-----------------------------
Números digitados: 4
Soma dos Números: 90
Maior Número: 39 */


console.log("Informe um número ou '0' para sair");

let contaNumeros = 0;
let somaNumeros = 0;
let maiorNumero = 0;

while (true) {
  const num = Number(prompt("Informe um número: "));
  if (num == 0) {
    console.log("Programa finalizado");
    break;
  }
  contaNumeros++;
  somaNumeros = somaNumeros + num;
  if (num > maiorNumero) {
    maiorNumero = num;
  }
}

console.log(
  `foram digitados ${contaNumeros} números, a soma entre eles é ${somaNumeros} e o maior número foi ${maiorNumero}`
);
