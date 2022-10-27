const path = require('path');
const fs = require('fs');

const db = require('../dataBase/models');
const sequelize = db.sequelize;

const camposController = {
    'index': (req, res) => {
        res.locals.sessiondata = req.session;
        db.Campo.findAll()     //Busca todos los datos de la tabla de Campos..
        .then((campos) => {
            res.render('campos', { campos })
        })}}

module.exports = camposController;

