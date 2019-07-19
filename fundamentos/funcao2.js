const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a,b) => { // a setinha substitui o nome function
    return a + b
}
console.log(soma(2,5))

//retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir('arroz')
