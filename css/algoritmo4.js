// 1 Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.

function contar(arr, y) {
  let cuenta = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) cuenta++;
  }
  return cuenta;
}

// console.log(contar([1, 1, 2, 3], 1)); // 2
// console.log(contar([1, 2, 2, 3], 1)); // 3
// console.log(contar([1, 20, 2, 3], 10)); // 1

// 4 Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(arr, c, t) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < c || i > t) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}

removerRango1 = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
removerRango2 = removerRango([20, 30, 40, 50, 60, 70], 3, 4);

console.log(removerRango1);
console.log(removerRango2);
