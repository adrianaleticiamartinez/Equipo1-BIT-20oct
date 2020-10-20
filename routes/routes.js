const express = require('express');
const UserQuery = require('../services/UserQuery');

function clientApi(app) {
  const router = express.Router();
  app.use('/api/hackaton', router);

  const clientService = new UserQuery();

  router.post('/', async function(req, res, next) {
    const { user: usuario, password: auth } = req.query;

    try {
      const data = await clientService.getUser(usuario, auth );

      if(Object.keys(data).length > 0) {
        res.status(200).json({
          data: data,
          message: 'Usuario encontrado'
        });
      } else {
        res.status(200).json({
          data: data,
          message: 'Usuario No encontrado'
        });
      }
      
    } catch (err) {
      next(err);
    }
  });
}

module.exports = clientApi;