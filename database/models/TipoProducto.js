module.exports = (sequelize, dataTypes) => {
    let alias = 'TipoProducto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoriaId: {
            type: dataTypes.INTEGER 
        },
        nombre: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'tipo_productos',
        timestamps: false
    };
    const TipoProducto = sequelize.define(alias, cols, config)
    return TipoProducto
}
