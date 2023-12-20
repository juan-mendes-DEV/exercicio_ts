//FUNCOES.TS

function calculaArea(base:number,altura:number):number {
    return base * altura;
} 

// function somar(...numeros:number[]).any{
// 	   console.log(numeros.number)
// }

function teste():string | number{
if(10>5){
return 'dez maior que cinco'
}else{
return 5
}
}
 const resultadoDeTest = teste();
console.log(resultadoDeTest)