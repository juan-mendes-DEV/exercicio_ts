"use strict";
//TIPOS BASICOS.TS
let estaChovendo = false;
estaChovendo = true;
let idade = 21;
let altura = 1.75;
const nacionalidade = 'btasileiro';
//!arrays em typescript 
const colegas = ['juan', 'pablo'];
console.log(colegas);
const tecnologias = ['html', 'css', 'javascript'];
//!array apenas para leitura
const notas = [7, 8, 9, 10];
//!TUPRA
const lista = ['juan', true, 10];
console.log(lista);
//const lista:[nome:string, estaEstudando:boolean, idade:number]=['juan',true,21];
//!UNIAO DE TIPOS 
// let idadeDaAna:number = 25;
let idadeDaAna = 25;
idadeDaAna = '25 anos';
//!ACEITA QUALQUER COISA any
const dadosDaApi = 10;
// dadosDaApi = 10;
// dadosDaApi = true;
// dadosDaApi = [1,2,3];
// dadosDaApi = 'string';
