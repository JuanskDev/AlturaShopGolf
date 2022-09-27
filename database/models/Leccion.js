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
            type: dataTypes.DECIMAL 
        },
        imagen: {
            type: dataTypes.STRING 
        },
          descuentoId: {
            type: dataTypes.INTEGER 
        }
    };
    let config = {
        tableName: 'lecciones',
        timestamps: false
    };
    const Leccion = sequelize.define(alias, cols, config)
    return Leccion
}
