const fabricantes = ['Mercesdes','BMW','VW']

const notas = [7.7,8.8,9,9,5.5,6.6,8]

function imprimir (nome,indice)
{
    console.log(`${indice + 1} ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a)
{
    console.log(a)
})

//sem callback
let notasMenores = []
for(let i in notas){
    if(notas[i] < 7){
        notasMenores.push(notas[i])
    }
}

console.log(notasMenores)

// usando callback
notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

