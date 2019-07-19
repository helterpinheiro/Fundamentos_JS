const nota = [4.4,5.1,6.3]
// for in
for(i in nota){
    console.log(i,nota[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 15
}

for(atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}