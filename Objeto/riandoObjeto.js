// usando a notação literal
const obj1 = {}

// Object em JS
const obj2 = new Object

// Funções construtoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Arroz',12,0.5)
console.log(p1.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30) * (30-faltas)
        }
    }
}

const fun1 = criarFuncionario('Geraldo',5000,2)
console.log(fun1.getSalario())

//Object.Create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON
const fromJSON = JSON.parse('{"info":"Sou JSOn"}')
console.log(fromJSON.info)
