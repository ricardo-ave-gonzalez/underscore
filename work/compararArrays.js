import _ from 'underscore';

var a = [
    {
        "id": 1762276,
        "Rating": 3,
        "precio": 7411828,
        "docuRequerido": true
    },
    {
        "id": 1826692,
        "Rating": 3,
        "precio": 650000,
        "docuRequerido": false
    },
    {
        "id": 1833283,
        "Rating": 4,
        "precio": 950000,
        "docuRequerido": true
    },
    {
        "id": 1832134,
        "Rating": 3,
        "precio": 850000,
        "docuRequerido": false
    },
    {
        "id": 1829555,
        "Rating": 4,
        "precio": 750000,
        "docuRequerido": true
    },
    {
        "id": 1827548,
        "Rating": 5,
        "precio": 650000,
        "docuRequerido": false
    }
];

var b = [
    {
        "id": 1762276,
        "Rating": 2,
        "precio": 7411828,
        "docuRequerido": false
    },
    {
        "id": 1826692,
        "Rating": 3,
        "precio": 650000,
        "docuRequerido": true
    },
    {
        "id": 1833283,
        "Rating": 4,
        "precio": 950000,
        "docuRequerido": false
    },
    {
        "id": 1832134,
        "Rating": 3,
        "precio": 850000,
        "docuRequerido": true
    },
    {
        "id": 1829932,
        "Rating": 4,
        "precio": 750000,
        "docuRequerido": false
    },
    {
        "id": 1827548,
        "Rating": 5,
        "precio": 650000,
        "docuRequerido": true
    }
]

function obtenerArrayParaInsertar(array1, array2) {
    if (!_.isArray(array1) || !Array.isArray(array2)) {
        throw TypeError('Los parametros deben ser arreglos.');
    }
    var diff = _.difference(_.pluck(array1, "id"), _.pluck(array2, "id"));
    return _.filter(array1, z => {
        if (z.docuRequerido) {
            return diff.indexOf(z.id) >= 0;
        }
    });
}

function obtenerArrayParaDeshabilitar(array1, array2) {
    if (!_.isArray(array1) || !_.isArray(array2)) {
        throw TypeError('Los parametros deben ser arreglos.');
    }

    return _.filter(array1, x => {
        return _.some(array2, z => {
            if (z.id === x.id && !z.docuRequerido) {
                return { id: x.id, owner: x.owner }
            }
        })
    })
}

console.log(obtenerArrayParaInsertar(a, b));
console.log(obtenerArrayParaDeshabilitar(a, b));