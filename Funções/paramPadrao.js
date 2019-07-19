function soma1(a,b,c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) // vai retornar 3 pois o 0 funciona como falso

function soma2(a,b,c)
{
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(3,2,1))
console.log(soma2(35,5,'Geraldo'))

function soma3 (a = 1, b = 1, c = 1)
{
    return a + b + c
}