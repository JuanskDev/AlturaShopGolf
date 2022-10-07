const path = require('path');
const Sequelize = require('sequelize')
const { render } = require('ejs');
const sequelize = new Sequelize('gas_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const caracteristicaTipoProductoController = {
    list:(req,res) =>{
        res.locals.sessiondata = req.session;
        let sqlScript = "select ctp.valor as ctp_valor, c.id as c_id, c.nombre as c_nombre, tp.id as tp_id, tp.nombre as tp_nombre " +
        "from caracteristicatipoproducto ctp " +
        "join caracteristica c on c.id = ctp.caracteristicaId " +
        "join tipoproducto tp on tp.id = ctp.tipoProductoId " +
        "order by tp.nombre, c.nombre" 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(caracteristicasTipoProductos => {
            res.render('caracteristicatipoproducto', {caracteristicasTipoProductos})
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    create:(req,res) =>{
        res.locals.sessiondata = req.session;
        let data = {};

        sequelize.query("Select * from `tipoproducto` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(tipoProductos => {
            data.tipoProductos = tipoProductos;
            sequelize.query("Select * from `caracteristica` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(caracteristicas => {
                data.caracteristicas = caracteristicas
                res.render('caracteristicatipoproducto-create', {data})
            })
            .catch(err => {
                console.log(err)
            }
            )
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    insert: (req,res) => {
        let sqlScript = "insert caracteristicatipoproducto (tipoproductoid, caracteristicaid, valor) " + 
                        "select " + req.body.tipoproductoid + ", '" + req.body.caracteristicaid + "', " +
                        "'" + req.body.valor + "'"
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.INSERT})
        .then(result => {
            res.redirect('/caracteristica-tipo-productos');
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    delete: (req,res) => {
        
    },
    edit:(req,res) =>{
        res.locals.sessiondata = req.session;
        let data = {
        }
        sequelize.query("Select * from `caracteristica` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(caracteristicas => {
            data.caracteristicas = caracteristicas
            sequelize.query("Select * from `tipoproducto` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(tipoProductos => {
                data.tipoProductos = tipoProductos
                sequelize.query("Select * from `caracteristicatipoproducto` where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.SELECT})
                .then(caracteristicaTipoProductos => {
                    data.caracteristicaTipoProductos = caracteristicaTipoProductos;
                    res.render('caracteristicatipoproducto-edit', {data})
                })
                .catch(err => {
                    console.log(err)
                }
                )
            })
            .catch(err => {
                console.log(err)
            }
            )
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    update: (req, res) => {
        let sqlScript = "Update caracteristicatipoproducto set " + 
                        "tipoproductoid = " + req.body.tipoproductoid + ", " + 
                        "caracteristicaid = " + req.body.caracteristicaid + ", " + 
                        "valor = '" + req.body.valor + "' " +
                        "where id = " + req.body.id
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.UPDATE})
        .then(result => {
            res.redirect('/caracteristica-tipo-productos');
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
};
module.exports = caracteristicaTipoProductoController;