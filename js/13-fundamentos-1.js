function _1() {
  const arr = [];
  for (let i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}

console.log({ _1: _1() });

function _2() {
  let resultado = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      resultado += i;
    }
  }
  return resultado;
}

console.log({ _2: _2() });

function _3() {
  let resultado = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      resultado += i;
    }
  }
  return resultado;
}

console.log({ _3: _3() });

function _4(ar) {
  var cont = 0;
  for (x = 0; x < ar.length; x++) {
    cont = cont + ar[x];
  }
  return cont;
}

var array = [0, 11, 2, 3, 4, 5, 6, 7];

console.log({ _4: _4(array) });

function _5(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log({ _5: _5([-3, 3, 5, 7]) });

function _6(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  return suma / arr.length;
}

console.log({ _6: _6([1, 3, 5, 7, 20]) });

function _9(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    // const val = Math.pow(arr[i], 2);
    const val = arr[i] * arr[i];
    resultado.push(val);
  }
  return resultado;
}

console.log({
  _9: _9([123, 735, 701]),
});

// function randNumbers(){const arr=[];for(let i=0;i<200;i++) arr.push(Math.floor(Math.random() * 1000));return JSON.stringify(arr);}

// console.log(randNumbers());
