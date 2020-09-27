const _ = require('underscore');
// range_.range ([start], stop, [step]) 
// Una función para crear listas de números enteros numeradas de manera flexible, 
// útil para cada bucle y mapa. inicio, si se omite, por defecto es 0; 
// paso por defecto es 1. Devuelve una lista de números enteros desde el inicio 
// (inclusive) hasta el final (exclusivo), incrementados (o decrementados) 
// por paso. Tenga en cuenta que los rangos que se detienen antes de comenzar 
// se consideran de longitud cero en lugar de negativos; si desea un rango negativo, 
// utilice un paso negativo.
let cero = _.range(0);
console.log(cero); // => []
console.log('---------------------------------------------------------------------')

let rango = _.range(10);
console.log(rango); // => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log('---------------------------------------------------------------------')

let otroRango = _.range( 1, 11 );
console.log(otroRango); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log('---------------------------------------------------------------------')

let deTres = _.range( 3, 13);
console.log(deTres);    // => [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log('---------------------------------------------------------------------')

let sanMartin = _.range( 0, 30, 5 );
console.log(sanMartin);  // => [ 0, 5, 10, 15, 20, 25 ]
console.log('---------------------------------------------------------------------')

let negativo = _.range(0, -10, -1);
console.log(negativo);     // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log('---------------------------------------------------------------------')



