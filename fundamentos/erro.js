function tratarErroLancar(erro){
    //throw new Error ('Alo') // aqui lancamos uma mensagem para caracterizar o erro
   // throw 10 // lancando um numero para caracterizar o erro
      throw {
          nome: erro.name
          msg: erro.mensage
          date: new Date
      }

}
function imprimirNomeGritando(obj){
    try{ // bloco de código que dentro dele tem um codigo que você julga que pode haver um erro
        console.log(obj.name.toUpperCase()+'!!!') 
    } catch(e){ // O erro cai dentro do erro, e nele você pode tratar um possível erro
        tratarErroLancar(e)
    } finally { // mesmo havendo erro ou não o finally vai ser lido
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)