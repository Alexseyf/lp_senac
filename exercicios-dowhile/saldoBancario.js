const prompt = require("prompt-sync")()

/* 1. Elaborar um programa que leia nome e saldo da conta de ‘n’ clientes até ser digitado ‘Fim’ no
nome. Ao final, informe quantos clientes estão com o saldo negativo na conta. Caso nenhum cliente
esteja com saldo negativo informe “Não há clientes com saldo negativo”.
Informe o nome do cliente ou 'Fim' para sair
Nome do Cliente: Maria
Saldo R$: 2500.00
Nome do Cliente: Ricardo
Saldo R$: -900.00
Nome do Cliente: Sandro
Saldo R$: 1200.00
Nome do Cliente: Cibele
Saldo R$: 5000.00
--------------------------------------
Nº de Clientes com saldo negativo: 1 */

console.log("Informe o nome do cliente ou 'Fim' para sair.")

let pos = 0
let neg = 0

while(true){
  const nome = prompt("Nome do cliente: ")
    if(nome == "Fim"){
      console.log("Programa finalizado")
      break
    }
  const saldo = Number(prompt("Informe o saldo da conta: "))
  if (saldo >= 0){
    pos++
  } else {
    neg++
  }
}

if(neg==0){
  console.log("Não há clientes com saldo negativo")
}else{
console.log(`Temos ${pos} cliente(s) com saldo positivo e ${neg} cliente(s) com saldo negativo`)
}