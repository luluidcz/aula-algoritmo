
//2️⃣ Pares e Ímpares Peça um número final e exiba todos os números pares e ímpares até ele.
let numeroFinal= input.questionInt("digite um final");

for (let i = 0; i <= numeroFinal; i++ ){
    if(i%2===0){
        console.log(i + "é par");
    } else{
        console.log(i + "é impar");
    }
}

