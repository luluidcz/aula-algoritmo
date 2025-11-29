

//5️⃣ Tabuada Mostre a tabuada de um número informado pelo usuário (de 1 a 10).

let numero = input.questionInt(" digite um numero para tabuada: " );
console.log("----- tabuada do", numero, "-----");
for(let i = 1; i<=10; i++){
    console.log(i + " x " + numero + " = " + i * numero);

    console.log("------------------------------------");
}

