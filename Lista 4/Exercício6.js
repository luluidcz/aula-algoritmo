var input = require('readline-sync');

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite um número: ");

if (num1 < num2) {
    console.log ("Número: ", num1);
    console.log ("Número: ", num2);
}
else {
    console.log ("Número: ", num2);
    console.log ("Número: ", num1);
}
