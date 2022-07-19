const express = require('express');
const { validarCampos } = require('../middlewares/investimentosMiddlewares');

const router = express.Router();

router.post('/comprar', [validarCampos], async (_req, res) => res.status(200).send('/investimentos/comprar'));

router.post('/vender', [validarCampos], async (_req, res) => res.status(200).send('/investimentos/vender'));

module.exports = router;
