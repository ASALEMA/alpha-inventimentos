const connection = require('./connection');

const adicionarNovoAtivo = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO alpha_investimentos_api_db.carteira_cliente (cod_cliente, cod_ativo, qtd_ativo) VALUES (?,?,?);';
  const [result] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);

  return result.insertId;
};

const obterQuantidadeDisponivel = async (codAtivo) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.carteira_cliente WHERE  cod_ativo = ?';
  const [result] = await connection.execute(query, [codAtivo]);

  return !result || result.length === 0
    ? 0
    : result[0].qtd_ativo;
};

const atualizarCarteira = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'UPDATE alpha_investimentos_api_db.carteira_cliente  SET qtd_ativo = ? WHERE  cod_cliente = ? AND  cod_ativo = ?;';
  await connection.execute(query, [qtdeAtivo, codCliente, codAtivo]);
};

const salvarHistoricoOperacao = async (
  codCliente,
  codAtivo,
  codTipoOperacao,
  qtdAtivo,
  valorAtivo,
) => {
  const query = 'INSERT INTO alpha_investimentos_api_db.cliente_historico_operacao (cod_cliente, cod_ativo, cod_tipo_operacao, qtd_ativo, val_ativo) VALUES (?,?,?,?,?);';
  const [result] = await connection
    .execute(query, [codCliente, codAtivo, codTipoOperacao, qtdAtivo, valorAtivo]);

  return result.insertId;
};

const obterAtivoCarteiraCliente = async (codCliente, codAtivo) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.carteira_cliente WHERE cod_cliente = ? AND cod_ativo = ?';
  const [result] = await connection.execute(query, [codCliente, codAtivo]);

  return !result || result.length === 0
    ? null
    : result[0];
};

const obterCarteiraCliente = async (codCliente) => {
  const query = `
    SELECT * 
    FROM alpha_investimentos_api_db.carteira_cliente AS carteira
    INNER JOIN alpha_investimentos_api_db.ativo AS ativo ON ativo.cod_ativo = carteira.cod_ativo
    WHERE cod_cliente = ?;`;
  const [result] = await connection.execute(query, [codCliente]);

  return !result || result.length === 0
    ? null
    : result;
};

module.exports = {
  adicionarNovoAtivo,
  salvarHistoricoOperacao,
  obterAtivoCarteiraCliente,
  atualizarCarteira,
  obterCarteiraCliente,
  obterQuantidadeDisponivel,
};
