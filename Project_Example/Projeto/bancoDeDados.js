const produtos = {}

const sequence ={
    _id: 1,
    get id(){return this._id++}
}

function salvarProduto(produto){
    if(!produto){
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    if(!produto){
        return {}
    }else{
        return produtos[id]
    }
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {getProduto,getProdutos,excluirProduto,salvarProduto}