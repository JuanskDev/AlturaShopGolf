const {validationResult} = require('express-validator')

module.exports = {
    index: function(req, res){
        // if(req.session.name){
        //     let data = req.session
        //     return res.render('registro', {data})
        // }
        res.render("../src/views/registro.ejs");
    },
    store: function(req, res){
        let errors = validationResult(req)
        
        if(!errors.isEmpty()){
            return res.render("../src/views/registro.ejs", {errors: errors.errors});
        } 
        req.session.nombre = req.body.nombre;
        res.cookie('nombre_cookie_prueba', req.body.nombre, {maxAge: 10000 });

        //req.session.name = req.body.name;
        //    req.session.color = req.body.color;
        //    req.session.email = req.body.email;
        //    req.session.age = req.body.age;
        //    if(req.body.recordar_color){
        //     res.cookie('color', req.body.color, {maxAge: 60 * 1000});

        //     res.redirect('/')
        //    }   
    },
    color: function(req, res){
        if(req.session.name){
            let data = req.session
            return res.render('color', {data})
        }
        res.render('color')
    },
    borrar: (req, res) => {
		req.session.color = null;
		res.cookie('color', null, { maxAge: -1 });
		res.send('Color borrado');
	},
}