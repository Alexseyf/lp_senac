const prompt = require("prompt-sync")();

const alunos = []
const notas = []

do {
  //Lê duas variáveis informadas pelo usuário
  const x = prompt("Nome: ");
  const y = Number(prompt("Nota: "));

  //Adiciona as variáveis aos vetores
  alunos.push(x);
  notas.push(y);

  const continua = prompt("Continuar (S/N): ");
  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

let res = ""

console.log("\nLista de Alunos");
console.log("_".repeat(40));


for (let i = 0; i < alunos.length; i++) {
  if(notas[i]<7){
    res = "Reprovado(a)"
  }else{
    res = "Aprovado(a)"
  }
  console.log(`${alunos[i].padEnd(20)}- Nota ${notas[i].toFixed(1).padEnd(10)} ${res}`);
}
