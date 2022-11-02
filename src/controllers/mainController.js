const path = require('path');
const fs = require('fs');

const mainController = {
    index: (req,res) => {
        res.locals.sessiondata = req.session;
        res.render(path.join(__dirname, '../views/home.ejs'))
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