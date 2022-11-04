const path = require('path');
const fs = require('fs');
const db = require('../dataBase/models');
const Productos = db.Producto;
const Categorias = db.Categoria

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {

    'list': (req, res) => {
        db.Producto.findAll()
            .then(productos => {
                console.log(productos);
                res.render('productos.ejs', { productos })
            })
    },
    'listaCategorias': (req,res) => {
      console.log('aca estoy');
      Productos.findAll({
             where: {
                categoria_id: req.params.id}
        })
        .then(productos => {
            res.render('categoriasProducto.ejs' , {productos})
        })
  

    }, 
    carritoCompra: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/carrito-de-compras.ejs'))
    },
    create:(req,res) =>{
        res.locals.sessiondata = req.session;

        let productosDb = Productos.findAll();
        let categoriasDb = Categorias.findAll();
       
        Promise.all([productosDb, categoriasDb])
        .then(([allProductos, allCategorias]) => {
            return res.render('products-create', { allProductos, allCategorias })
        })
        .catch(error => res.send(error))
    },
    store: (req, res) => {
             
        Productos
        .create({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        agarre: req.body.agarre,
        tipoDeVara: req.body.tipoDeVara,
        tipoDeBolsa: req.body.tipoDeBolsa,
        hierroTipoDeConjunto: req.body.hierroTipoDeConjunto,
        precio: req.body.precio,
        descuento: req.body.descuento,
        stock: req.body.stock,
        color: req.body.color,
        categoria_id: req.body.categoria_id,
        imagen: req.file.filename
    })
    .then(() => {
        return res.redirect('/products')
    })
    .catch(error => res.send(error))

    },
    edit: (req , res) => {
        console.log('funcionandoc');
        console.log(req.params.id);

         let id = req.params.id
         console.log(req.params.id);
         let categoriasDb = Categorias.findAll();
         let productoDb = Productos.findByPk(id)
        
         Promise
            .all([ categoriasDb, productoDb ])
            .then(([ allCategorias, producto ]) => {
                console.log(allCategorias);
                return res.render('products-edit', { producto , allCategorias })
            })
            .catch(error => res.send(error)) 

   
        },

     update: (req, res) => {
  
            let productoId = req.params.id;
        Productos
            .update({
                nombre: req.body.nombre,
                marca: req.body.marca,
                modelo: req.body.modelo,
                agarre: req.body.agarre,
                tipoDeVara: req.body.tipoDeVara,
                tipoDeBolsa: req.body.tipoDeBolsa,
                hierroTipoDeConjunto: req.body.hierroTipoDeConjunto,
                precio: req.body.precio,
                descuento: req.body.descuento,
                stock: req.body.stock,
                color: req.body.color,
                categoria_id: req.body.categoria_id,
                imagen: req.file.filename
            }, {
                where: { id: productoId }
            })
            .then(() => {
                return res.redirect("/products/edit/" + productoId)
            })
            .catch(error => res.send(error))

        },
    
        detalleproducto:(req,res) =>{
            const Sequelize = require('sequelize')

            const sequelize = new Sequelize('gas_store', 'root', '', {
                host: 'localhost',
                dialect: 'mysql',
              })
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
    },  
    delete : (req, res) => {
		let id = req.params.id;
		let finalProducts = productos.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.locals.sessiondata = req.session;
        res.redirect("/products/create");
    }, 
};
module.exports = productsController;