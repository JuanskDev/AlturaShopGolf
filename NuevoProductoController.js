const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Productos = db.Producto;
const Categorias = db.Categoria

add: (req, res) => {
        let promProductos = Productos.findAll();
        let promCategorias = Categorias.findAll();

        Promise
            .all([promProductos, promCategorias])
            .then(([allProductos, allCategorias]) => {
                return res.render('products-create', { allProductos, allCategorias })
            })
            .catch(error => res.send(error))
    }
    create: (req, res) => {
        Movies
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
                imagen: req.body.imagen,
                categoriaId: req.body.categoriaId
            })
            .then(() => {
                return res.redirect('/products/create')
            })
            .catch(error => res.send(error))

           
           // let image
           // if(req.files[0] != undefined){
           //    image = req.files[0].filename
           // } else {
           //      image = 'default-image.png'
            }
            edit: (req, res) => {
                let idProducto = req.params.id;
                let promProductos = Productos.findByPk(idProducto, { include: ['productos', 'categorias'] }); // Preguntar el include
                let promCategorias = Categorias.findAll();
                ;
                
                Promise
                    .all([promProductos, promCategorias])
                    .then(([Producto, allCategorias ]) => {
                        return res.render('products-edit', { Producto, allCategorias })
                    })
                    .catch(error => res.send(error))
            }
            update: (req, res) => {
                let idProducto = req.params.id;
                Productos.update({
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
                    imagen: req.body.imagen,
                    categoriaId: req.body.categoriaId
                    }, {
                        where: { id: idProducto }
                    })
                    .then(() => {
                        return res.redirect("/products/edit/" + idProducto);
                    })
                    .catch(error => res.send(error))
                }
                delete  (req, res)   // CREAR VISTA PARA USAR ESTE METODO SI NO ES INUTIL
                    let idProducto = req.params.id;
                    Productos .findByPk(idProducto)
                        .then(Producto => {
                            res.redirect(("/products/delete") , { Producto })
                        })
                        .catch(error => res.send(error))
            
            
            destroy: (req, res) => {
                let idProducto = req.params.id;
                Productos .destroy({ where: { id: idProducto }, force: true }) // force: true es para asegurar que se ejecute la acción
                    .then(() => {
                        return res.redirect('/')
                    })
                    .catch(error => res.send(error))
            }
            categoriaProductos: (req,res) => {

                let promProductos = Productos.findAll();
                let idCategoria = Categorias.findByPk(req.params.id );

                Productos.findAll({
                    where: {
                        categoria_id: {
                            [Op.eq]:idCategoria // o req.params.id
                        }
                    },
                })
                .then(productosCategoria => {
                    res.render('productos.ejs', { productosCategoria });

            })
        }