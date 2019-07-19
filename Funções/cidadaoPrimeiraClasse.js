// Eu posso criar uma função de forma literal
function literal() {}

// Eu posso criar uma função e armazenala em uma variável
const variavel = function(){}

// Eu posso armazenar uma função dentro de um Array

const array = [function (a,b){return a + b}, literal,variavel]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function(){ console.log('Executando...')})

// Uma função ela pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(5)
const cincomais = soma(2,3)
cincomais(3)