//Crie uma função chamada calcularTotal que receba:

//•O preço unitário de um produto.
//•A quantidade comprada.

//Calcule o valor total da compra.

//Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com desconto, conforme a regra:

//•Compras acima de R$ 100,00 → 10% de desconto
//•Compras até R$ 100,00 → sem desconto


//Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.

//•Valor total antes do desconto.
//•Valor final com o desconto aplicado.

//OBS: Use prompt() para ler os dados do usuário (preço e quantidade)

let preco = parseFloat(prompt("Digite o preço do produto: "))
let quant = parseFloat(prompt("Digite a Quantidade do produto"))

function calcularTotal(preco,quant){
    return preco*quant;

}

let total = calcularTotal(preco,quant);

function aplicarDesconto(total){
    if(total > 100){
        total = total-(total*0.1)
        return total
    }else{
        return total;
    }
}


function exibirResumo(){
   console.log("Valor total da compra: "+total)
   console.log("Valor total com o desconto: "+aplicarDesconto(total))

}

let exibia = exibirResumo()




    

