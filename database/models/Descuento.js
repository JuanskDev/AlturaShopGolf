module.exports = (sequelize, dataTypes) => {
    let alias = 'Descuento';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        },
        monto: {
            type: dataTypes.DECIMAL
        }
    };
    let config = {
        tableName: 'descuentos',
        timestamps: false
    };
    const Descuento = sequelize.define(alias, cols, config)
    return Descuento
}
