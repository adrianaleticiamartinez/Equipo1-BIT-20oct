const express = require('express');
const app = express();

const { config } = require('./config/index');
const clientApi = require('./routes/routes');

app.use(express.json());

clientApi( app );

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
})