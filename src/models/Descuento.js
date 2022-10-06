//este modleo va a tener los distintos tipos de descuentos ej:
//5%,6%,7%,8%,9%,10%...etc hasta 50%!!
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
