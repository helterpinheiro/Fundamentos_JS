//par nome/valor
const saudacao = 'Olá!' // contexto lexico 1

function exec(){
    const saudacao = "Alo!" // contexto lexico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Travessa Joao Alves Carneiro',
        numero: 93
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)