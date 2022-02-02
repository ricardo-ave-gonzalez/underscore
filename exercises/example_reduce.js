//const { _ } = require('underscore')
import _ from 'underscore';

let productArray = [
    {
        productId: 55,
        productName: "Libero",
        productQuantity: 7,
        productPrice: 100
    },
    {
        productId: 56,
        productName: "Nam Libero Tempore",
        productQuantity: 8,
        productPrice: 150
    }
]

const resultado = _.reduce(productArray, (accumulator, { productPrice, productQuantity }) => {
    return accumulator + (productQuantity * productPrice)
}, 0)

console.log(resultado)