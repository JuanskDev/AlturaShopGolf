const path = require('path');

const mainController = {
    index: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/home.ejs'))
    },
    head: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/head.ejs'))
    },
    header: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/partials/header.ejs'))

    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    }
};

module.exports = mainController;
