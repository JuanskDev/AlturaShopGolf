const path = require('path');
const Sequelize = require('sequelize')
const { render } = require('ejs');
const sequelize = new Sequelize('gas_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productoController = {
    list:(req,res) =>{
        res.locals.sessiondata = req.session;
        let sqlScript = "select p.id as p_id, " +
        "p.nombre as p_nombre, " +
        "marca, " +
        "modelo, " +
        "agarre, " +
        "tipoDeVara, " +
        "tipoDeBolsa, " +
        "hierroTipoDeConjunto, " +
        "precio, " +
        "descuento, " +
        "stock, " +
        "color, " +
        "imagen, " +
        "c.id as c_id, " +
        "c.nombre as c_nombre " +
        "from productos p " +
        "join categorias c on c.id = p.categoria_id " +
        "order by p.nombre" 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(productos => {
            res.render('productos', {productos})
        })
        .catch(err => { console.log(err) })
    },
    create:(req,res) =>{
        res.locals.sessiondata = req.session;
        let data = {};
        sequelize.query("Select * from categorias order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            data.categorias = categorias;
            res.render('producto-create', {data})
        })
        .catch(err => { console.log(err) } )
    },
    insert: (req,res) => {
        let image

        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else {
            image = 'default-image.png'
        }
        let sqlScript = "insert productos (nombre, marca, modelo, agarre, tipoDeVara, tipoDeBolsa, hierroTipoDeConjunto," +
            "precio, descuento, stock, color, imagen, categoria_id) " + 
        "select '" + req.body.nombre + "', " +
        "'" + req.body.marca + "', " +
        "'" + req.body.modelo + "', " +
        "'" + req.body.agarre + "', " +
        "'" + req.body.tipoDeVara + "', " +
        "'" + req.body.tipoDeBolsa + "', " +
        "'" + req.body.hierroTipoDeConjunto + "', " +
        "" + req.body.precio + ", " +
        "" + req.body.descuento + ", " +
        "" + req.body.stock + ", " +
        "'" + req.body.color + "', " +
        "'" + image + "', " +
        "" + req.body.categoria_id + ""
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.INSERT})
        .then(result => {
            res.redirect('/productos');
        })
        .catch(err => { console.log(err) })
    },
    delete: (req,res) => {
        res.locals.sessiondata = req.session;

        sequelize.query("Delete from productos where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.DELETE})
        .then(categorias => {
            res.redirect('/productos');
        })
        .catch(err => { console.log(err) })
    },
    edit:(req,res) =>{
        res.locals.sessiondata = req.session;
        let data = {}
        sequelize.query("Select * from categorias order by nombre", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(categorias => {
            data.categorias = categorias;
            sequelize.query("Select * from productos where id = " +req.params.id, { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(producto => {
                data.producto = producto;
                res.render('producto-edit', {data})
            })
            .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })
    },
    update: (req, res) => {
        let image

        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else {
            image = req.body.imagen
        }
        let sqlScript = "Update productos set " + 
        "nombre = '" + req.body.nombre + "', " + 
        "marca = '" + req.body.marca + "', " + 
        "modelo = '" + req.body.modelo + "', " + 
        "agarre = '" + req.body.agarre + "', " + 
        "tipoDeVara = '" + req.body.tipoDeVara + "', " + 
        "tipoDeBolsa = '" + req.body.tipoDeBolsa + "', " + 
        "hierroTipoDeConjunto = '" + req.body.hierroTipoDeConjunto + "', " + 
        "precio = " + req.body.precio + ", " + 
        "descuento = " + req.body.descuento + ", " + 
        "stock = " + req.body.stock + ", " + 
        "color = '" + req.body.color + "', " + 
        "imagen = '" + image + "', " + 
        "categoria_id = " + req.body.categoria_id + " "
        "where id = " + req.body.id
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.UPDATE})
        .then(result => {
            res.redirect('/productos');
        })
        .catch(err => { console.log(err) })
    },
    showProductCategory: (req,res) => {
        res.locals.sessiondata = req.session;
        let categoria_id = req.params.categoria_id;
        let data = {};
        let sqlScript = "select p.id as p_id, " +
        "p.nombre as p_nombre, " +
        "marca, " +
        "modelo, " +
        "agarre, " +
        "tipoDeVara, " +
        "tipoDeBolsa, " +
        "hierroTipoDeConjunto, " +
        "precio, " +
        "descuento, " +
        "stock, " +
        "color, " +
        "imagen, " +
        "categoria_id, " +
        "c.id as c_id, " +
        "c.nombre as c_nombre " +
        "from productos p " +
        "join categorias c on c.id = p.categoria_id " +
        "where categoria_id = " + categoria_id
        "order by p.nombre"; 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(productos => {
            data.productos = productos;
            sqlScript = "select distinct nombre, categoria_id " +
            "from productos " +
            "where categoria_id = " + categoria_id + " " 
            "order by nombre";
            sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(subcategorias => {
                data.subcategorias = subcategorias;
                res.render('producto-categoria', {data, toThousand})
            })
            .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })
    },
    showProductSubcategory: (req,res) => {
        res.locals.sessiondata = req.session;
        let categoria_id = req.params.categoria_id;
        let subcategoria = req.params.subcategoria;
        let data = {};
        let sqlScript = "select p.id as p_id, " +
        "p.nombre as p_nombre, " +
        "marca, " +
        "modelo, " +
        "agarre, " +
        "tipoDeVara, " +
        "tipoDeBolsa, " +
        "hierroTipoDeConjunto, " +
        "precio, " +
        "descuento, " +
        "stock, " +
        "color, " +
        "imagen, " +
        "c.id as c_id, " +
        "c.nombre as c_nombre " +
        "from productos p " +
        "join categorias c on c.id = p.categoria_id " +
        "where categoria_id = " + categoria_id + " and p.nombre = '" + subcategoria + "' "
        "order by p.nombre"; 
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(productos => {
            data.productos = productos;
            sqlScript = "select distinct nombre, categoria_id " +
            "from productos " +
            "where categoria_id = " + categoria_id + " " 
            "order by nombre";
            sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(subcategorias => {
                data.subcategorias = subcategorias;
                res.render('producto-categoria', {data, toThousand})
            })
            .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })
    },
    detalleproducto:(req,res) =>{
        res.locals.sessiondata = req.session;
        let producto_id = req.params.id
        let data = {};
        let sqlScript = "select p.id as p_id, " +
        "p.nombre as p_nombre, " +
        "marca, " +
        "modelo, " +
        "agarre, " +
        "tipoDeVara, " +
        "tipoDeBolsa, " +
        "hierroTipoDeConjunto, " +
        "precio, " +
        "descuento, " +
        "stock, " +
        "color, " +
        "imagen, " +
        "categoria_id, " +
        "c.id as c_id, " +
        "c.nombre as c_nombre " +
        "from productos p " +
        "join categorias c on c.id = p.categoria_id " +
        "where p.id = " + producto_id
        sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(producto => {
            data.producto = producto;
            sqlScript = "select distinct nombre, categoria_id " +
            "from productos " +
            "where categoria_id = " + producto[0].categoria_id + " " 
            "order by nombre";
            sequelize.query(sqlScript, { nest: true,  type: Sequelize.QueryTypes.SELECT})
            .then(subcategorias => {
                data.subcategorias = subcategorias;
                res.render('producto-detalle', {data, toThousand})
            })
            .catch(err => { console.log(err) })
            
        })
        .catch(err => { console.log(err) })
    }
};
module.exports = productoController;