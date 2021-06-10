const { reduce } = require('underscore');

let arr = [5, 4, 1, 2, 9];
/**
 * 
 *      let masAlto = valor.reduce((acc, val) =>{ 
 *          if(val > acc){
 *             acc = val;
 *             }
 *          return acc;
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
let imparesMultiplicados = arr.reduce((x, z) => z = (z % 2) ? (x * z) : x);
console.log(imparesMultiplicados);

/**
 * output :    21
 * reduce la suma de todos los elementos del array
 */
let sumaElementosArray = arr.reduce((x, z) => x + z);
console.log(sumaElementosArray);

/**
 * output :    -11
 * la resta de todos los elementos del array
 */
let restaTotal = arr.reduce((x, z) => x - z);
console.log(restaTotal);

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
let reduceArrayOfObjectToOneObject = arr2.reduce((x, z) => { x[z.name] = z.value; return x; })
console.log(reduceArrayOfObjectToOneObject);