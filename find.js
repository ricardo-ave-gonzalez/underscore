const _ = require('underscore');
// Examina cada valor en la lista, devolviendo el primero que pasa en true
// (predicado), o indefinido si ningún valor pasa la prueba. 
// La función regresa tan pronto como encuentra un elemento aceptable y 
// no recorre toda la lista.
arr = [1, 2, 3, 4, 5, 6];
let siempre = _.find(z,(num)=>(num % 2 == 0));
console.log(siempre)