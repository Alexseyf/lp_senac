const prompt = require("prompt-sync")();

const num = Number(prompt("Contar até que número? "));
const pulo = Number(prompt("Pular de quanto em quanto? "));

for (let i = pulo; i <= num; i = i + pulo) {
  console.log(`- ${i}`);
}
