var User = require("../models/user");
var jwt = require('../helpers/jwt');







//login
function login(req, res) {
    var data = req.body;
    console.log(User.findOne({}));
    User.findOne({ usuario: data.usuario }, (err, user_data) => {

        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        }
        else {

            if (user_data) {


                if (data.auth, user_data.auth) {
            
                    res.status(200).send({ jwt: jwt.createToken(user_data) , message: "Datos correctos , sesion iniciada" });
                } else {
                    res.status(403).send({ message: "La usuario o auth no existe" });
                }



            }
            else {
                res.status(403).send({ message: "La usuario no existe" });
            }
        }
    });
}




module.exports = {

    login
};
