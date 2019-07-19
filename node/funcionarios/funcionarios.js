const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais  === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.Salario < funcAtual.Salario ? func : funcAtual
    /*
    Se o salario do funcionaro for menor, então retorna funcionario, senão retorna funcionario atual
    */

}
axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
    
})

//mulher chinesa com o menor salario?






