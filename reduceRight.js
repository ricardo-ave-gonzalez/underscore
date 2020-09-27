const _ = require('underscore');

let valor = [[0, 1], [2, 3], [4, 5]];

let valorllano = _.reduceRight(valor, ( a, v ) => a.concat(v), []);
console.log(valorllano);             //output : [ 4, 5, 2, 3, 0, 1 ]
console.log('----------------------------------------------------------------------');
                                     //output : [ 0, 1, 2, 3, 4, 5 ]   
let ascendente = _.reduceRight(valor, ( a, v ) => v.concat(a), []);
console.log(ascendente);
console.log('----------------------------------------------------------------------');