// nao aceita repetica e nao e indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Crorinthians')
times.add('Vasco')

console.log(times.has('Vasco'))
console.log(times.has('vasco'))

const nomes = ['Raquel','Lucas','Julio','Marcos','Marcos']
const pessoas = new Set(nomes)
//pessoas.add(nomes)
console.log(pessoas)