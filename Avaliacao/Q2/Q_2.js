// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de
//números pares e a quantidade de números ímpares. Utilize obrigatoriamente a
//função prompt() para coletar os números.

function calcule(numeros){
    for(let i = 0; i < 10; i++){
        let numero = parseInt(prompt("Digite um valor de número inteiro: "))
        numeros.unshift(numero);
    }
    let c = 0    
    for (let i = 0; i < numeros.length; i++) {
        c += numeros[i];
    }
    console.log("Soma de todos os Números: "+c);    
}
function quat(numeros){
    let contador = 0
    let contador2 = 0
    for(i=0; i < numeros.length; i++){
        if(numeros[i] %2 == 0){
            contador = contador + 1;
            
        }else if(numeros[i]%2 != 0){
            contador2 = contador2 + 1;
        }
    } 
    console.log("Número de pares na lista: "+contador)
    console.log("Número de impares na lista: "+contador2)
}
let numeros = []

let resultado = calcule(numeros)
console.log(numeros)
let quantidade = quat(numeros)