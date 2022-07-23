const contaModel = require('../models/contaModel');

const obterPorCliente = async (codCliente) => {
  const conta = await contaModel.obterPorCodigoCliente(codCliente);
  return { codCliente, saldo: parseFloat(conta.val_saldo) };
};

const depositar = async (codCliente, valor) => {
  const { saldo } = await obterPorCliente(codCliente);
  const saldoAtualizado = saldo + (parseFloat(valor.toFixed(2)));

  await contaModel.atualizarSaldo(codCliente, saldoAtualizado);
};

const sacar = async (codCliente, valor) => {
  const { saldo } = await obterPorCliente(codCliente);
  const saldoAtualizado = saldo - (parseFloat(valor.toFixed(2)));

  await contaModel.atualizarSaldo(codCliente, saldoAtualizado);
};

module.exports = {
  depositar,
  sacar,
  obterPorCliente,
};
