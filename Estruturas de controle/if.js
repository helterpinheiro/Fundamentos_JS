function notaBoa(nota){
    if (nota >= 7){
        console.log('Aprovado:' + nota)
    }else{
        console.log('Reprovado')
    }
}

function seForVerdade(valor){
    if(valor){ // aqui o if vai converter em boolean
        console.log('É verdade: ' + valor)
    }
}

seForVerdade(null)
seForVerdade(20)

const aux = function(nota)
{
    if(nota>=7){
        console.log('Aprovado: ' + nota)
    }else{
        console.log('Reprovado: ' + nota)
    }
}
aux(10)

