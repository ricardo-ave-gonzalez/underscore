import _ from 'underscore';

let empresa = {
    "institucional": {
        "empresa": [
            {
                "id": "2ca2e10c-9278-4a47-8070-b0f3e40e244d",
                "nombre": "Inscripción AFIP CUIT y comprobante de pago mes en curso",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "403d2175-3d8a-47a0-96e9-79e33bc71505",
                "nombre": "Copia de DNI",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "88cd8e97-c977-4043-ae06-604ec54fa45b",
                "nombre": "Inscripción AFIP CUIT ",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "8b2b90c6-a0db-4a57-a4fd-e43009612fd7",
                "nombre": "Constancia entrega EPP, acorde al trabajo a realizar",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "cd504b73-a068-419d-a8e0-b8aaea03a11b",
                "nombre": "Formulario F931 vigente más comprobante de pago. Listado personal ingresantes.",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": true
            },
            {
                "id": "e0c9526a-ce2c-4317-ac3b-a65a0fd48892",
                "nombre": "Certificado de ART con personal con CUIL y Clausula No Repetición",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            }
        ],
        "independiente": [
            {
                "id": "2ca2e10c-9278-4a47-8070-b0f3e40e244d",
                "nombre": "Inscripción AFIP CUIT y comprobante de pago mes en curso",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "403d2175-3d8a-47a0-96e9-79e33bc71505",
                "nombre": "Copia de DNI",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "88cd8e97-c977-4043-ae06-604ec54fa45b",
                "nombre": "Inscripción AFIP CUIT ",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "8b2b90c6-a0db-4a57-a4fd-e43009612fd7",
                "nombre": "Constancia entrega EPP, acorde al trabajo a realizar",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "cd504b73-a068-419d-a8e0-b8aaea03a11b",
                "nombre": "Formulario F931 vigente más comprobante de pago. Listado personal ingresantes.",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            },
            {
                "id": "e0c9526a-ce2c-4317-ac3b-a65a0fd48892",
                "nombre": "Certificado de ART con personal con CUIL y Clausula No Repetición",
                "parent_id": "a3e8e0f8-a312-4e16-a0a8-ea834833ed17",
                "docuRequerido": false
            }
        ]
    }
}

//console.log(_.contains(empresa.institucional.empresa, "docuRequerido", [true]))

let checkIfTrue = _.some( empresa.institucional.empresa, function( z ) {
    return z.docuRequerido === 'true';
} );


var check = function (empresa, props) {
    var pnames = _.keys(props);
    return _.find(thelist, function (obj) {
        return _.all(pnames, function (pname) {
            return obj[pname] == props[pname];
        });
    });
};

console.log(_.find(empresa.institucional.empresa, {docuRequerido: true}))