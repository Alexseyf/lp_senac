
/* 
3. Elaborar um programa que leia o nome de 10 clubes. Após, liste os jogos com os clubes na ordem informada.
*/

const prompt = require("prompt-sync")();

const clubes = [];
let cont = 0;

for (i = 1; i <= 10; i++) {
  clubes.push(prompt(`${i}° Clube: `));
}


console.log("\nJogos")
console.log("-".repeat(20))
for (let i = 0; i < clubes.length; i += 2) {
  console.log(`${clubes[i]} x ${clubes[i + 1]}`);
}
