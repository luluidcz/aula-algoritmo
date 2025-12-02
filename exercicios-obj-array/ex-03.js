
function calcularMedia(notas) {
    if (notas.length === 0) {
        return 0; 
    }

    
    const somaDasNotas = notas.reduce((acumulador, notaAtual) => {
        return acumulador + notaAtual;
    }, 0);

   
    const media = somaDasNotas / notas.length;

    return media;
}



const notasAluno1 = [7.5, 8.0, 6.5, 9.0];
const media1 = calcularMedia(notasAluno1);
console.log(`Notas do Aluno 1: ${notasAluno1}`);
console.log(`Média do Aluno 1: ${media1.toFixed(2)}`); 

console.log("---");

const notasAluno2 = [10, 10, 10];
const media2 = calcularMedia(notasAluno2);
console.log(`Notas do Aluno 2: ${notasAluno2}`);
console.log(`Média do Aluno 2: ${media2.toFixed(2)}`);
