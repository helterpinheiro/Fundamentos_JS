const aprovados = ['Marcos','Geraldo','Antonio','Julio','Eu']
aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAproados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAproados)