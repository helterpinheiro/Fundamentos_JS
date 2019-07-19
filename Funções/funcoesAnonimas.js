const soma = function (x,y)
{
    return x + y
}

const imprimirResultado = function (a,b,operacao = soma)
{
    console.log(operacao(a,b))
}

imprimirResultado(15,16)

imprimirResultado(15,3,function (x,y){
    return x - y
})

imprimirResultado(15,12,(x,y) => x * y)
