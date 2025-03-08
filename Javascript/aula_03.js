
const masculino= []
const feminino = []
const alturas = []
for(let i = 0; i < 3; i++){
    var gen = prompt("Qual o seu gênero - Digite m(Masculino) ou f(Feminino)")
    if(gen == "m"){
        var masc = prompt("Digite sua altura")
        masculino.unshift(masc)
        alturas.unshift(masc)

    }else{
        var fem = prompt("Digite sua altura")
        feminino.unshift(fem)
        alturas.unshift(fem)
    }
}


var altura_min = Math.min(...alturas);

console.log(Math.max(...alturas));
console.log(altura_min);
console.log(alturas);


