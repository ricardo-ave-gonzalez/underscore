const _ = require('underscore');
let arr = [5, 4, 1, 2, 9];
// let masAlto = valor.reduce((acc, val) =>{ // El valor mas alto del array
//   if(val > acc){
//     acc = val;
//   }
//   return acc;
// });
// in a line
// numero mas alto
let masAlto = arr.reduce(( acc, val ) => val > acc ? vall : acc);
console.log(masAlto);                           //output :    9          
// numero mas bajo
let masBajo = arr.reduce(( acc, val ) => val < acc ? val : acc);
console.log(masBajo);                           //output :    1
// suma de total de los numeros impares
let numerosImpares = arr.reduce(( acc, val ) => val = ( val % 2 ) ?  acc + val : acc ); 
console.log(numerosImpares);                    //output :    15
// la multiplicación de los impares
let imparesMultiplicados = arr.reduce(( acc, val ) => val = ( val % 2 ) ? ( acc * val ) : acc ); 
console.log(imparesMultiplicados);              //output :    45
//la suma de todos los elementos del array
let sumaTotal = arr.reduce(( acc, val ) => acc + val);
console.log(sumaTotal);                         //output :    21
//la resta de todos los elementos del array
let restaTotal = arr.reduce(( acc, val ) => acc - val);
console.log(restaTotal);                        //output :    -11
/**
 * https://underscorejs.org/                     
 *  
/***/

