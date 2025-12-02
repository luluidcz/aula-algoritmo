// Array contendo objetos de produtos (nome e preço)
const listaDeProdutos = [
    { nome: "Caderno Espiral", preco: 22.50 },
    { nome: "Mochila Escolar", preco: 120.00 },
    { nome: "Caneta Azul", preco: 3.80 },
    { nome: "Notebook Gamer", preco: 7500.00 },
    { nome: "Mouse sem fio", preco: 45.90 },
    { nome: "Monitor Ultrawide", preco: 2100.00 },
    { nome: "Lápis de Cor (12 und)", preco: 35.00 }
];


function filtrarProdutosCaros(produtos, valorMinimo = 50) {
  
    return produtos.filter(produto => produto.preco > valorMinimo);
}


const produtosAcimaDeCinquenta = filtrarProdutosCaros(listaDeProdutos);

console.log("Lista completa de produtos:");
console.log(listaDeProdutos);

console.log("\nProdutos com preço acima de R$ 50,00:");
console.log(produtosAcimaDeCinquenta);

 
