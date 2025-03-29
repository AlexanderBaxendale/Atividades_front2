//1•Crie um array com 5 nomes e exiba o terceiro nome no console.
//2•Adicione um nome ao final e um no início do array.
//3•Remova o último nome e exiba o array atualizado.
//4•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
//5•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]


//1•Adicione um nome ao final e um no início do array.
console.log("Primeira Questão!\n")
let nomes = ["Alexander","Augusto","Paulo","Sabrina","Maria"];

console.log("Terceiro nome da lista: "+nomes[2])

//2•Adicione um nome ao final e um no início do array.
console.log("\nSegunda Questão!\n")
console.log("\nLista Atual");
console.log(nomes)
console.log("\nLista adiconando nome na primeira e ultima posição");
nomes.unshift("Aline")
nomes.push("Roberto")
console.log(nomes)

//3•Remova o último nome e exiba o array atualizado.
console.log("\nTerceira Questão!\n")
console.log("\nLista Atual");
console.log(nomes)
console.log("Lista sem o último elemento");
nomes.pop()
console.log(nomes);

//4•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8]
console.log("\nQuarta Questão!\n")
let numeros = [2,4,6,8];
console.log("\nLista Atual")
console.log(numeros)
let resultado = numeros
console.log("Lista Dobrada")
console.log(resultado.map(resultado => resultado*2));
    
//5•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
console.log("\nQuinta Questão!\n")
let num = [1,3,5,7,9]
console.log("\nLista sem o filtro");
console.log(num)
let filtra_maior_5 = num
console.log("Lista com o filtro");
console.log(filtra_maior_5.filter(filtra_maior_5 => filtra_maior_5 > 5));