const path = require('path');
const fs = require('fs');
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('gas_db', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// })
//const campos = require('../models/Campo.js');


// Sería obsoleto, ahora pasamos a usar la base de datos
const camposFilePath = path.join(__dirname, '../dataBase/Campos.json');
const campos = JSON.parse(fs.readFileSync(camposFilePath, 'utf-8'));

// const campos = sequelize.query("Select * from `campos`", { type: Sequelize.QueryTypes.SELECT})
// .then(campos => {
//     console.log(campos)
// })
// .catch(err => {
//     console.log(err)
// }
// )


const camposController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session
        res.render(path.join(__dirname, '../views/campos.ejs'), {campos})
    }
};

module.exports = camposController;