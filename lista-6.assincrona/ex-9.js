//Crie um algoritmo que leia um número maior que 20 e mostre na tela os números entre o número digitado e o número 1 em ordem decrescente.

let input = require('readline-sync');
let numero = input.questionInt("Digite um número MAIOR que 20: ");

if (numero > 20) {
  console.log(`Números entre ${numero} e 1 (em ordem decrescente): `);

  for (let i = numero; i >= 1; i--) {
    console.log(i);
  }
} else {
  console.log("O número digitado tem que ser MAIOR que 20!");
}
