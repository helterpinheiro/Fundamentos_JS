const porta = 3003

const express = require('express')
const app = express()
const bancodeDados = require('./bancoDeDados.js')
const bodyParser = require('body-parser')
//vai chamar uma funcão middleware que vai fazer um parser no body da requisição
app.use(bodyParser.urlencoded({extended: true}))
/*
retorna todos os produtos
*/
app.get('/produtos',(req,res,next) => {
    res.send(bancodeDados.getProdutos())
})
/*
retorna um produto pelo id informado
*/
app.get('/produtos/:id',(req,res,next) => {
    res.send(bancodeDados.getProduto(req.params.id))
})
/*
passamos um produto com id, nome e preco
direto por parametro
*/
app.put('/produtos/:id',(req,res,next) => {
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

/*
passamos um produto por paramentro e o salvamos
o id é colocado automaticamente
*/
app.post('/produtos',(req,res,next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

//deleta um produto
app.delete('produtos/:id',(req,res,next) => {
    const produto = bancodeDados.excluirProduto(req.param.id)
    res.send(produto)
})

app.listen(porta,() => {
    console.log(`Sercidor executando na porta ${porta}`)
})

