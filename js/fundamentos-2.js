function _2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val > max) max = val;
    if (val < min) min = val;
  }
  console.log(min);
  return max;
}

function _2b(arr) {
  const min = Math.min(...arr);
  console.log(min);
  return Math.max(...arr);
}

function _3(arr) {
  const penultimo = arr.length - 2;
  console.log(arr[penultimo]);
  return arr[0];
}

function _10(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp1 = arr[i];
    const temp2 = arr[arr.length - 1 - i];
    arr[i] = temp2;
    arr[arr.length - 1 - i] = temp1;
  }

  return arr;
}

function _10b(arr) {
  const resultado = new Array(arr.length);
  for (let i = 0; i < arr.length / 2; i++) {
    const temp1 = arr[i];
    const temp2 = arr[arr.length - 1 - i];
    resultado[i] = temp2;
    resultado[arr.length - 1 - i] = temp1;
  }

  return resultado;
}

console.table({
  _2: _2([230, 173, 493, 296, 332, 65]),
  _2b: _2b([230, 173, 493, 296, 332, 65]),
  _3: _3([230, 173, 493, 296, 332, 65]),
  _10: _10([230, 173, 493, 296, 332, 65, 32]),
  _10: _10b([230, 173, 493, 296, 332, 65, 32]),
});
