const escola = [{
    nome: 'Turma M1',
    alunos:[{
        Nome: 'Gustavo',
        Nota: 1
    },{
        Nome: 'Rebeca',
        Nota: 8.1
    },
    ]
},{
    nome: 'Turma M2',
    alunos:[{
        Nome: 'Heleno',
        Nota: 10
    },{
        Nome:  'Renato',
        Nota: 9.8
    }]

}]

const getNotasDoAluno = a => a.Nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
