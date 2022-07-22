const connection = require('./connection');

const comprar = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO alpha_investimentos_api_db.carteira_cliente (cod_cliente, cod_ativo, qtd_ativo) VALUES (?,?,?);';
  const [result] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);

  return result.insertId;
};

module.exports = {
  comprar,
};
