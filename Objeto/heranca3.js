const pai = {nome:'Geraldo',cabelo: 'Castanho'}
const filha = Object.create(pai)
filha.nome = 'Marcia'
console.log(filha)
console.log(filha.cabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia',writable: false,enumerable: true}
})

for(let key in filha2){
    filha2.hasOwnProperty(key)?
    console.log(key):console.log(`Por herança: ${key}`)
}
