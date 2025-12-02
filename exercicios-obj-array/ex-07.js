// Array de objetos representando os itens no carrinho de compras
const carrinhoDeCompras = [
    { nome: "Camiseta Regata", quantidade: 2, preco: 35.50 },
    { nome: "Calça Jeans Skinny", quantidade: 1, preco: 150.00 },
    { nome: "Meia Esportiva", quantidade: 3, preco: 12.00 },
    { nome: "Tênis Casual", quantidade: 1, preco: 220.90 }
];


function calcularTotalCarrinho(itens) {
    
    const valorTotal = itens.reduce((acumulador, itemAtual) => {
        
        const subtotalItem = itemAtual.preco * itemAtual.quantidade;

      
        return acumulador + subtotalItem;
    }, 0); 

    return valorTotal;
}


const total = calcularTotalCarrinho(carrinhoDeCompras);

console.log("Itens no carrinho:");
console.log(carrinhoDeCompras);

console.log("\nValor Total do Carrinho:");

console.log(`R$ ${total.toFixed(2)}`);



 
