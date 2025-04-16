const alunosjson = '[{ "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"} ]'
    
const alunos = JSON.parse(alunosjson)

function exibir(alunos){

    const a = alunos.map(aluno =>{
        let n =  aluno.notas.length
        let soma = 0
        for(i = 0; i < n;i++){
            soma = soma + aluno.notas[i]
        }
        let media = soma/n
        
        if(media > 7){
            console.log("-------------------------\n")
            console.log("Aluno: "+aluno.nome)
            console.log("Média: "+media.toFixed(2))
            console.log("Curso: "+aluno.curso)
            
        }
    })
}

let resultado = exibir(alunos)

