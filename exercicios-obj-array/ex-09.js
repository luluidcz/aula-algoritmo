// Objeto representando a conta
const conta = {
    agencia: "1234",
    numeroConta: "56789-0",
    senha: "senha123",
    saldo: 15000, // Saldo inicial para teste
    historicoOperacoes: []
};

/**
 * Valida o acesso à conta.
 * @param {string} agencia Agencia informada.
 * @param {string} numeroConta Número da conta informado.
 * @param {string} senha Senha informada.
 * @returns {boolean} True se o acesso for válido, false caso contrário.
 */
function validarAcesso(agencia, numeroConta, senha) {
    if (agencia === conta.agencia && numeroConta === conta.numeroConta && senha === conta.senha) {
        console.log("Acesso validado com sucesso.");
        return true;
    } else {
        console.log("Agência, conta ou senha inválidos.");
        return false;
    }
}

/**
 * Exibe o saldo atual da conta.
 */
function exibirSaldo() {
    console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
}

/**
 * Realiza um saque, se houver saldo suficiente, e calcula as cédulas.
 * @param {number} valor Valor a ser sacado.
 */
function realizarSaque(valor) {
    if (valor <= 0) {
        console.log("O valor do saque deve ser positivo.");
        return;
    }

    // Valida se o valor é múltiplo de 10 (únicas notas disponíveis)
    if (valor % 10 !== 0) {
        console.log("Valor indisponível. Somente múltiplos de R$10 (cédulas de 100, 50, 20, 10).");
        return;
    }

    if (valor > conta.saldo) {
        console.log("Saldo insuficiente.");
        return;
    }

    // Lógica para o menor número de cédulas
    let valorRestante = valor;
    const cedulas = { 100: 0, 50: 0, 20: 0, 10: 0 };

    cedulas[100] = Math.floor(valorRestante / 100);
    valorRestante %= 100;

    cedulas[50] = Math.floor(valorRestante / 50);
    valorRestante %= 50;

    cedulas[20] = Math.floor(valorRestante / 20);
    valorRestante %= 20;

    cedulas[10] = Math.floor(valorRestante / 10);
    // valorRestante %= 10; // Deve ser 0 aqui, pois validamos o múltiplo de 10

    // Atualiza o saldo e histórico
    conta.saldo -= valor;
    conta.historicoOperacoes.push({ tipo: 'Saque', valor: valor, data: new Date() });

    console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    console.log("Cédulas entregues:");
    if (cedulas[100] > 0) console.log(`- ${cedulas[100]} nota(s) de R$ 100`);
    if (cedulas[50] > 0) console.log(`- ${cedulas[50]} nota(s) de R$ 50`);
    if (cedulas[20] > 0) console.log(`- ${cedulas[20]} nota(s) de R$ 20`);
    if (cedulas[10] > 0) console.log(`- ${cedulas[10]} nota(s) de R$ 10`);

    exibirSaldo();
}


// --- Exemplos de Uso ---

// 1. Acesso inválido
validarAcesso("0001", "123456-7", "senhaerrada");

console.log("---");

// 2. Acesso válido, exibição de saldo e saque
if (validarAcesso("1234", "56789-0", "senha123")) {
    exibirSaldo();
    realizarSaque(150); // Exemplo de saque
    console.log("---");
    realizarSaque(470); // Exemplo de saque que usa múltiplas notas (4x100, 1x50, 1x20) - **Ops, 470 não é múltiplo de 10**. Corrigindo para 420.
    realizarSaque(420); // Exemplo de saque (4x100, 1x20)
    console.log("---");
    realizarSaque(1000); // Exemplo de saque maior que o saldo restante
}

