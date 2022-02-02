//const {_} = require('underscore');
import _ from 'underscore';

const arr = [[0, 1], [2, 3], [4, 5]];

const arrllano = _.reduceRight(arr, ( a, v ) => a.concat(v), []);
console.log(arrllano);             //output : [ 4, 5, 2, 3, 0, 1 ]
console.log('----------------------------------------------------------------------');
                                     //output : [ 0, 1, 2, 3, 4, 5 ]   
const ascendente = _.reduceRight(arr, ( a, v ) => v.concat(a), []);
console.log(ascendente);
console.log('----------------------------------------------------------------------');

const flat = _.reduceRight(arr, (a, b) => [...a, ...b], [])
console.log(flat)