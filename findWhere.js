const { _ } = require('underscore');

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
            "estado": 'AMARILLO',
            "aprobadoPor": "Coca Cola Company",
            "observaciones": "Mauris et neque in velit rhoncus dignissim. "
        },
        {
            "id": "1b83a391-f66f-4b4f-8730-b8ac0a759834",
            "documentacion": "Registro conducir",
            "fechaDeCarga": "09/06/2021 ",
            "fechaDeVencimiento": "09/06/2021 ",
            "accion": "NO_VISTO",
            "estado": 'ROJO',
            "aprobadoPor": "Laia S.A.",
            "observaciones": "Integer orci lacus, vehicula ac magna"
        },
        {
            "id": "c940cf79-aa33-4381-8f79-392faa49a8c4",
            "documentacion": "VTV",
            "fechaDeCarga": "09/06/2021 ",
            "fechaDeVencimiento": "09/06/2021 ",
            "accion": "NO_VISTO",
            "estado": 'VERDE',
            "aprobadoPor": "Laia S.A.",
            "observaciones": "Integer vehicula ac magna."
        }
    ]
}

//const buscarDonde = _.findWhere(doc, { body, { "documento" : "VTV"}})
const cierto = _.every(doc, function(z) { return z % 2 == 0; });
console.log(cierto);