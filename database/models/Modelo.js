// tabla que contiene los diferentes modelos de los productos, como ser el de un palo o de una zapatilla o un gps o telemetro etc...
module.exports = (sequelize, dataTypes) => {
    let alias = 'Modelo';
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
        tableName: 'modelos',
        timestamps: false
    };
    const Modelo = sequelize.define(alias, cols, config)
    return Modelo
}
