const path = require('path');
const fs = require('fs');

const camposFilePath = path.join(__dirname, '../dataBase/campos.json');
const campos = JSON.parse(fs.readFileSync(camposFilePath, 'utf-8'));

const camposController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/campos.ejs'), {campos})
    }
};

module.exports = camposController;