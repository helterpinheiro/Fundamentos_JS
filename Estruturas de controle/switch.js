const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        // o case vai entrar na linha de codigo console mesmo se o valor for 10
        case 10:
        case 9:
            console.log('Quadro de honra!!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
        default:
            console.log('Invalido')
        
    }
}

imprimirResultado(9)
imprimirResultado(5)
imprimirResultado(3)