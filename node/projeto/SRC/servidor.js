const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados.js')
const bodyParser = require('body-parser')

//vai chamar uma função middleware que vai fazer um parser no body da requisicao
app.use(bodyParser.urlencoded({extended: true})) 

app.get('/produtos',(req,res,next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.put('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDodos.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.name
    })
    res.send(produto) //JSON
})

app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //vai gerar um JSON
})

app.delete('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.excluirProduto(req.param.id)
    res.send(produto) //vai gerar um JSON
})

app.listen(porta,() => {
    console.log(`Servidor executando na porta ${porta}`)
})
