const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

const ativoController = require('./controllers/ativoController');
const contaController = require('./controllers/contaController');
const investimentoController = require('./controllers/investimentoController');

const routers = express.Router();

routers.use('/api-docs', swaggerUi.serve);
routers.get('/api-docs', swaggerUi.setup(swaggerDocument, { explorer: true }));
routers.use('/ativos', ativoController);
routers.use('/contas', contaController);
routers.use('/investimentos', investimentoController);

module.exports = routers;
