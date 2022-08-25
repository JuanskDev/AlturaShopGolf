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
