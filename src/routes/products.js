const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const productsController = require("../controllers/productsController");
const adminPermit = require("../middlewares/admin");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/productosDB"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

router.get("/", productsController.list);
router.get("/categoria/:id", productsController.listaCategorias);
router.get("/search_results", productsController.search);

//---------------RUTAS CARRITO DE COMPRAS Y DETALLE PRODUCTO-------------------------------------------------//
router.get("/carritodecompras", productsController.carritoCompra);
router.get("/detalle/:id", productsController.detail);

//--------------FORMULARIO CREAR PRODUCTOS-----------------------//
router.get("/create", adminPermit, productsController.create);
router.post(
  "/create",
  adminPermit,
  upload.single("imagen"),
  productsController.store
);

//--------------------FORMULARIO EDITAR PRODUCTOS-------------------//
router.get("/edit/:id", adminPermit, productsController.edit); // formulario edit
router.put(
  "/edit/:id",
  adminPermit,
  upload.single("imagen"),
  productsController.update
);

//-----------------------ELIMINAR PRODUCTOS---------------------------//
router.delete("/delete/:id", productsController.delete);
router.get("/administrar", productsController.admin);

module.exports = router;
