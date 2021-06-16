const { _ } = require('underscore');


let contratistas = [
    {
        "id": "32e9ab05-a3a0-404d-9a4b-b9148b4e95f5",
        "username": "2027161634",
        "password": "1234",
        "razonSocial": "Electricidad Pepe S.A.",
        "nombre": "Jose",
        "apellido": "Gutierrez",
        "tipoDeContratista": "EMPRESA",
        "email": "jose.pepe@electricidadpepe.com",
        "cuit": "2027161634",
        "telefono": "45454545",
        "estado": "ROJO",
        "persona": [
            {
                "id": "61780d5a-f73b-423c-8c68-8dba0cd9ee3f",
                "nombre": "Joaquin",
                "apellido": "Gonzalez",
                "dni": "93161363",
                "cuit": "20931613634",
                "email": "j.gonzalez@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [
                    {
                        "id": "95bba57b-baff-4b85-a952-47d3f28ab525",
                        "documentacion": "Programa de seguridad",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "96ff1e0f-1338-4b02-82fd-8fbee85a14dc",
                        "documentacion": "Programa unico de seguridad",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer orci lacus, feugiat quis ac magna."
                    }
                ],
                "docPersonal": [
                    {
                        "id": "18e2193a-a9f1-459e-a5f5-384979de2857",
                        "documentacion": "Capacitacion sobre el trabajo a realizar ",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "bf043284-95a0-45fd-b495-0631b789adda",
                        "documentacion": "Alta Temprana",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "c6e8358e-aaad-4341-bb47-809a431ddcc5",
                        "documentacion": "Recibo Sueldo",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer orci lacus, vehicula ac magna"
                    },
                    {
                        "id": "e9038321-5385-4153-8610-fb1d302702aa",
                        "documentacion": "Constancia de antecedentes penales",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "AMARILLO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Mauris et neque. Phasellus vehicula"
                    }
                ]
            },
            {
                "id": "99980d5a-f73b-423c-8c68-8dba0cd9ee3f",
                "nombre": "Franco",
                "apellido": "Gonzalez",
                "dni": "22161363",
                "cuit": "20221613634",
                "email": "f.gonzalez@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [
                    {
                        "id": "zzbba57b-baff-4b85-a952-47d3f28ab525",
                        "documentacion": "Programa de seguridad",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "zzff1e0f-1338-4b02-82fd-8fbee85a14dc",
                        "documentacion": "Programa unico de seguridad",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer orci lacus, feugiat quis ac magna."
                    }
                ],
                "docPersonal": [
                    {
                        "id": "18e2193a-zzzz-459e-a5f5-384979de2857",
                        "documentacion": "Capacitacion sobre el trabajo a realizar ",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "bf043284-95a0-zzzz-b495-0631b789adda",
                        "documentacion": "Alta Temprana",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna."
                    },
                    {
                        "id": "c6e8358e-aaad-yyyy-bb47-809a431ddcc5",
                        "documentacion": "Recibo Sueldo",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer orci lacus, vehicula ac magna"
                    },
                    {
                        "id": "e9038321-5385-8888-8610-fb1d302702aa",
                        "documentacion": "Constancia de antecedentes penales",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "AMARILLO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Mauris et neque. Phasellus vehicula"
                    }
                ]
            },
            {
                "id": "6ac2c4c6-865a-487d-8df4-e857eb919d62",
                "nombre": "Martin",
                "apellido": "Perez",
                "dni": "27161363",
                "cuit": "20271613634",
                "email": "martin.perez@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [
                    {
                        "id": "2699c892-e63c-409e-8996-b20b4df88f7b",
                        "documentacion": "Clausula de No Repeticion a nombre de la empresa",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna"
                    },
                    {
                        "id": "29132caa-3f1b-4444-94ca-ec8e593f56af",
                        "documentacion": "Formulario F931 vigente + comprobante de pago y analitico",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer orci lacus, feugiat magna"
                    },
                    {
                        "id": "f50c17d4-65b6-4cdc-87a2-e425679823aa",
                        "documentacion": "Certificado del Seguro de Vida Obligatorio con nomina cubierta",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "AMARILLO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer orci lacus, vehicula ac magna."
                    }
                ],
                "docPersonal": [
                    {
                        "id": "1bf6ac9b-e5a1-49c0-a252-68f9483a255a",
                        "documentacion": "Aviso de inicio de obra",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "AMARILLO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Mauris et neque in velit rhoncus dignissim"
                    },
                    {
                        "id": "b6950c1e-34d6-4c11-be4d-aca4d362e3ae",
                        "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico ",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer orci lacus, feugiat quis magna"
                    },
                    {
                        "id": "e9f62888-dde2-4506-803a-b24673a1458a",
                        "documentacion": "Programa de seguridad",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Integer orci lacus, feugiat quis molestie."
                    }
                ]
            }
        ],
        "docInstitucionalEmpresa": [
            {
                "id": "21abd485-154c-487e-bfbf-0e6f60ffde71",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "67ee63de-d570-492b-85c0-213eca15c8b9",
                "documentacion": "Programa de seguridad",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "ROJO",
                "aprobadoPor": "Coca Cola Company",
                "observaciones": "Integer orci lacus, feugiat quis molestie."
            },
            {
                "id": "6974b0d9-47ee-4f5f-9731-4e86f7e56d78",
                "documentacion": "Aviso de inicio de obra.",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "AMARILLO",
                "aprobadoPor": "Coca Cola Company",
                "observaciones": "Mauris et neque in velit rhoncus dignissim."
            }
        ],
        "personaVehiculo": [
            {
                "id": "35eb2b3c-c277-4644-8f3c-70529a278ffa",
                "nombre": "Franco",
                "apellido": "Agugliaro",
                "dni": "93161363",
                "cuit": "20-93161363-",
                "email": "agugliaro@gmail.com",
                "telefono": "45454545",
                "patente": "RSV757D",
                "docVehiculoDTO": [
                    {
                        "id": "03ebdad1-d5a6-46ac-a58d-9bafff2802a6",
                        "documentacion": "Cedula Azul",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "VISTO",
                        "estado": "AMARILLO",
                        "aprobadoPor": "Coca Cola Company",
                        "observaciones": "Mauris et neque in velit rhoncus dignissim. "
                    },
                    {
                        "id": "1b83a391-f66f-4b4f-8730-b8ac0a759834",
                        "documentacion": "Registro conducir",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "ROJO",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer orci lacus, vehicula ac magna"
                    },
                    {
                        "id": "c940cf79-aa33-4381-8f79-392faa49a8c4",
                        "documentacion": "VTV",
                        "fechaDeCarga": "04/06/2021 ",
                        "fechaDeVencimiento": "04/06/2021 ",
                        "accion": "NO_VISTO",
                        "estado": "VERDE",
                        "aprobadoPor": "Laia S.A.",
                        "observaciones": "Integer vehicula ac magna."
                    }
                ]
            },
            {
                "id": "54f03f84-0642-455c-a9eb-4b9d692f4555",
                "nombre": "Hernan",
                "apellido": "Ferreyra",
                "dni": "233453452",
                "cuit": "20233453452",
                "email": "j.ferreyra@gmail.com",
                "telefono": "45454545",
                "patente": "MAC0789",
                "docVehiculoDTO": []
            }
        ]
    },
    {
        "id": "4461876d-d648-43b3-b2cf-fa0e335ff031",
        "username": "20338884443",
        "password": "1234",
        "razonSocial": "Mantenimiento S.A.",
        "nombre": "Mantenimiento",
        "apellido": "Santamarina",
        "tipoDeContratista": "EMPRESA",
        "email": "santamarina.mantenimiento@mail.com",
        "cuit": "20338884443",
        "telefono": "45454545",
        "estado": "AMARILLO",
        "persona": [
            {
                "id": "09150662-c9a4-4cf2-9764-ca0c7651bdcd",
                "nombre": "Daniel",
                "apellido": "Donato",
                "dni": "33222111",
                "cuit": "20332221112",
                "email": "daniel.donato@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [],
                "docPersonal": []
            },
            {
                "id": "678c7674-90cb-4929-a083-24d70854482d",
                "nombre": "German",
                "apellido": "Perez",
                "dni": "22333444",
                "cuit": "20223334443",
                "email": "german.perez@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [],
                "docPersonal": []
            }
        ],
        "docInstitucionalEmpresa": [
            {
                "id": "a3115a30-be72-448b-8978-9923caa6a7f6",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "b6697d5e-0e06-4990-b3b9-5383cdfc1a3c",
                "documentacion": "Obras repetitivas y de corta duracion",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "f1d4990a-1c6e-43ac-8f58-f42691ff11b6",
                "documentacion": "Programa de seguridad",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "ROJO",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            }
        ],
        "personaVehiculo": [
            {
                "id": "0b272277-221a-4e5d-8eb5-5e3cc38da998",
                "nombre": "Sofia",
                "apellido": "Zapata",
                "dni": "33555777",
                "cuit": "27335557779",
                "email": "sofia.zapata@gmail.com",
                "telefono": "45454545",
                "patente": "MXQ0789",
                "docVehiculoDTO": []
            },
            {
                "id": "121f672d-5317-44b8-b36d-6114548982d2",
                "nombre": "Javier",
                "apellido": "Villagra",
                "dni": "33222222",
                "cuit": "20332222222",
                "email": "javier.villagra@gmail.com",
                "telefono": "45454545",
                "patente": "BSV757D",
                "docVehiculoDTO": []
            }
        ]
    },
    {
        "id": "746fb6f8-899c-4405-814a-5aa7353db124",
        "username": "20283334442",
        "password": "1234",
        "razonSocial": "Empresa del medio Ambiente S.A.",
        "nombre": "Martin",
        "apellido": "Urquiza",
        "tipoDeContratista": "EMPRESA",
        "email": "martin.urquiza@gmail.com",
        "cuit": "20338884444",
        "telefono": "45454545",
        "estado": "VERDE",
        "persona": [
            {
                "id": "12121262-c9a4-4cf2-9764-ca0c7651bdcd",
                "nombre": "Romina",
                "apellido": "Briggs",
                "dni": "30222111",
                "cuit": "27302221112",
                "email": "romina.briggs@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [],
                "docPersonal": []
            },
            {
                "id": "13131374-90cb-4929-a083-24d70854482d",
                "nombre": "Carlos",
                "apellido": "Calvo",
                "dni": "34333444",
                "cuit": "20343334443",
                "email": "carlos.calvo@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [],
                "docPersonal": []
            }
        ],
        "docInstitucionalEmpresa": [
            {
                "id": "3617aca8-977b-44eb-be6e-eb6ac0def348",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "f3eebb84-f386-4db8-a12e-5bd4513484f8",
                "documentacion": "Programa de seguridad",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "AMARILLO",
                "aprobadoPor": "Coca Cola Company",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            }
        ],
        "personaVehiculo": [
            {
                "id": "00000cd5-3d9c-4eaf-a59c-80d408e34c1f",
                "nombre": "Pablo",
                "apellido": "Chernwo",
                "dni": "48522222",
                "cuit": "20485222222",
                "email": "wfeoi@gmail.com",
                "telefono": "45454545",
                "patente": "PSV757D",
                "docVehiculoDTO": []
            },
            {
                "id": "12345cd5-3d9c-4eaf-a59c-80d408e34c1f",
                "nombre": "Roberto",
                "apellido": "Marmol",
                "dni": "48222222",
                "cuit": "20482222222",
                "email": "roberto.marmol@gmail.com",
                "telefono": "45454545",
                "patente": "ASV757D",
                "docVehiculoDTO": []
            },
            {
                "id": "26571cd5-3d9c-4eaf-a59c-80d408e34c1f",
                "nombre": "Alejandro",
                "apellido": "Grillo",
                "dni": "38222222",
                "cuit": "20382222222",
                "email": "alejandra.grillo@gmail.com",
                "telefono": "45454545",
                "patente": "ZSV757D",
                "docVehiculoDTO": []
            }
        ]
    },
    {
        "id": "97fd0c53-4118-4e93-8073-5a7b240ba881",
        "username": "20332229991",
        "password": "1234",
        "razonSocial": "Imprenta S.A.",
        "nombre": "Marcelo",
        "apellido": "Guzman",
        "tipoDeContratista": "EMPRESA",
        "email": "guzman.marcelo@gmail.com",
        "cuit": "20332229991",
        "telefono": "45454545",
        "estado": "ROJO",
        "persona": [],
        "docInstitucionalEmpresa": [
            {
                "id": "3129982d-1094-4dee-8d46-ec64f0b26bc7",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "Z1Z1Z12d-1094-4dee-8d46-ec64f0b26bc7",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            }
        ],
        "personaVehiculo": []
    },
    {
        "id": "bc3da65d-37fd-427d-a2df-c83adf3734df",
        "username": "27334443331",
        "password": "1234",
        "razonSocial": "Vanesa Leites",
        "nombre": "Vanesa",
        "apellido": "Leites",
        "tipoDeContratista": "INDEPENDIENTE",
        "email": "rrhh.profesional@gmail.com",
        "cuit": "27334443331",
        "telefono": "45454545",
        "estado": "VERDE",
        "persona": [
            {
                "id": "ZZZZZZ74-90cb-4929-a083-24d70854482d",
                "nombre": "Mariana",
                "apellido": "Campo",
                "dni": "34333433",
                "cuit": "20343334433",
                "email": "mariana.campo@gmail.com",
                "telefono": "45454545",
                "docObjetoDeVisita": [],
                "docPersonal": []
            }
        ],
        "docInstitucionalEmpresa": [
            {
                "id": "1111111d-1094-4dee-8d46-ec64f0b26bc7",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            },
            {
                "id": "tttttttd-1094-4dee-8d46-ec64f0b26bc7",
                "documentacion": "Formulario F931 vigente mas comprobante de pago y analitico",
                "fechaDeCarga": "04/06/2021 ",
                "fechaDeVencimiento": "04/06/2021 ",
                "accion": "NO_VISTO",
                "estado": "VERDE",
                "aprobadoPor": "Laia S.A.",
                "observaciones": "Integer orci lacus, feugiat quis magna"
            }
        ],
        "personaVehiculo": []
    }
]

let id = _.find(contratistas, (z) => { 
    return z.id === '32e9ab05-a3a0-404d-9a4b-b9148b4e95f5';
})

let martin = _.find(contratistas, (z) => {
    return z.id === `746fb6f8-899c-4405-814a-5aa7353db124`;
})

console.log(_.size(id.persona)) //3 personas
console.log(_.size(id.personaVehiculo)) //2 personasvehiculo

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(_.size(id.docInstitucionalEmpresa))




console.log('----------------------------------------------------------------------------')
console.log(_.size(martin.docInstitucionalEmpresa))

//let persona = _.find(contratistas, (z) => z.persona);
//let persona = _.size(contratistas, 'persona')

//console.log(_.size(persona));
//console.log(persona)
//var grouped = _.groupBy(contratistas, 'length')
//console.log(grouped)
//console.log(_.sortBy(contratistas, 'persona'))


console.log('----------------------------------------------------------------------------')
//console.log(_.detect(list, function (obj) {return obj.doc.id === "123"}))


