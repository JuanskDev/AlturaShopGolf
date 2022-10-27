const path = require('path');
const Sequelize = require('sequelize')
const { render } = require('ejs');
const sequelize = new Sequelize('gas_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const categoriaController = {
    list:(req,res) =>{
        res.locals.sessiondata = req.session;
        let sqlScript = "select * " +
        "from categorias " +
        "order by nombre" 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            res.render('categorias', {categorias})
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    create:(req,res) =>{
        res.locals.sessiondata = req.session;
        res.render('categoria-create');
    },
    insert: (req,res) => {
        let sqlScript = "insert categorias (nombre) " + 
                        "select '" + req.body.nombre + "'"
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.INSERT})
        .then(result => {
            res.redirect('/categorias');
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    delete: (req,res) => {
        res.locals.sessiondata = req.session;

        sequelize.query("Delete from categorias where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.DELETE})
        .then(categorias => {
            res.redirect('/categorias');
        })
        .catch(err => { console.log(err) })
    },
    edit:(req,res) =>{
        res.locals.sessiondata = req.session;

        sequelize.query("Select * from categorias where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            res.render('categoria-edit', {categorias})
        })
        .catch(err => { console.log(err) })
    },
    update: (req, res) => {
        let sqlScript = "Update categorias set " + 
                        "nombre = '" + req.body.nombre + "' " + 
                        "where id = " + req.body.id
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.UPDATE})
        .then(result => {
            res.redirect('/categorias');
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
};
module.exports = categoriaController;