//const { _ } = require('underscore')
import _ from 'underscore';

/**
 * Parameters: This function accepts three parameters as mentioned above and described below:
 * 
 * List: This parameter is used to set the list of elements.
 * Predicate: This parameter is used to test the condition.
 * Context: This parameter is used to display the content.
 * 
 * Return values: The returned value which is either ‘true’ ( when every element of the list fulfills 
 * the given condition) or ‘false’ ( when at least one element does not fulfill the condition)
 * 
 * Passing an array to the _every function(): The ._every() 
 * function takes the element from the list one by one and do the specified
 * operations on the code. Below example contains the operation to find all 
 * the elements of the list that are valid or not. Valid means that they do not
 * contain Null, Blanks, false etc. After traversing and checking all
 * the elements, the every function ends. Here even if a single element is not 
 * valid then also the answer is false.
 */

const esTodoAun = _.every([2, 4, 5], (num) => num % 2 == 0);
console.log(esTodoAun);   // false

console.log(_.every([]));       // true 
console.log(_.every([null]));   // false


const every2 = (list, fun, context) => {
    let res = true
    for (const item of list)
        if (fun ? !(context ? fun.call(context, item) : fun(item)) : !item)
            return false
    return res
}

const isAllEven = every2([2, 4, 5], (num) => num % 2 == 0)

console.log(isAllEven)      
console.log(every2([]))
console.log(every2([null]))


const lista = [1,2,3,4,5,6];

const cada = _.every(lista, function(z) {return z < 7;});

console.log(cada);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const arrayvalues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`¿Son todos los valores de matriz "veraces"?`, `#cada ejemplo cuatro puntaje mas abajo`);
console.log(_.every(arrayvalues, function (value) {
    return (value);
}), `#cada ejemplo cuatro puntaje mas abajo`);

console.log(`¿Son todos los valores de matriz "verdaderos"?`, `#cada ejemplo cuatro puntaje mas abajo`);
console.log(_.every(arrayvalues, function (value) {
    return (value == true);
}), `#cada ejemplo cuatro puntaje mas abajo`);

console.log(`¿Todos los valores de matriz son == "verdaderos"?`, `#cada ejemplo cuatro puntaje mas abajo`);
console.log(_.every(arrayvalues, function (value) {
    return (value === true);
}), `#cada ejemplo cuatro puntaje mas abajo`);

var isEven = function (value) {
    return value % 2 === 0;
};

console.log(`¿Son todos los valores de matriz pares?`, `#cada ejemplo cuatro puntaje mas abajo`);
console.log(_.every(arrayvalues, isEven), `#cada ejemplo cuatro puntaje mas abajo`);