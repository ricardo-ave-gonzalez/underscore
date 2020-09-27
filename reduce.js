//const { reduce, each, values } = require('underscore')
let valor = [5, 4, 1, 2, 9];
// let masAlto = valor.reduce((acc, val) =>{ // El valor mas alto del array
//   if(val > acc){
//     acc = val;
//   }
//   return acc;
// });
// in a line
// numero mas alto
let masAlto = valor.reduce(( a, v ) => v > a ? v : a);
console.log(masAlto);                           //output :    9          
// numero mas bajo
let masBajo = valor.reduce(( acc, val ) => val < acc ? val : acc);
console.log(masBajo);                           //output :    1
// suma de total de los numeros impares
let numerosImpares = valor.reduce(( acc, val ) => val = ( val % 2 ) ?  acc + val : acc ); 
console.log(numerosImpares);                    //output :    15
// la multiplicación de los impares
let imparesMultiplicados = valor.reduce(( acc, val ) => val = ( val % 2 ) ? ( acc * val ) : acc ); 
console.log(imparesMultiplicados);              //output :    45
//la suma de todos los elementos del array
let sumaTotal = valor.reduce(( acc, val ) => acc + val);
console.log(sumaTotal);                         //output :    21
//la resta de todos los elementos del array
let restaTotal = valor.reduce(( acc, val ) => acc - val);
console.log(restaTotal);                        //output :    -11
/**
 * https://underscorejs.org/                     
 *  
/***/

