/* 
Elaborar um programa que leia descrição e valor de uma conta até ser digitado “Fim” na descrição
da conta. Ao final, exibir o total das contas 
*/

const prompt = require("prompt-sync")()

console.log("Digite a descrição da conta ou 'Fim' para sair")

while(true){
  let conta = prompt("Conta: ")

  if(conta == "Fim"){
    console.log(conta)
  }else{
    conta = conta + conta + " "
  }
}console.log(conta)