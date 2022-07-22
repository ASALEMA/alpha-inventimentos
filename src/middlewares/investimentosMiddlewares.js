const corretoraModel = require('../models/corretoraModel');
const clienteModel = require('../models/clienteModel');

const validarCampos = (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  if (!codAtivo || codAtivo <= 0) {
    return res.status(400).json({ erro: 'Código de ativo inválido.' });
  }

  if (!qtdeAtivo || qtdeAtivo <= 0) {
    return res.status(400).json({ erro: 'Quantidade de ativo inválida.' });
  }

  next();
};

const validarCompra = async (req, res, next) => {
  const { codAtivo, qtdeAtivo } = req.body;
  const quantidadeDisponivel = await corretoraModel.obterQuantidadeDisponivel(codAtivo);

  if (quantidadeDisponivel < qtdeAtivo) {
    return res.status(400).json({ erro: 'Compra não realizada. Quantidade disponivel excede a quantidade solicitada.' });
  }

  next();
};

const validarVenda = async (req, res, next) => {
  const { codAtivo, qtdeAtivo } = req.body;
  const quantidadeDisponivel = await clienteModel.obterQuantidadeDisponivel(codAtivo);

  if (quantidadeDisponivel < qtdeAtivo) {
    return res.status(400).json({ erro: 'Compra não realizada. Quantidade disponivel excede a quantidade solicitada.' });
  }

  next();
};

module.exports = { validarCampos, validarCompra, validarVenda };
