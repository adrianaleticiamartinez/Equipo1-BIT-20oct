var Cliente = require("../models/cliente");





//obtener cliente por idcliente
async function getById(req, res) {
    var clientes = await Cliente.find({ idCliente: req.params['id'] }).limit(1000);
    if(req.perfil == 'Restringido'){
        var datos = await datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        var datos = await datosValidador(clientes);
    } 
      if(req.perfil == 'Manager'){
        var datos = clientes;
    }
    
    try {
        res.status(200).send({ clientes: datos });
    } catch (err) {
        res.status(500).send({ error: err });

    }
}
//obtener todos los clientes
async function getAll(req, res) {
    var clientes = await Cliente.find({  }).limit(1000);

    
    if(req.perfil == 'Restringido'){
        console.log("restringido");
        var datos = await datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        console.log("validador");
        var datos = await datosValidador(clientes);
    }
    if(req.perfil == 'Manager'){
        var datos = clientes;
    }
    
    try {
        res.status(200).send({ clientes: datos });
    } catch (err) {
        res.status(500).send({ error: err });

    }

}

//obtener clientes dependiendo a querys
async function getByQuery(req, res) {
    var clientes = await Cliente.find( req.query).limit(1000);
    if(req.perfil == 'Restringido'){
        var datos = await datosRestringidos(clientes);
    }
    if(req.perfil == 'Validador'){
        var datos = await datosValidador(clientes);
    }
    if(req.perfil == 'Manager'){
        var datos = clientes;
    }

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
        dato.apellidoPaterno = dato.apellidoPaterno+ ""+asterisco;
    


        asterisco1 = ''.padStart(dato.apellidoMaterno.length -1,'*')
        dato.apellidoMaterno = dato.apellidoMaterno.substr(0,2);
        dato.apellidoMaterno =dato.apellidoMaterno+ ""+asterisco1;

        asterisco2 = ''.padStart(dato.fechaNacimiento.length -1,'*')
        dato.fechaNacimiento = dato.fechaNacimiento.substr(0,2);
        dato.fechaNacimiento =dato.fechaNacimiento+ ""+asterisco2;
      

        asterisco3 = ''.padStart(dato.nacionalidad.length -1,'*')
        dato.nacionalidad = dato.nacionalidad.substr(0,2);
        dato.nacionalidad =dato.nacionalidad+ ""+asterisco3;
   

        asterisco4 = ''.padStart(dato.rfc.length -1,'*')
        dato.rfc = dato.rfc.substr(0,2);
        dato.rfc =dato.rfc+ ""+asterisco4;

        asterisco5 = ''.padStart(dato.numeroID.length -1,'*')
        dato.numeroID = dato.numeroID.substr(0,2);
        dato.numeroID = dato.numeroID+ ""+asterisco5;

        asterisco6 = ''.padStart(dato.email.length -1,'*')
        dato.email = dato.email.substr(0,2);
        dato.email =dato.email+ ""+asterisco6;


     

        return dato;
     
        
    });

    


}



function datosRestringidos(datos){
    var datos = datos.filter(dato => {
         dato.apellidoPaterno ="";
         dato.apellidoMaterno ="";
         dato.fechaNacimiento="";
         dato.nacionalidad="";
         dato.rfc="";
         dato.numeroID="";
         dato.email="";
         dato.tipoID="";
  
        return dato;

    });

  
    return datos;
   
}





module.exports = {
    getByQuery,
    getAll,
    getById
};
