const { _ }  = require('underscore');
/**
 * Examina cada valor en la lista, devolviendo el primero que pasa en true
 * (predicado), o undefined, sí ningún valor pasa la prueba. 
 * La función regresa tan pronto como encuentra un elemento aceptable y 
 * no recorre toda la lista.
 */
arr = [1, 2, 3, 4, 5, 6];
let siempre = _.find(arr, (z) => (z % 2 == 0));
console.log(siempre)

//=======================================================================================//

console.log('~~~~~~~~~~~~~~~~~~~versión~~~~~~~~~~~~~~~~~~~~~~')

const find2 = (list, fun, context) => {
    for (const idx in list) {
        if (
            context
                ? fun.call(context, list[idx], idx, list)
                : fun(list[idx], idx, list)
        )
            return list[idx]
    }
    return undefined
}

const even3 = find2(
    [
        { name: 'ricardito', age: 32 },
        { name: 'franquito', age: 25 },
        { name: 'greizzinio', age: 2 }
    ],
    ({ age }, idx, arr) => age % 2 === 0
)


console.log(even3)

//=======================================================================================//

