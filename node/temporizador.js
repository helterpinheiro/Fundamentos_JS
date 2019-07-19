const schedule = require('node-schedule')


//(*/5 * 00 * * 5)
//DE 5 EM 56 SEGUNDOS A PARTIR DAS 0 HORAS DE SEXTA A TAREFA DEVERÁ SER EXECUTADA

const tarefa1 = schedule.scheduleJob('*/5 * 00 * * 5', function (){
    console.log('Executando Tarefa 1!',new Date().getSeconds())
})

setTimeout(function(){ //temporizador do JS
    tarefa1.cancel() //cancelando tarefa oriunda do schedule
    console.log('Cancelando tarefa 1!')
}, 20000) //20 segundos 

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // rande de segunda a sexta
regra.hour = 00 //meia noite
regra.second = 30 //a regra vai ser executada sempre no segundo 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})