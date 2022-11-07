const path = require("path");
const fs = require("fs");
// const { render } = require('ejs');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const db = require("../dataBase/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const e = require("express");
const Usuarios = db.Usuario;

// FN F2 CAMBIAR

const usersController = {
  index: (req, res) => {
    res.locals.sessiondata = req.session;
    res.locals.mensaje = "";
    if (req.session.nombre != undefined) {
      res.locals.mensaje = "Ya inició una sesión";
    }
    res.render(path.join(__dirname, "../views/Users/iniciosesion.ejs"));
  },

  login: (req, res) => {
    Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((usuario) => {
        if (!usuario) {
          return res.render("Users/InicioSesion.ejs");
        } else {
          if (bcrypt.compareSync(req.body.password, usuario.password)) {
            req.session.user = usuario;
            req.session.email = usuario.email;
            req.session.categoria = usuario.categoria;
            return res.redirect("/");
          } else {
            return res.redirect("Users/InicioSesion.ejs");
          }
        }
      })
      .catch((error) => console.log(error));
  },
  logout: (request, response) => {
    request.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      response.redirect("/");
    });
  },

  registro: function (req, res) {
    res.locals.sessiondata = req.session;
    res.render("../views/Users/Registro");
  },

  create: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("Users/Registro.ejs", {
        errores: errors.errors,
        oldData: req.body,
      });
    }

    // let userInDB = Usuarios.findByField("email", req.body.email);

    // if (userInDB) {
    //   return res.render("Users/Registro.ejs", {
    //     errores: {
    //       email: {
    //         msg: "Este email ya está registrado",
    //       },
    //     },
    //     oldData: req.body,
    //   });
    // }
    else {
      let user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        telefono: req.body.telefono,
        categoria: "usuario",
      };

      Usuarios.create(user)
        .then((storedUser) => {
          return res.redirect("/users/iniciosesion");
        })
        .catch((error) => console.log(error));
    }
  },

  contacto: (req, res) => {
    res.locals.sessiondata = req.session;
    res.render(path.join(__dirname, "../views/Users/contacto.ejs"));
  },

  detalle: (req, res) => {
    res.locals.sessiondata = req.session;

    return res.render("../views/Users/perfil.ejs", {
      usuario: req.session.user,
    });
  },
};
module.exports = usersController;
