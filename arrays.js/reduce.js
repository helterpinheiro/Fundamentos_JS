const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 5.8, bolsista: false},
    {nome: 'Ana', nota: 9.9, bolsita: true},
    {nome: 'Marcos', nota: 7.8, bolsista: true}
]
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/*
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)
*/
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))
