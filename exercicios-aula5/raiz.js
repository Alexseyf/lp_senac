const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))
let res = Math.sqrt(num)

if(res % 1 === 0) {
  console.log(`\nA raiz quadrada de ${num} é ${res}`);
} else {
  console.log(`\n${num} não possui raiz exata.`);
}

