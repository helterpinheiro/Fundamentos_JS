const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = f => f.pais === 'Russia'
const genero = f => f.genero === 'M'
const salario = (func,funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
        .filter(pais)
        .filter(genero)
        .reduce(salario)
    console.log(func)
   
})
