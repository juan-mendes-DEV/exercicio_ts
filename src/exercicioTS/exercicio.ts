
function conta(numeroUm:number,numeroDois:number):number{
    return numeroUm * numeroDois
}
const multiplicacao = conta(10,10)
console.log(multiplicacao)

function recebeNome(nome:string){
    return `ola ${nome} seja bem vindo.`
}
console.log(recebeNome("juan"))