
function gerarFibonacci(N) {
    if (N <= 0) {
        return [];
    }
    if (N === 1) {
        return [1];
    }

    
    const sequencia = [1, 1];

   
    for (let i = 2; i < N; i++) {
       
        const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }

   
    return sequencia.slice(0, N);
}

