const _ = require('underscore')

let valor = [5, 4, undefined, 2, 9];
//valor = valor.filter( v => v % 2 == 0 );        //  output [ 4, 2 ]
//valor = valor.filter( v => !( v % 2 == 1 ));    //  output [ 4, 2 ]  
//valor = valor.filter( v => v !== undefined );   //  output [ 5, 4, 2, 9 ]
//valor = valor.filter( v => !( v % 2 ));         //  output [ 4, undefined, 2 ]
//valor = valor.filter( v => !v );                //  output [ undefinded ]
//valor = valor.filter( v => v < 3 == 0);           //  output [ 5, 4, undefined, 9 ]

console.log(valor);

let s = "Era una noche oscura y tormentosa.";
//let palabras = s.split(' ');
//output [ 'Era', 'una', 'noche', 'oscura', 'y', 'tormentosa.' ]

let palabras = s.split(/\W+/).filter(palabras => palabras.length >= 6);
//output [ 'oscura', 'tormentosa' ]
console.log(palabras)                          

/*
function incluso(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }    
}

function incluso(num) {
    return (num % 2 == 0);
}
valor = valor.filter(incluso);
console.log(valor);                               //  output [ 4, 2 ]
*/
