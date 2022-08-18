const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const listaProductsFilePath = path.join(__dirname, '../dataBase/listaproductos.json');
const listaProductos = JSON.parse(fs.readFileSync(listaProductsFilePath, 'utf-8'));

const categoriasFilePath = path.join(__dirname, '../dataBase/categorias.json');
const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, 'utf-8'));

const marcasFilePath = path.join(__dirname, '../dataBase/marcas.json');
const marcas = JSON.parse(fs.readFileSync(marcasFilePath, 'utf-8'));

const agarreFilePath = path.join(__dirname, '../dataBase/agarre.json');
const agarre = JSON.parse(fs.readFileSync(agarreFilePath, 'utf-8'));

const tipodevaraFilePath = path.join(__dirname, '../dataBase/tipodevara.json');
const tipodevara = JSON.parse(fs.readFileSync(tipodevaraFilePath, 'utf-8'));

const tipodebolsaFilePath = path.join(__dirname, '../dataBase/tipodebolsa.json');
const tipodebolsa = JSON.parse(fs.readFileSync(tipodebolsaFilePath, 'utf-8'));

const hierrostipodeconjuntoFilePath = path.join(__dirname, '../dataBase/hierrostipodeconjunto.json');
const hierrostipodeconjunto = JSON.parse(fs.readFileSync(hierrostipodeconjuntoFilePath, 'utf-8'));

const descuentoFilePath = path.join(__dirname, '../dataBase/descuento.json');
const descuento = JSON.parse(fs.readFileSync(descuentoFilePath, 'utf-8'));

const tallesFilePath = path.join(__dirname, '../dataBase/talles.json');
const talles = JSON.parse(fs.readFileSync(tallesFilePath, 'utf-8'));

const colorFilePath = path.join(__dirname, '../dataBase/color.json');
const color = JSON.parse(fs.readFileSync(colorFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {
    carritoCompra: (req,res) => {
        res.render(path.join(__dirname, '../views/carrito-de-compras.ejs'))
    },
    detalleproducto: (req,res) => {
        res.render(path.join(__dirname, '../views/detalleproducto.ejs'))
    },
    create:(req,res) =>{
        let data = {
            listaproductos: listaProductos,
            categorias: categorias,
            marcas: marcas,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            descuento: descuento,
            talles: talles,
            color: color,
          
        }
        res.render('products-create', { data })
    },

    detalleproducto:(req,res) =>{
        let productEdit = productos.find(e => e.id === +req.params.id)
        let data = {
            producto: productEdit, //este es el item de productos.json que se busca en la línea de arriba por el id
            listaproductos: listaProductos,
            categorias: categorias,
            marcas: marcas,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            descuento: descuento,
            talles: talles,
            color: color
       }
        res.render('detalleproducto', { data })
    },



    edit:(req,res) =>{
        let productEdit = productos.find(e => e.id === +req.params.id)
        let data = {
            producto: productEdit, //este es el item de productos.json que se busca en la línea de arriba por el id
            listaproductos: listaProductos,
            categorias: categorias,
            marcas: marcas,
            agarre: agarre,
            tipodevara: tipodevara,
            tipodebolsa: tipodebolsa,
            hierrostipodeconjunto: hierrostipodeconjunto,
            descuento: descuento,
            talles: talles,
            color: color
       }
        res.render('products-edit', { data })
    },
    update: (req, res) => {
        let productUpdate = productos.find(e => e.id === + req.params.id)
        if(productUpdate) // esto para saber si existe o no
        {
            productUpdate.producto = req.body.producto;
            productUpdate.categoria = req.body.categoria;
            productUpdate.marca = req.body.marca;
            productUpdate.agarre = req.body.agarre;
            productUpdate.tipodevara = req.body.tipodevara;
            productUpdate.tipodebolsa = req.body.tipodebolsa; 
            productUpdate.hierrostipodeconjunto = req.body.hierrostipodeconjunto;
            productUpdate.descuento = req.body.descuento;
            productUpdate.precio = req.body.precio;
            productUpdate.talle = req.body.talle;
            productUpdate.stock = req.body.stock;
            productUpdate.color = req.body.color;
            productUpdate.image = req.file ? req.file.filename : productUpdate.image
        }
        
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 3))
        res.redirect("/products/edit/" + req.params.id);
        //1 hay que buscar el producto
        //2 editar sus propiedades
        //3 actualizar el archivo productos.json con los nuevos datos

    },
    showProductCategory: (req,res) => {
        // categoria que llega por parametro-url
        let category = req.params.category
        // categoria que coincide parametro con el valor de la categoria en json
        let productCategory = productos.filter(product => product.categoria == category)
        // // Marca de listado de marcas que coincide con listado de productos
        // let productCategoryName = marcas.find(marca => marca.id == marcaEncontrada)
        // // Quiero que product.marca == marca.id y que retorne marca.nombre
        // for(i = 0; i <= productCategory.length; i++){
        //     let marcaEncontrada = productCategory[i].marca === marca.id
        //     return marcaEncontrada
        // }
        res.render(path.join(__dirname, '../views/products-test.ejs'), {productCategory, toThousand})
    } 
    ,
    showProductSubcategory: (req,res) => {
        let subcategory = req.params.subcategory
        let productSubcategory = productos.filter(product => product.producto == subcategory)
        res.render(path.join(__dirname, '../views/products-test-2.ejs'), {productSubcategory, toThousand})
    },
    
    

    store: (req, res) => {
    let image
    
    if(req.files[0] != undefined){
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    let indexId = 1;
    if(productos.length != 0) {
        indexId = productos[productos.length - 1].id;
    }
    let newProduct = {
        id: indexId + 1,
        ...req.body,
        image: image
    };
    productos.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
    res.redirect('/products/create');
    }

    

};



module.exports = productsController;
