const _ = require('underscore')

let valor = [ 4, 8, 1, 2, 9 ];

console.log(valor);
function doblar(x) {
  return x * 2;
}
valor = valor.map(doblar);
console.log(valor);           // output : [ 8, 16, 2, 4, 18 ]
console.log('-----------------------------------------------------------------------')

valor = valor.map(v =>  v * 2)// output : [ 16, 32, 4, 8, 36 ]
console.log(valor);
console.log('-----------------------------------------------------------------------')

valor.fill(random(10));       // output : [ 4, 4, 4, 4, 4 ]random 
console.log(valor);
console.log('-----------------------------------------------------------------------')

valor.fill(Math.random());
console.log(valor);
console.log('-----------------------------------------------------------------------')
// [ random output                 
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106,
//   0.5039308806940106 
// ]        

//valor = valor.map(v => Math.random());
let nuevoValor = new Array(100);
nuevoValor = nuevoValor.fill(0).map( v => Math.random());
console.log(valor);
console.log('-----------------------------INCREIBLE---------------------------------')
console.log('in a line')
increible = Array(100).fill(0).map( i => Math.random()); //        :)
console.log(increible);