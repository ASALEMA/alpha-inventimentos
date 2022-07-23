const contaService = require('../services/contaService');

const validarCampos = async (req, res, next) => {
  const { codCliente, valor } = req.body;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  if (!valor || valor <= 0) {
    return res.status(400).json({ erro: 'Valor inválido.' });
  }

  const conta = await contaService.obterPorCliente(codCliente);

  if (!conta) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  next();
};

const validarCodigoCliente = async (req, res, next) => {
  const { codCliente } = req.params;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  const conta = await contaService.obterPorCliente(codCliente);

  if (!conta) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  next();
};

const validarSaque = async (req, res, next) => {
  const { codCliente, valor } = req.body;
  const conta = await contaService.obterPorCliente(codCliente);
  console.log(conta, valor);

  if (!conta.saldo || valor > parseFloat(conta.saldo)) {
    return res.status(400).json({ erro: 'Saldo insuficiente para saque.' });
  }

  next();
};

module.exports = {
  validarCampos,
  validarCodigoCliente,
  validarSaque,
};
