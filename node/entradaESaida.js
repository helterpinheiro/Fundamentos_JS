const anonimo = process.argv.indexOf('-a') !== -1 // Se estiver presente dentro da lista de argumento o -a entao verdadeiro
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data',data => {
        const nome = data.toString().replace('\n','') //replace troca o \n por um espaço vazio no final

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}