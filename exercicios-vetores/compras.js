const prompt = require("prompt-sync")();

//Declaração dos vetores (array) produtos e precos
const produtos = [];
const precos = [];

do {
  //Lê duas variáveis informadas pelo usuário
  const x = prompt("Produto: ");
  const y = Number(prompt("Preço: "));

  //Adiciona as variáveis aos vetores
  produtos.push(x);
  precos.push(y);

  const continua = prompt("Continuar (S/N): ");
  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

console.log("\nLista de compras");
console.log("_".repeat(40));

//Obtém tamanho do vetor
const tam = produtos.length;
let total = 0;

for (let i = 0; i < tam; i++) {
  console.log(`${produtos[i].padEnd(20)}- R$ ${precos[i].toFixed(2)}`);
  total = total + precos[i];
}
console.log("_".repeat(40));
console.log(`Total da compra R$: ${total.toFixed(2)}`);

// nome = "Ana"
// nome.padEnd(10)  => "Ana       "