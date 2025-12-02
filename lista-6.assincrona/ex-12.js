
function verificarPrimo(numero) {
   
    if (numero <= 1) {
        return false;
    }

    
    if (numero === 2) {
        return true;
    }

    
    if (numero % 2 === 0) {
        return false;
    }

  
    const limite = Math.sqrt(numero);
    for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
            return false; 
        }
    }

    
    return true;
}


const num1 = 7; 
const num2 = 12; 
const num3 = 2; 
const num4 = 29; 
const num5 = 1; 

console.log(`${num1} é primo? ${verificarPrimo(num1) ? 'Sim' : 'Não'}`);
console.log(`${num2} é primo? ${verificarPrimo(num2) ? 'Sim' : 'Não'}`);
console.log(`${num3} é primo? ${verificarPrimo(num3) ? 'Sim' : 'Não'}`);
console.log(`${num4} é primo? ${verificarPrimo(num4) ? 'Sim' : 'Não'}`);
console.log(`${num5} é primo? ${verificarPrimo(num5) ? 'Sim' : 'Não'}`);
