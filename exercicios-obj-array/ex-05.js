
function contarOcorrencias(array) {
    const contador = {};

 
    array.forEach(elemento => {
        
        if (contador[elemento]) {

            contador[elemento]++;
        } else {
            
            contador[elemento] = 1;
        }
    });

    return contador;
}



const frutas = ["banana", "maçã", "laranja", "banana", "maçã", "banana", "uva", "maçã", "laranja"];
const resultadoFrutas = contarOcorrencias(frutas);
console.log("Ocorrências de Frutas:");
console.log(resultadoFrutas);

console.log("---");

const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const resultadoNumeros = contarOcorrencias(numeros);
console.log("Ocorrências de Números:");
console.log(resultadoNumeros);
