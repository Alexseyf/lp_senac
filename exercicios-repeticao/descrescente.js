const prompt = require("prompt-sync")();

const num = Number(prompt("Decrescer a partir do número: "));
let resposta = "";
for (let i = num; i >= 1; i--) {
  if (i != 1) {
    resposta += i + ", ";
  } else {
    resposta += i;
  }
}

console.log(resposta);
