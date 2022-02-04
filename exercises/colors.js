import _ from 'underscore';

let colors = [
    "ROJO",
    "ROJO",
    "ROJO"
]

let colorResultante = "AMARILLO"
let todoVerde = _.every(colors, z => _.isEqual(z, "VERDE"));
let todoRojo = _.every(colors, z => _.isEqual(z, "ROJO"));
colorResultante = (todoVerde) ? "VERDE" : colorResultante;
colorResultante = (todoRojo) ? "ROJO" : colorResultante;

console.log(colorResultante)

