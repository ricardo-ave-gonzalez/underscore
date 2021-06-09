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
 */     

let masAlto = arr.reduce(( acc, val ) => val > acc ? val : acc);
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
 * 
 * https://underscorejs.org/ 
 * :)
 *  
/***/

console.log('-------------------------------------v2-------------------------------------------')
//reduce array of object to one object 
let contratante = [
    { name: "razonSocial", value: "Marina S.A." },
    { name: "nombre", value: "Marina" },
    { name: "apellido", value: "Fernandez" },
    { name: "cuit", value: "20327777772" },
    { name: "email", value: "administracion1@admin.com" },
    { name: "telefono", value: "232323232323" },
    { name: "password", value: "xXzZzXx" }
]

let reduceContratante = contratante.reduce((x,z) => { x[z.name] = z.value; return x;})

console.log(reduceContratante);