const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
    store: (req, res) => {
    let image
    console.log(req.files);
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
    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/');
    }
};



module.exports = productsController;
