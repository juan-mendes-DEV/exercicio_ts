
//!CASTING.JS

//*No typescript nao pode ter a mesma variavel em dois arquivos

namespace casting{
let idade:any=25;
(idade as number).toFixed();
(idade as string).length;

(idade as string[]).forEach(x=>{
console.log(x);
})
let nome:string=35 as unknown as string

}