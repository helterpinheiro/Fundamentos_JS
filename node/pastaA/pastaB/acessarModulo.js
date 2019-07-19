const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req,resp) =>{
    resp.write('Bom dia!')
    rep.end()
}).listen(8080)