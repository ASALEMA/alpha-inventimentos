const express = require('express');
const { validarCodigoCliente, validarCodigoAtivo } = require('../middlewares/ativosMiddlewares');
const clienteService = require('../services/clienteService');
const corretoraService = require('../services/corretoraService');

const router = express.Router();

router.get('/cliente/:codCliente', [validarCodigoCliente], async (req, res) => {
  const { codCliente } = req.params;
  const carteira = await clienteService.obterCarteira(codCliente);
  return res.status(200).json(carteira);
});

router.get('/corretora/:codAtivo', [validarCodigoAtivo], async (req, res) => {
  const { codAtivo } = req.params;
  const ativo = await corretoraService.obterAtivosDisponiveis(codAtivo);
  return res.status(200).json(ativo);
});

module.exports = router;
