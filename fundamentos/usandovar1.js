{{{{var sera = "será?"}}}}
console.log(sera)
/* o VAR é visível para todo o código mesmo estando fora ou dentro de um escopo*/

function teste(){
    var local = 123
    console.log(local)
}
teste()

console.log(local)
/*
quando você define uma variável dentro de uma função
a variável ficará visível apenas dentro da função
*/
/*** 
 Quando você cria uma variável fora da funcão ele é uma variável GLOBAL
*/
