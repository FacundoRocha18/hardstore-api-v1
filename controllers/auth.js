/* eslint-disable linebreak-style */
const {request, response} = require('express');
const bcrypt = require('bcrypt');
const {getUserQuery, insertUserQuery} = require('../database/users');


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

const onAuth = async (req = request, res = response) => {
  const {uEmail, uPassword} = req.body;

  console.log(uEmail, uPassword);

  try {
    const {email, password, fullName} = await getUserQuery(uEmail);

    if (!email) {
      return res.send({
        ok: false,
        message: 'Please check your email',
        loginData: {
          token: null,
          username: null,
        },
      });
    }

    if (uEmail === email && await bcrypt.compare(uPassword, password)) {
      const randomToken = (length = 24) => {
        return Math.random().toString(16).substring(2, length);
      };

      res.send({
        ok: true,
        message: `Inicio de sesión exitoso, bienvenido ${fullName}`,
        loginData: {
          token: randomToken(30),
          username: fullName,
        },
      });
    } else {
      res.send({
        ok: false,
        message: 'Please check your password',
        loginData: {
          token: null,
          username: '',
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      ok: false,
      message: 'Please check your email or password and try again.',
      loginData: {
        token: null,
        username: '',
      },
    });
  }
};

const renewToken = (res = response) => {
  res.send({
    ok: true,
    token: 'token123',
  });
};

const validation = (data) => {
  const {email, name, address, phone, password} = data;

  const userDataArray = [email, name, address, phone, password];

  let isValidated;

  for (let i = 0; i < userDataArray.length; i++) {
    if (!userDataArray[i]) {
      return isValidated = false;
    } else {
      isValidated = true;
    }
  };

  return isValidated;
};

module.exports = {
  createUser,
  onAuth,
  renewToken,
};
