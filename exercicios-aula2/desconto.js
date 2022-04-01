const prompt = require("prompt-sync")()

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço: "));

console.log(`Produto: ${produto}\nPreço: ${preco.toFixed(2)}\nPromoção de Camisa\n
---\n
Preço à vista: R$ ${(preco*0.9).toFixed(2)}\nA prazo: 3x de R$ ${(preco/3).toFixed(2)}`);

