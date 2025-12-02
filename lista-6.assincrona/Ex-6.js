// Crie um algoritmo que leia um número menor que 10 e mostre o seu valor. 

let input = require('readline-sync');
let numero = input.questionInt("Digite um número menor que 10: ");


if (numero < 10) {
  for (let i = 1; i <= numero; i++) {
    console.log("Valor atual:", numero);
  }
} else {
  console.log("O número digitado deve ser menor que 10!");
}
