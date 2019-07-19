const num = [1,2,3,4,5,6,73,8,9,123]

for (x in num){

    if(x == 7){ // x é o indice que percorre o array
        break
    }
    console.log(`${x} = ${num[x]}`)
}

console.log('ALO')

for (y in num){
    if(y == 5) { 
        continue // Vai interromper a execucao do indice 5, veja que o numero 6 não aparece, ele pula pro próximo item do array
    }
    console.log(`${y} = ${num[y]}`)
}
console.log('ALO 2')

externo:
    for (a in num){
        for(b in num){
            if (a == 2 && b == 3)break externo
            console.log(`Par = ${num[a]} - ${num[b]}`) 
            
        }
    }