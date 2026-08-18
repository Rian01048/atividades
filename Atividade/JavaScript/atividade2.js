class Produto {
    exibirDados(nome, preco, quantidade) {
        console.log(`Nome: ${nome}\nPreço: R$${preco}\nQuantidade: ${quantidade}`);
    }
}

const nome = ("Mouse");
const preco = parseFloat((24));
const quant = parseInt((19));

new Produto().exibirDados(nome, preco, quant);