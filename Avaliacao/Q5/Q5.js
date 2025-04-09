// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
//com o raio fornecido. Utilize obrigatoriamente a função prompt() para coletar o
//salário inicial. 

function Calculo_circulo(raio){
    
    area = 3.14 * (raio**2)
    console.log(area)
    
    perimetro = (2*3.14)*raio
    console.log(perimetro)
}

raio = parseFloat(prompt("Digite o comprimento do raio: "))
resultado = Calculo_circulo(raio)