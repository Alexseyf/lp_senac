const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número:  "));

console.log(`Número: ${num}\nVizinhos: ${num - 1} e ${num + 1}`);