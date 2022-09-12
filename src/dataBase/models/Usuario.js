module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        },
        apellido: {
            type: dataTypes.STRING 
        },
        mail: {
            type: dataTypes.STRING 
        },
        hash: {
            type: dataTypes.STRING 
        },
        passwordhash: {
            type: dataTypes.STRING 
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const Usuario = sequelize.define(alias, cols, config)
    return Usuario
}
