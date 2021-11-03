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
