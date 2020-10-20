var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema(
    {
        usuario: {
            type: String,
            required: [true, "Debe tener un nombre usuario "],
        },
        auth: {
            type: String,
        },
        nombreCompleto: {
            type: String,
        },
        area: {
            type: String,
            enum: [
                "Comercial",
                "Sucursales",
                "Datos",
                "Banca digital",
                "Control",
                "Auditoria",
                "Sucursales",
                "Ventas",
                "Cajeros",
            ],
            required: [true, "Debe tener un area"],
        },
        ubicacion: {
            type: String,
            required: [true, "Debe tener una fecha fin"],
        },
        segmento: {
            type: Number,
            enum: [0, 1, 2],
        },
        perfil: {
            type: String,
            enum: ["Manager", "Validador", "Restringido"],
            required: [true, "Debe tener un Perfil"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
