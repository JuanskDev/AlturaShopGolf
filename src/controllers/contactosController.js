const path = require('path');
const fs = require('fs');

const contactosFilePath = path.join(__dirname, '../dataBase/contactos.json');
const contactos = JSON.parse(fs.readFileSync(contactosFilePath, 'utf-8'));

const contactoController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session
        res.render(path.join(__dirname, '../views/contactos.ejs'), {contactos})
    }
};

module.exports = contactoController;