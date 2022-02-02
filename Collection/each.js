//const { _ } = require('underscore');
import _ from 'underscore';

console.log('-------------------------------------------------------------------------------')
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var arraicito = arr.reverse();
console.log(arraicito);
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')

console.log(arraicito[2]);
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')
console.log('analizar')

_.each(arr, (value, index, list) => {
  console.log("value -> ", value, "index -> ", index);
  console.log(list);
})  
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')

var obj = {
  name: "Avelino",
  age: 32,
  ocupation: "deverlop"
}

_.each(obj, (value, key, obj) => {
  console.log(`Key-> ,${key}, "Value->", ${value}`);
  console.log(obj);
})
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')


_.each([1, 2, 3], console.log);
console.log('-------------------------------------------------------------------------------')
console.log('-------------------------------------------------------------------------------')
_.each({ one: 1, two: 2, three: 3 }, console.log);
console.log('-------------------------------------------------------------------------------')

const user = {
  friends: {
    user1: true,
    user2: false,
    user3: true,
    user4: false
  }
}

const output = _.each(
  ['user1', 'user4', 'user5'],
  (z) => {
    console.log(this[z])
  },
  user.friends
)
console.log(output)
console.log('-------------------------------------------------------------------------------')

const each2 = (obj, fun, context) => {
  for (const key in obj) {
    context ? fun.call(context, obj[key], key, obj) : fun(obj[key], key, obj)
  }
  return obj
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


each2([1, 2, 3], console.log);
each2({ one: 1, two: 2, three: 3 }, (val, key, obj) => {
  console.log(val, key, obj)
})

const user2 = {
  friends: {
    user1: true,
    user2: false,
    user3: true,
    user4: false
  }
}

// this.user1 = ':)'

each2(
  ['user1', 'user4', 'user3'],
  function (val) {
    console.log(this[val])
  },
  user2.friends
)



console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')




const z = _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
  _['is' + name] = function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
});

console.log(z)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const doc = {
  "ok": true,
  "message": "success",
  "body": [
    {
      "id": "03ebdad1-d5a6-46ac-a58d-9bafff2802a6",
      "documentacion": "Cedula Azul",
      "fechaDeCarga": "09/06/2021 ",
      "fechaDeVencimiento": "09/06/2021 ",
      "accion": "VISTO",
      "estado": null,
      "aprobadoPor": "Coca Cola Company",
      "observaciones": "Mauris et neque in velit rhoncus dignissim. "
    },
    {
      "id": "1b83a391-f66f-4b4f-8730-b8ac0a759834",
      "documentacion": "Registro conducir",
      "fechaDeCarga": "09/06/2021 ",
      "fechaDeVencimiento": "09/06/2021 ",
      "accion": "NO_VISTO",
      "estado": null,
      "aprobadoPor": "Laia S.A.",
      "observaciones": "Integer orci lacus, vehicula ac magna"
    },
    {
      "id": "c940cf79-aa33-4381-8f79-392faa49a8c4",
      "documentacion": "VTV",
      "fechaDeCarga": "09/06/2021 ",
      "fechaDeVencimiento": "09/06/2021 ",
      "accion": "NO_VISTO",
      "estado": null,
      "aprobadoPor": "Laia S.A.",
      "observaciones": "Integer vehicula ac magna."
    }
  ]
}

const output3 = _.each(doc.body, function(body) {
  console.log(body.documentacion);
});
console.log(output3)