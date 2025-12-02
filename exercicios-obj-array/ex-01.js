// Objeto que representa um aluno
const aluno = {
    nome: "Mariana Silva",
    idade: 21,
    curso: "Engenharia de Software"
};


function apresentarAluno(dadosAluno) {
    
    return `Olá, meu nome é ${dadosAluno.nome}, tenho ${dadosAluno.idade} anos e estudo ${dadosAluno.curso}.`;
}


const fraseDeApresentacao = apresentarAluno(aluno);
console.log(fraseDeApresentacao);
