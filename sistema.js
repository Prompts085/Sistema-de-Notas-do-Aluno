const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta(q) {
  return new Promise(resolve => {
    readline.question(q, ans => resolve(ans));
  });
}

// É uma array de alunos que sempre vai começar vazio
const alunos = [];

// Função para adicionar aluno
async function addAluno() {
  let nome = await pergunta("Digite o nome do aluno: ");
  nome = nome.trim().toLowerCase();

  let existente = alunos.some(aluno => aluno.nome === nome);
  if (existente) {
    console.log("Já está registrado!");
    return;
  }

  alunos.push({ nome: nome, notas: [] });
  console.log("Acabou de ser listado!");
}

// Função Listar todos os alunos
function listagemDeAlunos() {
  if (alunos.length === 0) {
    console.log("Nenhum nome de aluno listado.");
    return;
  }

  alunos.forEach(aluno => {
    console.log(`- ${aluno.nome} (Notas: ${aluno.notas.length})`);
  });
}

// Remover aluno pelo nome (ignorando maiúsculas)
function removerAluno(nome) {
  nome = nome.trim().toLowerCase();
  const index = alunos.findIndex(aluno => aluno.nome === nome);
  //Esse if verifica se o aluno foi encontrado antes de remover!
  if (index !== -1) {
    alunos.splice(index, 1);
    console.log(`Aluno ${nome} removido!`);
  } else {
    console.log(`Aluno ${nome} não encontrado.`);
  }
}

// Adicionar nota ao aluno (ignorando maiúsculas)
function addNotasAlunos(nome, nota) {
  nome = nome.trim().toLowerCase();
  const aluno = alunos.find(aluno => aluno.nome === nome);
//Esse if aluno está verificando se o aluno foi encontrado!
  if (aluno) {
    aluno.notas.push(nota);
    console.log(`Nota ${nota} adicionada para ${nome}`);
  } else {
    console.log(`Aluno ${nome} não encontrado.`);
  }
}
// Função para adicionar várias notas ao aluno (ignorando maiúsculas)
function addVariasNotasAlunos(nome, notasStr) {
  nome = nome.trim().toLowerCase();
  const aluno = alunos.find(aluno => aluno.nome === nome);

  if (!aluno) {
    console.log(`Aluno ${nome} não encontrado.`);
    return;
  }

  // Separa as notas da string e converte para números
  const notas = notasStr.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

  if (notas.length === 0) {
    console.log("Nenhuma nota válida foi inserida.");
    return;
  }

  // Adiciona as notas ao aluno
  aluno.notas.push(...notas);
  console.log(`Notas [${notas.join(", ")}] adicionadas para ${nome}`);
}

// Função principal do menu
async function main() {
  let sair = false;

  while (!sair) {
    console.log("\n—— Gerenciador de Turma ——");
    console.log("1) Adicionar aluno");
    console.log("2) Listar alunos");
    console.log("3) Registrar notas");
    console.log("4) Remover aluno");
    console.log("5) Sair");
    
    const op = (await pergunta("Escolha uma opção: ")).trim();

    switch (op) {
      case '1':
        await addAluno();
        break;

      case '2':
        listagemDeAlunos();
        break;

     case '3':
      const nomeAluno = await pergunta("Digite o nome do aluno: ");
      const notasInput = await pergunta("Digite as notas separadas por vírgula: ");
      addVariasNotasAlunos(nomeAluno, notasInput);
      break;

      case '4':
        const nomeRemover = await pergunta("Digite o nome do aluno para remover: ");
        removerAluno(nomeRemover);
        break;

      case '5':
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
