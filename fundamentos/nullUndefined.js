let valor // não inicializada
console.log(valor)
// a variavel valor vai dar undefined pois não foi inicializada
valor1  = null
/* null significa que a variável não aponta para nenhum endereço*/
console.log(valor1)
// caso você tente acessar uma variavel qe está nula vai dar erro
// console.log(valor.toString())

const produto = {}
console.log(produto.preco) // vai retornar undefined pois o preco não foi definido
