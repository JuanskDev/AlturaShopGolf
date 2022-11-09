module.exports = (sequelize, dataTypes) => {
    let alias = 'Campo';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        },
        direccion: {
            type: dataTypes.STRING 
        },
        telefono: {
            type: dataTypes.STRING 
        },
        imagen: {
            type: dataTypes.STRING 
        }
    };
    let config = {
        tableName: 'campos',
        timestamps: false
    };
    const Campo = sequelize.define(alias, cols, config)
    return Campo
}
