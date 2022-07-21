const connection = require('./connection');

const obterQuantidadeDisponivel = async (codAtivo) => {
  const query = 'SELECT * FROM alpha_investimentos_api_db.carteira_corretora WHERE  cod_ativo = ?';
  const [result] = await connection.execute(query, [codAtivo]);

  return !result || result.length === 0
    ? 0
    : result[0].qtd_ativo_disponivel;
};

module.exports = {
  obterQuantidadeDisponivel,
};
