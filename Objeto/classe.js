class lancamento{
    constructor(nome  = 'Generic', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){ //"..." serve para concatenar parametos em um array
        lancamentos.forEach(l=>this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento ('Salario',45000)
const contaDeLuz = new lancamento ('Agua',-220)
const contas = new cicloFinanceiro(6,2019)

contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())