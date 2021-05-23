const { max } = require('underscore')

const arr = [
  { name: 'ricardito', age: 32 },
  { name: 'franquito', age: 25 },
  { name: 'greizzinio', age: 1 } 
]

console.log(max(arr, (arr) => arr.age))

const max2 = (list, fun, context) => {
  let theMax = Number.NEGATIVE_INFINITY
  let toReturn = Infinity
  for (const key in list) {
    if (fun) {
      const res = context ? fun.call(context, list[key]) : fun(list[key])
      if (!isNaN(res) && res > theMax) {
        theMax = res
        toReturn = list[key]
      }
    } else {
      if (!isNaN(list[key]) && list[key] > theMax) {
        theMax = list[key]
        toReturn = list[key]
      }
    }
  }
  return toReturn
}

console.log(max2(arr, (arr) => arr.age))
console.log(max2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))