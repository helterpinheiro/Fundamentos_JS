let compararComThis = function (param)
{
    console.log(this ===  param)
}

compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(obj)

let comparaComArrow = param => console.log(this === param)
comparaComArrow(global)
comparaComArrow(obj)
