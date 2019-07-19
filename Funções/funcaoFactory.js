// Factory é uma função que sempre retorna um objeto
function criarPessoa()
{
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())