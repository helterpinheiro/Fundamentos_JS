const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna a letra que está no índice passado
console.log(escola.charCodeAt(3)) // retorna o valor da tabela Uniocode do índice passado
console.log(escola.indexOf('3')) // retorna o índice da letra que foi passada
console.log(escola.substring(1)) // inicia do índice passado (no caso o um) até o final da string
console.log(escola.substring(0,3)) // inicia do índice 0 até o 3 na String
console.log('Escola'.concat(escola).concat("!")) // concatenou escola, a variavel escola e mais "!"
console.log(escola.replace(3,'e')) // troca a letra do índice informado por um char informado
console.log(escola.replace(/\d/,'e')) // substitui todos os digitos pelo char informado
console.log('escola' + escola + "!") // outra maneira de concatenar Strings

const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`
console.log(template)

//expressoes

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("Cuidado")}!`)

