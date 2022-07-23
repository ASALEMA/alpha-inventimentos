const express = require('express');
const { validarCampos, validarCodigoCliente, validarSaque } = require('../middlewares/contasMiddlewares');
const contaService = require('../services/contaService');

const router = express.Router();

router.post('/deposito', [validarCampos], async (req, res) => {
  const { codCliente, valor } = req.body;
  await contaService.depositar(codCliente, valor);

  return res.status(200).json({ mensagem: 'Operação realizada com sucesso.' });
});

router.post('/saque', [validarCampos, validarSaque], async (req, res) => {
  const { codCliente, valor } = req.body;
  await contaService.sacar(codCliente, valor);

  return res.status(200).json({ mensagem: 'Operação realizada com sucesso.' });
});

router.get('/:codCliente', [validarCodigoCliente], async (req, res) => {
  const { codCliente } = req.params;
  const conta = await contaService.obterPorCliente(codCliente);

  return res.status(200).json(conta);
});

module.exports = router;
