//Desenvolva um algoritmo que leia um número menor que cinco e mostre os números pares entre o número lido e o número 20. 

let input = require('readline-sync');
let numero = input.questionInt("Digite um número menor que 5:");

if (numero < 5) {
  console.log(`Números pares entre ${numero} e 20:`);

  for (let i = numero; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("O número digitado tem que ser menor que 5!");
}
