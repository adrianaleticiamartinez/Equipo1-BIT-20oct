var jwt = require('jwt-simple');
var moment = require('moment');

var secret = 'd7aad1b4bb46af45cd47442097528ffa';

exports.createToken = function (user) {
    console.log(user);
    var payload = {
        
        nombre: user.nombre,
        perfil: user.perfil,
        
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix(),
    }
    return jwt.encode(payload, secret);
}