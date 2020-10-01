const _ = require('underscore');

let arr = [[0, 1], [2, 3], [4, 5]];

let arrllano = _.reduceRight(arr, ( a, v ) => a.concat(v), []);
console.log(arrllano);             //output : [ 4, 5, 2, 3, 0, 1 ]
console.log('----------------------------------------------------------------------');
                                     //output : [ 0, 1, 2, 3, 4, 5 ]   
let ascendente = _.reduceRight(arr, ( a, v ) => v.concat(a), []);
console.log(ascendente);
console.log('----------------------------------------------------------------------');