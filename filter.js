const { filter } = require('underscore')

let arr = [5, 4, undefined, 2, 9];
//arr = arr.filter( z => z % 2 == 0 );        //  output [ 4, 2 ]
//arr = arr.filter( z => !( z % 2 == 1 ));    //  output [ 4, 2 ]  
//arr = arr.filter( z => z !== undefined );   //  output [ 5, 4, 2, 9 ]
//arr = arr.filter( z => !( z % 2 ));         //  output [ 4, undefined, 2 ]
//arr = arr.filter( z => !z );                //  output [ undefinded ]
arr = arr.filter(z => z < 3 == 0);           //  output [ 5, 4, undefined, 9 ]

console.log(arr);

let s = "Era una noche oscura y tormentosa.";
//let palabras = s.split(' ');
//output [ 'Era', 'una', 'noche', 'oscura', 'y', 'tormentosa.' ]

let palabras = s.split(/\W+/).filter(p => p.length >= 6);
//output [ 'oscura', 'tormentosa' ]
console.log(palabras)

/*
function camuflada(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function camuflada(num) {
    return (num % 2 == 0);
}
valor = valor.filter(camuflada);
console.log(valor);                               //  output [ 4, 2 ]
*/

console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')
const evens = filter([1, 2, 3, 4, 5, 6], (z) => z % 2 === 0)

console.log(evens)

console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')
const filter2 = (list, fun, context) => {
  const res = []
  for (const key in list) {
    if (
      context
        ? fun.call(context, list[key], key, list)
        : fun(list[key], key, list)
    )
      res.push(list[key])
  }
  return res
}

const evens2 = filter2([1, 2, 3, 4, 5, 6], (z) => z % 2 === 0)
console.log(evens2)

