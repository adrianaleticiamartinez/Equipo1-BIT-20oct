// middleware.js
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'd7aad1b4bb46af45cd47442097528ffa';
exports.ensureAuthenticated = function (req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ message: "Tu petición no tiene cabecera de autorización" });
    }

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, secret);

    if (payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send({ message: "El token ha expirado" });
    }

    req.user = payload.sub;
    next();
}