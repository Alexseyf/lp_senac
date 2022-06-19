const prompt = require("prompt-sync")();

while (true) {
  console.log("Informe o produto ou FIM para sair")
  const produto = prompt("Produto: ");

if(produto == "FIM" || produto == "fim" || produto == "Fim") {
  console.log("Obrigado! Volte sempre.")
  break
}

  const preco = Number(prompt("Preço R$: "));

  const precoDesconto = preco - preco * 0.1;

  console.log(
    `Preço do ${produto} com desconto R$: ${precoDesconto.toFixed(2)}`
  );
}