const nums = [1,2,3,4,5]
// map é um for com um proposito 
let result = nums.map(function(e){
    return e * 2
})
// a funcao map retorna aqui o dobro de cada elemento passado do array nums

console.log(result)

const soma10 = e => e+10 //funcao arrow que soma 10 em um elemento "e" passado *return implicito*
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`//toFixed para duas casas decimais

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
