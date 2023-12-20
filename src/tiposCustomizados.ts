//TIPOS CUSTOMIZADOS.TS

type aluno ={
nome:string;
cursos?:string;
idade:number
}

const alunos:aluno[]=[
{
nome:'juan',
cursos:'front-end',
idade:21
},{
nome:'ana',
idade:21
}]
alunos.push({
nome:'julia',
cursos:'arquitetura',
idade:22
})
 function exibeAluno(aluno:aluno){
console.log(aluno.nome)
}