const path = require('path');
const fs = require('fs');
const { render } = require('ejs');

const productsFilePath = path.join(__dirname, '../dataBase/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const listaProductsFilePath = path.join(__dirname, '../dataBase/listaproductos.json');
const listaProductos = JSON.parse(fs.readFileSync(listaProductsFilePath, 'utf-8'));

const categoriasFilePath = path.join(__dirname, '../dataBase/categorias.json');
const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, 'utf-8'));

const marcasFilePath = path.join(__dirname, '../dataBase/marcas.json');
const marcas = JSON.parse(fs.readFileSync(marcasFilePath, 'utf-8'));

const modelosFilePath = path.join(__dirname, '../dataBase/modelos.json');
const modelos = JSON.parse(fs.readFileSync(modelosFilePath, 'utf-8'));

const agarreFilePath = path.join(__dirname, '../dataBase/agarre.json');
const agarre = JSON.parse(fs.readFileSync(agarreFilePath, 'utf-8'));

const tipodevaraFilePath = path.join(__dirname, '../dataBase/tipodevara.json');
const tipodevara = JSON.parse(fs.readFileSync(tipodevaraFilePath, 'utf-8'));

const tipodebolsaFilePath = path.join(__dirname, '../dataBase/tipodebolsa.json');
const tipodebolsa = JSON.parse(fs.readFileSync(tipodebolsaFilePath, 'utf-8'));

const hierrostipodeconjuntoFilePath = path.join(__dirname, '../dataBase/hierrostipodeconjunto.json');
const hierrostipodeconjunto = JSON.parse(fs.readFileSync(hierrostipodeconjuntoFilePath, 'utf-8'));

const descuentoFilePath = path.join(__dirname, '../dataBase/descuentos.json');
const descuentos = JSON.parse(fs.readFileSync(descuentoFilePath, 'utf-8'));

const tallesFilePath = path.join(__dirname, '../dataBase/talles.json');
const talles = JSON.parse(fs.readFileSync(tallesFilePath, 'utf-8'));

const colorFilePath = path.join(__dirname, '../dataBase/color.json');
const color = JSON.parse(fs.readFileSync(colorFilePath, 'utf-8'));

const camposFilePath = path.join(__dirname, '../dataBase/campos.json');
const campos = JSON.parse(fs.readFileSync(camposFilePath, 'utf-8'));

const leccionesFilePath = path.join(__dirname, '../dataBase/lecciones.json');
const lecciones = JSON.parse(fs.readFileSync(leccionesFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/home.ejs'))
    },
    head: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/head.ejs'))
    },
    header: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/partials/header.ejs'))
    },
    footer: (req,res) => {
        res.render(path.join(__dirname, '../views/partials/footer.ejs'))
    },
    contacto: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/contacto.ejs'))
       
    },
    search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = productos.filter(product => product.producto_selected.toLowerCase().includes(search));	
		res.render('results', { 
			productos: productsToSearch, 
			search,
			toThousand,
		});
	},
};
module.exports = mainController;