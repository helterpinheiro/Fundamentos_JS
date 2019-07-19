const produtos = [
    {nome: 'Notebook', preco: 2488, fragil: true},
    {nome: 'Ipad', preco: 4024, fragil: false},
    {nome: 'Copo de vidro',preco: 1.99, fragil: true},
    {nome: 'Copo de plastco', preco: 0.50, fragil: false}

]

console.log(produtos.filter(function(p){
    if (p.preco > 1000 && p.fragil === true){
        return true
    }
}))