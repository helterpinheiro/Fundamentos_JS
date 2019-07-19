const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./novaInstancia')()
const contadorD = require('./novaInstancia')()

contadorA.inc()
contadorA.inc()
console.log(contadorB)

contadorC.inc()
contadorC.inc()
console.log(contadorD)