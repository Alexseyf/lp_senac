const prompt = require("prompt-sync")();

const pacientes = [];

function incluir() {
  console.log();
  const nome = prompt("Nome do Paciente: ");
  pacientes.push(nome);
  console.log("Paciente cadastrado com sucesso.");
}

function listar() {
  console.log("\nPacientes em espera");
  console.log("_".repeat(40));
  for (const paciente of pacientes) {
    console.log(paciente);
  }
}

function priorizar() {
  const nome = prompt("\nNome do Paciente: ");
  pacientes.unshift(nome);
  console.log("Paciente encaminhado ao atendimento prioritário");
}

function atender() {
  if (pacientes.length == 0) {
    console.log("\nNão há pacientes na fila de espera");
    return;
  }
  console.log();
  const nome = pacientes[0];
  console.log(`Paciente ${nome} encaminhado ao atendimento`);
  pacientes.shift(pacientes[0]);
}

do {
  console.log()
  console.log("-".repeat(40));
  console.log("Consultório Odontológico");
  console.log("-".repeat(40));
  console.log("\n1. Incluir Paciente");
  console.log("2. Listar Paciente");
  console.log("3. Atender Paciente");
  console.log("4. Finalizar");
  const opcao = Number(prompt("\nEscolha uma opção: "));
  if (opcao == 1) {
    const tipoDeAtendimento = prompt("\nUrgência (S/N)?");
    if (tipoDeAtendimento == "s" || tipoDeAtendimento == "S") {
      priorizar();
    } else {
      incluir();
    }
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    atender();
  } else if (opcao == 4) {
    break;
  }
} while (true);



//Intruções adicionais propostas pelo professor
//
//Acrescentar ao programa Odonto as funcionalidades de Atender o Paciente (e mostrar o nome dele)
//Atendimento de Urgência (onde o paciente irá para o início da fila)
