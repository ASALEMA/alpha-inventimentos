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

module.exports = { validarCampos };
