console.log("Algoritmo 3");

// function a(x, y) {
//   return 5;
// }
// console.log(a(5, 5));

// a -> function
// a(5, 5) -> 5
// console 5

// function a(x, y) {
//   z = [];
//   z.push(x);
//   z.push(y);
//   z.push(5);
//   console.log(z);
//   return z;
// }
// b = a(2, 2);
// console.log(b);
// console.log(a(6, 8));

// a -> function
// b -> a(2,2)
// // x -> 2
// // y -> 2
// // z -> []
// // z -> [2]
// // z -> [2, 2]
// // z -> [2, 2, 5]
// // console [2, 2, 5]
// b -> [2, 2, 5]
// console [2, 2, 5]
// a(6, 8) ->
// // x -> 6
// // y -> 8
// // saltando
// // z -> [6, 8, 5]
// // console [6, 8, 5]
// a(6,8) -> [6, 8, 5]
// console -> [6, 8, 5]

// function a(x) {
//   z = [];
//   z.push(x);
//   z.pop();
//   z.push(x);
//   z.push(x);
//   return z;
// }
// y = a(2);
// y.push(5);
// console.log(y);

// a -> function
// y -> a(2)
// // x -> 2
// // z -> []
// // z -> [2]
// // z -> []
// // z -> [2]
// // z -> [2,2]
// y -> [2,2]
// y -> [2,2,5]
// console [2,2,5]

// function a(x) {
//   for (var i = 0; i < x.length; i++) {
//     if (x[i] > 5) {
//       x[i] = "Coding";
//     } else if (x[i] < 0) {
//       x[i] = "Dojo";
//     }
//   }
//   return x;
// }
// console.log(a([5, 7, -1, 4]));

// a -> function
// a([5, 7, -1, 4]) ->
// // x -> [5, 7, -1, 4]
// // // i -> 0
// // // x[i] -> 5
// // // i -> 1
// // // x[i] -> 7
// // // x[1] -> "Coding"
// // // x -> [5, "Coding", -1, 4]
// // // i -> 2
// // // x[i] -> -1
// // // saltando
// // // x -> [5, "Coding", "Dojo", 4]
// // // i -> 3
// // // x[i] -> 4
// // // i -> 4
// // x -> [5, "Coding", "Dojo", 4]
// a([5, 7, -1, 4]) -> [5, "Coding", "Dojo", 4]
// console [5, "Coding", "Dojo", 4]
