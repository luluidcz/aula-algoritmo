const input = require('readline-sync');

let num1 = input.questionInt("Digite um número: ");

if(num1 > 10) {
    resp1 = num1 + 5
    console.log("O resultado é: ", resp1)
}

else{ 
    resp1 = num1 + 20
    if (num1 > 25) {
        console.log("O resultado é: ", resp1)

    }
    
}
