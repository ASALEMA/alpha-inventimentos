const clienteModel = require('../models/clienteModel');

const comprar = async (codCliente, codAtivo, qtdeAtivo) => {
  await clienteModel.comprar(codCliente, codAtivo, qtdeAtivo);
};

module.exports = {
  comprar,
};
