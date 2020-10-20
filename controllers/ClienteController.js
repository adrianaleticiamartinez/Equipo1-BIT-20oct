var Cliente = require("../models/cliente");





//obtener cliente por idcliente
async function getById(req, res) {
    var clientes = await Cliente.find({ idCliente: req.params['id'] });
    if(req.perfil == 'Restringido'){
        var datos = datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        var datos = datosValidador(clientes);
    }
    
    try {
        res.status(200).send({ clientes: datos });
    } catch (err) {
        res.status(500).send({ error: err });

    }
}
//obtener todos los clientes
async function getAll(req, res) {

    if(req.perfil == 'Restringido'){
        var datos = datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        var datos = datosValidador(clientes);
    }
    var clientes = await Cliente.find({  });
    try {
        res.status(200).send({ clientes: datos });
    } catch (err) {
        res.status(500).send({ error: err });

    }

}

//obtener clientes dependiendo a querys
async function getByQuery(req, res) {
    if(req.perfil == 'Restringido'){
        var datos = datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        var datos = datosValidador(clientes);
    }

    var clientes = await Cliente.find( req.query);
    try {
        res.status(200).send({ tarea: datos });
    } catch (err) {
        res.status(500).send({ error: err });
    }
}


async function datosValidador(datos){
    return datos.filter(dato => {
        asterisco = ''.padStart(dato.apellidoPaterno.length -1,'*')
        dato.apellidoPaterno = dato.apellidoPaterno.substr(0,2);
        dato.apellidoPaterno =+ asterisco;


        asterisco = ''.padStart(dato.apellidoMaterno.length -1,'*')
        dato.apellidoMaterno = dato.apellidoMaterno.substr(0,2);
        dato.apellidoMaterno =+ asterisco;

        asterisco = ''.padStart(dato.fechaNacimiento.length -1,'*')
        dato.fechaNacimiento = dato.fechaNacimiento.substr(0,2);
        dato.fechaNacimiento =+ asterisco;

        asterisco = ''.padStart(dato.nacionalidad.length -1,'*')
        dato.nacionalidad = dato.nacionalidad.substr(0,2);
        dato.nacionalidad =+ asterisco;

        asterisco = ''.padStart(dato.rfc.length -1,'*')
        dato.rfc = dato.rfc.substr(0,2);
        dato.rfc =+ asterisco;

        asterisco = ''.padStart(dato.numeroID.length -1,'*')
        dato.numeroID = dato.numeroID.substr(0,2);
        dato.numeroID =+ asterisco;

        asterisco = ''.padStart(dato.email.length -1,'*')
        dato.email = dato.email.substr(0,2);
        dato.email =+ asterisco;

        asterisco = ''.padStart(dato.email.length -1,'*')
        dato.email = dato.email.substr(0,2);
        dato.email =+ asterisco;

        return dato;
     
        
    });

    


}



function datosRestringidos(datos){
    return datos.filter(dato => {
        delete dato.apellidoPaterno;
        delete dato.apellidoMaterno;
        delete dato.fechaNacimiento;
        delete dato.nacionalidad;
        delete dato.rfc;
        delete dato.numeroID;
        delete dato.email;
        delete dato.tipoID;
    
        return dato;

    });
   
}





module.exports = {
    getByQuery,
    getAll,
    getById
};
