const prompt = require("prompt-sync")()

/* 3. Elaborar um programa que leia um número. Exiba todos os divisores deste número.
Número: 15
Divisores do 15: 1, 3, 5, 15 */

const num = Number(prompt("Informe um número: "))
let divisores = ""

for(let i = 1; i < num; i++){
  if(num%i==0){
    divisores += i + ","
  }
}

console.log(`Divisores de ${num}: ${divisores}${num} `)