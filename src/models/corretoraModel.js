const connection = require('./connection');

const obterQuantidadeDisponivel = async (codAtivo) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.carteira_corretora WHERE  cod_ativo = ?';
  const [result] = await connection.execute(query, [codAtivo]);

  return !result || result.length === 0
    ? 0
    : result[0].qtd_ativo_disponivel;
};

const obterAtivosDisponiveis = async (codAtivo) => {
  const query = `
    SELECT carteira.cod_ativo, carteira.qtd_ativo_disponivel, ativo.val_ativo
    FROM alpha_investimentos_api_db.carteira_corretora AS carteira
    INNER JOIN alpha_investimentos_api_db.ativo AS ativo ON ativo.cod_ativo = carteira.cod_ativo
    WHERE carteira.cod_ativo = ?;`;
  const [result] = await connection.execute(query, [codAtivo]);

  return !result || result.length === 0
    ? null
    : result;
};

const atualizarCarteira = async (codAtivo, qtdeAtivo) => {
  const query = 'UPDATE alpha_investimentos_api_db.carteira_corretora SET qtd_ativo_disponivel = ? WHERE cod_ativo = ?;';
  await connection.execute(query, [qtdeAtivo, codAtivo]);
};

const obterValorAtivo = async (codAtivo) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.ativo WHERE  cod_ativo = ?';
  const [result] = await connection.execute(query, [codAtivo]);

  return !result || result.length === 0
    ? 0
    : result[0].val_ativo;
};

module.exports = {
  obterQuantidadeDisponivel,
  obterValorAtivo,
  obterAtivosDisponiveis,
  atualizarCarteira,
};
