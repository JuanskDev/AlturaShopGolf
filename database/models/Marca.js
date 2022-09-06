//modelo con la variedad de marcas a utilizar basado en los distintos productos
module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        }
    };
    let config = {
        tableName: 'marcas',
        timestamps: false
    };
    const Marca = sequelize.define(alias, cols, config)
    return Marca
}
