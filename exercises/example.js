//const { _ } = require('underscore')
//const fetch = require('node-fetch');
import _ from 'underscore';
import fetch from 'node-fetch';
//SECCION INSTITUCIONAL
let documentos = [
    { "id": "8cad46ad-6e1c-4726-be27-46e53960a889", "estado": "ROJO" },
    { "id": "9a2e4d26-fcec-4f8a-955b-c694067c9449", "estado": "ROJO" },
    { "id": "9c61d075-e3b2-4920-8ecd-de1b1f458631", "estado": "ROJO" },
    { "id": "a89ef813-3ae8-4d5b-a707-8d1afd445b47", "estado": "ROJO" },
    { "id": "af4139b0-0b4a-4be5-8336-201ec14d895b", "estado": "ROJO" },
    { "id": "b401c18c-2ecb-412b-b81a-f6ce26290721", "estado": "ROJO" }
];

let ROJO = _.some(documentos, z => z.estado == "ROJO"); // existe el rojo 
let VERDE = _.some(documentos, z => z.estado == "VERDE"); // existe el verde 
let AMARILLO = _.some(documentos, z => z.estado == "AMARILLO"); // existe el amarillo 
//console.log(ROJO);              //  -> true
//console.log(VERDE);             //  -> false
//console.log(AMARILLO);          //  -> false
/* 
        Estado: (la premisa)
            - Si todos están en verde: VERDE
            - Si todos están en rojo: ROJO
            - Cualquier otra opción: AMARILLO. 
*/

function statusContratista() {
    if(ROJO == true && VERDE == true && AMARILLO && true){
        return;
    }
    if(ROJO == true && VERDE == false && AMARILLO == false){
        console.log('se edita al contratista en estado rechazado');
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/api/v1/contratistas/estado/6e469e01-0bca-4c2f-9f21-47696aba6d9f',{
                headers: { "Content-Type": "application/json", "Access-Control-Origin": "*" },
                method: 'PATCH',
                body: JSON.stringify({
                    estado: 'ROJO'
                })
            })
            .then(response => response.json())
            .then(data => (data.ok)
                ? resolve(console.log("se edito el estado del contratista"))
                : reject(console.log("fallo al cargar, vuelva a intentar mas tarde")))
            .catch(err => console.log(err))
        })
    }
    if(ROJO == false && VERDE == true && AMARILLO == false){
        console.log('se edita al contratista en estado aprobado');
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/api/v1/contratistas/estado/6e469e01-0bca-4c2f-9f21-47696aba6d9f',{
                headers: { "Content-Type": "application/json", "Access-Control-Origin": "*" },
                method: 'PATCH',
                body: JSON.stringify({
                    estado: 'VERDE'
                })
            })
            .then(response => response.json())
            .then(data => (data.ok)
                ? resolve(console.log("se edito el estado del contratista"))
                : reject(console.log("fallo al cargar, vuelva a intentar mas tarde")))
            .catch(err => console.log(err))
        })
    }
}

statusContratista();
