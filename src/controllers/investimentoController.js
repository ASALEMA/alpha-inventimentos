const express = require('express');
const { validarCampos, validarCompra, validarVenda } = require('../middlewares/investimentosMiddlewares');
const clienteService = require('../services/clienteService');

const router = express.Router();

router.post('/comprar', [validarCampos, validarCompra], async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  await clienteService.comprar(codCliente, codAtivo, qtdeAtivo);

  return res.status(201).send();
});

router.post('/vender', [validarCampos, validarVenda], async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  await clienteService.vender(codCliente, codAtivo, qtdeAtivo);

  return res.status(201).send();
});

module.exports = router;
