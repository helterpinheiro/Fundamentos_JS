const sacola = [
    '{"Nome":"Camisa","Preço": 1.20}',
    '{"Nome":"Panela","Preço": 45.75}'
]

const paraObjeto = obj => JSON.parse(obj)
const apenasPreco = produto => produto.Preço

const resultado = sacola.map(paraObjeto).map(apenasPreco)
console.log(resultado)