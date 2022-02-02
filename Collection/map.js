//const { _, map } = require('underscore')
import _ from 'underscore';

let arr = [4, 8, 1, 2, 9];// un array en let

console.log(arr);
function duplicar(x) {
  return x * 2;
}
//arr = arr.map(duplicar);
_.map = arr.map(duplicar)
console.log(arr);                     // output : [ 4, 8, 1, 2, 9 ]
// output : [ 4, 8, 1, 2, 9 ]
console.log('-----------------------------------------------------------------------')

arr = arr.map(z => z * 2)             // output : [ 16, 32, 4, 8, 36 ]
console.log(arr);
console.log('-----------------------------------------------------------------------')

// arr.fill(random(10));              // output : [ 4, 4, 4, 4, 4 ]random 
// console.log(arr);
// console.log('-----------------------------------------------------------------------')

// arr.fill(arr.random());
// console.log(arr);
// console.log('-----------------------------------------------------------------------')
// [ random output                 
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106 
// ]        

//valor = valor.map(v => Math.random());
let arrNuevo = new Array(100);
//arrNuevo = arrNuevo.fill(0).map(v => Math.random());
console.log(arrNuevo);
console.log('-----------------------------------------------------------------------')
console.log('-----------------------------INCREIBLE---------------------------------')
console.log('in a line')

increible = Array(100).fill(0).map(i => Math.random()); //        :)
console.log(increible);

//======================================================================================//
//  WTF
//======================================================================================//
console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')

const a = map([1, 2, 3], function (num) {
  return num * 3
})
console.log(a)                // output : [ 3, 6, 9 ]


const b = map({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return { num: num * 3, key: num * 3, obh: num * 5 }
})
console.log(b)
/**     Output
*          [                             
*            { num: 3, key: 3, obh: 5 }, 
*            { num: 6, key: 6, obh: 10 },
*            { num: 9, key: 9, obh: 15 } 
*          ]                             
**/
const arraisito = map(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)
console.log(arraisito)        // output : [ 1, 3 ]


console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')

const a2 = map([1, 2, 3], function (num) {
  return num * 3
})
const b2 = map({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return { num, key }
})
const c2 = map(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)
const d2 = map(
  [
    { name: 'ricardito', score: 10 },
    { name: 'franquito', score: 20 },
    { name: 'greizzinio', score: 30 } //greizzinio de Grey el gatito xD
  ],
  ({ name, score }, idx, arr) => ({ name, score: score ** 4 }) //   ** operador de exponenciación
)

console.log(a2)
console.log(b2)
console.log(c2)
console.log(d2)

console.log('~~~~~~~~~~~~~~~~~~~v3~~~~~~~~~~~~~~~~~')