// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ok',
        numero: 10
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

// extrai o nome e a idade e coloquei na variável 'n' e 'i'
const {nome:n,idade:i} = pessoa
console.log(n,i)


const {endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro, numero, cep)