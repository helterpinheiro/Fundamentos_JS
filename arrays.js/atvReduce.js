aluno = [
    {nome: 'Jaoa', bolsista: false},
    {nome: 'Marcos', bolsista: true},
    {nome: 'Janaina', bolsista: true}
]

const todosBolsistas = (anterior,atual) => anterior && atual
console.log(aluno.map(a =>a.bolsista).reduce(todosBolsistas))
//console.log(aluno)    