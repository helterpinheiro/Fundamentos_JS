const gerarNumeroAleatorio = function(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
/*let opc = 0
 while( opc != -1){
     opc = gerarNumeroAleatorio(-1,10)
     console.log(`Opçaõ escolhida foi: ${opc}`)
 }
*/
do {
 opc = gerarNumeroAleatorio(-1,10)
 console.log(`Opção escolhida ${opc}`)
 } while(opc != -1)
 console.log("Fim!")