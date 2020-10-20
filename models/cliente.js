var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClienteSchema = Schema(
    {
        idCliente: {
            type: String,
        },
        apellidoPaterno: {
            type: String,
        },
        nombre: {
            type: String,
        },
        apellidoMaterno: {
            type: String,
        },
        fechaNacimiento: {
            type: String,
        },
        sexo: {
            type: String,
        },
        segmento: {
            type: String,
        },
        nacionalidad: {
            type: String,
        },
        rfc: {
            type: String,
        },
        tipoID: {
            type: String,
        },
        numeroID: {
            type: String,
        },
        cuenta: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("cliente", ClienteSchema);
