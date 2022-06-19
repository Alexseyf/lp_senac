const prompt = require("prompt-sync")();

while (true) {
  const produto = prompt("Produto: ");
  const preco = Number(prompt("Preço R$: "));

  const precoDesconto = preco - preco * 0.1;

  console.log(
    `Preço do ${produto} com desconto R$: ${precoDesconto.toFixed(2)}`
  );

  const continua = prompt("Deseja continuar (S/N)? ");

  if (continua == "N" || continua == "n") {
    break;
  }
}
