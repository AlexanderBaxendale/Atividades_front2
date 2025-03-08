
const masculino= []
const feminino = []
const alturas = []
for(let i = 0; i < 15; i++){
    var gen = prompt("Qual o seu gênero - Digite m(Masculino) ou f(Feminino)")
    if(gen == "m"){
        var masc = parseFloat(prompt("Digite sua altura(Ex: 1.70"))
        masculino.unshift(masc)
        alturas.unshift(masc)

    }else{
        var fem = parseFloat(prompt("Digite sua altura(Ex: 1.70"))
        feminino.unshift(fem)
        alturas.unshift(fem)
    }
}

const soma = masculino.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Maior altura: "+Math.max(...alturas));
console.log("Menor altura: "+Math.min(...alturas));
console.log("A média de altura do gênero masculino: "+soma / masculino.length)
console.log("Número de pessoas do sexo feminino: "+feminino.length);


