 const funcs  = []

 for(var i=0;i<10;i++){
     funcs.push(function(){
         console.log(i)
     })
 }

 funcs[2]()
 funcs[8]()
 /* ao sair do laço o var pega o valor em que i saiu do laço*/ 

 const funcs1  = []

 for(let i=0;i<10;i++){
     funcs1.push(function(){
         console.log(i)
     })
 }

 funcs1[2]()
 funcs1[8]()

 /*o let mantem armazenado o valor, uam espécie de memória*/