
//3️⃣ Soma dos Números Peça 5 números e mostre a soma total ao final.


let soma = 0; 

for(let contador = 0; contador < 5; contador++){
    let numero = input.questionInt("digite o" + (contador + 1 ) + "o numero:");
    soma = soma + numero;

}
console.log("a soma dos 5 numeros é", soma);

