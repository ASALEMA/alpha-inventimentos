const validarCampos = (req, res, next) => {
  const { codCliente, valor } = req.body;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  if (!valor || valor <= 0) {
    return res.status(400).json({ erro: 'Valor inválido.' });
  }

  next();
};

const validarCodigoCliente = (req, res, next) => {
  const { codCliente } = req.params;

  if (!codCliente || codCliente <= 0) {
    return res.status(400).json({ erro: 'Código de cliente inválido.' });
  }

  next();
};

module.exports = { validarCampos, validarCodigoCliente };
