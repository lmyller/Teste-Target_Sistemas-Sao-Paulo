const dados = require('./dados.json');

const dadosSort = organizarDados(dados);

console.log(`O menor valor de faturamento em um mês é de R$ ${dadosSort[0].valor.toFixed(2)}.\n`);
console.log(`O maior valor de faturamento em um mês é de R$ ${dadosSort[dados.length - 1].valor.toFixed(2)}.\n`);
console.log(`${numeroDiasFaturamentoSuperiorMedia(dados)} dias o valor de faturamento diário foi superior à média mensal.`);

function organizarDados(dados){
    const dadosSort = dados.sort((a, b) => { return a.valor - b.valor});

    return dadosSort;
}

function numeroDiasFaturamentoSuperiorMedia(dados){
    let diasFaturamentoSuperiorAMedia = 0;
    const mediaMensal = obterMediaMensal(dados);
    
    for (const dadosJson of dados) {
        if(dadosJson.valor > mediaMensal)
            diasFaturamentoSuperiorAMedia++;
    }

    return diasFaturamentoSuperiorAMedia;
}

function obterMediaMensal(dados){
    let somaMensal = 0;

    for (const dadosJson of dados) 
        somaMensal += dadosJson.valor;

    return somaMensal / dados.length;
}