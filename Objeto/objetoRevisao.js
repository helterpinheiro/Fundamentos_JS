// colecao dinamica de pares de chave e valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua do ze',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Geraldo',
        idade: 58
    }],
    calcularValorSeguro: function(){
        //...
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 123

console.log(carro)