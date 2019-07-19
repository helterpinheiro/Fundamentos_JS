// exportar um objeto, vc cria um objeto sem retorno e o exporta com o exports
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

module.exports = {
    public : true
}
