// IIFE -> expressão de função imediatamente invocada
console.log('alo')
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})