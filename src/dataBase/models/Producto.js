module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        },
        marca: {
            type: dataTypes.STRING
        },
        modelo: {
            type: dataTypes.STRING
        },
        agarre: {
            type: dataTypes.STRING
        },
        tipoDeVara: {
            type: dataTypes.STRING
        },
        tipoDeBolsa: {
            type: dataTypes.STRING
        },
        hierroTipoDeConjunto: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        descuento: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        color: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.BLOB
        },
        categoria_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Categoria, { 
            as: "categorias",
            foreignKey: "categoria_id"
        })
    }


    return Producto
}
