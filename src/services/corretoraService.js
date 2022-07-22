const corretoraModel = require('../models/corretoraModel');

const obterAtivosDisponiveis = async (codCliente) => {
  const carteira = await corretoraModel.obterAtivosDisponiveis(codCliente);
  return carteira.map((ativo) => ({
    codAtivo: ativo.cod_ativo,
    qtdeAtivo: ativo.qtd_ativo_disponivel,
    valor: ativo.val_ativo,
  }));
};

module.exports = {
  obterAtivosDisponiveis,
};
