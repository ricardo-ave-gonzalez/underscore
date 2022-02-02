//const { _ } = require('underscore');
import _ from 'underscore';

let arr = [5, 4, 1, 2, 9];
/**
 * 
 *      let masAlto = valor.reduce((z, a) =>{ 
 *          if(a > z){
 *             z = a;
 *             }
 *          return z;
 *      });
 * 
 * output :    9   
 */
let numeroMayor = arr.reduce((x, z) => z > x ? z : x);
console.log(numeroMayor);

/**
 * output :    1
 * reduce al mas bajo
 */
let numeroMenor = arr.reduce((x, z) => z < x ? z : x);
console.log(numeroMenor);

/**
 * output :    15
 * reduce a la suma total de los impares
 */
let sumaNumerosImpares = arr.reduce((x, z) => z = (z % 2) ? x + z : x);
console.log(sumaNumerosImpares);

/**
 * output :    45
 * reduce a la multiplicación de los impares
 */
let multiplicaNumerosImpares = arr.reduce((x, z) => z = (z % 2) ? (x * z) : x);
console.log(multiplicaNumerosImpares);

/**
 * output :    21
 * reduce la suma de todos los elementos del array
 */
let sumaElementosDeLaLista = arr.reduce((x, z) => x + z);
console.log(sumaElementosDeLaLista);

/**
 * output :    -11
 * la resta de todos los elementos del array
 */
let restaElementosDeLaLista = arr.reduce((x, z) => x - z);
console.log(restaElementosDeLaLista);

/**
 * 
 * https://underscorejs.org/ 
 */
console.log('-------------------------------------v2-------------------------------------------')

/**
 * Output
 *   {
 *     name: 'razonSocial',
 *     value: 'Marina S.A.',
 *     nombre: 'Marina',
 *     apellido: 'Fernandez',
 *     cuit: '20327777772',
 *     email: 'administracion1@admin.com',
 *     telefono: '232323232323',
 *     password: 'xXzZzXx'
 *   }
 * reduce array of object to one object 
 */
let arr2 = [
    { name: "razonSocial", value: "Marina S.A." },
    { name: "nombre", value: "Marina" },
    { name: "apellido", value: "Fernandez" },
    { name: "cuit", value: "20327777772" },
    { name: "email", value: "administracion1@admin.com" },
    { name: "telefono", value: "232323232323" },
    { name: "password", value: "xXzZzXx" }
]
let reduceAUnObjeto = arr2.reduce((x, z) => { x[z.name] = z.value; return x; })
console.log(reduceAUnObjeto);



console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


const input = [
    { "score": 2, "name": "Jon", "venue": "A" },
    { "score": 3, "name": "Jeff", "venue": "A" },
    { "score": 4, "name": "Jon", "venue": "B" },
    { "score": 4, "name": "Jeff", "venue": "B" }
];

const output = _.map(_.groupBy(input, "name"), function (group, name) {
    return _.reduce(group, function (z, elem) {
        z.score += elem.score;
        z.venue.push(elem.venue);
        return z;
    },
        { name: name, score: 0, venue: [] });
});


console.log(output);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var arr3 = ['docInstitucional', 'docInstitucional', 'docPersona', 'docVehiculo', 'docVehiculo', 'docVehiculo']
const output2 = arr3.reduce((arr3, z) => (arr3[z] = (arr3[z] || 0) + 1, arr3), {})
console.log(output2)




