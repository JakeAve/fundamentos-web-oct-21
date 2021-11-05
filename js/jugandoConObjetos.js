var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
  { name: "Rosa", age: 17 },
];

// ¿Cómo harías print/log de la edad de John?
// ¿Cómo harías print/log del nombre del primer objeto?
// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
// ¿Cómo harías para imprimir el nombre de los mayores de edad?

function _1(arr) {
  let edad = arr[0].edad;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === "John") edad = arr[i].age;
  }
  return edad;
}

function _2(arr) {
  return arr[0].name;
}

function _3(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Name: ${arr[i].name}`);
    console.log(`Age: ${arr[i].age}\n`);
  }
  // arr.forEach((usuario) => {
  //   console.log(`Name: ${usuario.name}`);
  //   console.log(`Age: ${usuario.age}\n`);
  // });
}

function _4(arr) {
  const mayores = [];
  for (let i = 0; i < arr.length; i++) {
    const usuario = arr[i];
    const edad = usuario.age;
    if (edad >= 18) mayores.push(usuario.name);
  }
  return mayores;
}

console.table({ 1: _1(users), 2: _2(users), 4: _4(users) });
_3(users);
