const Produto = require('../Models/produto.model');

const produtos = [
    new Produto({ id: 1, nome: 'Notebook', preco: 3500 }),
    new Produto({ id: 2, nome: 'Mouse', preco: 120 })
];

function listar() {
    return produtos;
}

function buscarPorId(id) {
    return produtos.find(produto => produto.id === Number(id));
}

function criar(dados) {
    if (!dados.nome || dados.preco == null) {
        throw new Error('nome e preco são obrigatórios');
    }

    const preco = Number(dados.preco);
    if (!Number.isFinite(preco) || preco < 0) {
        throw new Error('preco deve ser um número maior ou igual a zero');
    }

    const produto = new Produto({
        id: produtos.length + 1,
        nome: dados.nome,
        preco
    });

    produtos.push(produto);
    return produto;
}

module.exports = { listar, buscarPorId, criar };
