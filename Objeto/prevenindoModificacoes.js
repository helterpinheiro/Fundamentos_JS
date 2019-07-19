//Object.preventExtensions: Não se pode adicionar novos objetos, porem posso apaga-los
const produto = Object.preventExtensions({
    nome: 'AlO',
    preco: 199,
    tag: 'promotion'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.tag = 'ALO'
console.log(produto)

//Object.seal = selar, ou seja, voce não consegue add ou excluir atributos, porem pode se modificar

const pessoa = Object.seal({
    nome: 'Geraldo',
    idade: 19
})
console.log('Selado:',Object.isSealed(pessoa))

//Object.freeze = sem modificacao, add ou excluir
const carro = Object.freeze({
    marca: 'VW',
    modelo: 'Gol'
})