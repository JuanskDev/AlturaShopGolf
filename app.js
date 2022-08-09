const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
// const session = require('express-sessions'); // SESSIONS- MODULE
// const multer = require('multer'); //MODULO PARA SUBIR ARCHIVOS - MULTER
app.use(express.static("./Public")); // CSS

console.log(__dirname);

app.listen(3030, () => {
  console.log("Servidor funcionando");
});




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views')); // Define la ubicación de la carpeta de las Vistas

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

//_____________________SESSIONS____________________________________//
// app.use(session({secret:'Secreto'}));
//_________________________________________________________________//
//_______________________ACCESORIOS_____________________________//
app.get("/productos/accesorios", (req, res) => {
  res.render(path.join(__dirname, "src/views/accesorios.ejs"));
});
//_______________________GUANTES____________________________//
app.get("/productos/accesorios/guantes", (req, res) => {
  res.render(path.join(__dirname, "src/views/guantes.ejs"));
});
//_______________________GORRAS_____________________________//
app.get("/productos/accesorios/gorras", (req, res) => {
  res.render(path.join(__dirname, "src/views/gorras.ejs"));
});
//_______________________FUNDAS_____________________________//
app.get("/productos/accesorios/fundas", (req, res) => {
  res.render(path.join(__dirname, "src/views/fundas.ejs"));
});
//_______________________HERRAMIENTAS_____________________________//
app.get("/productos/accesorios/herramientas", (req, res) => {
  res.render(path.join(__dirname, "src/views/herramientas.ejs"));
});
//_______________________TEES_____________________________//
app.get("/productos/accesorios/tees", (req, res) => {
  res.render(path.join(__dirname, "src/views/tees.ejs"));
});
//_______________________TOALLAS_____________________________//
app.get("/productos/accesorios/toallas", (req, res) => {
  res.render(path.join(__dirname, "src/views/toallas.ejs"));
});
//_______________________PARAGUAS_____________________________//
app.get("/productos/accesorios/paraguas", (req, res) => {
  res.render(path.join(__dirname, "src/views/paraguas.ejs"));
});
//__________________________________________________________________//
//_______________________BOLSAS-CARROS_____________________________//
app.get("/productos/bolsas-carros", (req, res) => {
  res.render(path.join(__dirname, "src/views/bolsas-carros.ejs"));
});
//_______________________BOLSAS_____________________________//
app.get("/productos/bolsas", (req, res) => {
  res.render(path.join(__dirname, "src/views/bolsas.ejs"));
});
//_______________________CARROS_____________________________//
app.get("/productos/carros", (req, res) => {
  res.render(path.join(__dirname, "src/views/carros.ejs"));
});
//__________________________________________________________//
//_______________________PALOS_____________________________//
app.get("/productos/palos", (req, res) => {
  res.render(path.join(__dirname, "src/views/palos.ejs"));
});
//_______________________DRIVE_____________________________//
app.get("/productos/palos/drive", (req, res) => {
  res.render(path.join(__dirname, "src/views/drive.ejs"));
});
//_______________________MADERAS_____________________________//
app.get("/productos/palos/maderas", (req, res) => {
  res.render(path.join(__dirname, "src/views/maderas.ejs"));
});
//_______________________HIBRIDOS_____________________________//
app.get("/productos/palos/hibridos", (req, res) => {
  res.render(path.join(__dirname, "src/views/hibridos.ejs"));
});
//_______________________HIERROS_____________________________//
app.get("/productos/palos/hierros", (req, res) => {
  res.render(path.join(__dirname, "src/views/hierros.ejs"));
});
//_______________________WEDGES_____________________________//
app.get("/productos/palos/wedges", (req, res) => {
  res.render(path.join(__dirname, "src/views/wedges.ejs"));
});
//_______________________PUTTERS_____________________________//
app.get("/productos/palos/putters", (req, res) => {
  res.render(path.join(__dirname, "src/views/putters.ejs"));
});
//_______________________PELOTAS_____________________________//
app.get("/productos/pelotas", (req, res) => {
  res.render(path.join(__dirname, "src/views/pelotas.ejs"));
});

//____________________________________________________________//
//_______________________VESTIR_____________________________//
app.get("/productos/vestir", (req, res) => {
  res.render(path.join(__dirname, "src/views/vestir.ejs"));
});
//_______________________ROPA-DE-HOMBRE_____________________________//
app.get("/productos/ropa-hombre", (req, res) => {
  res.render(path.join(__dirname, "src/views/ropa-hombre.ejs"));
});
//_______________________ROPA-DE-MUJER_____________________________//
app.get("/productos/ropa-mujer", (req, res) => {
  res.render(path.join(__dirname, "src/views/ropa-mujer.ejs"));
});
//_______________________ROPA-DE-NIÑOS_____________________________//
app.get("/productos/ropa-ninos", (req, res) => {
  res.render(path.join(__dirname, "src/views/ropa-ninos.ejs"));
});

//_______________________________________________________________//
//_______________________TECNOLOGIA_____________________________//
app.get("/productos/tecnologia", (req, res) => {
  res.render(path.join(__dirname, "src/views/tecnologia.ejs"));
});
//_______________________GPS_____________________________//
app.get("/productos/gps", (req, res) => {
  res.render(path.join(__dirname, "src/views/gps.ejs"));
});
//_______________________SIMULADORES_____________________________//
app.get("/productos/simuladores", (req, res) => {
  res.render(path.join(__dirname, "src/views/simuladores.ejs"));
});
//_______________________SMARTWATCH_____________________________//
app.get("/productos/smartwatch", (req, res) => {
  res.render(path.join(__dirname, "src/views/smartwatch.ejs"));
});
//_______________________TELEMETROS_____________________________//
app.get("/productos/telemetros", (req, res) => {
  res.render(path.join(__dirname, "src/views/telemetros.ejs"));
});
//____________________________________________________________//
//_______________________LECCIONES_____________________________//
app.get("/productos/lecciones", (req, res) => {
  res.render(path.join(__dirname, "src/views/lecciones.ejs"));
});
//---------------------CAMERONSMITHEQUIPO-----------------------//
app.get("/productos/cameronSmith", (req, res) => {
  res.render(path.join(__dirname, "src/views/cameronSmith.ejs"));
});
//_______________________ZAPATOS_____________________________//
app.get("/productos/zapatos", (req, res) => {
  res.render(path.join(__dirname, "src/views/zapatos.ejs"));
});
