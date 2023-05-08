//4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2
//ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]
  
const arrayPadrao = [1, 2, 3, 4, 5];

const multiplicaArray = arr => {
    let array = [];

    for(let i = 0; i < arr.length; i++){
        array[i] = arr[i] * 2;
    }
    return array;
}

const array = multiplicaArray(arrayPadrao);
console.log(array)