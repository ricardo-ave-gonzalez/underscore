//const { _ } = require('underscore');
import _ from 'underscore';

list = [
    {
      "doc":
      {
        "id": "123",
        "name": "abc"
      }
    },
    {
      "doc":
      {
        "id": "345",
        "name": "xyz"
      }
    },
    {
      "doc":
      {
        "id": "123",
        "name": "str"
      }
    }
  ]
  
  console.log(_.detect(list, function (obj) {return obj.doc.id === "123"}))
  console.log(_.select(list, function (obj) {return obj.doc.id === "123"}))