let valor = [5, 4, 9, 2, 1];

console.log(valor);
valor.sort();                   //  orden ascendente
console.log(valor);             //  output : [ 1, 2, 4, 4, 5 ]
console.log('-----------------------------------------------------------------------')

let valor2 = ["a", "hola", "B", "adios", "2"];
console.log(valor2);
valor2.sort();                   //  Primero numero Mayus>Min y por orden abcdario
console.log(valor2);             //  output : [ 'B', 'a', 'adios', 'hola' ]

console.log('-----------------------------------------------------------------------')

let valor3 = [{ x: 2, y: 10 }, { x: 5, y: 6 }]

function comparar(a, b) {
    return b.y - a.y;
}
console.log(valor3);
valor3.sort(comparar);
console.log(valor3);

console.log('-----------------------------------------------------------------------')

let s = "Era una noche oscura y tormentosa.";
let palabras = s.split(/\W+/).filter(palabras => palabras.length >= 3);
palabras.sort((a, b) => a.length - b.length)          //      
console.log(palabras)    // output : [ 'Era', 'noche', 'oscura', 'tormentosa', 'una' ]



