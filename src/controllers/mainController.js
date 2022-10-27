const path = require('path');
const Sequelize = require('sequelize')
const { render } = require('ejs');
const sequelize = new Sequelize('gas_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

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

        // let sqlScript = "select * " +
        // "from categorias " +
        // "order by nombre" 
        // sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        // .then(categorias => {
        //     let data = {};
             
        //     data.categorias = categorias;
        //     res.render(path.join(__dirname, '../views/partials/header.ejs'), {data})
        //     // categorias.forEach(categoria => {
        //     //     sqlScript = "select p.id as p_id, " +
        //     //     "p.nombre as p_nombre, " +
        //     //     "c.id as c_id, " +
        //     //     "c.nombre as c_nombre " +
        //     //     "from productos p " +
        //     //     "join categorias c on c.id = p.categoria_id " +
        //     //     "where c.id = " + categoria.id
        //     //     "order by p.nombre"
        //     //     sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        //     //     .then(productos => {
        //     //         res.render(path.join(__dirname, '../views/partials/header.ejs'))
        //     //     })
        //     //     .catch(err => { console.log(err) })
        //     // })
        // })
        // .catch(err => { console.log(err) })

        res.render(path.join(__dirname, '../views/partials/header.ejs'))

    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    }
};

module.exports = mainController;
