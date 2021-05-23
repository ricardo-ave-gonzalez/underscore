const { every } = require('underscore')

const esTodoAun = every([2, 4, 5], (num) => num % 2 == 0);
console.log(esTodoAun);   // false

console.log(every([]));       // true 
console.log(every([null]));   // false


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
