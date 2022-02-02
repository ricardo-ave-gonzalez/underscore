//const { _ } = require('underscore')
import _ from 'underscore';
/**
 *      Return the number of values in the list.
 *      _.size([1, 2, 3, 4, 5]);
 *      => 5
 *      _.size({one: 1, two: 2, three: 3});
 *      => 3
 */

let objetos = [
    {
        "category": "other",
        "title": "harry University",
        "value": 50000,
        "id": "1"
    },
    {
        "category": "traveling",
        "title": "tommy University",
        "value": 50000,
        "id": "2"
    },
    {
        "category": "education",
        "title": "jerry University",
        "value": 50000,
        "id": "3"
    },
    {
        "category": "business",
        "title": "Charlie University",
        "value": 50000,
        "id": "4"
    }
]
console.log(_.size(objetos));





















