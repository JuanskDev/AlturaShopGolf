const path = require('path');
const fs = require('fs');
const db = require('../dataBase/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

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
        let productDetail = productos.find(e => e.id === +req.params.id)
        let data = {
            producto: productDetail,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            talles: talles,
            color: color
        };

            //categoría
            let categoriaId = productDetail.categoria;
            let category_item = categorias.filter(category => category.id == categoriaId)
            category_item.forEach(item_ => {
                data.category_selected = item_.nombre
            })

            //producto
            let productoId = productDetail.producto;
            let producto_item = listaProductos.filter(listaproducto => listaproducto.id == productoId)
            producto_item.forEach(item_ => {
                data.producto_selected = item_.nombre
            })
            //marca
            let marcaId = productDetail.marca;
            let marca_item = marcas.filter(marca => marca.id == marcaId)
            marca_item.forEach(item_ => {
                data.marca_selected = item_.nombre
            })
            //modelo
            let modeloId = productDetail.modelo;
            let modelo_item = modelos.filter(modelo => modelo.id == modeloId)
            modelo_item.forEach(item_ => {
                data.modelo_selected = item_.nombre
            })
            //talles
            let talleId = productDetail.talle;
            let talle_item = talles.filter(talle => talle.id == talleId)
            talle_item.forEach(item_ => {
                data.talle_selected = item_.nombre
            })
            //   //agarre
            //   let agarreId = item.agarre;
            //   let agarre_item = agarre.filter(agarre => agarre.id == agarreId)
            //   agarre_item.forEach(item_ => {
            //     data.agarre = item_.nombre
            //   })
            // //tipo de vara
            // let tipodevaraId = item.tipodevara;
            // let tipodevara_item = tipodevara.filter(tipodevara => tipodevara.id == tipodevaraId)
            // tipodevara_item.forEach(item_ => {
            //     data.tipodevara_selected = item_.nombre
            // })
            //  //tipo de bolsa
            //  let tipodebolsaId = item.tipodebolsa;
            //  let tipodebolsa_item = tipodebolsa.filter(tipodebolsa => tipodebolsa.id == tipodebolsaId)
            //  tipodebolsa_item.forEach(item_ => {
            //     data.tipodebolsa_selected = item_.nombre
            //  })
        
            res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/detalle-producto.ejs'), { data, toThousand })
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