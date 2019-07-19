// nota é uma função, ela não tem as () pois tem apenas um parâmetro
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// primeira parte do operador ternario: Operador relacional nota >= 7
// Segunda parte do operador ternario: >= 7
// Terceira parte do operador: ? 'Aprovado' : 'Reprovado'

console.log(resultado(5.1))