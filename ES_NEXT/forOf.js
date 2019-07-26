for (let letras of "Cod3r"){
    console.log(letras)
}

const assuntosEcma = ['MAP','SET','PROMISE']

for(let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}


const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado:  true}],
    ['Promise',{abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for( let valores of assuntosMap.values()){
    console.log(valores)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch,vl)
}