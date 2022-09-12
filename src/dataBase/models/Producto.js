module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoProductoId: {
            type: dataTypes.INTEGER 
        },
        nombre: {
            type: dataTypes.STRING
        },
        marcaId: {
            type: dataTypes.INTEGER
        },
        modeloId: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descuentoId: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const Producto = sequelize.define(alias, cols, config)
    return Producto
}
