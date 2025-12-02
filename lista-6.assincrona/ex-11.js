
function calcularFatorial(numero) {
    
    if (numero < 0 || !Number.isInteger(numero)) {
        return "Erro: O fatorial é definido apenas para números inteiros não negativos.";
    }

   
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;

 
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
    }

    return resultado;
}



const numeroDoUsuario1 = 5;
const fatorial1 = calcularFatorial(numeroDoUsuario1);
console.log(`O fatorial de ${numeroDoUsuario1}! é: ${fatorial1}`);

const numeroDoUsuario2 = 10;
const fatorial2 = calcularFatorial(numeroDoUsuario2);
console.log(`O fatorial de ${numeroDoUsuario2}! é: ${fatorial2}`);

const numeroInvalido = -2;
const fatorialInvalido = calcularFatorial(numeroInvalido);
console.log(`Tentativa com número inválido (${numeroInvalido}): ${fatorialInvalido}`);
