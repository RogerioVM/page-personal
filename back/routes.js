const express = require('express');
const routes = express.Router();

routes.get('/dados', (req,res) => {

    console.log(req.body)

    res.send('Primeira mensagem');

});

module.exports = routes;