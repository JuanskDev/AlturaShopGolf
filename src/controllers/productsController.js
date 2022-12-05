const path = require("path");
const fs = require("fs");
const db = require("../dataBase/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Productos = db.Producto;
const Categorias = db.Categoria;

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  list: (req, res) => {
    Productos.findAll().then((productos) => {
      console.log(productos);
      res.render("productos.ejs", { productos });
      res.locals.sessiondata = req.session;
    });
  },
  listaCategorias: (req, res) => {
    console.log("aca estoy");
    Productos.findAll({
      where: {
        categoria_id: req.params.id,
      },
    }).then((productos) => {
      res.render("categoriasProducto.ejs", { productos });
    });
    res.locals.sessiondata = req.session;
  },

  search: (req, res) => {
    let busqueda = req.query.search;
    res.locals.sessiondata = req.session;
    Productos.findAll({
      where: {
        [Op.or]: [
          {
            nombre: { [Op.like]: `%${busqueda}%` },
          },
          {
            marca: { [Op.like]: `%${busqueda}%` },
          },
        ],
      },
    })
      .then((productos) => {
        res.render("productos.ejs", { productos });
      })
      .catch((error) => res.send(error));
  },
  detail: (req, res) => {
    let id = req.params.id;
    res.locals.sessiondata = req.session;
    Productos.findByPk(id)
      .then((producto) => {
        res.render("detalle-producto.ejs", { producto });
      })
      .catch((error) => res.send(error));
  },
  carritoCompra: (req, res) => {
    res.locals.sessiondata = req.session;
    res.render(path.join(__dirname, "../views/carrito-de-compras.ejs"));
  },
  create: (req, res) => {
    res.locals.sessiondata = req.session;

    let productosDb = Productos.findAll();
    let categoriasDb = Categorias.findAll();

    Promise.all([productosDb, categoriasDb])
      .then(([allProductos, allCategorias]) => {
        return res.render("products-create", { allProductos, allCategorias });
      })
      .catch((error) => res.send(error));
  },
  store: (req, res) => {
    Productos.create({
      nombre: req.body.nombre,
      marca: req.body.marca,
      modelo: req.body.modelo,
      agarre: req.body.agarre,
      tipoDeVara: req.body.tipoDeVara,
      tipoDeBolsa: req.body.tipoDeBolsa,
      hierroTipoDeConjunto: req.body.hierroTipoDeConjunto,
      precio: req.body.precio,
      descuento: req.body.descuento,
      stock: req.body.stock,
      color: req.body.color,
      categoria_id: req.body.categoria_id,
      imagen: req.file.filename,
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },
  edit: (req, res) => {
    res.locals.sessiondata = req.session;
    console.log(req.params.id);

    let id = req.params.id;
    console.log(req.params.id);
    let categoriasDb = Categorias.findAll();
    let productoDb = Productos.findByPk(id);

    Promise.all([categoriasDb, productoDb])
      .then(([allCategorias, producto]) => {
        console.log(allCategorias);
        return res.render("products-edit", { producto, allCategorias });
      })
      .catch((error) => res.send(error));
  },

  update: (req, res) => {
    let productoId = req.params.id;
    Productos.update(
      {
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        agarre: req.body.agarre,
        tipoDeVara: req.body.tipoDeVara,
        tipoDeBolsa: req.body.tipoDeBolsa,
        hierroTipoDeConjunto: req.body.hierroTipoDeConjunto,
        precio: req.body.precio,
        descuento: req.body.descuento,
        stock: req.body.stock,
        color: req.body.color,
        categoria_id: req.body.categoria_id,
        imagen: req.file.filename,
      },
      {
        where: { id: productoId },
      }
    )
      .then(() => {
        return res.redirect("/products/edit/" + productoId);
      })
      .catch((error) => res.send(error));
  },
  delete: (req, res) => {
    Productos.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  admin: (req, res) => {
    res.locals.sessiondata = req.session;
    Productos.findAll({ include: "categoria" })
      .then((producto) => {
        //return res.send(relojes);
        res.render("administrador.ejs", { producto });
      })
      .catch((error) => res.send(error));
  },
};

module.exports = productsController;
