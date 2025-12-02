// Array de objetos contendo nome e idade
const listaDePessoas = [
    { nome: "Beatriz", idade: 22 },
    { nome: "Fernanda", idade: 25 },
    { nome: "Guilherme", idade: 18 },
    { nome: "Helena", idade: 31 }
];


function filtrarMaioresDeIdade(pessoas) {
   
    return pessoas.filter(pessoa => pessoa.idade > 18);
}


const pessoasMaioresDeIdade = filtrarMaioresDeIdade(listaDePessoas);

console.log("Lista completa de pessoas:");
console.log(listaDePessoas);

console.log("\nPessoas com mais de 18 anos (maiores de idade):");
console.log(pessoasMaioresDeIdade);

    
