const path = require('path');
const Sequelize = require('sequelize')
const { render } = require('ejs');
const sequelize = new Sequelize('gas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const tipoProductosController = {
    list:(req,res) =>{
        res.locals.sessiondata = req.session;
        let sqlScript = "select tp.id as tp_id, tp.nombre as tp_nombre, c.id as c_id, c.nombre as c_nombre " +
        "from tipoproducto tp " +
        "join categoria c on c.id = tp.categoriaid " +
        "order by tp.nombre, c.nombre" 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(tipoProductos => {
            res.render('tipoproducto', {tipoProductos})
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    create:(req,res) =>{
        res.locals.sessiondata = req.session;
        sequelize.query("Select * from `categoria` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            //Acá podés usar esto, busca el archivo que le indicas
            res.render(path.join(__dirname, '../views/tipoproducto-create.ejs'), {categorias})

            //O esto, automáticamente busca el archivo ejs que el nombre que le indicás
            //res.render('tipoproducto-create', {categoria})
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    insert: (req,res) => {
        let sqlScript = "insert tipoproducto (categoriaid, nombre) select " + req.body.categoriaid + ", '" + req.body.nombre + "'"
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.INSERT})
        .then(result => {
            res.redirect('/tipo-productos');
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
        sequelize.query("Select * from `categoria` order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            data.categorias = categorias;
        })
        sequelize.query("Select * from `tipoproducto` where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(tipoproducto => {
            data.tipoproducto = tipoproducto;
            //Acá podés usar esto, busca el archivo que le indicas
            //res.render(path.join(__dirname, '../views/tipoproducto-edit.ejs'), {categorias})

            //O esto, automáticamente busca el archivo ejs que el nombre que le indicás
            res.render('tipoproducto-edit', {data})
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
    update: (req, res) => {
        let sqlScript = "Update tipoproducto set " + 
                        "categoriaid = " + req.body.categoriaid + ", " + 
                        "nombre = '" + req.body.nombre + "' " +
                        "where id = " + req.body.id
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.UPDATE})
        .then(result => {
            res.redirect('/tipo-productos');
        })
        .catch(err => {
            console.log(err)
        }
        )
    },
};
module.exports = tipoProductosController;