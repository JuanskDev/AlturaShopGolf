module.exports = (sequelize, dataTypes) => {
    let alias = 'Leccion';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        },
        paquete: {
            type: dataTypes.STRING 
        },
        precio: {
            type: dataTypes.INTEGER 
        },
        imagen: {
            type: dataTypes.STRING 
        }
    };
    let config = {
        tableName: 'lecciones',
        timestamps: false
    };
    const Leccion = sequelize.define(alias, cols, config)
    return Leccion
}
