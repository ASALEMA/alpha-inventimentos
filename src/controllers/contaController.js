const express = require('express');
const { validarCampos, validarCodigoCliente } = require('../middlewares/contasMiddlewares');

const router = express.Router();

router.post('/deposito', [validarCampos], async (_req, res) => res.status(200).send('/contas/deposito'));

router.post('/saque', [validarCampos], async (_req, res) => res.status(200).send('/contas/saque'));

router.get('/:codCliente', [validarCodigoCliente], async (_req, res) => res.status(200).send('/contas/:cod-cliente.'));

module.exports = router;
