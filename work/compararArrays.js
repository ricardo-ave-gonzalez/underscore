import _ from 'underscore';

var a = [
    {
        "ListingId": 1762276,
        "Rating": 3,
        "ListPrice": 7411828,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1826692,
        "Rating": 3,
        "ListPrice": 650000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1833283,
        "Rating": 4,
        "ListPrice": 950000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1832134,
        "Rating": 3,
        "ListPrice": 850000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1829932,
        "Rating": 4,
        "ListPrice": 750000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1827548,
        "Rating": 5,
        "ListPrice": 650000,
        "PropertyType": "Residential"
    }
];

var b = [
    {
        "ListingId": 1762276,
        "Rating": 2,
        "ListPrice": 7411828,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1826692,
        "Rating": 3,
        "ListPrice": 650000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1833283,
        "Rating": 4,
        "ListPrice": 950000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1832134,
        "Rating": 3,
        "ListPrice": 850000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1829932,
        "Rating": 4,
        "ListPrice": 750000,
        "PropertyType": "Residential"
    },
    {
        "ListingId": 1827548,
        "Rating": 5,
        "ListPrice": 650000,
        "PropertyType": "Residential"
    }
]

var difference = function (array) {
    var rest = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));

    var containsEquals = function (obj, target) {
        if (obj == null) return false;
        return _.any(obj, function (value) {
            return _.isEqual(value, target);
        });
    };

    return _.filter(array, function (value) {
        return !containsEquals(rest, value);
    });
};

console.log(JSON.stringify(difference(b, a)));