const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
const session = require('express-session')
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');//GET-POST-PUT-DELETE

console.log(__dirname);

app.use(express.static("./Public")); // CSS

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));// Sustituye a las clases de los metodos principales nos permite utilziar el Get,Post,Put;Delete...etc

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas

//---------SESSION--------------------//
app.use(session({
  secret: "gas session",
  resave: false,
  saveUninitialized: true,
}));
//-------------COOKIE---------------------//
app.use(cookieParser());

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
