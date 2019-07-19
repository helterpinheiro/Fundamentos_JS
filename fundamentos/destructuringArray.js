const [a] = [10]
const [n1,,n3,,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// codigo de dificil leitura
const[,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

function rand({min = 0,max = 1000}){ //  aqui definimos o parametro padrão
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))