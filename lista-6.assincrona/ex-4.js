let input = require('readline-sync');
//4️⃣ Contador Regressivo Peça um número e exiba a contagem regressiva até 0.

let numero = input.questionInt("digite um numero:  " );

for(let cont = numero; cont >= 0; cont--) {
    console.log(cont)
}
