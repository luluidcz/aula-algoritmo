// Array de nomes
const nomesCadastrados = [
    "Alice",
    "Bruno",
    "Carla",
    "Daniel",
    "Eduarda",
    "Felipe",
    "Gabriela"
];


function buscarNome(nomeBuscado) {
    
    const nomeBuscadoLowerCase = nomeBuscado.toLowerCase();

    
    return nomesCadastrados.some(nome => nome.toLowerCase() === nomeBuscadoLowerCase);
}




const nome1 = "Carla";
const nome2 = "Gustavo";
const nome3 = "alice"; 

console.log(`O nome "${nome1}" existe? ${buscarNome(nome1) ? 'Sim' : 'Não'}`);
console.log(`O nome "${nome2}" existe? ${buscarNome(nome2) ? 'Sim' : 'Não'}`);
console.log(`O nome "${nome3}" existe? ${buscarNome(nome3) ? 'Sim' : 'Não'} (Busca flexível)`);
