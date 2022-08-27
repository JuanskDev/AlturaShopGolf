<<<<<<< HEAD
const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
app.use(express.static("./Public")); // CSS
var methodOverride = require('method-override');

console.log(__dirname);

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas

// MVC SYSTEM
  
// Main Routes
const rutasMain = require("./src/routes/main");
app.use('/', rutasMain);

// Users Routes
const rutasUsers = require("./src/routes/users");
app.use('/users', rutasUsers);
//Registro Routes
const rutasRegistro = require("./src/routes/registro");
app.use('/registro', rutasRegistro);
//Products Routes
const rutasProductos = require("./src/routes/products");
app.use('/products', rutasProductos);
//Campos Routes
const rutasCampos = require("./src/routes/campos");
app.use('/campos', rutasCampos);
//Lecciones Routes
const rutasLecciones = require("./src/routes/lecciones");
app.use('/lecciones', rutasLecciones);


//---------------------CAMERONSMITHEQUIPO-----------------------//
app.get("/productos/cameronSmith", (req, res) => {
  res.render(path.join(__dirname, "src/views/cameronSmith.ejs"));
});
=======
const express = require('express'); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require('path'); //  MODULO PATH

app.use(express.static('./Public'));  // CSS

console.log(__dirname)


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
}); 

app.get('/productos/palos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/palos.ejs'))
})

app.get('/productos/zapatos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/zapatos.ejs'))
})

app.get('/productos/bolsas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/bolsas.ejs'))
})

app.get('/productos/indumentaria' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/indumentaria.ejs'))
})
app.get('/productos/tecnologia' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/tecnologia.ejs'))
})
app.get('/productos/pelotas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/pelotas.ejs'))
})
app.get('/contacto' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/contacto.ejs'))
})


// MVC SYSTEM

// Main Routes

const rutasMain = require('./src/routes/main')
app.use(require('./src/routes/main'))

// Users Routes

const rutasUsers = require('./src/routes/users');
app.use(require('./src/routes/users'));


//Products Routes

const rutasProductos = require('./src/routes/products');
app.use(require('./src/routes/products')) 

>>>>>>> 69ae88f32f073b3a683f9258d55c7b917dfab6c2
