function aula(nome, videoID){
    this.nome = nome
    this.video = videoID
}

const aula1 = new aula('herança',130)
const aula2 = new aula('ATÉ BREVE',133)

console.log(aula1,aula2)

//simulacoes do new

function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype //o obj vai apontar para prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(aula,'Alo',125)
console.log(aula3)