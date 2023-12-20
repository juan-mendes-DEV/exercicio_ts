//TIPOS BASICOS.TS

let estaChovendo:boolean = false;
estaChovendo = true;

let idade:number = 21;

let altura:number =1.75;

const nacionalidade:string = 'btasileiro'

//!arrays em typescript 

const colegas:string []=['juan','pablo'];
console.log(colegas)
const tecnologias:Array<string> = ['html','css','javascript'];

//!array apenas para leitura

const notas:ReadonlyArray<number>=[7,8,9,10];

//!TUPRA
const lista:[string,boolean,number]=['juan',true,10];
console.log(lista)
//const lista:[nome:string, estaEstudando:boolean, idade:number]=['juan',true,21];

//!UNIAO DE TIPOS 

// let idadeDaAna:number = 25;
let idadeDaAna:number|string=25;
idadeDaAna ='25 anos';

//!ACEITA QUALQUER COISA any

const dadosDaApi:any=10
// dadosDaApi = 10;
// dadosDaApi = true;
// dadosDaApi = [1,2,3];
// dadosDaApi = 'string';

