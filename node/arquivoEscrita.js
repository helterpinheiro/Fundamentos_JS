const fs = require('fs')

const produto = {
    nome: 'Notebook',
    marca: 'DELL',
    preco: 2699.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),err =>{
    console.log(err || 'Arquivo salvo!')
})