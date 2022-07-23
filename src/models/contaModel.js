const connection = require('./connection');

const atualizarSaldo = async (codCliente, valSaldo) => {
  const query = 'UPDATE alpha_investimentos_api_db.conta SET val_saldo = ? WHERE cod_cliente = ?;';
  await connection.execute(query, [valSaldo, codCliente]);
};

const obterPorCodigoCliente = async (codCliente) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.conta WHERE cod_cliente = ?;';
  const [result] = await connection.execute(query, [codCliente]);

  return !result || result.length === 0
    ? null
    : result[0];
};

module.exports = {
  atualizarSaldo,
  obterPorCodigoCliente,
};
