const tecnologias = new Map()
tecnologias.set('React' , {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('React'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((ch, vl) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //has ==  metodo que indica se tal elemento esta no map
