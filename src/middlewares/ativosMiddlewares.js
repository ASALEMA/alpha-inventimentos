const validarCodigoCliente = (req, res, next) => {
  const { codCliente } = req.params;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  next();
};

const validarCodigoAtivo = (req, res, next) => {
  const { codAtivo } = req.params;

  if (!codAtivo || codAtivo <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  next();
};

module.exports = { validarCodigoCliente, validarCodigoAtivo };
