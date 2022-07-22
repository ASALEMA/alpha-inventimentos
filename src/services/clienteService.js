const clienteModel = require('../models/clienteModel');
const corretoraModel = require('../models/corretoraModel');

const comprar = async (codCliente, codAtivo, qtdeAtivo) => {
  const ativoCarteira = await clienteModel.obterAtivoCarteiraCliente(codCliente, codAtivo);
  const quantidadeDisponivelCorretora = await corretoraModel.obterQuantidadeDisponivel(codAtivo);

  if (!ativoCarteira) {
    await clienteModel.comprar(codCliente, codAtivo, qtdeAtivo);
  } else {
    const qtdeAtualizada = qtdeAtivo + ativoCarteira.qtd_ativo;
    await clienteModel.atualizarCarteira(codCliente, codAtivo, qtdeAtualizada);
  }

  await corretoraModel.atualizarCarteira(codAtivo, quantidadeDisponivelCorretora - qtdeAtivo);

  const valorAtivo = await corretoraModel.obterValorAtivo(codAtivo);
  const codTipoOperacaoCompra = 1;
  await clienteModel.salvarHistoricoOperacao(
    codCliente,
    codAtivo,
    codTipoOperacaoCompra,
    qtdeAtivo,
    valorAtivo,
  );
};

const obterCarteira = async (codCliente) => {
  const carteira = await clienteModel.obterCarteiraCliente(codCliente);
  return carteira.map((ativo) => ({
    codCliente: ativo.cod_cliente,
    codAtivo: ativo.cod_ativo,
    qtdeAtivo: ativo.qtd_ativo,
    valor: ativo.val_ativo,
  }));
};

module.exports = {
  comprar,
  obterCarteira,
};
