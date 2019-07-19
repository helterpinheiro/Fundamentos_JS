/* 
   hosting é uma declaração que puxa a variável para o topo
   Uma espécie de içamento
*/
console.log('a = ',a)
var a = 2
console.log('a = ',a)
/* ele detecta a variável mesmo nem tendo a declarado primeiramentre*/

console.log('b = ',b)
let b = 0
console.log('b = ',b)
/* ocorre erro com o let, o let não faz o hoisting*/

