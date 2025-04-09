// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor
// e soma  dos valores

function maiorValor(numeros){
 
    let maior = numeros[0]
    for(let i = 0; i < n;i++){
        if(numeros[i] > maior){
            maior = numeros[i]   
        }
    }
    console.log("O Maior valor da lista: "+maior)
}
function menorValor(numeros){
    
    let menor = numeros[0]
    for(let i =0; i < n; i++){
        if(numeros[i] < menor){
            menor = numeros[i] 
        }
    }
    console.log("O Menor Valor da lista: "+menor)
}
function somaValor(numeros){
    
    let soma = 0
    for(let i =0; i < n; i++){
        soma = soma + numeros[i]
    }
    console.log("A Soma de todos os valores da lista: "+soma)
}

let numeros = [2,4,6,7,3]
let n = numeros.length
resultadoMaior = maiorValor(numeros)
resultadoMenor = menorValor(numeros)
resultadoSoma = somaValor(numeros)