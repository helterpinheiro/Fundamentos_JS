const carros= [{
    marca: 'VW',
    modelos: [{
        modelo1:'GOL',
        modelo2: 'GOLF'
    }]
},{
    marca: 'GM',
    modelos:[{
        modelo1: 'CORSA',
        modelo2: 'CHEVET'
    }]
}]

const getModelo = a => a.modelo1
const getModeloMarca = modelo => modelo.modelos.map(getModelo)

const getTudo = carros.map(getModeloMarca)

console.log(getTudo)