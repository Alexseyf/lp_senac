/* 
Elaborar um programa que leia nome e salário de um funcionário. Exiba um novo salário com 20%
de acréscimo. Repetir até ser digitado “Fim” no nome do funcionário. 
*/


const prompt = require("prompt-sync")();

console.log("Digite o nome do funcionário ou 'Fim' para sair");

while (true) {
  const nome = prompt("Funcionário: ");
  
  if (nome == "Fim") {
    console.log(nome);
    break;
  } else {
    const salario = Number(prompt("Salário R$: "));
    let novoSalario = salario + salario * 0.2;
    console.log("-".repeat(40))
    console.log(`Funcionário: ${nome}`);
    console.log(`Salário R$: ${salario.toFixed(2)}`)
    console.log(`Novo salário R$: ${novoSalario.toFixed(2)}`)
  }
}
