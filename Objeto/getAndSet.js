const sequencia = {
    _valor: 1,
    get valor() {return this._valor++},
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia._valor = 151
console.log(sequencia.valor,sequencia.valor)

const pessoa ={
   
   nome: 'Rebeca',
   idade: '21'
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log('Foreach começa aqui')

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.values(pessoa).forEach(element =>{
    console.log(`${element[0]}: ${element[1]}`)
})


Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave[0]}: ${valor[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumarable: true,
    writable: false,
    value: '01,05,2019'
})

pessoa.dataNascimento = '01,02,2019'
console.log(pessoa.dataNascimento)