//Arrow function

const soma = (a,b) => console.log(a+b)
soma(5,3)

// Arrow function (this)

const lexico = () => console.log(this === exports)
lexico()

//Parametro Default

function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

//Operador REST

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
        
}

console.log(total(2,3,4,5))

