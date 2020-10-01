const { _, random } = require('underscore')


let arr = [ 4, 8, 1, 2, 9 ];

console.log(arr);
function duplicar(x) {
  return x * 2;
}
//arr = arr.map(duplicar);
_.map = arr.map(duplicar)
console.log(arr);           // output : [ 4, 8, 1, 2, 9 ]
                            // output : [ 4, 8, 1, 2, 9 ]
console.log('-----------------------------------------------------------------------')

arr = arr.map(z =>  z * 2)  // output : [ 16, 32, 4, 8, 36 ]
console.log(arr);
console.log('-----------------------------------------------------------------------')

// arr.fill(random(10));       // output : [ 4, 4, 4, 4, 4 ]random 
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
arrNuevo = arrNuevo.fill(0).map( v => Math.random());
console.log(arrNuevo);
console.log('-----------------------------------------------------------------------')
console.log('-----------------------------INCREIBLE---------------------------------')
console.log('in a line')

increible = Array(100).fill(0).map( i => Math.random()); //        :)
console.log(increible);