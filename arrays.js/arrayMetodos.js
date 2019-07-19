const pilotos = ['Vettel', 'Geraldo', 'Raikonen','Massa','Bottas'] //const você não consegue atribuir mais nenhum elemento
pilotos.pop()
console.log(pilotos)

pilotos.push('Ronaldo')
console.log(pilotos)
pilotos.sort()

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Marcos Andre')// add na primeira posicao do array
console.log(pilotos)

pilotos.splice(2,0,'Grojean','Geraldo') // adicionamos dois elementos e não excluimos nenhum (2,2) a partir do indice dois eu exluo dois elementos
console.log(pilotos) 

pilotos.splice(2,2) //excluimos dois elementos a partir da segunda posicao
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // slice retorna um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(0,1) // retorna um array do indice 0 até índice 1
console.log(algunsPilotos2)