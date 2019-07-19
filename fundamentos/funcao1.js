//funcao sen retorno
function imprimirSoma(a,b)//não usamos as palavras reservadas let,var,const
{
    console.log(a + b)
} 
imprimirSoma(2,3) //chamando e executando a função
// Eu posso também passar apenas um valor pra função, poreém irá retornas Not a Number
imprimirSoma(2)
imprimirSoma(10,2,3,5,4)//soma apenas os 2 primeiros números
imprimirSoma() // Nan

/*
função com retorno
*/
function soma(a,b=0) //definindo o b como 0
{
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))