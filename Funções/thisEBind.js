const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // o this acessa o atributo de um obj
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoa()
{
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) // a cada 1 segundo a função anonima vai ser disparada
}

new Pessoa

function Coisa()
{
    this.contador = 0
    const self = this

    setInterval(function(){
        self.contador++
        console.log(self.contador)
    },1000)
}

new Coisa
