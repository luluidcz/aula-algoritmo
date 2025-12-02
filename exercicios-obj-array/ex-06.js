// Array de objetos representando livros (título, autor e ano)
const biblioteca = [
    { titulo: "A Arte da Guerra", autor: "Sun Tzu", ano: 500 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997 },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", ano: 2012 },
    { titulo: "O Marciano", autor: "Andy Weir", ano: 2014 },
    { titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", ano: 2014 },
    { titulo: "Mindset", autor: "Carol S. Dweck", ano: 2006 },
    { titulo: "Pequeno Manual Antirracista", autor: "Djamila Ribeiro", ano: 2019 }
];


function filtrarLivrosRecentes(livros, anoMinimo = 2010) {
   
    return livros.filter(livro => livro.ano > anoMinimo);
}



const livrosApos2010 = filtrarLivrosRecentes(biblioteca);

console.log("Lista completa da biblioteca:");
console.log(biblioteca);

console.log("\nLivros publicados depois de 2010:");
console.log(livrosApos2010);

