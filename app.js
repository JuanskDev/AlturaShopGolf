const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
app.use(express.static("./Public")); // CSS
const cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
const session = require('express-session')
const bodyParser = require('body-parser')

const port = '3030'

app.listen(port, () => {
  console.log(`servidor funcionando en el puerto ${port}`);
});

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas
 

app.use(session({
  secret: "gas session",
  resave: false,
  saveUninitialized: true,
}));

// MVC SYSTEM
  
// Main Routes
const rutasMain = require("./src/routes/main");
app.use('/', rutasMain);

// Users Routes
const rutasUsers = require("./src/routes/users");
app.use('/users', rutasUsers);
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

app.get("/productos/test", (req, res) => {
  res.render(path.join(__dirname, "src/views/products-test2.ejs"));
});

