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
        correo: {
            type: dataTypes.STRING 
        },
        telefono: {
            type: dataTypes.INTEGER 
        },
        contraseña: {
            type: dataTypes.INTEGER 
        },
        categoria: {
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
