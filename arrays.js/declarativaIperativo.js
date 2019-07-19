const alunos = [
    {Nome: 'Maria', Nota: 9.8},
    {Nome: 'João', Nota: 7.8},
    {Nome: 'Mario', Nota: 5.2}
]

// Imperativo
 let total1 = 0
 let contador = 0
 for(var i=0;i<alunos.length;i++){
     total1 += alunos[i].Nota
     contador = contador + 1
 }
 const media = total1/contador
 console.log(media)

 //Declarativa
 const getNota = aluno => aluno.Nota
 const soma = (total,atual) => total + atual
 const total2 = alunos.map(getNota).reduce(soma)
 console.log(total2/alunos.length)