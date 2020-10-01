const _ = require('underscore')

let arr = [5, 4, undefined, 2, 9];
//arr = arr.filter( z => z % 2 == 0 );        //  output [ 4, 2 ]
//arr = arr.filter( z => !( z % 2 == 1 ));    //  output [ 4, 2 ]  
//arr = arr.filter( z => z !== undefined );   //  output [ 5, 4, 2, 9 ]
//arr = arr.filter( z => !( z % 2 ));         //  output [ 4, undefined, 2 ]
//arr = arr.filter( z => !z );                //  output [ undefinded ]
arr = arr.filter( z => z < 3 == 0);           //  output [ 5, 4, undefined, 9 ]

console.log(arr);

let s = "Era una noche oscura y tormentosa.";
//let palabras = s.split(' ');
//output [ 'Era', 'una', 'noche', 'oscura', 'y', 'tormentosa.' ]

let palabras = s.split(/\W+/).filter(p => p.length >= 6);
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
