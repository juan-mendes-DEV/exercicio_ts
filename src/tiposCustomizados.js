"use strict";
//TIPOS CUSTOMIZADOS.TS
const alunos = [
    {
        nome: 'juan',
        cursos: 'front-end',
        idade: 21
    }, {
        nome: 'ana',
        idade: 21
    }
];
alunos.push({
    nome: 'julia',
    cursos: 'arquitetura',
    idade: 22
});
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
