   const alunos = [];

function pergunta(q) {
  return new Promise(resolve => {
    readline.question(q, ans => resolve(ans));
  });
}
  //função que irá adicionar o aluno
async function addAluno() {
  let nome = await pergunta("Digite o nome do aluno: ");
  nome = nome.trim().toLowerCase();
//irá mostrar que o aluno foi inserido
  let existente = alunos.some(aluno => aluno.nome.toLowerCase() === nome);
  if (existente) {
    console.log("Já está registrado!");
    return;
  }

  alunos.push({ nome: nome, notas: [] });
  console.log("Acabou de ser listado!");
}

// Essa função irá percorrer e mostrar os nomes listados
function listagemDeAlunos() {
  if (alunos.length === 0) {
    console.log("Nenhum nome de aluno listado.");
    return;
  }

  alunos.forEach(aluno => {
    console.log(`- ${aluno.nome} (Notas: ${aluno.notas.length})`);
  });
}
//Essa função irá percorrer e apagar o aluno
function removerAluno(nome){
    for(let i = 0; i < alunos.length; i++){
        if (alunos[i] === nome){
            alunos.splice(i, 1);
            console.log(`Aluno ${nome} removido!`);
            return;
        }
    }
    console.log(`nome ${nome} não encontrado`)
}
//função para adicionar nota
function addNotasAlunos(nome, notas){
    for(let i = 0; i < alunos.length; i++){
        if (alunos[i].nome === nome){
            alunos[i].notas.push(notas);
            console.log(`Nota ${notas} adicionada para ${nome}`)
        }
    }
    console.log(`Aluno ${nome} não achado`)
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
       addAluno();
        break;

      case '2':
        listagemDeAlunos();
        break;


      case '3':
        const nomeNota = await pergunta("Digite o nome: ");
        const nota = parseFloat(await pergunta("Digite a nota: "));
        addNotasAlunos(nomeNota, nota);
       break;

        case '4':
             const nomeRemover = await pergunta("Digite o nome do aluno para remover: ");
        removerAluno(nomeRemover);
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