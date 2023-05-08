//3 -> Crie uma função que remova todos os números negativos de um array
//ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

const array = [-1, 1, -2, 2, -3, 3];

const removerNegativos = arr => {
    let arrayNovo = [];
  
    for (let i = 0, j = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        arrayNovo[j] = arr[i];
        j++;
      }
    }
  
    return arrayNovo;
  }
  
  const arraySemNegativos = removerNegativos(array);
  console.log(arraySemNegativos);