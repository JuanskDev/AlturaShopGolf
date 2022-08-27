const path = require('path');

const mainController = {
    index: (req,res) => {
        res.render(path.join(__dirname, '../views/home.ejs'))
    },
<<<<<<< HEAD
    head: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/head.ejs'))
    },
    header: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/header.ejs'))
    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    }
=======
    // head: (req,res) => {
    //     res.render(path.join(__dirname, '../views/partials/head.ejs'))
    // },
    // header: (req,res) => {
    //     res.render(path.join(__dirname, '../views/partials/header.ejs'))
    // },
    // footer: (req,res) => {
    //     res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    // }
>>>>>>> 69ae88f32f073b3a683f9258d55c7b917dfab6c2
};

module.exports = mainController;
