const db = require('../database/models/index');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    // Formulario de registro
    register: (req, res) => {
        res.render('register');
    },

    // Registro
    registerProcess: (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.render('register', {
                errors: result.mapped(),
                data: req.body
            })
        }
        db.User.create({
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            rol: 0
        })
        res.redirect('/');
    },

    // Formulario de inicio de sesión
    login: (req, res) => {
        res.render('login');
    },

    // Inicio de sesión
    loginProcess: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    // Si el usuario se loguea, guardo su sesión y borro su pass
                    delete user.password;
                    req.session.userLogged = user;
                    return res.redirect('/');
                }
            } else {
                console.log("Datos incorrectos.");
                return res.redirect('/login');
            }
        }).catch((err) => {
            console.log("Ocurrió un error");
            return res.redirect('/login');
        });
    },

    // Cerrar sesión
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
}