/*
*****
criando objetos literais em JS
Um objeto em JS é uma coleção de chaves e valores
Um objeto pode ter um objeto dentro dele
Lembra muito structs em C e C++
*****
*/
const prod1 = {} // um par de chavez caracteriza um objeto
prod1.nome = "Samsung J4"
prod1.preco = 350.00
prod1["Desconto"] = 10 // outro jeito de colocar valores em objetos
/*
Evitar atributos com espaço
*/
console.log(prod1)

const prod2 = {
    nome: "Camisa polo", // Não esqueça das virgulas
    preco: 78.30,
    obj: { //exemplo de objeto dentro de objeto
        alo: "Exemplo"
    }
}
console.log(prod2)
