const express = require('express');
const { validarCodigoCliente, validarCodigoAtivo } = require('../middlewares/ativosMiddlewares');

const router = express.Router();

router.get('/:codCliente', [validarCodigoCliente], async (_req, res) => res.status(200).send('/ativos/:cod-cliente'));

router.get('/:codAtivo', [validarCodigoAtivo], async (_req, res) => res.status(200).send('/ativos/:cod-ativo'));

module.exports = router;
