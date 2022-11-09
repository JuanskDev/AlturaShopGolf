const path = require('path');
const fs = require('fs');

const db = require('../dataBase/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Productos = db.Producto;


const mainController = {
    index: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/home.ejs'))
	
    },
   }
module.exports = mainController;

