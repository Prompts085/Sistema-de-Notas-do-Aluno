const readline = require('readline').createInterface({
  input: process.stdin, output: process.stdout
});

const alunos = [];

function pergunta(q) {
  return new Promise(resolve => {
    readline.question(q, ans => resolve(ans));
  });
}
  //função que irá adicionar o aluno
function addAluno() { 
nome = nome.trim().toLowerCase();
//aqui irá avisar
let existente = alunos.some(aluno => aluno.nome.toLowerCase() === nome);
if (existente ){
console.log("Já está registrado!");
 return false;
}//aqui irá adicionar
 alunos.push({ nome: nome, notas: []});
  console.log("Acabou de ser listado!");
  return true;
}
// Essa função irá percorrer os nomes listados
function listagem(){
    if(alunos.length === 0){
        console.log("Nenhum nome de aluno listado.");
        return;
    }
    //Irá mostrar os nomes listados
alunos.forEach(aluno => {
    console.log( - $[aluno.nome] (Notas= $[aluno.notas.length]));
});
}

async function main() {
  let sair = false;
  while (!sair) {
    console.log("\n—— Gerenciador de Turma ——");
    console.log("1) Adicionar aluno");
    console.log("2) Listar alunos");
    console.log("3) Registrar notas");
    console.log("4) Calcular média de um aluno");
    console.log("5) Mostrar aprovados");
    console.log("6) Estatísticas da turma");
    console.log("7) Ordenar por média e listar");
    console.log("8) Remover aluno");
    console.log("9) Sair");
    const op = (await pergunta("Escolha uma opção: ")).trim();

    switch(op) {
      case '1':
        // chamar função adicionar
        break;
      case '2':
        // listar
        break;
      case '3':
        // registrar notas
        break;
      case '9':
        sair = true;
        console.log("Encerrando...");
        break;
      default:
        console.log("Opção inválida.");
    }
  }
  readline.close();
}

main();