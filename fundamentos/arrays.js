const valores = [7.7, 8.8, 9.9, 6.6]
//os arrays são separados por vírgula
console.log(valores[0],valores[2])
valores[4] = 10
console.log(valores[4])
console.log(valores.length) //length retorna o tamanho do array
valores.push("arroz") //a função push coloca um elem. na ultima posição
console.log(valores)
valores.pop() //a funcao pop remove o ultimo elemento
console.log(valores)
delete valores[0] // removeu o elem. de id 0
console.log(valores)