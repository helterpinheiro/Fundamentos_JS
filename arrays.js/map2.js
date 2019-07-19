const carrinho = [
    '{"Nome": "Borracha","Preco": 3.45}',
    '{"Nome": "Caderno","Preco": 13.90}',
    '{"Nome": "Kit Lapis","Preco": 25.25}',
    '{"Nome": "Caneta", "Preco": 7.50}'

]
//retornar um array apenas com os precos
 const paraObjeto = json => JSON.parse(json)
 const apenasPreco = produto => produto.Preco 

 const resultado = carrinho.map(paraObjeto).map(apenasPreco)
 console.log(resultado)