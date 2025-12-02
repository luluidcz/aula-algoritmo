// Array de objetos representando jogadores com nome e pontos
const rankingJogadores = [
    { nome: "JogadorA", pontos: 1250 },
    { nome: "JogadorB", pontos: 800 },
    { nome: "JogadorC", pontos: 2500 },
    { nome: "JogadorD", pontos: 120 },
    { nome: "JogadorE", pontos: 1500 },
    { nome: "JogadorF", pontos: 2500 } 
];


function ordenarRanking(jogadores) {
    
    const copiaOrdenada = jogadores.slice().sort((a, b) => {
        
        return b.pontos - a.pontos;
    });

    return copiaOrdenada;
}



const rankingOrdenado = ordenarRanking(rankingJogadores);

console.log("Ranking Original (desordenado):");
console.log(rankingJogadores);

console.log("\nRanking Ordenado (Maior para Menor):");
console.log(rankingOrdenado);
