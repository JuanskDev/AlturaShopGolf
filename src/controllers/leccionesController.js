const path = require('path');
const fs = require('fs');

const leccionesFilePath = path.join(__dirname, '../dataBase/lecciones.json');
const lecciones = JSON.parse(fs.readFileSync(leccionesFilePath, 'utf-8'));

const leccionesController = {
    index: (req, res)  => {
        res.render(path.join(__dirname, '../views/lecciones.ejs'), {lecciones})
    }
};

module.exports = leccionesController;