// 6) Escreva uma função que informe o retorno de um investimento (montante) com
//base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. Utilize obrigatoriamente 
// a função prompt() para coletar os valores necessários. 
// Use a fórmula: M = C * (1+i)t 
// Onde: 
//  C = Capital inicial investido
//  i = Taxa de juros, em percentual  
//  t = Tempo do investimento, em meses

//Exiba o resultado com duas casas decimais.

function investimento(){
    
    let montante = capital * ((1+juros)**tempo)
    let duascasas = montante.toFixed(2)
    console.log("Sua Montante será de : "+duascasas)
}

let capital = parseFloat(prompt("Digite o valor da capital inicial: "))
let juros = parseFloat(prompt("Digite a taxas de juros: "))/100
let tempo = parseInt(prompt("Digite a quantidade de meses investido: "))
let resultado = investimento()