const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const categoriasFilePath = path.join(__dirname, '../dataBase/categorias.json');
const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, 'utf-8'));

const productsController = {
    carritoCompra: (req,res) => {
        res.render(path.join(__dirname, '../views/carrito-de-compras.ejs'))
    },
    detalleProducto: (req,res) => {
        res.render(path.join(__dirname, '../views/detalleproducto.ejs'))
    },
    create:(req,res) =>{
        res.render('products-create')
    },
    edit:(req,res) =>{
        let productId = parseInt(req.params.id);
        let data = {};
        for (let index = 1; index < products.length; index++) {
            if(parseInt(products[index].id) == productId) {
                index = products.length + 5;
                data = products[index];
            }
        }
        res.render('products-edit')
    },
    store: (req, res) => {
    let image
    
    if(req.files[0] != undefined){
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        image: image
    };
    //si existe un valor id
        //se edita
    //sino
        products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products/create');
    }
};



module.exports = productsController;
