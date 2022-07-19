const express = require('express');
const ativoController = require('./controllers/ativoController');
const contaController = require('./controllers/contaController');
const investimentoController = require('./controllers/investimentoController');

const routers = express.Router();

routers.use('/ativos', ativoController);
routers.use('/contas', contaController);
routers.use('/investimentos', investimentoController);

module.exports = routers;
