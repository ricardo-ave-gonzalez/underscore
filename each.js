const { each } = require('underscore');
const { keys, throttle } = require('underscore');

/*
var arr = [1,2,3,4,5,6,7,8];
var arraicito = arr.reverse();
console.log(arraicito);
console.log(arraicito[2]);

_.each(arr, (value, index, list)=>{
    console.log("value -> ", value, "index -> ", index);
    console.log(list);
})

var jObj = {
    name : "Avelino",
    age : 32,
    ocupation : "deverlop"
}

_.each(jObj, (value, key, theObject)=>{
    console.log(`Key-> ,${key}, "Value->", ${value}`);
    console.log(theObject);
})
*/

each([1,2,3], console.log);
each({ one: 1, two: 2, three: 3 }, console.log);

const user = {
    friends: {
        user1: true,
        user2: false,
        user3: true,
        user4: false
    }
}

each(
    ['user1', 'user4', 'user5'],
    (val) => {
        console.log(this[val])
    },
    user.friends
)


const each2 = (obj, fun, context) => {
    for (const key in obj) {
      context ? fun.call(context, obj[key], key, obj) : fun(obj[key], key, obj)
    }
    return obj
  }

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


each2([1,2,3], console.log);
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





