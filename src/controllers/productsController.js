const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriasFilePath = path.join(__dirname, '../dataBase/categorias.json');
const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, 'utf-8'));

const marcasFilePath = path.join(__dirname, '../dataBase/marcas.json');
const marcas = JSON.parse(fs.readFileSync(marcasFilePath, 'utf-8'));

const productsController = {
    carritoCompra: (req,res) => {
        res.render(path.join(__dirname, '../views/carrito-de-compras.ejs'))
    },
    detalleProducto: (req,res) => {
        res.render(path.join(__dirname, '../views/detalleproducto.ejs'))
    },
    create:(req,res) =>{
        let data = {
            categorias: categorias,
            marcas: marcas
        }
        res.render('products-create', { data })
    },
    edit:(req,res) =>{
        let productEdit = products.find(e => e.id === +req.params.id)
        let data = {
            producto: productEdit,
            categorias: categorias,
            marcas: marcas
        }
        res.render('products-edit', { data })
    },
    update: (req, res) => {
        let productUpdate = products.find(e => e.id === +req.params.id)
        if(productUpdate) // esto para saber si existe o no
        {
            productUpdate.producto = req.body.producto;
            productUpdate.categoria = req.body.categoria;
            productUpdate.tipodebolsa = req.body.tipodebolsa;
            productUpdate.marca = req.body.marca;
            productUpdate.agarre = req.body.agarre;
            productUpdate.tipodevara = req.body.tipodevara;
            productUpdate.hierrostipodeconjunto = req.body.hierrostipodeconjunto;
            productUpdate.talle = req.body.talle;
            productUpdate.color = req.body.color;
            productUpdate.image = req.file ? req.file.filename : productUpdate.image
        }
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
        res.redirect("/products/edit/" + req.params.id);
        //1 hay que buscar el producto
        //2 editar sus propiedades
        //3 actualizar el archivo productos.json con los nuevos datos

    },
    store: (req, res) => {
    let image
    
    if(req.files[0] != undefined){
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    let indexId = 1;
    if(products.length != 0) {
        indexId = products[products.length - 1].id;
    }
    let newProduct = {
        id: indexId + 1,
        ...req.body,
        image: image
    };
    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products/create');
    }
};



module.exports = productsController;
