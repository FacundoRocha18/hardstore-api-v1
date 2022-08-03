const { request, response } = require('express');
const bcrypt = require('bcrypt');
const { getEmployee } = require('../database/employees');


const onLogin = async (req = request, res = response) => {

    console.log(req.body)

    const { id, pin } = req.body;

    try {
        const { employee_id, name, employee_pin } = await getEmployee(id);

        console.log(employee_id, name, employee_pin)

        if (!employee_id) {
            return res.send({
                ok: false,
                message: 'Please check your ID',
                data: {
                    token: null,
                    username: null
                }
            })
        }

        if (id == employee_id && pin == employee_pin) {

            const randomToken = (length = 24) => Math.random().toString(16).substring(2, length);

            res.send({
                ok: true,
                message: `Inicio de sesión exitoso, bienvenido ${name}`,
                data: {
                    token: randomToken(30),
                    username: name
                }
            })
        } else {
            res.send({
                ok: false,
                message: 'Please check your ID or your PIN',
                data: {
                    token: null,
                    username: ''
                }
            })
        }


    } catch (error) {
        console.log(error);
        return res.send({
            ok: false,
            message: 'Please check your ID and PIN and try again.',
            loginData: {
                token: null,
                username: ''
            }
        })
    }

}

module.exports = {
    onLogin
}
