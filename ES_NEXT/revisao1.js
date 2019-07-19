// let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
//console.log(b) //o b vai sair como não definido

// Template String
const produto = 'iPad'
console.log(`Tablet: ${produto}`)

// Destructuring 

const [l, e, ...tras] = "Coder"
// a letra 'c' vai ser atribuida a variável 'l'
// a letra 'o' vai ser atribuida a variável 'e'
// e o restante vai ser atribuido a variável tras só que em um array
console.log(l,e,tras)

const [x,y] = [1,2,3] //aqui o 1 vai ser atribuido a x e o 2 a y
console.log(x,y)

const [c, ,d] = [1,2,3] //o 2 é ignorado e o 1 é atribuido a c e o 3 a d
console.log(c,d)

const {idade,nome} = {nome: 'Ana', idade: 9}
console.log(idade,nome)
