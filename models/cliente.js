var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClienteSchema = Schema(
    {
        idCliente: {
            type: String,
            required: [true, "Debe tener un idCliente "],
        },
        apellidoPaterno: {
            type: String,
            required: [true, "Debe tener un apellido paterno "],
        },
        nombre: {
            type: String,
        },
     
        fechaNacimiento: {
            type: String,
            required: [true, "Debe tener una fecha de nacimiento "],
        },
        sexo: {
            type:String,
            enum: ['Masculino', 'Femenino'],
            required: [true, 'Debe tener un genero'],
        },
        segmento: {
            type: String,
            enum: ['0', '1', '2'],
            required: [true, "Debe tener un segmento "],
        },
        nacionalidad: {
            type: String,
            enum: ['Mexicana', 'Extranjera'],
            required: [true, "Debe tener una nacionalidad "],
        },
        apellidoMaterno: {
            type: String,
            required: function() {
                return this.nacionalidad == "Mexicana";
              }
           
        },
        rfc: {
            type: String,
            required: function() {
                return this.nacionalidad == "Mexicana";
              }
        },
        tipoID: {
            type: String,
            enum: function(){
                if(this.nacionalidad == "Mexicana"){
                    return  ['INE/IFE', 'Licencia', 'Pasaporte','cédula profesional'];
                }else{
                    return ['Pasaporte'];
                }
            },
            required: [true, "Debe tener un tipoID "],
        },
        numeroID: {
            type: String,
            required: [true, "Debe tener un numeroID "],
        },
        cuenta: {
            type: String,
            required: [true, "Debe tener una cuenta "],
        },
        email: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("cliente", ClienteSchema);
