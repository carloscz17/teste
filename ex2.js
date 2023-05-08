//2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números
//ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

let array = [2, 4, 6, 8];
let soma = 0;
for(let i = 0; i<array.length; i++){
    soma += array[i];
}
console.log(soma);