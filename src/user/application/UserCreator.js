const {request, response} = require('express');

const createUser = (req = request, res = response) => {
  const userData = req.body;

  if (validation(userData)) {
    return res.send({
      ok: false,
      message: `La información proporcionada es inválida,
      por favor rellena todos los campos e intenta nuevamente.`,
    });
  }

  try {
    insertUserQuery(userData);
    return res.send({
      ok: true,
      message: 'Nuevo usuario registrado con éxito. Ya puede iniciar sesión.',
    });
  } catch (error) {
    res.status(404)({
      ok: false,
      message: 'No pude encontrar lo solicitado.',
    });
  }
};