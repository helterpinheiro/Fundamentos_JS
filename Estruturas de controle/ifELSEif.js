Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota)
{
    if(nota.entre(9,10)){
        console.log("Quadro de honra: " + nota)
    }else if(nota.entre(7,8.9)){
        console.log("Aprovado: " + nota)
    }else if(nota.entre(5,6.9)){
        console.log("Recuperação: " + nota)
    }else{
        console.log("REPROVADO: " + nota)
    }

}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(1)