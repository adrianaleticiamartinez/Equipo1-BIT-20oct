
var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var compression = require("compression");
var cliente_routes = require('./routes/cliente');
var user_routes = require('./routes/user');

var port = process.env.PORT || 4204;
var app = express();

app.use((req, res, next) => {
    res.header("Content-Type: application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

mongoose.connect(
    "mongodb://localhost:27017/hackaton_db",
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("Corriendo servidor");
            app.listen(port, function () {
                console.log("Servidor conectado en: " + port);
            });
        }
    }
);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(compression());


app.use('/api/cliente', cliente_routes);
app.use('/api/user', user_routes);

module.exports = app;